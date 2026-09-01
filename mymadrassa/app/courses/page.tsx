import Link from "next/link";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import CourseList from "@/components/CourseList";
import { courses } from "@/lib/courses";

const faqs = [
  {
    q: "Do I need any prior knowledge to enrol?",
    a: "It depends on the course. Qaaida and Arabic Book One require no prior knowledge at all — they are designed for complete beginners. Most other courses require the ability to read Arabic at Qaaida level or above. Book your free diagnostic call and we will confirm which course is right for you.",
  },
  {
    q: "How long are sessions and how often do we meet?",
    a: "Sessions are typically 30 or 45 minutes, one-to-one with your teacher. Frequency is agreed between you and your teacher at enrolment — most students meet 2–3 times per week. Hifz students often meet daily.",
  },
  {
    q: "Can I try a lesson before committing?",
    a: "Yes. We offer a free 30 minute diagnostic call where you meet a teacher, assess your current level, and receive a personalised course recommendation. There is no commitment required.",
  },
  {
    q: "How much do courses cost?",
    a: "Courses start from £40/month for 30-minute weekly sessions. Pricing varies depending on session length and frequency. Full pricing is shown on each individual course page.",
  },
  {
    q: "Do I receive a certificate when I finish?",
    a: "Yes. Every course comes with a certificate of completion signed by the teaching scholar. The Ijaazah course additionally grants a formal written ijazah with a complete sanad.",
  },
  {
    q: "What if I miss a class?",
    a: "All sessions are recorded. If you miss a class, the recording is made available to you within 24 hours. We ask for at least 24 hours notice when rescheduling where possible.",
  },
  {
    q: "Can I study multiple courses at the same time?",
    a: "Yes — many students study Hifz and Tajweed simultaneously, or Arabic alongside a Qur'an course. Your teacher will advise on what is manageable given your schedule and goals.",
  },
];

export default function CoursesPage() {
  const quranCourses = courses.filter((c) => c.category === "quran");
  const arabicCourses = courses.filter((c) => c.category === "arabic");

  return (
    <div className="min-h-screen bg-white text-ink">

      <Navbar />

      {/* Hero */}
      <section className="bg-warm border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow-line text-accent text-sm font-bold uppercase tracking-widest mb-5">Curriculum</p>
            <h1 className="text-5xl md:text-6xl font-bold text-ink leading-[1.05] tracking-tight mb-7">
              Every course.<br />One-to-one.
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Structured programmes in Tajweed, Hifz, Arabic, Ijaazah, and the Sciences of the Qur&apos;an — each taught individually by a qualified scholar with an authentic ijazah chain.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/book-free-call"
                className="bg-sidebar text-white font-bold px-8 py-4 rounded-2xl text-base hover:opacity-90 transition-opacity"
              >
                Book free diagnostic call →
              </Link>
              <a href="#courses-list" className="text-ink font-semibold text-base underline underline-offset-4 hover:text-accent transition-colors">
                Browse courses ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Course list */}
      <section id="courses-list" className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 space-y-20">
        <CourseList label="Qur'an" courses={quranCourses} />
        <CourseList label="Arabic" courses={arabicCourses} />
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-warm">
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <Reveal className="mb-14">
            <p className="eyebrow-line text-accent text-sm font-bold uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="text-4xl font-bold text-ink">Common questions.</h2>
          </Reveal>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-semibold text-ink text-base pr-8">{faq.q}</span>
                  <span className="text-muted group-open:rotate-45 transition-transform duration-200 text-xl shrink-0">+</span>
                </summary>
                <p className="text-muted text-sm leading-relaxed mt-4 max-w-2xl">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sidebar py-24 md:py-28">
        <Reveal className="max-w-2xl mx-auto px-6 md:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-5" dir="rtl">
            وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Not sure where to start?</h2>
          <p className="text-white/50 text-lg mb-10">
            Book a free 30 min call. We assess your level and recommend the right course and teacher for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/book-free-call"
              className="bg-accent text-sidebar font-bold px-10 py-4 rounded-2xl text-base hover:opacity-90 transition-opacity"
            >
              Book free call →
            </Link>
            <Link href="/teachers" className="text-white/60 font-semibold text-base hover:text-white transition-colors">
              Meet the scholars →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Logo size={30} tone="dark" href={null} textClassName="text-white text-base" />
          <div className="flex items-center gap-8 text-white/40 text-sm">
            <Link href="/resources" className="hover:text-white/70 transition-colors">Resources</Link>
            <Link href="/teachers" className="hover:text-white/70 transition-colors">Scholars</Link>
            <Link href="/login" className="hover:text-white/70 transition-colors">Sign in</Link>
          </div>
          <p className="text-white/20 text-sm">© 2026 MyMadrassa.</p>
        </div>
      </footer>

    </div>
  );
}
