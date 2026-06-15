"use client";

import React, { useState, useCallback, useEffect, useRef } from 'react';
import './ShinyText.css';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window));
  }, []);
  return isMobile;
}

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
  yoyo?: boolean;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  delay?: number;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 2,
  className = '',
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = 'left',
  delay = 0
}) => {
  const isMobile = useIsMobile();
  const effectiveDisabled = disabled || isMobile;
  const [isPaused, setIsPaused] = useState(false);

  const spanRef = useRef<HTMLSpanElement>(null);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const directionRef = useRef(direction === 'left' ? 1 : -1);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    directionRef.current = direction === 'left' ? 1 : -1;
    elapsedRef.current = 0;
  }, [direction]);

  useEffect(() => {
    if (effectiveDisabled) return;

    const animationDuration = speed * 1000;
    const delayDuration = delay * 1000;

    const tick = (time: number) => {
      if (isPaused) {
        lastTimeRef.current = null;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const deltaTime = time - lastTimeRef.current;
      lastTimeRef.current = time;
      elapsedRef.current += deltaTime;

      let p: number;

      if (yoyo) {
        const cycleDuration = animationDuration + delayDuration;
        const fullCycle = cycleDuration * 2;
        const cycleTime = elapsedRef.current % fullCycle;

        if (cycleTime < animationDuration) {
          p = (cycleTime / animationDuration) * 100;
        } else if (cycleTime < cycleDuration) {
          p = directionRef.current === 1 ? 100 : 0;
        } else if (cycleTime < cycleDuration + animationDuration) {
          const reverseTime = cycleTime - cycleDuration;
          p = 100 - (reverseTime / animationDuration) * 100;
        } else {
          p = directionRef.current === 1 ? 0 : 100;
        }
        p = directionRef.current === 1 ? p : 100 - p;
      } else {
        const cycleDuration = animationDuration + delayDuration;
        const cycleTime = elapsedRef.current % cycleDuration;
        if (cycleTime < animationDuration) {
          p = (cycleTime / animationDuration) * 100;
        } else {
          p = directionRef.current === 1 ? 100 : 0;
        }
        p = directionRef.current === 1 ? p : 100 - p;
      }

      const pos = 150 - p * 2;
      if (spanRef.current) {
        spanRef.current.style.backgroundPosition = `${pos}% center`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [effectiveDisabled, isPaused, speed, delay, yoyo]);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundPosition: isMobile ? '50% center' : '150% center',
  };

  return (
    <span
      ref={spanRef}
      className={`shiny-text ${className}`}
      style={gradientStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </span>
  );
};

export default ShinyText;
