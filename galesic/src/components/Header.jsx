import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhoneVolume, faEnvelope,faBars,faTimes } from "@fortawesome/free-solid-svg-icons";
import Flag from "react-flagkit";
import logo from "../assets/Images/logo/muhasLogo4.jpg";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import "./styles/mobileResponsive/Header-Mobile.css";
import { useState } from "react";
import { languages } from "./languages";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("bs");
  

  const lang = languages[currentLanguage];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="main-header">
      <div className="information">
        <div className="location">
          <FontAwesomeIcon icon={faLocationDot} size="2xl" />
          <h3>Slavinovickog odreda b.b.</h3>
        </div>
        <div className="number">
          <FontAwesomeIcon icon={faPhoneVolume} size="2xl" />
          <h3>+38762532542</h3>
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          <h3>elektrotettnang@gmail.com</h3>
        </div>
        <div className="flags">
          <Flag country="BA" role="button" onClick={() => setCurrentLanguage("bs")} />
          <Flag country="DE" role="button" onClick={() => setCurrentLanguage("de")} />
          <Flag country="GB" role="button" onClick={() => setCurrentLanguage("en")} />
        </div>
      </div>

      <nav className="main-nav">
        <div className="main-header__logo">
          <a href="/">
            <img src={logo} alt="logo" height={80} width={90} />
          </a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(prev => !prev)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2x" />
        </button>

        <ul className={`main-nav__items 
          ${menuOpen ? "open" : ""}`}>
          <li className="main-nav__item" onClick={closeMenu}>
            <a href="/">{lang.navbar.home}</a>
          </li>
          <li className="main-nav__item" onClick={closeMenu}>
            <Link to="#o-nama">{lang.navbar.about}</Link>
          </li>
          <li className="main-nav__item">
            <div className="dropdown">
              <button className="dropbtn"><Link to="#nase-usluge" />{lang.navbar.naseUsluge}</button>
              <div className="dropdown-content">
                <Link to="/adaptacije" onClick={closeMenu}>Adaptacije</Link>
                <a href="#" onClick={closeMenu}>Elektroinstalaterski radovi</a>
                <a href="#" onClick={closeMenu}>Vodoinstalaterski radovi</a>
                <a href="#" onClick={closeMenu}>Suha gradnja</a>
                <a href="#" onClick={closeMenu}>Molerski radovi</a>
                <a href="#" onClick={closeMenu}>Uređenje vrta</a>
              </div>
            </div>
          </li>
          <li className="main-nav__item" onClick={closeMenu}>
            <Link to="#galerija">{lang.navbar.galerija}</Link>
          </li>
          <li className="main-nav__item" onClick={closeMenu}>
            <Link to="#kontakt">{lang.navbar.contact}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
