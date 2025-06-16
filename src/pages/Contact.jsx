import "./style/Contact.css";

function Contact() {
  return (
    <div className="contact-container fade-in">
      <h2>Contactez-moi</h2>
      <form className="contact-form">
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
