import Sidebar from "@/components/Sidebar";

const upcomingClasses = [
  { subject: "Tajweed — Madd al-Muttasil", teacher: "Ustadh Ahmad al-Rashidi", time: "Today, 5:00 PM", duration: "45 min", live: true },
  { subject: "Arabic — Book Two, Unit 5", teacher: "Ustadha Maryam Hussain", time: "Thu 3 Jul, 4:00 PM", duration: "50 min", live: false },
  { subject: "Tajweed — Waqf & Ibtida", teacher: "Ustadh Ahmad al-Rashidi", time: "Sat 5 Jul, 5:00 PM", duration: "45 min", live: false },
];

const enrolledCourses = [
  { title: "Tajweed", level: "Al-Jazariyyah", progress: 65, nextLesson: "Madd al-Muttasil", badge: "text-emerald-700 bg-emerald-100", slug: "tajweed" },
  { title: "Arabic", level: "Book Two", progress: 32, nextLesson: "Past tense verb forms", badge: "text-blue-700 bg-blue-100", slug: "arabic" },
];

const recordings = [
  { title: "Tajweed — Qalqalah", date: "28 Jun 2026", duration: "44 min", teacher: "Ustadh Ahmad al-Rashidi" },
  { title: "Arabic — Book Two, Unit 3", date: "25 Jun 2026", duration: "52 min", teacher: "Ustadha Maryam Hussain" },
  { title: "Tajweed — Meem Sakinah", date: "21 Jun 2026", duration: "47 min", teacher: "Ustadh Ahmad al-Rashidi" },
  { title: "Arabic — Book Two, Unit 2", date: "18 Jun 2026", duration: "50 min", teacher: "Ustadha Maryam Hussain" },
];

const resources = [
  { title: "Tuhfatul Atfaal — Full Text", type: "PDF", course: "Tajweed" },
  { title: "Makharij al-Huruf Diagram", type: "IMG", course: "Tajweed" },
  { title: "Arabiyya Bayna Yadayk — Book 2", type: "PDF", course: "Arabic" },
  { title: "Verb Conjugation Reference", type: "PDF", course: "Arabic" },
];

export default function PortalPage() {
  return (
    <div className="flex h-screen bg-warm overflow-hidden">
      <Sidebar
        role="Student"
        sections={[
          {
            items: [{ label: "Dashboard", href: "/portal", active: true, icon: "⊞" }],
          },
          {
            title: "Learning",
            items: [
              { label: "My Classes", href: "/portal/classes", icon: "▶" },
              { label: "Recordings", href: "/portal/recordings", icon: "⏺" },
              { label: "Resources", href: "/portal/resources", icon: "📄" },
              { label: "Progress", href: "/portal/progress", icon: "↑" },
            ],
          },
          {
            title: "Account",
            items: [
              { label: "Settings", href: "/portal/settings", icon: "⚙" },
              { label: "Support", href: "/portal/support", icon: "?" },
            ],
          },
        ]}
        user={{ name: "Omar Aziz", subtitle: "Tajweed · Arabic", initials: "OA" }}
      />

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-10 py-10">

          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-muted text-sm font-medium mb-1">Wednesday, 2 July 2026</p>
              <h1 className="text-3xl font-bold text-ink">Good morning, Omar.</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-sidebar flex items-center justify-center text-white text-xs font-bold">OA</div>
            </div>
          </div>

          {/* Next class — live banner */}
          <div className="bg-sidebar rounded-2xl p-7 mb-6 flex items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                <span className="text-accent text-lg">▶</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <p className="text-accent text-xs font-bold uppercase tracking-widest">Live now</p>
                </div>
                <h2 className="text-white font-bold text-lg leading-snug">{upcomingClasses[0].subject}</h2>
                <p className="text-white/50 text-sm">{upcomingClasses[0].teacher} · {upcomingClasses[0].time} · {upcomingClasses[0].duration}</p>
              </div>
            </div>
            <button className="bg-accent text-sidebar font-bold px-7 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity shrink-0">
              Join class →
            </button>
          </div>

          {/* Upcoming schedule */}
          <div className="bg-white rounded-2xl border border-line overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-line">
              <h2 className="text-base font-bold text-ink">Upcoming sessions</h2>
            </div>
            {upcomingClasses.slice(1).map((cls, i) => (
              <div key={cls.subject} className={`flex items-center justify-between px-6 py-4 ${i !== upcomingClasses.slice(1).length - 1 ? "border-b border-line" : ""}`}>
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-sand border border-line flex items-center justify-center shrink-0">
                    <span className="text-muted text-xs">▷</span>
                  </div>
                  <div>
                    <p className="text-ink text-sm font-semibold">{cls.subject}</p>
                    <p className="text-muted text-xs mt-0.5">{cls.teacher}</p>
                  </div>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className="text-ink text-xs font-semibold">{cls.time}</p>
                  <p className="text-muted text-xs">{cls.duration}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            {/* My courses */}
            <div className="bg-white rounded-2xl border border-line p-6">
              <h2 className="text-base font-bold text-ink mb-5">My courses</h2>
              <div className="space-y-5">
                {enrolledCourses.map((c) => (
                  <div key={c.title}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-ink font-semibold text-sm">{c.title}</span>
                        <span className={`ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${c.badge}`}>{c.level}</span>
                      </div>
                      <span className="text-ink font-bold text-sm">{c.progress}%</span>
                    </div>
                    <div className="w-full bg-sand rounded-full h-1.5 mb-1.5">
                      <div className="bg-accent h-1.5 rounded-full" style={{ width: `${c.progress}%` }} />
                    </div>
                    <p className="text-muted text-xs">Next: {c.nextLesson}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick resources */}
            <div className="bg-white rounded-2xl border border-line p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-bold text-ink">Resources</h2>
                <a href="/portal/resources" className="text-xs font-semibold text-accent hover:underline underline-offset-4">View all →</a>
              </div>
              <div className="space-y-3">
                {resources.map((r) => (
                  <div key={r.title} className="flex items-center justify-between py-2 border-b border-line last:border-0 cursor-pointer hover:opacity-70 transition-opacity">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded bg-sand border border-line flex items-center justify-center shrink-0">
                        <span className="text-muted text-[8px] font-bold uppercase">{r.type}</span>
                      </div>
                      <div>
                        <p className="text-ink text-xs font-semibold leading-snug">{r.title}</p>
                        <p className="text-muted text-[10px]">{r.course}</p>
                      </div>
                    </div>
                    <span className="text-accent text-[10px] font-semibold shrink-0 ml-2">↓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recordings */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-ink">Recent recordings</h2>
              <a href="/portal/recordings" className="text-sm font-semibold text-accent hover:underline underline-offset-4">View all →</a>
            </div>
            <div className="bg-white rounded-2xl border border-line overflow-hidden">
              {recordings.map((r, i) => (
                <div
                  key={r.title}
                  className={`flex items-center justify-between px-6 py-4 hover:bg-warm transition-colors cursor-pointer ${i !== recordings.length - 1 ? "border-b border-line" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-sand border border-line flex items-center justify-center shrink-0">
                      <span className="text-muted text-xs">▶</span>
                    </div>
                    <div>
                      <p className="text-ink text-sm font-semibold">{r.title}</p>
                      <p className="text-muted text-xs mt-0.5">{r.teacher}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <p className="text-muted text-xs">{r.date}</p>
                    <p className="text-muted text-xs">{r.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
