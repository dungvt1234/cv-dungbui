import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { works } from "../data/showcase";

export function SectionHeader({
  eyebrow,
  title,
  italic,
  sub,
  action,
}: {
  eyebrow: string;
  title: string;
  italic: string;
  sub: string;
  action?: { label: string; href: string };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14"
    >
      <div>
        <p className="flex items-center gap-3 text-xs text-muted uppercase tracking-[0.3em] mb-4">
          <span className="w-8 h-px bg-stroke" />
          {eyebrow}
        </p>
        <h2 className="text-4xl md:text-6xl font-display text-text-primary">
          {title} <em className="italic">{italic}</em>
        </h2>
        <p className="text-muted mt-4 max-w-lg">{sub}</p>
      </div>
      {action && (
        <Link
          to={action.href}
          className="group relative hidden md:inline-flex items-center gap-2 rounded-full text-sm px-6 py-3 text-text-primary"
        >
          <span className="absolute rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" style={{ inset: "-2px", zIndex: -1 }} />
          <span className="rounded-full bg-surface px-6 py-3">
            {action.label} <span aria-hidden="true">→</span>
          </span>
        </Link>
      )}
    </motion.div>
  );
}

export default function Works() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured"
          italic="projects"
          sub="A selection of projects I've worked on, from concept to launch."
          action={{ label: "View all work", href: "/work" }}
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {works.map((w, i) =>
            w.link === "/work" ? (
              <Reveal key={w.title} delay={(i % 2) * 110} className={w.span}>
                <Link
                  to={w.link}
                  className="group relative bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[320px] block"
                >
                  <CardBody w={w} />
                </Link>
              </Reveal>
            ) : (
              <Reveal key={w.title} delay={(i % 2) * 110} className={w.span}>
                <a
                  href={w.link}
                  target={w.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group relative bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[320px] block"
                >
                  <CardBody w={w} />
                </a>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function CardBody({ w }: { w: (typeof works)[number] }) {
  return (
    <>
      <img
        src={w.image}
        alt={w.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <span className="absolute left-5 bottom-5 right-5">
        <span className="block text-[11px] uppercase tracking-[0.25em] text-white/70 mb-1">{w.category}</span>
        <span className="block text-xl md:text-2xl font-display italic text-white">{w.title}</span>
        <span className="block text-sm text-white/70">{w.en}</span>
      </span>
      <span className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-lg flex items-center justify-center">
        <span className="relative rounded-full accent-gradient px-[2px] py-[2px]">
          <span className="block rounded-full bg-white text-black text-sm px-6 py-3">
            View — <em className="font-display italic">{w.title}</em>
          </span>
        </span>
      </span>
    </>
  );
}
