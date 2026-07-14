import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/** Minuteur : compte de 0 jusqu'à `value` dès que l'élément est visible. */
export default function Counter({ value, suffix = "", duration = 1800 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo : démarrage rapide, arrivée douce sur la valeur cible.
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}
