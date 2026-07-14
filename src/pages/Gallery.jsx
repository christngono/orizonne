import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Video, X, ZoomIn } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useLang } from "../i18n/LanguageContext";
import formation from "../assets/photos/formation-analyse.jpg";
import etudiants from "../assets/photos/etudiants-finance.jpg";
import book3d from "../assets/books/guide-3d.jpeg";
import bookEn from "../assets/books/guide-cover-en.jpeg";
import bookBack from "../assets/books/guide-back.jpg";
import ngossi from "../assets/team/ngossi.jpeg";
import nchare from "../assets/team/nchare.jpeg";
import simeu from "../assets/team/simeu.jpeg";
import "./Gallery.css";

const IMAGES = { formation, etudiants, book3d, bookEn, bookBack, ngossi, nchare, simeu };

export default function Gallery() {
  const { t } = useLang();
  const g = t.gallery;
  const [tab, setTab] = useState("photos");
  const [lightbox, setLightbox] = useState(null); // index de la photo ouverte

  const items = g.items;

  const step = useCallback(
    (dir) => setLightbox((i) => (i === null ? null : (i + dir + items.length) % items.length)),
    [items.length],
  );

  // Navigation au clavier dans la lightbox.
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, step]);

  return (
    <>
      <PageHero eyebrow={g.hero.eyebrow} title={g.hero.title} text={g.hero.text} />

      <section className="section">
        <div className="container">
          <Reveal className="filters">
            <button
              className={`filter${tab === "photos" ? " is-active" : ""}`}
              onClick={() => setTab("photos")}
            >
              <ZoomIn size={15} />
              {g.tabPhotos}
            </button>
            <button
              className={`filter${tab === "videos" ? " is-active" : ""}`}
              onClick={() => setTab("videos")}
            >
              <Video size={15} />
              {g.tabVideos}
            </button>
          </Reveal>

          {tab === "photos" ? (
            <div className="masonry">
              {items.map((it, i) => (
                <Reveal key={it.id} delay={(i % 3) * 0.07}>
                  <figure className="shot" onClick={() => setLightbox(i)}>
                    <img src={IMAGES[it.id]} alt={it.caption} loading="lazy" />
                    <figcaption>
                      <span>{it.caption}</span>
                      <ZoomIn size={18} />
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal className="videos-empty">
              <Video size={32} />
              <p>{g.videosEmpty}</p>
            </Reveal>
          )}
        </div>
      </section>

      {/* Lightbox ------------------------------------------------------------ */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button className="lightbox__close" aria-label="Fermer">
              <X size={26} />
            </button>

            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Précédent"
            >
              <ChevronLeft size={26} />
            </button>

            <motion.figure
              className="lightbox__figure"
              key={lightbox}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={IMAGES[items[lightbox].id]} alt={items[lightbox].caption} />
              <figcaption>{items[lightbox].caption}</figcaption>
            </motion.figure>

            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Suivant"
            >
              <ChevronRight size={26} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
