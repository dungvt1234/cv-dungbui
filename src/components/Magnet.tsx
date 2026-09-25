import { useRef, useState, type ReactNode, type MouseEvent } from "react";

type MagnetProps = {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
};

/** Hiệu ứng hút theo chuột kiểu Jack portfolio. */
export default function Magnet({ children, padding = 150, strength = 3, className }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("translate3d(0px, 0px, 0)");
  const [transition, setTransition] = useState("transform 0.6s ease-in-out");

  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const outside =
      Math.abs(dx) > rect.width / 2 + padding || Math.abs(dy) > rect.height / 2 + padding;
    if (outside) {
      setTransition("transform 0.6s ease-in-out");
      setTransform("translate3d(0px, 0px, 0)");
    } else {
      setTransition("transform 0.3s ease-out");
      setTransform(`translate3d(${(dx / strength).toFixed(2)}px, ${(dy / strength).toFixed(2)}px, 0)`);
    }
  };

  const onLeave = () => {
    setTransition("transform 0.6s ease-in-out");
    setTransform("translate3d(0px, 0px, 0)");
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform, transition, willChange: "transform" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
