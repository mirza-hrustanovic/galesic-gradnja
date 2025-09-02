import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-section">
          <h3>Galešić Gradnja d.o.o.</h3>
          <p>
            Vaš pouzdan partner za sve građevinske radove – unutrašnje i vanjske.
          </p>
        </div>

        <div className="footer-section">
          <h4>Brzi linkovi</h4>
          <ul>
            <li><Link to="#početna">Početna</Link></li>
            <li><Link to="#o-nama">O nama</Link></li>
            <li><Link to="#services">Usluge</Link></li>
            <li><Link to="#galerija">Galerija</Link></li>
            <li><Link to="#kontakt">Kontakt</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Kontakt</h4>
          <p><Mail size={16} /> elektrotettnang@gmail.com</p>
          <p><Phone size={16} /> +387603015321</p>
          <p><MapPin size={16} /> Momanovo 66, Tuzla Grad 75000</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Developed by{" "}
          <a
            href="https://www.facebook.com/mirza.hrustanovic.9?locale=bs_BH"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mirza
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
