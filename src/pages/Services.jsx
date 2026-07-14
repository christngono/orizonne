import { Link } from "react-router-dom";
import { ArrowRight, Check, Download, Mail } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { useLang } from "../i18n/LanguageContext";
import { COMPANY } from "../i18n/content";
import guide3d from "../assets/books/guide-3d.jpeg";
import guideEn from "../assets/books/guide-cover-en.jpeg";
import guideBack from "../assets/books/guide-back.jpg";
import formation from "../assets/photos/formation-analyse.jpg";
import "./Services.css";

export default function Services() {
  const { t } = useLang();
  const s = t.services;

  return (
    <>
      <PageHero eyebrow={s.hero.eyebrow} title={s.hero.title} text={s.hero.text} />

      {/* Domaines d'expertise ---------------------------------------------- */}
      <section className="section domains-sec">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <h2>{s.domainsTitle}</h2>
          </Reveal>
          <Reveal delay={0.1} className="domains">
            {s.domains.map((d) => (
              <span key={d} className="domain">
                <Check size={14} />
                {d}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Ouvrage ------------------------------------------------------------ */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">{s.productsEyebrow}</p>
            <h2>{s.productsTitle}</h2>
            <p>{s.productsText}</p>
          </Reveal>

          <div className="book">
            <Reveal className="book__gallery">
              <img src={guide3d} alt={s.bookTitle} className="book__main" />
              <div className="book__thumbs">
                <img src={guideEn} alt="" />
                <img src={guideBack} alt="" />
              </div>
            </Reveal>

            <Reveal delay={0.12} className="book__body">
              <span className="badge badge--brand">{s.bookSub}</span>
              <h3 className="book__title">{s.bookTitle}</h3>
              <p className="book__authors">{s.bookAuthors}</p>
              <p>{s.bookText}</p>
              <ul className="checklist">
                {t.home.booksBullets.map((b) => (
                  <li key={b}>
                    <Check size={15} />
                    {b}
                  </li>
                ))}
              </ul>
              <a href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(s.bookTitle)}`} className="btn btn--primary">
                <Mail size={17} />
                {t.common.contactUs}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Logiciels ----------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <h2>{s.softwareTitle}</h2>
          </Reveal>

          <div className="grid grid--3">
            {s.software.map((sw, i) => (
              <Reveal key={sw.name} delay={i * 0.08}>
                <article className="card">
                  <div className="card__icon">
                    <Icon name={sw.icon} />
                  </div>
                  <h3>{sw.name}</h3>
                  <p>{sw.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications mobiles -------------------------------------------------- */}
      <section className="section section--deep">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">{s.productsEyebrow}</p>
            <h2>{s.appsTitle}</h2>
          </Reveal>

          <div className="grid grid--3">
            {s.apps.map((app, i) => (
              <Reveal key={app.name} delay={i * 0.09}>
                <article className="app">
                  <span className="badge badge--cyan">{app.badge}</span>
                  <div className="app__icon">
                    <Icon name={app.icon} size={30} />
                  </div>
                  <h3>{app.name}</h3>
                  <p>{app.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24} className="apps-cta">
            <p>{s.appsNote}</p>
            <Link to="/contact" className="btn btn--primary">
              {t.common.contactUs}
              <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services / formations -------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">{s.servicesEyebrow}</p>
            <h2>{s.servicesTitle}</h2>
            <p>{s.servicesText}</p>
          </Reveal>

          <div className="offers">
            {s.offers.map((o, i) => (
              <Reveal key={o.name} delay={(i % 2) * 0.08}>
                <article className="offer">
                  <div className="offer__icon">
                    <Icon name={o.icon} size={26} />
                  </div>
                  <div>
                    <h3>{o.name}</h3>
                    <p>{o.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue -------------------------------------------------------------- */}
      <section className="section section--soft">
        <div className="container catalog">
          <Reveal className="catalog__media">
            <img src={formation} alt="" />
          </Reveal>
          <Reveal delay={0.12} className="catalog__body">
            <p className="eyebrow">{s.servicesEyebrow}</p>
            <h2>{s.catalogTitle}</h2>
            <p className="lead">{s.catalogText}</p>
            <a
              href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(s.catalogTitle)}`}
              className="btn btn--primary"
            >
              <Download size={17} />
              {t.common.download}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
