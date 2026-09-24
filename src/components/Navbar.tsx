import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const LINKS = [
  { label: "Home", target: "#home" },
  { label: "Work", target: "#work" },
  { label: "Resume", target: "#resume" },
];

const DISPLAY_FONT = "'Instrument Serif', serif";

export function scrollToSection(target: string) {
  const el = document.querySelector(target);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({ active }: { active: string }) {
  const navigate = useNavigate();
  const location = useLocation();

  const go = (target: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(target), 80);
    } else {
      scrollToSection(target);
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex justify-center px-4 pt-4 md:pt-5">
      <div className="flex flex-row items-center justify-between w-full max-w-7xl px-5 md:px-7 py-3 rounded-full bg-black/50 backdrop-blur-md border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
      <button
        onClick={() => go("#home")}
        style={{ fontFamily: DISPLAY_FONT }}
        className="text-2xl md:text-3xl tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        aria-label="Home"
      >
        Dũng Bùi<sup className="text-xs">®</sup>
      </button>
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
      <Button size="sm" onClick={() => go("#contact")}>
        Say hi
      </Button>
      </div>
    </nav>
  );
}
