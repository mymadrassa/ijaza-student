import { NextRequest, NextResponse } from "next/server";

type CalendlyWebhookPayload = {
  event?: string;
  created_at?: string;
  created_by?: string;
  payload?: {
    uri?: string;
    name?: string;
    email?: string;
    status?: string;
    event?: string;
    scheduled_event?: string;
    cancel_url?: string;
    reschedule_url?: string;
  };
};

type CalendlyInviteeResponse = {
  resource?: {
    uri?: string;
    name?: string;
    email?: string;
    status?: string;
    timezone?: string;
    created_at?: string;
    updated_at?: string;
    questions_and_answers?: Array<{
      question?: string;
      answer?: string;
    }>;
    event?: string;
  };
};

type CalendlyEventResponse = {
  resource?: {
    name?: string;
    status?: string;
    start_time?: string;
    end_time?: string;
    event_type?: string;
    location?: {
      type?: string;
      location?: string;
      join_url?: string;
    };
  };
};

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatDateTime(iso?: string) {
  if (!iso) {
    return "Not available";
  }

  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    return "Not available";
  }

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/London",
  }).format(date);
}

async function calendlyGet<T>(uri: string, token: string): Promise<T> {
  const response = await fetch(uri, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();

    throw new Error(
      `Calendly API request failed (${response.status}): ${text}`,
    );
  }

  return (await response.json()) as T;
}

function findAnswer(
  answers: Array<{ question?: string; answer?: string }>,
  possibleQuestions: string[],
) {
  const match = answers.find((item) => {
    const question = item.question?.trim().toLowerCase() ?? "";

    return possibleQuestions.some((possible) =>
      question.includes(possible.toLowerCase()),
    );
  });

  return match?.answer?.trim() || "Not provided";
}

async function sendAdminEmail({
  invitee,
  event,
  webhookPayload,
}: {
  invitee: CalendlyInviteeResponse["resource"];
  event: CalendlyEventResponse["resource"];
  webhookPayload: CalendlyWebhookPayload;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const adminInbox = process.env.ADMIN_INBOX_EMAIL;
  const fromEmail = process.env.BOOKING_FROM_EMAIL;

  if (!resendApiKey) {
    throw new Error("Missing RESEND_API_KEY.");
  }

  if (!adminInbox) {
    throw new Error("Missing ADMIN_INBOX_EMAIL.");
  }

  if (!fromEmail) {
    throw new Error("Missing BOOKING_FROM_EMAIL.");
  }

  const questions = invitee?.questions_and_answers ?? [];

  const phone = findAnswer(questions, [
    "phone",
    "phone number",
  ]);

  const studentAge = findAnswer(questions, [
    "student age",
    "age",
  ]);

  const level = findAnswer(questions, [
    "current level",
    "level",
  ]);

  const goals = findAnswer(questions, [
    "main learning goals",
    "learning goals",
    "goals",
  ]);

  const gender = findAnswer(questions, [
    "gender",
  ]);

  const slotStart = formatDateTime(event?.start_time);
  const slotEnd = formatDateTime(event?.end_time);

  const html = `
    <h2>New Free Diagnostic Call Booking</h2>

    <h3>Booking</h3>

    <p>
      <strong>Event:</strong>
      ${escapeHtml(event?.name ?? "Free diagnostic call")}
    </p>

    <p>
      <strong>Date:</strong>
      ${escapeHtml(slotStart)}
    </p>

    <p>
      <strong>End:</strong>
      ${escapeHtml(slotEnd)}
    </p>

    <p>
      <strong>Location:</strong>
      ${escapeHtml(
        event?.location?.join_url ||
          event?.location?.location ||
          event?.location?.type ||
          "Not provided",
      )}
    </p>

    <hr />

    <h3>Student</h3>

    <p>
      <strong>Full name:</strong>
      ${escapeHtml(invitee?.name ?? "Not provided")}
    </p>

    <p>
      <strong>Email:</strong>
      ${escapeHtml(invitee?.email ?? "Not provided")}
    </p>

    <p>
      <strong>Phone:</strong>
      ${escapeHtml(phone)}
    </p>

    <p>
      <strong>Student age:</strong>
      ${escapeHtml(studentAge)}
    </p>

    <p>
      <strong>Current level:</strong>
      ${escapeHtml(level)}
    </p>

    <p>
      <strong>Gender:</strong>
      ${escapeHtml(gender)}
    </p>

    <p>
      <strong>Learning goals:</strong><br />
      ${escapeHtml(goals)}
    </p>

    <hr />

    <p>
      <strong>Calendly invitee:</strong>
      ${escapeHtml(invitee?.uri ?? "Not available")}
    </p>

    <p>
      <strong>Calendly event:</strong>
      ${escapeHtml(event?.event_type ?? "Not available")}
    </p>

    <p>
      <strong>Webhook event:</strong>
      ${escapeHtml(webhookPayload.event ?? "Not available")}
    </p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [adminInbox],
      subject: "New booking: Free diagnostic call",
      reply_to: invitee?.email || undefined,
      html,
    }),
  });

  if (!response.ok) {
    const text = await response.text();

    throw new Error(
      `Resend failed (${response.status}): ${text}`,
    );
  }
}

export async function POST(request: NextRequest) {
  console.log("🔥 CALENDLY WEBHOOK RECEIVED");

  try {
    const body =
      (await request.json()) as CalendlyWebhookPayload;

    console.log("Calendly webhook event:", body.event);
    console.log("Calendly payload:", body.payload);

    if (body.event !== "invitee.created") {
      console.log("Ignoring webhook event:", body.event);

      return NextResponse.json({
        ok: true,
        ignored: true,
      });
    }

    const inviteeUri = body.payload?.uri;

    if (!inviteeUri) {
      console.error("No invitee URI in Calendly webhook.");

      return NextResponse.json(
        {
          error: "Calendly webhook did not contain an invitee URI.",
        },
        { status: 400 },
      );
    }

    const token = process.env.CALENDLY_API_TOKEN;

    if (!token) {
      console.error("CALENDLY_API_TOKEN is missing.");

      return NextResponse.json(
        {
          error: "CALENDLY_API_TOKEN is not configured.",
        },
        { status: 500 },
      );
    }

    console.log("Fetching invitee:", inviteeUri);

    const inviteeData =
      await calendlyGet<CalendlyInviteeResponse>(
        inviteeUri,
        token,
      );

    const invitee = inviteeData.resource;

    if (!invitee) {
      throw new Error("Calendly returned no invitee resource.");
    }

    console.log("Invitee:", invitee.name, invitee.email);

    const eventUri = invitee.event;

    let eventData: CalendlyEventResponse = {};

    if (eventUri) {
      console.log("Fetching event:", eventUri);

      eventData =
        await calendlyGet<CalendlyEventResponse>(
          eventUri,
          token,
        );
    }

    await sendAdminEmail({
      invitee,
      event: eventData.resource,
      webhookPayload: body,
    });

    console.log("✅ Admin email sent successfully.");

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    console.error("❌ Calendly webhook error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unexpected webhook error.",
      },
      { status: 500 },
    );
  }
}