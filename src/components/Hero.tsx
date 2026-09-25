import { useEffect, useState } from "react";
import { Brain, LineChart, Palette, Code2, Database, Megaphone } from "lucide-react";
import { hero } from "../data/showcase";
import Reveal from "./Reveal";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";

const ORBITERS = [
  { icon: Brain, label: "AI", cls: "left-[-72px] sm:left-[-96px] top-[8%]", delay: "0s" },
  { icon: Palette, label: "Design", cls: "right-[-72px] sm:right-[-96px] top-[20%]", delay: "0.8s" },
  { icon: LineChart, label: "Tài chính", cls: "left-[-84px] sm:left-[-112px] top-[46%]", delay: "1.6s" },
  { icon: Code2, label: "Web", cls: "right-[-84px] sm:right-[-112px] top-[52%]", delay: "0.4s" },
  { icon: Database, label: "Data", cls: "left-[-60px] sm:left-[-80px] bottom-[10%]", delay: "1.2s" },
  { icon: Megaphone, label: "Marketing", cls: "right-[-60px] sm:right-[-80px] bottom-[16%]", delay: "2s" },
];

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_115139_0fc6bd3d-3631-4d26-ab9b-28293887dcc9.mp4";
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % hero.roles.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="font-kanit relative h-screen flex flex-col" style={{ overflowX: "clip", background: "#0C0C0C" }}>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="flex-1" />

      <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <Magnet padding={150} strength={3}>
          <Reveal y={30} delay={150}>
            <div className="relative">
              <img
                src="/assets/profile.jpg"
                alt="Dũng Bùi"
                className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[340px] rounded-[32px] object-cover aspect-[4/5]"
              />
              {ORBITERS.map((o) => (
                <span
                  key={o.label}
                  className={`absolute ${o.cls} hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs px-3 py-2 whitespace-nowrap animate-orbit-float`}
                  style={{ animationDelay: o.delay }}
                >
                  <o.icon size={14} aria-hidden="true" />
                  {o.label}
                </span>
              ))}
            </div>
          </Reveal>
        </Magnet>
      </div>

      <div className="relative z-10 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <Reveal y={20} delay={350}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            Nhận trọn phần{" "}
            <span key={roleIndex} className="animate-role-fade-in inline-block">
              {hero.roles[roleIndex]}
            </span>
          </p>
        </Reveal>
        <Reveal y={20} delay={500}>
          <ContactButton />
        </Reveal>
      </div>
    </section>
  );
}
