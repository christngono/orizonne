import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import Icon from "../components/Icon";
import { useLang } from "../i18n/LanguageContext";
import formation from "../assets/photos/formation-analyse.jpg";
import etudiants from "../assets/photos/etudiants-finance.jpg";
import guide3d from "../assets/books/guide-3d.jpeg";
import guideEn from "../assets/books/guide-cover-en.jpeg";
import "./Home.css";

export default function Home() {
  const { t } = useLang();
  const h = t.home;

  return (
    <>
      <Hero />

      {/* Trois piliers, en débord sur le hero ------------------------------ */}
      <section className="pillars">
        <div className="container">
          <div className="pillars__card">
            {h.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} className="pillar">
                <div className="pillar__icon">
                  <Icon name={p.icon} size={28} />
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <Link to="/produits-services" className="link-arrow">
                    {t.common.readMore}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Présentation ------------------------------------------------------ */}
      <section className="section">
        <div className="container intro">
          <Reveal className="intro__media">
            <div className="intro__collage">
              <img src={formation} alt="" className="intro__img intro__img--main" />
              <img src={etudiants} alt="" className="intro__img intro__img--sub" />
              <div className="intro__badge">
                <strong>
                  <Counter value={100} suffix="%" />
                </strong>
                <span>CEMAC</span>
              </div>
            </div>
            <span className="intro__ring intro__ring--blue" aria-hidden />
            <span className="intro__ring intro__ring--cyan" aria-hidden />
          </Reveal>

          <Reveal delay={0.12} className="intro__body">
            <p className="eyebrow">{h.introEyebrow}</p>
            <h2>{h.introTitle}</h2>
            <p className="lead">{h.introText}</p>
            <ul className="checklist">
              {h.introBullets.map((b) => (
                <li key={b}>
                  <Check size={15} />
                  {b}
                </li>
              ))}
            </ul>
            <Link to="/nous-connaitre" className="btn btn--primary">
              {t.common.readMore}
              <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Minuteurs --------------------------------------------------------- */}
      <section className="section section--deep stats">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">ORIZONNE</p>
            <h2>{h.statsTitle}</h2>
          </Reveal>

          <div className="grid grid--4">
            {h.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="stat">
                <strong className="stat__value">
                  <Counter value={s.value} suffix={s.suffix} />
                </strong>
                <span className="stat__label">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services ---------------------------------------------------------- */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">{h.servicesEyebrow}</p>
            <h2>{h.servicesTitle}</h2>
            <p>{h.servicesText}</p>
          </Reveal>

          <div className="grid grid--4">
            {t.services.offers.slice(0, 4).map((o, i) => (
              <Reveal key={o.name} delay={i * 0.08}>
                <article className="card">
                  <div className="card__icon">
                    <Icon name={o.icon} />
                  </div>
                  <h3>{o.name}</h3>
                  <p className="clamp-4">{o.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="center-cta">
            <Link to="/produits-services" className="btn btn--primary">
              {t.common.allServices}
              <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Ouvrage ----------------------------------------------------------- */}
      <section className="section">
        <div className="container books">
          <Reveal className="books__body">
            <p className="eyebrow">{h.booksEyebrow}</p>
            <h2>{h.booksTitle}</h2>
            <p className="lead">{h.booksText}</p>
            <ul className="checklist">
              {h.booksBullets.map((b) => (
                <li key={b}>
                  <Check size={15} />
                  {b}
                </li>
              ))}
            </ul>
            <Link to="/produits-services" className="btn btn--primary">
              {t.common.discover}
              <ArrowRight size={17} />
            </Link>
          </Reveal>

          <Reveal delay={0.12} className="books__media">
            <img src={guide3d} alt="Guide Pratique de la Sécurité Monétaire" className="books__img" />
            <img src={guideEn} alt="Practical Guide of Monetary Security" className="books__img books__img--float" />
          </Reveal>
        </div>
      </section>

      {/* Appel à l'action --------------------------------------------------- */}
      <section className="cta">
        <div className="container cta__inner">
          <Reveal>
            <h2>{h.ctaTitle}</h2>
            <p>{h.ctaText}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <Link to="/contact" className="btn btn--primary">
              {t.common.contactUs}
              <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
