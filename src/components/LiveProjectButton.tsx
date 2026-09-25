import { ArrowUpRight } from "lucide-react";

/** Nút ghost kiểu Jack, dùng cho dự án thật. */
export default function LiveProjectButton({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors"
    >
      {label}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}
