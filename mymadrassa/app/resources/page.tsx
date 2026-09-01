import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";

const courseResources = [
  {
    course: "Qaaida",
    track: "Qur'an",
    slug: "qaaida",
    items: [
      { title: "Noorani Qaaida — Full Text", type: "PDF", desc: "Primary reading material used in lessons." },
      { title: "Arabic Alphabet Writing Sheets", type: "PDF", desc: "Printable practice sheets for all letter forms." },
      { title: "Harakat Reference Card", type: "PDF", desc: "Quick reference for short vowels, sukoon, and shaddah." },
    ],
  },
  {
    course: "Tajweed — Tuhfatul Atfaal",
    track: "Qur'an",
    slug: "tajweed",
    items: [
      { title: "Tuhfatul Atfaal — Arabic Text & Translation", type: "PDF", desc: "Full poem with English translation and rule annotations." },
      { title: "Tajweed Rules Summary Sheet", type: "PDF", desc: "One-page reference covering all major rules taught in this course." },
      { title: "Makharij al-Huruf Diagram", type: "PDF", desc: "Articulation points for all 29 Arabic letters." },
      { title: "Madd Types Chart", type: "PDF", desc: "Visual breakdown of all Madd categories with counts." },
      { title: "Waqf Signs Reference", type: "PDF", desc: "All Qur'anic stopping signs with meanings." },
    ],
  },
  {
    course: "Ijaazah — Al-Jazariyyah",
    track: "Qur'an",
    slug: "ijaazah",
    items: [
      { title: "Al-Jazariyyah — Arabic Text", type: "PDF", desc: "Full poem by Ibn al-Jazari used for memorisation." },
      { title: "Jazariyyah with Sharh (Commentary)", type: "PDF", desc: "Annotated version with line-by-line explanation." },
      { title: "Sifaat al-Huruf Reference", type: "PDF", desc: "All letter characteristics with examples from the Qur'an." },
      { title: "Tuhfatul Atfaal Revision Sheet", type: "PDF", desc: "Condensed rules for ongoing revision alongside Jazariyyah study." },
    ],
  },
  {
    course: "Qira'aat — Al-Shaatibiyyah",
    track: "Qur'an",
    slug: "qiraat",
    items: [
      { title: "Al-Shaatibiyyah — Arabic Text", type: "PDF", desc: "Full Hirz al-Amani poem for memorisation and study." },
      { title: "The Seven Qira'aat — Usul Comparison Table", type: "PDF", desc: "Side-by-side comparison of the foundational principles of each Imam." },
      { title: "Ruwat Chart", type: "PDF", desc: "Narrators of each of the seven Imams with key differences noted." },
    ],
  },
  {
    course: "Hifz Program",
    track: "Qur'an",
    slug: "hifz",
    items: [
      { title: "Weekly Hifz Tracker", type: "PDF", desc: "Log new memorisation, sabqi, and manzil each day." },
      { title: "Juz Progress Chart", type: "PDF", desc: "Track completion of all 30 Juz across the full Qur'an." },
      { title: "Revision Schedule Template", type: "PDF", desc: "Blank weekly planner structured around the standard hifz method." },
    ],
  },
  {
    course: "Sciences of the Qur'an",
    track: "Qur'an",
    slug: "sciences",
    items: [
      { title: "Ulum al-Qur'an — Course Notes", type: "PDF", desc: "Full set of structured notes covering all modules." },
      { title: "Key Terminology Glossary", type: "PDF", desc: "Definitions of all major terms in the Sciences of the Qur'an." },
      { title: "Stages of Revelation — Timeline", type: "PDF", desc: "Visual timeline of Meccan and Medinan revelation periods." },
      { title: "Introduction to Tafsir Schools", type: "PDF", desc: "Overview of the major classical commentaries and their methodologies." },
    ],
  },
  {
    course: "Arabic — Arabiyya Bayna Yadayk",
    track: "Arabic",
    slug: "arabic",
    items: [
      { title: "Book 1 — Vocabulary Lists", type: "PDF", desc: "All vocabulary from Book One, organised by unit." },
      { title: "Book 2 — Vocabulary Lists", type: "PDF", desc: "All vocabulary from Book Two, organised by unit." },
      { title: "Book 3 — Vocabulary Lists", type: "PDF", desc: "All vocabulary from Book Three, organised by unit." },
      { title: "Arabic Verb Conjugation Tables", type: "PDF", desc: "Past, present, and command forms across all pronouns." },
      { title: "Grammar Cases Reference Card", type: "PDF", desc: "Quick guide to raf, nasb, and jarr with examples." },
    ],
  },
];

const totalFiles = courseResources.reduce((n, c) => n + c.items.length, 0);

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
    </svg>
  );
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white text-ink">

      <Navbar />

      {/* Header */}
      <section className="bg-warm border-b border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow-line text-accent text-sm font-bold uppercase tracking-widest mb-5">Student resources</p>
            <h1 className="text-5xl md:text-6xl font-bold text-ink leading-[1.05] tracking-tight mb-6">
              Course materials &amp; texts.
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-xl">
              Classical texts and reference material for every course — {totalFiles} documents across {courseResources.length} programmes. Keep them alongside your lessons.
            </p>
          </div>
        </div>
      </section>

      {/* Resource sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28 space-y-16">
        {courseResources.map((cat) => (
          <Reveal as="section" key={cat.course}>
            <div className="flex items-center gap-4 mb-6">
              <span className="rounded-full bg-sidebar px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
                {cat.course}
              </span>
              <span className="h-px flex-1 bg-line" />
              <span className="shrink-0 text-xs font-medium text-muted">
                {cat.track} · {cat.items.length} files
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              {cat.items.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  className={`resource-row group flex w-full items-center justify-between gap-6 px-6 py-4 text-left md:px-7 md:py-5 ${
                    i !== cat.items.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-4 md:gap-5">
                    <span className="resource-chip inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warm text-muted">
                      <FileIcon />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-ink">{item.title}</span>
                      <span className="mt-0.5 block truncate text-xs text-muted">{item.desc}</span>
                    </span>
                  </span>
                  <span className="resource-cta flex shrink-0 items-center gap-1.5 text-sm font-bold text-muted">
                    <span className="hidden sm:inline">Download</span>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 4v12M6 12l6 6 6-6M4 20h16" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

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
