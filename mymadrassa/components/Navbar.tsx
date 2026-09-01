"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

const navItems = [
  { href: "/courses", label: "Courses" },
  { href: "/resources", label: "Resources" },
  { href: "/teachers", label: "Scholars" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="border-b border-line sticky top-0 z-50 bg-white/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-[72px] grid grid-cols-[1fr_auto_1fr] items-center gap-6">
        <div className="justify-self-start">
          <Logo size={36} textClassName="text-ink text-lg" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium justify-self-center">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`transition-colors ${active ? "text-ink font-semibold" : "text-muted hover:text-ink"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2 sm:gap-4 justify-self-end">
          <Link href="/login" className="hidden sm:inline text-[15px] font-medium text-muted hover:text-ink transition-colors px-2">
            Sign in
          </Link>
          <Link href="/portal" className="bg-sidebar text-white text-[15px] font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
            Student portal
          </Link>
        </div>
      </div>
    </nav>
  );
}
