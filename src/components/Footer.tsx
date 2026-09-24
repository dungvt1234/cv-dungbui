import { useEffect, useRef } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import Reveal from "./Reveal";
import { HLS_URL, hero, socials } from "../data/showcase";

const MARQUEE = "BUILDING THE FUTURE • ";

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let hls: Hls | null = null;
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_URL;
    }
    return () => hls?.destroy();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-inner", { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover scale-y-[-1]" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div ref={marqueeRef} className="relative overflow-hidden whitespace-nowrap mb-12">
        <div className="marquee-inner inline-block font-display italic text-5xl md:text-7xl text-text-primary/90">
          {MARQUEE.repeat(10)}
          {MARQUEE.repeat(10)}
        </div>
      </div>

      <div className="relative text-center px-6 mb-14">
        <Reveal>
        <p className="text-muted mb-2">Có dự án web, số liệu hay content AI cần người làm?</p>
        <p className="text-sm text-muted mb-6">
          <a href={hero.phoneHref} className="hover:text-text-primary transition-colors">{hero.phone}</a>
          <span className="mx-2" aria-hidden="true">·</span>
          {hero.location}
          <span className="mx-2" aria-hidden="true">·</span>
          {hero.status}
        </p>
        <a
          href={`mailto:${hero.email}`}
          className="group relative inline-block rounded-full text-base px-9 py-4 bg-text-primary text-bg hover:scale-105 transition-transform"
        >
          <span className="absolute rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" style={{ inset: "-2px", zIndex: -1 }} />
          {hero.email}
        </a>
        <p className="mt-4">
          <a href={hero.cvFile} className="text-sm text-muted hover:text-text-primary underline underline-offset-4" download>
            Tải CV PDF
          </a>
        </p>
        </Reveal>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-stroke pt-6">
        <Reveal className="flex flex-wrap justify-center gap-5">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-text-primary transition-colors">
              {s.label}
            </a>
          ))}
        </Reveal>
        <p className="flex items-center gap-2 text-sm text-muted">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
          </span>
          Available for projects
        </p>
      </div>
    </footer>
  );
}
