import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const scholars = [
  {
    initials: "UY",
    name: "Ustadh Yaseen",
    title: "Director",
    teaches: ["All Qur'an courses", "Tajweed", "Ijaazah oversight"],
    tags: ["Director", "Ijaazah holder"],
  },
  {
    initials: "US",
    name: "Ustadh Sufyaan",
    title: "Qur'an & Hifz Teacher",
    teaches: ["Hifz Program", "Qur'an Recitation", "Qaaida"],
    tags: ["Comp Sci Graduate", "Hafiz", "Ijaazah holder"],
  },
  {
    initials: "UA",
    name: "Ustadh Abdurrahman",
    title: "Qur'an & Hifz Teacher",
    teaches: ["Hifz Program", "Qur'an Recitation", "Tajweed"],
    tags: ["Comp Sci Graduate", "Hafiz", "Ijaazah holder"],
  },
];

const assurances = [
  { k: "Authentic ijazah", v: "Every teacher holds a licence with a named granting scholar." },
  { k: "Connected sanad", v: "An unbroken chain of transmission back to the Prophet ﷺ." },
  { k: "Live, one-to-one", v: "No pre-recorded lessons. You are taught in person, every session." },
];

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-white text-ink">

      <Navbar />

      {/* Header */}
      <section className="bg-warm border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow-line text-accent text-sm font-bold uppercase tracking-widest mb-5">Our scholars</p>
            <h1 className="text-5xl md:text-6xl font-bold text-ink leading-[1.05] tracking-tight mb-6">
              Meet the teachers.
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-xl">
              Every teacher holds an authentic ijazah with a connected chain of transmission. You learn from people who carry the tradition properly.
            </p>
          </div>
        </div>
      </section>

      {/* Scholar cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scholars.map((s, i) => (
            <Reveal key={s.name} index={i} className="h-full">
              <div className="lift-card group flex h-full flex-col rounded-2xl border border-line bg-white p-8">

                <div className="flex items-center gap-4 mb-6">
                  <div className="lift-avatar flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sidebar text-lg font-bold text-accent">
                    {s.initials}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl font-bold tracking-tight text-ink leading-snug">{s.name}</h2>
                    <p className="text-sm text-muted mt-0.5">{s.title}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-7">
                  {s.tags.map((t) => {
                    const key = t.toLowerCase();
                    const highlight = key.includes("ijaazah") || key.includes("hafiz");
                    return (
                      <span
                        key={t}
                        className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                          highlight
                            ? "border-accent/40 bg-accent/10 text-accent"
                            : "border-line bg-warm text-muted"
                        }`}
                      >
                        {t}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-auto border-t border-line pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted/70 mb-3">Teaches</p>
                  <ul className="space-y-2">
                    {s.teaches.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-sm text-ink">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Assurances */}
        <Reveal className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {assurances.map((a) => (
            <div key={a.k} className="bg-white p-7">
              <p className="text-sm font-bold text-ink mb-2">{a.k}</p>
              <p className="text-sm text-muted leading-relaxed">{a.v}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-sidebar py-24 md:py-28">
        <Reveal className="max-w-2xl mx-auto px-6 md:px-8 text-center">
          <p className="eyebrow-line text-accent font-semibold text-sm uppercase tracking-widest mb-5">Get matched</p>
          <h2 className="text-4xl font-bold text-white mb-4">Get matched to a teacher.</h2>
          <p className="text-white/50 text-lg mb-10">
            Book a free 30 min diagnostic call and we&apos;ll pair you with the right scholar for your course and level.
          </p>
          <Link
            href="/book-free-call"
            className="inline-block bg-accent text-sidebar font-bold px-10 py-4 rounded-2xl text-base hover:opacity-90 transition-opacity"
          >
            Book free call →
          </Link>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Logo size={30} tone="dark" href={null} textClassName="text-white text-base" />
          <p className="text-white/20 text-sm">© 2026 MyMadrassa. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
