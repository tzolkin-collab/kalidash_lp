"use client";

import { useEffect, useState } from "react";

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function computeTimeRemaining(target: Date): CountdownValues {
  const totalSeconds = Math.max(
    0,
    Math.floor((target.getTime() - Date.now()) / 1000)
  );

  const expired = totalSeconds === 0;
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, expired };
}

const ZERO: CountdownValues = { days: 0, hours: 0, minutes: 0, seconds: 0, expired: false };

export function useCountdown(target: Date): CountdownValues {
  // Inicializa com zeros para que SSR e primeiro render do cliente sejam idênticos.
  // O valor real só é computado após o mount, evitando hydration mismatch.
  const [values, setValues] = useState<CountdownValues>(ZERO);

  useEffect(() => {
    setValues(computeTimeRemaining(target));

    const interval = setInterval(() => {
      const next = computeTimeRemaining(target);
      setValues(next);
      if (next.expired) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return values;
}
