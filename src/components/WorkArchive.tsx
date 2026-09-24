import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { portfolioCategories, projects } from "../data/portfolio";

export default function WorkArchive() {
  const [cat, setCat] = useState("ALL");
  const list = projects.filter((p) => cat === "ALL" || p.category === cat);

  return (
    <div className="bg-bg text-text-primary font-body min-h-screen pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <Link to="/" className="inline-block text-sm text-muted hover:text-text-primary transition-colors mb-8">
          ← Back home
        </Link>
        <p className="flex items-center gap-3 text-xs text-muted uppercase tracking-[0.3em] mb-4">
          <span className="w-8 h-px bg-stroke" />
          Archive
        </p>
        <h1 className="text-4xl md:text-6xl font-display text-text-primary mb-8">
          All <em className="italic">work</em>
        </h1>

        <div className="flex flex-wrap gap-2 mb-10">
          {portfolioCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`text-xs sm:text-sm rounded-full px-4 py-2 transition-colors ${
                cat === c ? "text-text-primary bg-stroke/50" : "text-muted hover:text-text-primary hover:bg-stroke/50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {list.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.link}
              target={p.link.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
              className="group relative bg-surface border border-stroke rounded-3xl overflow-hidden md:col-span-6 lg:col-span-4 aspect-[4/3] block"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <span className="absolute left-5 bottom-5 right-5">
                <span className="block text-[11px] uppercase tracking-[0.25em] text-white/70 mb-1">{p.category}</span>
                <span className="block text-lg font-display italic text-white leading-snug">{p.title}</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
