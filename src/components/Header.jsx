import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Menu, Phone, X, Globe } from "lucide-react";
import { Facebook, Linkedin, Youtube } from "./SocialIcons";
import { useLang } from "../i18n/LanguageContext";
import { COMPANY } from "../i18n/content";
import logo from "../assets/logo.jpeg";
import "./Header.css";

export default function Header() {
  const { t, lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Referme le menu mobile à chaque changement de page.
  useEffect(() => setOpen(false), [pathname]);

  // Empêche le défilement de l'arrière-plan quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/nous-connaitre", label: t.nav.about },
    { to: "/produits-services", label: t.nav.services },
    { to: "/actualites", label: t.nav.news },
    { to: "/galerie", label: t.nav.gallery },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__contacts">
            <a href={`mailto:${COMPANY.email}`}>
              <Mail size={14} />
              {COMPANY.email}
            </a>
            <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>
              <Phone size={14} />
              {COMPANY.phone}
            </a>
          </div>
          <div className="topbar__right">
            <div className="topbar__socials">
              <a href={COMPANY.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={15} />
              </a>
              <a href={COMPANY.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={15} />
              </a>
              <a href={COMPANY.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                <Youtube size={15} />
              </a>
            </div>
            <button className="lang-switch lang-switch--top" onClick={toggle}>
              <Globe size={14} />
              {lang === "fr" ? "EN" : "FR"}
            </button>
          </div>
        </div>
      </div>

      <header className={`header${scrolled ? " header--scrolled" : ""}`}>
        <div className="container header__inner">
          <Link to="/" className="brand" aria-label="ORIZONNE">
            <img src={logo} alt="" className="brand__logo" />
            <span className="brand__text">
              ORIZONNE
              <small>{lang === "fr" ? "Ingénierie économique & financière" : "Economic & financial engineering"}</small>
            </span>
          </Link>

          <nav className="nav" aria-label="Navigation principale">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className="nav__link">
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="header__actions">
            <Link to="/contact" className="btn btn--primary btn--sm">
              {t.common.contactUs}
            </Link>
            <button
              className="burger"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <nav>
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <NavLink to={l.to} end={l.to === "/"} className="mobile-menu__link">
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <button className="lang-switch" onClick={toggle}>
              <Globe size={16} />
              {lang === "fr" ? "Switch to English" : "Passer en français"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
