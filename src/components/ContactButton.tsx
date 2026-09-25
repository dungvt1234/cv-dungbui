import { ArrowUpRight } from "lucide-react";
import { scrollToSection } from "./Navbar";

/** Nút gradient kiểu Jack portfolio. */
export default function ContactButton() {
  return (
    <button
      onClick={() => scrollToSection("#contact")}
      className="inline-flex items-center gap-2 rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest hover:scale-105 transition-transform"
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset, 0 0 0 2px #fff",
        outline: "2px solid #fff",
        outlineOffset: "-3px",
      }}
    >
      Liên hệ ngay
      <ArrowUpRight size={16} aria-hidden="true" />
    </button>
  );
}
