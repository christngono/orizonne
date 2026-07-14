import { useState } from "react";
import { Quote, Plus, Minus } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Icon from "../components/Icon";
import { useLang } from "../i18n/LanguageContext";
import ngossi from "../assets/team/ngossi.jpeg";
import simeu from "../assets/team/simeu.jpeg";
import nchare from "../assets/team/nchare.jpeg";
import locko from "../assets/team/locko.jpeg";
import ngono from "../assets/team/ngono.jpg";
import "./About.css";

const PORTRAITS = { ngossi, simeu, nchare, locko, ngono };

export default function About() {
  const { t } = useLang();
  const a = t.about;
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <PageHero eyebrow={a.hero.eyebrow} title={a.hero.title} text={a.hero.text} />

      {/* Qui sommes-nous --------------------------------------------------- */}
      <section className="section">
        <div className="container who">
          <Reveal className="who__aside">
            <p className="eyebrow">{a.hero.eyebrow}</p>
            <h2>{a.whoTitle}</h2>
            <figure className="quote-card">
              <Quote size={26} />
              <blockquote>{a.quote}</blockquote>
              <figcaption>
                <img src={ngossi} alt="" />
                <div>
                  <strong>{a.quoteAuthor}</strong>
                  <span>{a.quoteRole}</span>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <div className="who__body">
            {a.whoParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className={i === 0 ? "who__lead" : undefined}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Directions --------------------------------------------------------- */}
      <section className="section section--soft">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">{a.directionsEyebrow}</p>
            <h2>{a.directionsTitle}</h2>
            <p>{a.directionsText}</p>
          </Reveal>

          <div className="directions">
            {a.directions.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.08}>
                <article className="direction">
                  <span className="direction__num">0{i + 1}</span>
                  <div className="direction__icon">
                    <Icon name={d.icon} size={24} />
                  </div>
                  <h3>{d.name}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe -------------------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">{a.teamEyebrow}</p>
            <h2>{a.teamTitle}</h2>
          </Reveal>

          <div className="team">
            {a.team.map((m, i) => {
              const open = openId === m.id;
              const photo = PORTRAITS[m.id];
              return (
                <Reveal key={m.id} delay={i * 0.07}>
                  <article className={`member${open ? " is-open" : ""}`}>
                    <div className="member__photo">
                      {photo ? (
                        <img src={photo} alt={m.name} />
                      ) : (
                        <span className="member__initials">
                          {m.name
                            .split(" ")
                            .filter((w) => /^[A-ZÉÈ]/.test(w))
                            .slice(0, 2)
                            .map((w) => w[0])
                            .join("")}
                        </span>
                      )}
                    </div>

                    <div className="member__body">
                      <h3>{m.name}</h3>
                      <p className="member__role">{m.role}</p>

                      <button
                        className="member__toggle"
                        onClick={() => setOpenId(open ? null : m.id)}
                        aria-expanded={open}
                      >
                        {open ? <Minus size={15} /> : <Plus size={15} />}
                        {a.readBio}
                      </button>

                      <div className="member__bio" hidden={!open}>
                        <p>{m.bio}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
