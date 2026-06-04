"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  fromY?: number;
  fromX?: number;
  scale?: number;
  animateOn?: "scroll" | "mount";
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 750,
  fromY = 28,
  fromX = 0,
  scale = 1,
  animateOn = "scroll",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(animateOn === "mount");

  useEffect(() => {
    if (animateOn === "mount") return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animateOn]);

  return (
    <div
      ref={ref}
      className={className}
      style={animateOn === "mount" ? {
        animation: `fade-in-mount ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms both`,
        '--from-y': `${fromY}px`,
        '--from-x': `${fromX}px`,
        '--from-scale': scale,
      } as React.CSSProperties : {
        opacity:   visible ? 1 : 0,
        transform: visible
          ? "translateY(0) translateX(0) scale(1)"
          : `translateY(${fromY}px) translateX(${fromX}px) scale(${scale})`,
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
