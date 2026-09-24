import { useEffect, useState } from "react";
import { hero } from "../data/showcase";
import { scrollToSection } from "./Navbar";
import { Button } from "./ui/button";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_102608_5fa1187d-9ac6-44fb-82ab-54376200abc0.mp4";

const DISPLAY_FONT = "'Instrument Serif', serif";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % hero.roles.length), 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex flex-col">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-24 flex-1 justify-center">
        <img
          src="/assets/profile.jpg"
          alt="Dũng Bùi"
          className="animate-fade-rise w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-5 liquid-glass p-[3px]"
        />
        <h1
          style={{ fontFamily: DISPLAY_FONT }}
          className="hero-pop animate-fade-rise text-4xl sm:text-5xl md:text-6xl font-normal leading-[0.95] tracking-[-2.46px] max-w-5xl text-white"
        >
          Dũng <em className="not-italic text-white/85">Bùi</em>
          <br />
          <span className="text-xl sm:text-2xl md:text-3xl tracking-normal text-white/95">
            Nhận trọn phần{" "}
            <span key={roleIndex} className="animate-role-fade-in inline-block">
              <em className="not-italic text-white/85">{hero.roles[roleIndex]}</em>
            </span>
            .
          </span>
        </h1>
        <p className="hero-pop animate-fade-rise-delay text-white/80 text-sm sm:text-base max-w-xl mt-5 leading-relaxed">
          {hero.description}
        </p>
        <div className="animate-fade-rise-delay-2 mt-8 flex flex-wrap justify-center gap-3">
          <Button size="sm" onClick={() => scrollToSection("#work")}>
            See Works
          </Button>
          <Button size="sm" onClick={() => scrollToSection("#contact")}>
            Reach out...
          </Button>
        </div>
      </div>
    </section>
  );
}
