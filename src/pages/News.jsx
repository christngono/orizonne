import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, Globe2, LineChart, Send, Newspaper } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useLang } from "../i18n/LanguageContext";
import "./News.css";

const CAT_ICONS = { markets: LineChart, intl: Globe2, corp: Building2 };

export default function News() {
  const { t } = useLang();
  const n = t.news;

  const [active, setActive] = useState("all");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  /** Aplatit les sous-rubriques en une liste filtrable de « hubs de veille ». */
  const topics = useMemo(
    () =>
      n.categories.flatMap((cat) =>
        n.subtopics[cat.id].map((label) => ({
          id: `${cat.id}-${label}`,
          label,
          catId: cat.id,
          catLabel: cat.label,
        })),
      ),
    [n],
  );

  const visible = active === "all" ? topics : topics.filter((x) => x.catId === active);

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Branchement d'un service d'emailing (Mailchimp, Brevo…) à faire ici.
    setSubscribed(true);
    setEmail("");
  };

  return (
    <>
      <PageHero eyebrow={n.hero.eyebrow} title={n.hero.title} text={n.hero.text} />

      <section className="section">
        <div className="container">
          {/* Filtres ------------------------------------------------------ */}
          <Reveal className="filters">
            <button
              className={`filter${active === "all" ? " is-active" : ""}`}
              onClick={() => setActive("all")}
            >
              {n.filterAll}
            </button>
            {n.categories.map((c) => {
              const Ico = CAT_ICONS[c.id];
              return (
                <button
                  key={c.id}
                  className={`filter${active === c.id ? " is-active" : ""}`}
                  onClick={() => setActive(c.id)}
                >
                  <Ico size={15} />
                  {c.label}
                </button>
              );
            })}
          </Reveal>

          {/* Hubs de veille ------------------------------------------------ */}
          <motion.div className="topics" layout>
            <AnimatePresence mode="popLayout">
              {visible.map((topic) => {
                const Ico = CAT_ICONS[topic.catId];
                return (
                  <motion.article
                    key={topic.id}
                    className="topic"
                    layout
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.32 }}
                  >
                    <span className={`topic__cat topic__cat--${topic.catId}`}>
                      <Ico size={13} />
                      {topic.catLabel}
                    </span>
                    <h3>{topic.label}</h3>
                    <span className="link-arrow">
                      {t.common.readMore}
                      <ArrowRight size={15} />
                    </span>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Newsletter -------------------------------------------------------- */}
      <section className="section section--deep">
        <div className="container newsletter">
          <Reveal className="newsletter__body">
            <div className="newsletter__icon">
              <Newspaper size={26} />
            </div>
            <h2>{n.emptyTitle}</h2>
            <p>{n.emptyText}</p>
          </Reveal>

          <Reveal delay={0.12} className="newsletter__form-wrap">
            {subscribed ? (
              <p className="newsletter__ok">{n.subscribeOk}</p>
            ) : (
              <form className="newsletter__form" onSubmit={submit}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={n.subscribePlaceholder}
                  aria-label={n.subscribePlaceholder}
                />
                <button type="submit" className="btn btn--primary">
                  {n.subscribe}
                  <Send size={16} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
