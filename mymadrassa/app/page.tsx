import Link from "next/link";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import FeatureGrid from "@/components/FeatureGrid";
import StatsBar from "@/components/StatsBar";

const stats = [
  { value: "3,400+", label: "Students worldwide" },
  { value: "18", label: "Expert scholars" },
  { value: "40+", label: "Courses available" },
  { value: "94%", label: "Completion rate" },
];

const features = [
  {
    icon: "diagnostic",
    title: "Free diagnostic session",
    desc: "Start with a one-to-one assessment. We evaluate your current level and build a personalised learning pathway.",
  },
  {
    icon: "live",
    title: "Live classes with scholars",
    desc: "Learn in real-time with certified teachers who hold authentic ijazah chains.",
  },
  {
    icon: "progression",
    title: "Structured progression",
    desc: "Follow a clear curriculum from beginner to advanced, with milestones and certificates.",
  },
  {
    icon: "recordings",
    title: "Recordings on demand",
    desc: "Every class recorded. Revisit any lesson, any time, at your own pace.",
  },
  {
    icon: "tracking",
    title: "Hifz & Tajweed tracking",
    desc: "Track your Qur'an memorisation and Tajweed progress with detailed reports.",
  },
  {
    icon: "global",
    title: "Learn from anywhere",
    desc: "Classes run across time zones. Students from 40+ countries learning together.",
  },
  {
    icon: "certificate",
    title: "Recognised certificates",
    desc: "Complete courses and receive certificates signed by our scholars.",
  },
  {
    icon: "support",
    title: "WhatsApp support",
    desc: "Direct access to your teacher between sessions. Ask questions, share recitations, stay consistent.",
  },
];

const paths = [
  {
    icon: "ف",
    title: "One-to-One Mentorship",
    subtitle: "Private · Fardi",
    desc: "Ongoing, private sessions billed by the term. Your teacher builds the pace around you.",
    items: ["Qur'an Mentorship", "Ijaazah", "Qira'aat", "Arabic"],
    cta: "Register your interest",
  },
  {
    icon: "ج",
    title: "Group Courses",
    subtitle: "Cohort · Jamaa'i",
    desc: "Live cohorts with fixed start dates, learning alongside other students.",
    items: ["Arabic", "al-Jazariyyah", "Tuhfatul Atfaal"],
    cta: "Register your interest",
  },
];

const testimonials = [
  {
    name: "Redwan A.",
    role: "Busy Entrepreneur & Student",
    location: "Tilburg, Netherlands",
    flag: "🇳🇱",
    videoId: "f8hrLlbwUfw",
    rating: 5,
    quote: "I was doing a masters degree while launching a startup — my schedule was chaos. I still managed one session a week and the progress was real. The teacher adapted fully to my level and pace. Six months later I am reading Quran with tajweed. No excuses left now.",
  },
  {
    name: "Hussain M.",
    role: "Content Creator, 27",
    location: "United Kingdom",
    flag: "🇬🇧",
    videoId: "3b4z_ryM9pU",
    rating: 5,
    quote: "I started my madrassa with so many mistakes in my recitation, but now I have not only improved, I also teach students and benefit others the same way Sheikh Yaseen benefitted me. The one to one structure and studying with MyMadrassa made all the difference.",
  },
  {
    name: "John Baker",
    role: "Revert, Student at Umm al-Qura University, Makkah",
    location: "Makkah, Saudi Arabia",
    flag: "🇸🇦",
    videoId: "9VyMSVRhywE",
    rating: 5,
    quote: "I took my shahada two years ago but never learned to pronounce correctly. I felt lost in every salah. Ustadh started me from absolute zero, the sounds, vowels, everything. Within 5 months I improved immensely. As a revert this has changed my entire relationship with Allah.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-ink">

      <Navbar />

      {/* Hero */}
      <section className="bg-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 pt-24 md:pt-32 pb-28 md:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2.5 bg-white border border-line rounded-full px-4 py-2 text-sm font-semibold text-muted mb-12">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Now enrolling — Summer 2026 cohort
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-ink leading-[1.05] tracking-tight mb-10">
                Learn Qur&apos;an and Islamic sciences from{" "}
                <span className="text-accent">qualified scholars.</span>
              </h1>
              <p className="text-muted text-xl leading-relaxed mb-12">
                Structured live courses in Tajweed, Hifz, Arabic, and Ulum — taught by certified teachers with authentic ijazah chains. Feel the difference in your prayer.
              </p>
              <Link href="/courses" className="text-ink font-semibold text-lg underline underline-offset-4 hover:text-accent transition-colors">
                Browse all courses →
              </Link>
            </div>

            {/* Right — booking card */}
            <div className="bg-white rounded-3xl border border-line shadow-sm p-12">
              <div className="inline-flex items-center gap-2 bg-warm border border-line rounded-full px-3 py-1.5 text-xs font-semibold text-muted mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Available this week
              </div>
              <h3 className="text-3xl font-bold text-ink mb-3">Book your free 30 min call</h3>
              <p className="text-muted text-base leading-relaxed mb-10">
                A one-to-one diagnostic session with a scholar. We assess your level and build your personalised learning pathway — no commitment needed.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Assess your current recitation level",
                  "Get matched to the right teacher",
                  "Receive a personalised learning plan",
                  "No credit card or commitment required",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-sm text-ink">
                    <span className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0 text-white text-[10px] font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/book-free-call"
                className="block text-center bg-sidebar text-white font-bold py-5 rounded-2xl text-base hover:opacity-90 transition-opacity"
              >
                Book free call →
              </Link>
              <p className="text-center text-muted text-xs mt-5">Takes 2 minutes to book</p>
            </div>

          </div>
        </div>

        {/* Stats bar */}
        <StatsBar stats={stats} />
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 md:py-32 border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Reveal className="mb-16 md:mb-20">
            <p className="eyebrow-line text-accent text-sm font-bold uppercase tracking-widest mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-ink">Everything you need to learn, in one place.</h2>
          </Reveal>
          <FeatureGrid features={features} />
        </div>
      </section>

      {/* Study formats */}
      <section id="courses" className="py-24 md:py-32 border-b border-line bg-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Reveal className="mb-16 md:mb-20">
            <p className="eyebrow-line text-accent text-sm font-bold uppercase tracking-widest mb-4">Study formats</p>
            <h2 className="text-4xl md:text-5xl font-bold text-ink mb-5">Two ways to study with us.</h2>
            <p className="text-muted text-lg leading-relaxed max-w-2xl">
              Go private for a pace built entirely around you, or join a live cohort with other students. Nothing here is pre-recorded — every seat is a real class.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paths.map((p, i) => (
              <Reveal key={p.title} index={i}>
                <div className="feature-card group h-full bg-white border border-line p-8 flex flex-col">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-sand flex items-center justify-center shrink-0">
                    <span className="text-ink font-bold text-base" dir="rtl">{p.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-ink text-xl leading-snug">{p.title}</h3>
                    <p className="text-xs font-bold uppercase tracking-wide text-muted mt-1">{p.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="mb-5">
                  {p.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 py-3 text-ink text-sm font-semibold">
                      <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-line mt-auto">
                  <span className="text-muted text-sm">Coming soon</span>
                  <button className="bg-sidebar text-white font-semibold text-sm px-5 py-2.5 hover:opacity-90 transition-opacity">
                    {p.cta}
                  </button>
                </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 border-b border-line bg-warm">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <Reveal className="mb-16 md:mb-20">
            <p className="eyebrow-line text-accent text-sm font-bold uppercase tracking-widest mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-ink">Trusted by thousands of students.</h2>
          </Reveal>
          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} index={i}>
              <div className="bg-white border border-line overflow-hidden rounded-[28px] shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr]">
                  <div>
                    <div className="aspect-[9/16] bg-ink m-3 rounded-2xl overflow-hidden sm:mb-0">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${t.videoId}?modestbranding=1&rel=0&playsinline=1`}
                        title={`${t.name} testimonial`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="px-6 py-4 text-sm font-bold text-ink">
                      {t.name} — {t.flag} {t.location.split(",")[0].toUpperCase()}
                      <span className="block font-normal text-muted text-xs mt-0.5">{t.location.split(",")[1]?.trim()}</span>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <div className="text-accent text-xl mb-6 tracking-wider">
                      {"★".repeat(t.rating)}
                    </div>
                    <p className="text-ink text-lg leading-relaxed mb-8">&quot;{t.quote}&quot;</p>
                    <p className="text-muted text-base font-semibold">— {t.name}, {t.role}</p>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Donate */}
      <section className="bg-sidebar py-24 md:py-32">
        <Reveal className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <p
            className="text-accent font-semibold leading-tight tracking-tight mb-10 text-5xl md:text-6xl"
            dir="rtl"
            style={{ fontFamily: "var(--font-arabic), 'Scheherazade New', serif" }}
          >
            مَدْرَسَتِي الْقُرْآنِيَّة
          </p>
          <p className="eyebrow-line text-accent text-sm font-bold uppercase tracking-widest mb-4">Support our institute</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Invest in a lasting sadaqah.
          </h2>
          <p className="text-white/50 mb-12 text-xl">
            Your contribution helps train our next generation of teachers, keeps our doors open to those who could never reach us, and funds the activities that keep our institute running. A sadaqah jariyah that keeps giving.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/donate"
              className="bg-accent text-sidebar font-bold px-10 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity"
            >
              Donate now →
            </Link>
            <Link href="/donate#monthly" className="text-white/60 font-semibold text-lg hover:text-white transition-colors">
              Give monthly →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-5">
                <Logo size={34} tone="dark" href={null} textClassName="text-white text-lg" />
              </div>
              <p className="text-white/30 text-base leading-relaxed">
                Islamic learning for the modern world.
              </p>
            </div>
            <div>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-5">Learn</p>
              <ul className="space-y-3 text-base text-white/50">
                {[
                  { label: "All Courses", href: "/courses" },
                  { label: "Tajweed", href: "/courses/tajweed" },
                  { label: "Hifz", href: "/courses/hifz" },
                  { label: "Arabic", href: "/courses/arabic" },
                  { label: "Resources", href: "/resources" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-white/80 transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-5">Company</p>
              <ul className="space-y-3 text-base text-white/50">
                {[
                  { label: "Our Scholars", href: "/teachers" },
                  { label: "About", href: "#" },
                  { label: "Blog", href: "#" },
                  { label: "Careers", href: "#" },
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-white/80 transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-5">Support</p>
              <ul className="space-y-3 text-base text-white/50">
                {[
                  { label: "Help centre", href: "#" },
                  { label: "Contact", href: "#" },
                  { label: "Privacy", href: "#" },
                  { label: "Terms", href: "#" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-white/80 transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex items-center justify-between">
            <p className="text-white/20 text-sm">© 2026 MyMadrassa. All rights reserved.</p>
            <p className="text-white/20 text-sm">Built with intention.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
