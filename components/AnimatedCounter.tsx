"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const start = performance.now(); const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            setN(Math.floor(value * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick); io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, [value]);
  return <span ref={ref} className="font-display text-5xl lg:text-6xl font-black text-navy">{n}{suffix}</span>;
}
