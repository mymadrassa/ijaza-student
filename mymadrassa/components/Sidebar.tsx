import Link from "next/link";
import Logo from "@/components/Logo";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
  icon?: string;
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

interface SidebarProps {
  role: string;
  sections: NavSection[];
  user?: { name: string; subtitle: string; initials: string };
}

export default function Sidebar({ role, sections, user }: SidebarProps) {
  return (
    <aside className="w-56 bg-sidebar flex flex-col h-full shrink-0">
      <div className="px-4 py-5 flex items-center gap-2.5">
        <Logo variant="mark" tone="dark" size={26} showWordmark={false} href={null} />
        <div>
          <div className="text-white font-semibold text-sm leading-tight">MyMadrassa</div>
          <div className="text-white/30 text-[10px] uppercase tracking-widest">{role}</div>
        </div>
      </div>

      <nav className="flex-1 px-2 py-2 space-y-4 overflow-y-auto">
        {sections.map((section, i) => (
          <div key={i}>
            {section.title && (
              <p className="text-white/25 text-[9px] font-bold uppercase tracking-[0.15em] px-3 mb-1.5">
                {section.title}
              </p>
            )}
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                      item.active
                        ? "bg-white/10 text-white font-medium"
                        : "text-white/40 hover:text-white/70 hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded flex items-center justify-center shrink-0 text-[11px] ${
                        item.active ? "bg-accent text-sidebar" : "bg-white/10 text-white/50"
                      }`}
                    >{item.icon ?? ""}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {user && (
        <div className="px-4 py-4 border-t border-white/5 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent text-xs font-bold">
            {user.initials}
          </div>
          <div>
            <p className="text-white text-xs font-medium leading-tight">{user.name}</p>
            <p className="text-white/30 text-[10px]">{user.subtitle}</p>
          </div>
        </div>
      )}
    </aside>
  );
}
