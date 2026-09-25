import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="invisible">{char === " " ? "\u00A0" : char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
}

/** Chữ hiện dần từng ký tự theo scroll đúng spec Jack. */
export default function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = Array.from(text);
  return (
    <p ref={ref}>
      {chars.map((c, i) => (
        <Char
          key={i}
          char={c}
          progress={scrollYProgress}
          range={[i / chars.length, Math.min(1, (i + 1) / chars.length)]}
        />
      ))}
    </p>
  );
}
