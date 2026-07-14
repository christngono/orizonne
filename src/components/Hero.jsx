import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import formation from "../assets/photos/formation-analyse.jpg";
import etudiants from "../assets/photos/etudiants-finance.jpg";
import guide3d from "../assets/books/guide-3d.jpeg";
import "./Hero.css";

const BACKDROPS = [formation, etudiants, guide3d];
const DURATION = 7000;

export default function Hero() {
  const { t, lang } = useLang();
  const slides = t.home.slides;
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + slides.length) % slides.length),
    [slides.length],
  );

  // Défilement automatique — relancé à chaque changement de slide ou de langue.
  useEffect(() => {
    const id = setTimeout(() => go(1), DURATION);
    return () => clearTimeout(id);
  }, [index, go, lang]);

  const slide = slides[index];

  return (
    <section className="hero" aria-roledescription="carrousel">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          className="hero__bg"
          style={{ backgroundImage: `url(${BACKDROPS[index % BACKDROPS.length]})` }}
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 8, ease: "linear" } }}
        />
      </AnimatePresence>

      <div className="hero__veil" />
      <div className="hero__grid" />

      <div className="container hero__inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${index}-${lang}`}
            className="hero__content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__tag">{slide.tag}</span>

            <h1>
              {slide.title} <span className="text-grad">{slide.highlight}</span>
            </h1>

            <p className="hero__text">{slide.text}</p>

            <blockquote className="hero__quote">
              <Quote size={18} />
              {slide.quote}
            </blockquote>

            <div className="hero__actions">
              <Link to={slide.to} className="btn btn--primary">
                {slide.cta}
                <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn btn--ghost">
                {t.common.contactUs}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="hero__nav">
          <button onClick={() => go(-1)} aria-label="Précédent">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => go(1)} aria-label="Suivant">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="hero__dots" role="tablist">
          {slides.map((s, i) => (
            <button
              key={s.tag}
              className={`hero__dot${i === index ? " is-active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={s.tag}
              aria-selected={i === index}
              role="tab"
            >
              {i === index && (
                <motion.span
                  className="hero__dot-fill"
                  key={`fill-${index}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: DURATION / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
