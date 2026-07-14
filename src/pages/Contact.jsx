import { useState } from "react";
import { Clock, FileUp, Mail, MapPin, Phone, Send } from "lucide-react";
import { Facebook, Linkedin, Youtube } from "../components/SocialIcons";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { useLang } from "../i18n/LanguageContext";
import { COMPANY } from "../i18n/content";
import "./Contact.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: c.subjects[0],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((err) => ({ ...err, [k]: undefined }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = c.required;
    if (!form.email.trim()) err.email = c.required;
    else if (!EMAIL_RE.test(form.email)) err.email = c.invalidEmail;
    if (!form.message.trim()) err.message = c.required;
    return err;
  };

  const submit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length) return;

    setStatus("sending");

    // Aucun back-end n'est branché : on ouvre le client mail de l'utilisateur.
    // Pour un envoi serveur, brancher ici une route /api/contact ou un service
    // type Formspree / Resend / EmailJS.
    const body = [
      `${c.fields.name} : ${form.name}`,
      `${c.fields.email} : ${form.email}`,
      `${c.fields.phone} : ${form.phone || "—"}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("sent");
    setForm({ name: "", email: "", phone: "", subject: c.subjects[0], message: "" });
  };

  return (
    <>
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} text={c.hero.text} />

      <section className="section">
        <div className="container contact">
          {/* Coordonnées ---------------------------------------------------- */}
          <Reveal className="contact__aside">
            <h2>{c.infoTitle}</h2>

            <ul className="info-list">
              <li>
                <span className="info-list__icon">
                  <MapPin size={20} />
                </span>
                <div>
                  <strong>{c.addressLabel}</strong>
                  <span>{COMPANY.address}</span>
                </div>
              </li>
              <li>
                <span className="info-list__icon">
                  <Phone size={20} />
                </span>
                <div>
                  <strong>{c.phoneLabel}</strong>
                  <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
                </div>
              </li>
              <li>
                <span className="info-list__icon">
                  <Mail size={20} />
                </span>
                <div>
                  <strong>{c.emailLabel}</strong>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
              </li>
              <li>
                <span className="info-list__icon">
                  <Clock size={20} />
                </span>
                <div>
                  <strong>{c.hoursLabel}</strong>
                  <span>{c.hours}</span>
                </div>
              </li>
            </ul>

            <div className="contact__socials">
              <strong>{c.followLabel}</strong>
              <div>
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

            {/* Dépôt de CV -------------------------------------------------- */}
            <div className="cv-card">
              <FileUp size={24} />
              <h3>{c.cvTitle}</h3>
              <p>{c.cvText}</p>
              <a
                href={`mailto:${COMPANY.emailRh}?subject=${encodeURIComponent(c.cvTitle)}`}
                className="btn btn--outline"
              >
                {c.cvCta}
              </a>
            </div>
          </Reveal>

          {/* Formulaire ------------------------------------------------------- */}
          <Reveal delay={0.12} className="contact__form-wrap">
            <h2>{c.formTitle}</h2>
            <p className="contact__form-text">{c.formText}</p>

            {status === "sent" && <p className="form-success">{c.success}</p>}

            <form className="form" onSubmit={submit} noValidate>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="name">{c.fields.name} *</label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={update("name")}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <small>{errors.name}</small>}
                </div>

                <div className="field">
                  <label htmlFor="email">{c.fields.email} *</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <small>{errors.email}</small>}
                </div>
              </div>

              <div className="form__row">
                <div className="field">
                  <label htmlFor="phone">{c.fields.phone}</label>
                  <input id="phone" type="tel" value={form.phone} onChange={update("phone")} />
                </div>

                <div className="field">
                  <label htmlFor="subject">{c.fields.subject}</label>
                  <select id="subject" value={form.subject} onChange={update("subject")}>
                    {c.subjects.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">{c.fields.message} *</label>
                <textarea
                  id="message"
                  rows={6}
                  value={form.message}
                  onChange={update("message")}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <small>{errors.message}</small>}
              </div>

              <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
                {status === "sending" ? c.sending : c.send}
                <Send size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Carte -------------------------------------------------------------- */}
      <section className="map-sec">
        <h2 className="sr-only">{c.mapTitle}</h2>
        <iframe
          title={c.mapTitle}
          src={`https://www.google.com/maps?q=${COMPANY.mapsQuery}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
