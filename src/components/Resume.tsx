import { motion } from "framer-motion";
import { experience } from "../data/experience";
import { skillGroups } from "../data/skills";
import { hero } from "../data/showcase";
import { SectionHeader } from "./Works";

export default function Resume() {
  return (
    <section id="resume" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Resume"
          title="Kinh nghiệm"
          italic="& kỹ năng"
          sub={hero.summaryVi}
          action={{ label: "Tải CV PDF", href: hero.cvFile }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mb-5 md:mb-6">
          {experience.slice(0, 4).map((e, i) => (
            <motion.article
              key={e.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-3xl border border-stroke bg-surface/40 p-6 md:p-8"
            >
              <p className="text-xs text-muted uppercase tracking-[0.25em] mb-2">{e.period}</p>
              <h3 className="font-display italic text-2xl text-text-primary">{e.title}</h3>
              {e.subtitle && <p className="text-sm text-muted mt-1">{e.subtitle}</p>}
              <p className="text-sm text-muted mt-3 leading-relaxed">{e.summary}</p>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-3xl border border-stroke bg-surface/40 p-6"
            >
              <h4 className="font-display italic text-xl text-text-primary mb-4">{g.title}</h4>
              <ul className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li key={s} className="text-xs text-muted border border-stroke rounded-full px-3 py-1.5">
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
