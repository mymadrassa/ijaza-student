import Navbar from "@/components/Navbar";
import { getCourseBySlug, courses } from "@/lib/courses";
import { notFound } from "next/navigation";
import Link from "next/link";

const TYPEFORM_URL = "https://form.typeform.com/to/XXXXXXXX";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const categoryBadge =
    course.category === "quran"
      ? "text-emerald-700 bg-emerald-100 border-emerald-200"
      : "text-blue-700 bg-blue-100 border-blue-200";

  return (
    <div className="min-h-screen bg-white text-ink">

      <Navbar />

      {/* Hero */}
      <section className="bg-warm border-b border-line">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

            {/* Left — course info */}
            <div className="lg:col-span-2">
              <span
                className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border inline-block mb-8 ${categoryBadge}`}
              >
                {course.category === "quran" ? "Qur'an" : "Arabic"}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-ink leading-[1.05] tracking-tight mb-4">
                {course.name}
              </h1>
              <p className="text-accent font-semibold text-xl mb-6">{course.subtitle}</p>
              <p className="text-muted text-xl leading-relaxed max-w-2xl mb-12">{course.tagline}</p>

              <div className="flex flex-wrap gap-10">
                {[
                  { label: "Level", value: course.level },
                  { label: "Duration", value: course.duration },
                  { label: "Format", value: "One-to-one · Online" },
                  { label: "Students", value: `${course.students}+` },
                ].map((m) => (
                  <div key={m.label}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-1.5">
                      {m.label}
                    </p>
                    <p className="text-ink font-semibold text-base">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — enrol card */}
            <div className="bg-white rounded-2xl border border-line p-8">
              <p className="text-3xl font-bold text-ink mb-1">{course.price}</p>
              <p className="text-muted text-sm mb-8">One-to-one · Online · Flexible schedule</p>
              <a
                href={TYPEFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-sidebar text-white font-bold py-4 rounded-2xl text-base hover:opacity-90 transition-opacity mb-3"
              >
                Enrol now →
              </a>
              <Link
                href="/book-free-call"
                className="block text-center border border-line text-ink font-semibold py-4 rounded-2xl text-base hover:border-accent hover:text-accent transition-colors"
              >
                Book free 30 min call
              </Link>
              <p className="text-center text-muted text-xs mt-4">No commitment required for the free call</p>
            </div>

          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-20">

            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-6">Overview</h2>
              <p className="text-muted text-base leading-relaxed">{course.overview}</p>
            </section>

            {/* Program structure */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-8">Program structure</h2>
              <div className="space-y-4">
                {course.modules.map((mod, i) => (
                  <div key={mod.title} className="bg-warm rounded-2xl p-7 border border-line">
                    <div className="flex items-start gap-5">
                      <span className="text-accent font-bold text-sm mt-0.5 shrink-0 w-6 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-bold text-ink text-base mb-2">{mod.title}</h3>
                        <p className="text-muted text-sm leading-relaxed">{mod.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Who is this for */}
            <section>
              <h2 className="text-2xl font-bold text-ink mb-8">Who is this for</h2>
              <ul className="space-y-4">
                {course.whoFor.map((w) => (
                  <li key={w} className="flex items-center gap-4 text-base text-ink">
                    <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 text-white text-[10px] font-bold">
                      ✓
                    </span>
                    {w}
                  </li>
                ))}
              </ul>
            </section>

            {/* Prerequisites */}
            {course.prerequisites.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-ink mb-6">Prerequisites</h2>
                <ul className="space-y-3">
                  {course.prerequisites.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-base text-muted">
                      <span className="text-accent mt-0.5 shrink-0">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </section>
            )}

          </div>

          {/* Sidebar — what's included */}
          <div>
            <div className="bg-warm rounded-2xl border border-line p-8 sticky top-28">
              <h3 className="font-bold text-ink text-lg mb-7">What&apos;s included</h3>
              <ul className="space-y-5">
                {course.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink">
                    <span className="text-accent mt-0.5 shrink-0 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-sidebar py-24">
        <div className="max-w-2xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to begin?</h2>
          <p className="text-white/50 text-lg mb-12">
            Start with a free 30 min diagnostic call — we&apos;ll assess your level and confirm this is the right course for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href={TYPEFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-sidebar font-bold px-10 py-4 rounded-2xl text-base hover:opacity-90 transition-opacity"
            >
              Enrol now →
            </a>
            <Link
              href="/book-free-call"
              className="text-white/60 font-semibold text-base hover:text-white transition-colors"
            >
              Book free call first →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
