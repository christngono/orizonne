import { Link } from "react-router-dom";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Linkedin, Youtube } from "./SocialIcons";
import { useLang } from "../i18n/LanguageContext";
import { COMPANY } from "../i18n/content";
import logo from "../assets/logo.jpeg";
import "./Footer.css";

export default function Footer() {
  const { t } = useLang();

  const nav = [
    { to: "/", label: t.nav.home },
    { to: "/nous-connaitre", label: t.nav.about },
    { to: "/produits-services", label: t.nav.services },
    { to: "/actualites", label: t.nav.news },
    { to: "/galerie", label: t.nav.gallery },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={logo} alt="ORIZONNE" />
            <span>ORIZONNE</span>
          </Link>
          <p>{t.footer.tagline}</p>
          <div className="footer__socials">
            <a href={COMPANY.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={17} />
            </a>
            <a href={COMPANY.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href={COMPANY.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <Youtube size={17} />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>{t.footer.navTitle}</h4>
          <ul>
            {nav.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>{t.footer.servicesTitle}</h4>
          <ul>
            {t.services.domains.slice(0, 6).map((d) => (
              <li key={d}>
                <Link to="/produits-services">{d}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>{t.footer.contactTitle}</h4>
          <ul className="footer__contact">
            <li>
              <MapPin size={16} />
              <span>{COMPANY.address}</span>
            </li>
            <li>
              <Phone size={16} />
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
            </li>
            <li>
              <Mail size={16} />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {new Date().getFullYear()} {COMPANY.name}. {t.footer.rights}
        </p>
        <button
          className="footer__top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {t.common.backTop}
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
}
