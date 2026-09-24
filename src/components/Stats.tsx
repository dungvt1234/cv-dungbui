import { motion } from "framer-motion";
import { stats } from "../data/showcase";

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            viewport={{ once: true }}
          >
            <p className="text-5xl md:text-6xl font-display italic text-text-primary">{s.value}</p>
            <p className="text-muted mt-2">{s.label}</p>
            <div className="h-[3px] w-24 mx-auto mt-4 rounded-full accent-gradient" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
