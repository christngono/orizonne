import { motion } from "framer-motion";

/** Révèle son contenu lorsqu'il entre dans le viewport (une seule fois). */
export default function Reveal({ children, delay = 0, y = 26, className, as = "div" }) {
  const Motion = motion[as] ?? motion.div;
  return (
    <Motion
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion>
  );
}
