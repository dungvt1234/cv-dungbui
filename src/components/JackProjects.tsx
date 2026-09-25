import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";

type Project = {
  name: string;
  category: string;
  link: string;
  col1: [string, string];
  col2: string;
};

const PROJECTS: Project[] = [
  {
    name: "Mầm non Bình Minh",
    category: "Khách hàng",
    link: "https://binhminhkindergarten.site",
    col1: ["/assets/projects/p10-kindergarten.jpg", "/assets/projects/p5-web.jpg"],
    col2: "/assets/projects/p6-soyzi-web.jpg",
  },
  {
    name: "Hi Medical Skincare",
    category: "Khách hàng",
    link: "https://www.himedicalskin.com/journal",
    col1: ["/assets/projects/p-himedical.jpg", "/assets/projects/p14-medical-news.jpg"],
    col2: "/assets/projects/p2-ai-image.jpg",
  },
  {
    name: "Verdant Estates",
    category: "Khách hàng",
    link: "https://cinematic-estate.vercel.app",
    col1: ["/assets/projects/p12-cinematic-estate.jpg", "/assets/projects/p11-moc-khong.jpg"],
    col2: "/assets/projects/p4-marketing.jpg",
  },
];

function Card({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.article
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 font-kanit"
      >
        <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-4 md:mb-6">
          <span
            className="hero-heading font-black leading-none"
            style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm">{project.category}</span>
          <h3 className="text-[#D7E2EA] font-medium uppercase text-xl md:text-3xl flex-1">
            {project.name}
          </h3>
          <LiveProjectButton href={project.link} label="Xem dự án" />
        </div>
        <div className="flex gap-4 md:gap-6">
          <div className="w-[40%] flex flex-col gap-4 md:gap-6">
            <img
              src={project.col1[0]}
              alt={project.name}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.col1[1]}
              alt=""
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.col2}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

/** Projects sticky stacking với 3 dự án thật của bạn. */
export default function JackProjects() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 font-kanit">
      <FadeIn y={40} duration={0.7}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-14"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Dự án
        </h2>
      </FadeIn>
      <div ref={listRef}>
        {PROJECTS.map((p, i) => (
          <Card key={p.name} project={p} index={i} total={PROJECTS.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
