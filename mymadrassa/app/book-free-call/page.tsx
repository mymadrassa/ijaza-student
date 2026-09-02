"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

type IntakeAnswers = {
  fullName: string;
  email: string;
  phone: string;
  studentAge: string;
  level: string;
  goals: string;
  gender: string;
};

const CALENDLY_BOOKING_URL =
  process.env.NEXT_PUBLIC_CALENDLY_BOOKING_URL;

const initialAnswers: IntakeAnswers = {
  fullName: "",
  email: "",
  phone: "",
  studentAge: "",
  level: "",
  goals: "",
  gender: "",
};

function buildCalendlyUrl(answers: IntakeAnswers) {
  if (!CALENDLY_BOOKING_URL) {
    return "";
  }

  const url = new URL(CALENDLY_BOOKING_URL);

  // Prefill Calendly's standard fields.
  url.searchParams.set("name", answers.fullName);
  url.searchParams.set("email", answers.email);

  // These correspond to the custom questions configured
  // on your Calendly event type.
  url.searchParams.set("a1", answers.phone);
  url.searchParams.set("a2", answers.studentAge);
  url.searchParams.set("a3", answers.level);
  url.searchParams.set("a4", answers.goals);
  url.searchParams.set("a5", answers.gender);

  url.searchParams.set("hide_gdpr_banner", "1");

  return url.toString();
}

export default function BookFreeCallPage() {
  const [answers, setAnswers] =
    useState<IntakeAnswers>(initialAnswers);

  const [step, setStep] = useState<1 | 2>(1);

  const [errors, setErrors] = useState<
    Partial<Record<keyof IntakeAnswers, string>>
  >({});

  const calendlyUrl = useMemo(
    () => buildCalendlyUrl(answers),
    [answers],
  );

  const onChange = (
    field: keyof IntakeAnswers,
    value: string,
  ) => {
    setAnswers((current) => ({
      ...current,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
    }
  };

  const validate = () => {
    const nextErrors: Partial<
      Record<keyof IntakeAnswers, string>
    > = {};

    if (!answers.fullName.trim()) {
      nextErrors.fullName =
        "Please enter your full name.";
    }

    if (!answers.email.trim()) {
      nextErrors.email =
        "Please enter your email address.";
    }

    if (!answers.phone.trim()) {
      nextErrors.phone =
        "Please enter your phone number.";
    }

    if (!answers.studentAge.trim()) {
      nextErrors.studentAge =
        "Please tell us the student's age.";
    }

    if (!answers.level.trim()) {
      nextErrors.level =
        "Please select the current level.";
    }

    if (!answers.goals.trim()) {
      nextErrors.goals =
        "Please share your learning goals.";
    }

    if (!answers.gender.trim()) {
      nextErrors.gender =
        "Please select your gender.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleQuestionnaireSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setStep(2);
  };

  return (
    <div className="min-h-screen bg-warm text-ink">
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm font-semibold text-muted hover:text-ink transition-colors mb-8 inline-block"
          >
            ← Back to home
          </Link>

          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">
            Free Diagnostic Call
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl mb-5">
            Tell us about your goals.
          </h1>

          <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
            Step 1: Short intake form so our scholars can prepare. Step 2: Pick your best time from available slots.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white border border-line rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-10">
              <span
                className={`w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center ${
                  step === 1
                    ? "bg-sidebar text-white"
                    : "bg-green-100 text-green-700"
                }`}
              >
                1
              </span>

              <p className="text-sm font-semibold text-ink">
                Your information
              </p>

              <div className="h-px flex-1 bg-line" />

              <span
                className={`w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center ${
                  step === 2
                    ? "bg-sidebar text-white"
                    : "bg-gray-200 text-muted"
                }`}
              >
                2
              </span>

              <p className="text-sm font-semibold text-ink">
                Book your slot
              </p>
            </div>

            {step === 1 ? (
              <form
                onSubmit={handleQuestionnaireSubmit}
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-ink mb-2"
                  >
                    Full name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    value={answers.fullName}
                    onChange={(event) =>
                      onChange(
                        "fullName",
                        event.target.value,
                      )
                    }
                    className="w-full rounded-xl border border-line px-4 py-3 text-base text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                    placeholder="e.g. Abdullah Khan"
                    autoComplete="name"
                  />

                  {errors.fullName && (
                    <p className="text-red-600 text-xs mt-2">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-ink mb-2"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      value={answers.email}
                      onChange={(event) =>
                        onChange(
                          "email",
                          event.target.value,
                        )
                      }
                      className="w-full rounded-xl border border-line px-4 py-3 text-base text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                      placeholder="you@example.com"
                      autoComplete="email"
                    />

                    {errors.email && (
                      <p className="text-red-600 text-xs mt-2">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-ink mb-2"
                    >
                      Phone number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      value={answers.phone}
                      onChange={(event) =>
                        onChange(
                          "phone",
                          event.target.value,
                        )
                      }
                      className="w-full rounded-xl border border-line px-4 py-3 text-base text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                      placeholder="+44..."
                      autoComplete="tel"
                    />

                    {errors.phone && (
                      <p className="text-red-600 text-xs mt-2">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="studentAge"
                      className="block text-sm font-semibold text-ink mb-2"
                    >
                      Student age
                    </label>

                    <input
                      id="studentAge"
                      type="text"
                      value={answers.studentAge}
                      onChange={(event) =>
                        onChange(
                          "studentAge",
                          event.target.value,
                        )
                      }
                      className="w-full rounded-xl border border-line px-4 py-3 text-base text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
                      placeholder="e.g. 12"
                    />

                    {errors.studentAge && (
                      <p className="text-red-600 text-xs mt-2">
                        {errors.studentAge}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-semibold text-ink mb-2"
                    >
                      Gender
                    </label>

                    <select
                      id="gender"
                      value={answers.gender}
                      onChange={(event) =>
                        onChange(
                          "gender",
                          event.target.value,
                        )
                      }
                      className="w-full rounded-xl border border-line px-4 py-3 text-base text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all bg-white"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>

                    {errors.gender && (
                      <p className="text-red-600 text-xs mt-2">
                        {errors.gender}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="level"
                    className="block text-sm font-semibold text-ink mb-2"
                  >
                    Current level
                  </label>

                  <select
                    id="level"
                    value={answers.level}
                    onChange={(event) =>
                      onChange(
                        "level",
                        event.target.value,
                      )
                    }
                    className="w-full rounded-xl border border-line px-4 py-3 text-base text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all bg-white"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>

                  {errors.level && (
                    <p className="text-red-600 text-xs mt-2">
                      {errors.level}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="goals"
                    className="block text-sm font-semibold text-ink mb-2"
                  >
                    What are your learning goals?
                  </label>

                  <textarea
                    id="goals"
                    value={answers.goals}
                    onChange={(event) =>
                      onChange(
                        "goals",
                        event.target.value,
                      )
                    }
                    className="w-full rounded-xl border border-line px-4 py-3 text-base text-ink placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all min-h-28 resize-none"
                    placeholder="Tell us what you want to achieve..."
                  />

                  {errors.goals && (
                    <p className="text-red-600 text-xs mt-2">
                      {errors.goals}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-sidebar text-white font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity mt-8"
                >
                  Continue to calendar →
                </button>
              </form>
            ) : (
              <div>
                {!CALENDLY_BOOKING_URL ? (
                  <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 text-sm mb-5">
                    Calendly is not configured yet. Add
                    NEXT_PUBLIC_CALENDLY_BOOKING_URL to
                    your environment variables and restart
                    the Next.js server.
                  </div>
                ) : (
                  <>
                    <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-900 text-sm mb-6">
                      ✓ Questionnaire complete. Pick your preferred time below.
                    </div>

                    <iframe
                      src={calendlyUrl}
                      title="Book your free call"
                      className="w-full min-h-[720px] border border-line rounded-xl"
                    />

                    <p className="text-xs text-muted mt-5">
                      Your answers are automatically passed to Calendly so we can match you with the right teacher.
                    </p>
                  </>
                )}
              </div>
            )}
          </div>

          <aside className="bg-white border border-line rounded-2xl p-6 h-fit">
            <h2 className="font-bold text-lg text-ink mb-6">
              What happens next
            </h2>

            <ol className="space-y-4">
              {[
                "Answer a few questions so we can prepare",
                "Pick your best time in the calendar",
                "We confirm the booking and follow up",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted">
                  <span className="font-bold text-accent shrink-0 w-6">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            {step === 2 && (
              <div className="mt-6 pt-6 border-t border-line">
                <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
                  💬 Booked?
                </p>

                <p className="text-sm text-muted leading-relaxed">
                  You'll get a confirmation email with the call link and time.
                </p>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}
