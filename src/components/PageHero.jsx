import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";
import "./PageHero.css";

/** Bandeau d'en-tête commun aux pages intérieures. */
export default function PageHero({ eyebrow, title, text }) {
  const { t } = useLang();
  const { pathname } = useLocation();

  const labels = {
    "/nous-connaitre": t.nav.about,
    "/produits-services": t.nav.services,
    "/actualites": t.nav.news,
    "/galerie": t.nav.gallery,
    "/contact": t.nav.contact,
  };

  return (
    <section className="page-hero">
      <div className="container">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          {title}
        </motion.h1>

        {text && (
          <motion.p
            className="page-hero__text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            {text}
          </motion.p>
        )}

        <motion.nav
          className="crumbs"
          aria-label="Fil d'Ariane"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          <Link to="/">{t.nav.home}</Link>
          <ChevronRight size={14} />
          <span>{labels[pathname]}</span>
        </motion.nav>
      </div>
    </section>
  );
}
