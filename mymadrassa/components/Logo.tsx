import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** Mark height in px (wordmark scales via textClassName). */
  size?: number;
  /** "light" for light backgrounds (ink mark), "dark" for dark backgrounds (cream mark). */
  tone?: "light" | "dark";
  /** "mark" = emblem only, "lockup" = full stacked logo image (no separate wordmark). */
  variant?: "mark" | "lockup";
  /** Show the "MyMadrassa" wordmark beside the mark (ignored for variant="lockup"). */
  showWordmark?: boolean;
  /** Wrap in a link. Pass null for a plain, non-interactive logo. */
  href?: string | null;
  /** Tailwind classes for the wordmark text. */
  textClassName?: string;
  className?: string;
};

export default function Logo({
  size = 34,
  tone = "light",
  variant = "mark",
  showWordmark = true,
  href = "/",
  textClassName = "text-ink text-lg",
  className = "",
}: LogoProps) {
  const src = `/logo-${variant}-${tone}.png`;

  const inner =
    variant === "lockup" ? (
      <Image
        src={src}
        alt="MyMadrassa"
        width={Math.round(size * 2.4)}
        height={size}
        className={`w-auto object-contain ${className}`}
        style={{ height: size }}
        priority
      />
    ) : (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        <Image
          src={src}
          alt="MyMadrassa"
          width={size}
          height={size}
          className="w-auto object-contain"
          style={{ height: size }}
          priority
        />
        {showWordmark && (
          <span className={`font-bold tracking-tight ${textClassName}`}>MyMadrassa</span>
        )}
      </span>
    );

  if (href === null) return inner;
  return (
    <Link href={href} className="inline-flex items-center" aria-label="MyMadrassa — home">
      {inner}
    </Link>
  );
}
