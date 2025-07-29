import  {useState} from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:elektrotettnang@gmail.com?subject=Kontakt sa stranice&body=Ime: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APoruka: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      <h2>Kontaktirajte nas</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Ime i prezime</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email adresa</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label>Poruka</label>
        <textarea
          name="message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
};

export default Contact;
