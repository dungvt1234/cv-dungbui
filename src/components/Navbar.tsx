import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const LINKS = [
  { label: "Home", target: "#home" },
  { label: "About", target: "#about" },
  { label: "Work", target: "#work" },
  { label: "Services", target: "#services" },
  { label: "Resume", target: "#resume" },
];

const DISPLAY_FONT = "'Instrument Serif', serif";

export function scrollToSection(target: string) {
  const el = document.querySelector(target);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({ active }: { active: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const go = (target: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(target), 80);
    } else {
      scrollToSection(target);
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex flex-col items-center px-4 pt-4 md:pt-5">
      <div className="flex flex-row items-center justify-between w-full max-w-7xl px-5 md:px-7 py-3 rounded-full bg-black/50 backdrop-blur-md border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
        <button
          onClick={() => go("#home")}
          style={{ fontFamily: DISPLAY_FONT }}
          className="text-2xl md:text-3xl tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          aria-label="Home"
        >
          Dũng Bùi<sup className="text-xs">®</sup>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.target}
              onClick={() => go(l.target)}
              className={`text-sm font-medium transition-colors ${
                active === l.target ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" onClick={() => go("#contact")}>
            Say hi
          </Button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 text-white/80 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-full max-w-7xl mt-2 p-3 rounded-2xl bg-black/85 backdrop-blur-xl border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.6)] flex flex-col gap-1"
          >
            {LINKS.map((l) => (
              <button
                key={l.target}
                onClick={() => go(l.target)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active === l.target
                    ? "text-white bg-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
