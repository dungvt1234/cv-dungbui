import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { explorations } from "../data/showcase";

gsap.registerPlugin(ScrollTrigger);

export default function Explorations() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: pinRef.current,
        pinSpacing: false,
      });
      gsap.utils.toArray<HTMLElement>(".parallax-col").forEach((col, i) => {
        gsap.fromTo(
          col,
          { y: i === 0 ? 120 : -120 },
          {
            y: i === 0 ? -120 : 120,
            ease: "none",
            scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "+=200%", scrub: 1 },
          },
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const colA = explorations.filter((_, i) => i % 2 === 0);
  const colB = explorations.filter((_, i) => i % 2 === 1);

  return (
    <section ref={sectionRef} id="explorations" className="relative min-h-[300vh] bg-bg">
      <div ref={pinRef} className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10 pointer-events-none">
        <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">Explorations</p>
        <h2 className="text-4xl md:text-6xl font-display text-text-primary">
          Visual <em className="italic">playground</em>
        </h2>
        <p className="text-muted mt-4 max-w-md">AI image/video tests, banners and web demos — click any piece to view it large.</p>
        <a
          href="https://dribbble.com/"
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto mt-8 inline-flex items-center gap-2 rounded-full text-sm px-6 py-3 border border-stroke text-text-primary hover:border-transparent hover:scale-105 transition-all"
        >
          <span aria-hidden="true">◉</span> Dribbble
        </a>
      </div>

      <div className="absolute inset-0 z-20 flex justify-center pointer-events-none">
        <div className="grid grid-cols-2 gap-12 md:gap-40 max-w-[1400px] w-full px-6 pt-[110vh]">
          {[colA, colB].map((col, ci) => (
            <div key={ci} className="parallax-col flex flex-col gap-12 md:gap-24 items-center">
              {col.map((item) => (
                <button
                  key={item.image}
                  onClick={() => setLightbox(item.image)}
                  className="pointer-events-auto aspect-square max-w-[320px] w-full overflow-hidden rounded-3xl border border-stroke bg-surface"
                  style={{ transform: `rotate(${(ci === 0 ? -1 : 1) * (2 + (item.title.length % 3))}deg)` }}
                >
                  <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="Enlarged exploration" className="max-w-full max-h-full rounded-2xl border border-stroke" />
        </div>
      )}
    </section>
  );
}
