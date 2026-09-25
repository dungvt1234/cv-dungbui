import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import { hero } from "../data/showcase";

const DECOR = [
  {
    src: "/assets/projects/p10-kindergarten.jpg",
    alt: "Mầm non Bình Minh",
    cls: "w-[120px] sm:w-[160px] md:w-[210px] top-[4%] left-[1%] sm:left-[2%] md:left-[4%]",
    delay: 0.1, x: -80, y: 0,
  },
  {
    src: "/assets/projects/p-himedical.jpg",
    alt: "Hi Medical",
    cls: "w-[100px] sm:w-[140px] md:w-[180px] bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]",
    delay: 0.25, x: -80, y: 0,
  },
  {
    src: "/assets/projects/p12-cinematic-estate.jpg",
    alt: "Verdant Estates",
    cls: "w-[120px] sm:w-[160px] md:w-[210px] top-[4%] right-[1%] sm:right-[2%] md:right-[4%]",
    delay: 0.15, x: 80, y: 0,
  },
  {
    src: "/assets/projects/p11-moc-khong.jpg",
    alt: "Mộc Không",
    cls: "w-[130px] sm:w-[170px] md:w-[220px] bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]",
    delay: 0.3, x: 80, y: 0,
  },
];

/** About với nội dung thật của bạn. */
export default function JackAbout() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 gap-10 sm:gap-14 md:gap-16 font-kanit">
      {DECOR.map((d) => (
        <FadeIn key={d.src} delay={d.delay} x={d.x} y={d.y} duration={0.9} className={`absolute ${d.cls}`}>
          <img src={d.src} alt={d.alt} loading="lazy" className="w-full h-auto rounded-2xl border border-stroke" />
        </FadeIn>
      ))}

      <FadeIn delay={0} y={40} duration={0.7}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Về tôi
        </h2>
      </FadeIn>

      <div
        className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] flex flex-col gap-16 sm:gap-20 md:gap-24 items-center"
        style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
      >
        <AnimatedText text={hero.summaryVi} />
        <ContactButton />
      </div>
    </section>
  );
}
