import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./style/Contact.css";

function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("portfolio", "portfolio_template", form.current, "iubgt8fLgwQFOPP6e")
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container fade-in">
      <h2>Contactez-moi</h2>
      {submitted ? (
        <p className="confirmation-message">Merci pour votre message ! ✅</p>
      ) : (
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Votre nom" required />
          <input type="email" name="email" placeholder="Votre email" required />
          <textarea name="message" placeholder="Votre message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
