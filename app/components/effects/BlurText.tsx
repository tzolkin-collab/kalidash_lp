"use client";

import { useEffect, useRef, useState } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  wordDelay?: number;
  duration?: number;
}

export function BlurText({
  text,
  className = "",
  wordDelay = 55,
  duration = 700,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <span ref={ref} aria-label={text} className={`inline ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: "inline-block",
            marginRight: "0.28em",
            opacity:    triggered ? 1 : 0,
            filter:     triggered ? "blur(0px)" : "blur(14px)",
            transform:  triggered ? "translateY(0) scale(1)" : "translateY(18px) scale(0.96)",
            transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${i * wordDelay}ms,
                         filter  ${duration}ms cubic-bezier(0.16,1,0.3,1) ${i * wordDelay}ms,
                         transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${i * wordDelay}ms`,
            willChange: "opacity, filter, transform",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
