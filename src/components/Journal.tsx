import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { SectionHeader } from "./Works";
import { journal } from "../data/showcase";

const BG_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260701_083907_581a119a-89b7-4c9f-a6ef-560625e0086f.mp4";

export default function Journal() {
  return (
    <section id="journal" className="relative py-16 md:py-24 overflow-hidden">
      <video
        src={BG_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-bg to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-bg to-transparent" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Journal"
          title="Recent"
          italic="thoughts"
          sub="Notes on AI, web and data work for small businesses."
          action={{ label: "View all", href: "/work" }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
          {journal.map((j, i) => (
            <Reveal key={j.title} delay={(i % 2) * 100}>
            <Link
              to={j.link}
              className="group flex items-center gap-3 p-2.5 rounded-full bg-black/30 backdrop-blur-md hover:bg-black/55 border border-white/10 hover:border-white/35 hover:-translate-y-1 hover:shadow-[0_12px_36px_-12px_rgba(137,170,204,0.55)] transition-all duration-300"
            >
              <img src={j.image} alt={j.title} loading="lazy" className="w-11 h-11 rounded-full object-cover shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
              <span className="flex-1 min-w-0">
                <span className="block text-white text-sm font-medium truncate transition-colors group-hover:text-[#bcd6ec]">{j.title}</span>
                <span className="block text-[11px] text-white/60 mt-0.5">
                  {j.date} · {j.readTime}
                </span>
              </span>
              <span className="hidden sm:inline text-white/60 pr-2 transition-all duration-300 group-hover:text-white group-hover:translate-x-1.5" aria-hidden="true">→</span>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
