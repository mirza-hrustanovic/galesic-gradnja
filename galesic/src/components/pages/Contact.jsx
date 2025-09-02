import { FaViber, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Lijeva strana - info */}
      <div className="contact-info">
        <h2>Kontaktirajte nas</h2>

        <a href="mailto:elektrotettnang@gmail.com" className="contact-link">
          <FaEnvelope /> elektrotettnang@gmail.com
        </a>

        <a href="tel:+38761123456" className="contact-link">
          <FaPhone /> +387603015321
        </a>

        <a
          href="viber://chat?number=%2B38761123456"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaViber /> Viber
        </a>

        <a
          href="https://wa.me/38761123456"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> WhatsApp
        </a>

        <a
          href="https://www.google.com/maps/place/Momanovo+66,+Tuzla+Grad+75000"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMapMarkerAlt /> Momanovo 66, Tuzla
        </a>
      </div>
     
      
      

      {/* Desna strana - mapa */}
     <div className="contact-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.3456095724066!2d18.678978015535486!3d44.53914237910101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475eadc4f07b6f07%3A0xa8d66d7b67a37df7!2sMomanovo%2066%2C%20Tuzla%2075000!5e0!3m2!1sbs!2sba!4v1693587654321!5m2!1sbs!2sba"
    width="600"
    height="400"
    style={{ border: "3px solid #ddd", borderRadius: "20px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google mapa - Momanovo 66 Tuzla"
  ></iframe>
</div>
    </div>
  );
};

export default Contact;
