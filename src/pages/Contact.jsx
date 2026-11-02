import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../content";
import "./style/Contact.css";

function Contact() {
  const form = useRef();
  const sending = useRef(false);
  const [status, setStatus] = useState("idle");
  const sendEmail = async (event) => {
    event.preventDefault();
    if (sending.current) return;
    sending.current = true;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        "portfolio",
        "portfolio_template",
        form.current,
        "iubgt8fLgwQFOPP6e",
      );
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
    }
  };
  return (
    <section className="contact-container page-width page-section fade-in">
      <p className="eyebrow">Contact</p>
      <h1>
        Parlons de votre
        <br />
        prochaine application.
      </h1>
      <div className="contact-layout">
        <div>
          <p className="lead">
            Vous recherchez un développeur Java, .NET ou Fullstack ? Je suis
            disponible pour échanger sur votre équipe et vos projets.
          </p>
          <p>Basé à Amiens · Mobile en Hauts-de-France</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="actions">
            <a className="button secondary" href={profile.cv} download>
              Télécharger mon CV
            </a>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              Mon GitHub ↗
            </a>
          </div>
        </div>
        <div>
          {status === "success" ? (
            <p className="confirmation-message" role="status">
              Merci pour votre message ! Je vous répondrai dès que possible.
            </p>
          ) : (
            <form
              className="contact-form"
              ref={form}
              onSubmit={sendEmail}
              aria-label="Envoyer un message"
            >
              <div>
                <label htmlFor="contact-name">Votre nom</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={120}
                  disabled={status === "sending"}
                />
              </div>
              <div>
                <label htmlFor="contact-email">Votre adresse email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  disabled={status === "sending"}
                />
              </div>
              <div>
                <label htmlFor="contact-message">Votre message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  maxLength={5000}
                  disabled={status === "sending"}
                />
              </div>
              {status === "error" && (
                <p className="error-message" role="alert">
                  L’envoi a échoué. Vous pouvez réessayer ou me contacter
                  directement par email.
                </p>
              )}
              <button
                className="button"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Envoi en cours…"
                  : "Envoyer le message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
export default Contact;
