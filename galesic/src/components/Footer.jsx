
import { Link } from "react-router-dom";
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
          <p>Email: info@galesicgradnja.ba</p>
          <p>Telefon: +387 61 123 456</p>
          <p>Adresa: Tuzla, BiH</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Developed and designed by <a  href = "https://www.linkedin.com/in/mirza-hrustanovi%C4%87-07a3a3223/"
        target="_blank"
      rel="noopener noreferrer">Mirza</a>
       
        
          
          
          </p>
      </div>
    </footer>
  );
};

export default Footer;
