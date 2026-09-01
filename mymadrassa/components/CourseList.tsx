"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import type { Course } from "@/lib/courses";

function CourseCard({ course, index }: { course: Course; index: number }) {
  return (
    <Reveal index={index % 2} className="h-full">
      <Link
        href={`/courses/${course.slug}`}
        className="course-card group flex h-full flex-col rounded-2xl border border-line bg-white p-7 md:p-8"
      >
        <div className="flex items-start gap-4">
          <span className="course-chip inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sidebar text-accent text-lg font-bold">
            <span dir="rtl">{course.icon}</span>
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-bold leading-snug tracking-tight text-ink">{course.name}</h3>
            <p className="mt-0.5 text-sm font-semibold text-accent">{course.subtitle}</p>
          </div>
          <span className="course-arrow mt-1 shrink-0 text-muted" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <p className="mt-5 flex-1 text-[15px] leading-relaxed text-muted">{course.tagline}</p>

        <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted/70">{course.level}</p>
            <p className="mt-1 text-xs text-muted">
              {course.duration} · {course.students}+ students
            </p>
          </div>
          <span className="text-base font-bold text-ink">{course.price}</span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function CourseList({
  label,
  courses,
}: {
  label: string;
  courses: Course[];
}) {
  return (
    <div>
      <Reveal className="mb-10 flex items-center gap-4">
        <span className="rounded-full bg-sidebar px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
          {label}
        </span>
        <span className="h-px flex-1 bg-line" />
        <span className="text-xs font-medium text-muted">{courses.length} courses</span>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {courses.map((c, i) => (
          <CourseCard key={c.slug} course={c} index={i} />
        ))}
      </div>
    </div>
  );
}
