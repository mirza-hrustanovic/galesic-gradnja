import Footer from "../Footer";
import Header from "../Header";
import "../styles/ElectroInstalation.css";
import vodo1 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/vodoinstalacije/vodo1.jpg";
import vodo4 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/vodoinstalacije/vodo4.jpg";
import vodo3 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/vodoinstalacije/vodo3.jpg";
import vodo5 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/vodoinstalacije/vodo5.jpg";
import vodo8 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/vodoinstalacije/vodo8.jpg";
import Contact from "./Contact";

const PlumbInstallation = () => {
  return (
    <>
      <Header />
      <div className="main">
        <h1>Vodoinstalaterski radovi</h1>
        <div className="parallax-container1">
          <div className="parallax-layer">
            <img src={vodo3} alt="Parallax" style={{height: 750}}/>
          </div>
        </div>
        <p>
          Vodoinstalacije su sistem raznih uređaja i instalacija koje dovode
          vodu u određena područja. Osim što vodoinstalacijski sistem vodu
          dovodi, on je također pročišćava, te opskrbljuje jedan grad ili regiju
          pitkom vodom.
          <br />
          <br />
          Obzirom da se nerijetko dešavaju određeni problemi sa
          vodoinstalacijama, bitno je znati koji tip vodoinstalacija imamo u
          objektu. Postoje dvije glavne vrste vodoinstalacija: niskotlačne i
          visokotlačne instalacije. U slučaju da voda sporo curi, riječ je o
          niskotlačnim instalacijama. One mogu stvarati probleme, naročito kada
          rade dva uređaja u isto vrijeme, naprimjer mašina za veš, tuš i drugi.
          Sa visokotlačnim instalacijama nema takvih problema, ali treba paziti
          na previsok pritisak koji može izazvati pucanje cijevi. U oba slučaja
          bitno je izabrati odgovarajuće uređaje za određenu vrstu
          vodoinstalacija, u čemu vam može pomoći naša kompanija.
          <br />
          Kada je na redu ispitivanje i testiranje vodoinstalacija stručnjaci u
          obzir uzimaju razne faktore, i pri tome koriste razne alate, poput
          poznatog hidrometra. Ispitivanje vodonepropusnosti te pravilan odvod u
          kanalizaciju su prioritet kod testiranja vodoinstalacija.
        </p>
        <img src={vodo1} className="electro-image" alt="Elektro instalacije" />
        <p>
          U starijim zgradama se preporučuje i ugradnja vodomjera, kako bi se
          spriječilo prekomjerno i nepravedno plaćanje troškova vode. Bitno je
          napomenuti da je pravilno postavljanje pločica ispod kojih se nalaze
          vodoinstalacije ključno, jer u slučaju nepravilnog postavljanja dolazi
          do dodatnih troškova popravaka vodoinstalacija i novih keramičkih
          radova.
        </p>
        <img
          src={vodo4}
          className="electro-image"
          alt="zvono"
          style={{
            height: 750,
          }}
        />
        <img
          src={vodo8}
          className="electro-image"
          style={{
            height: 750,
          }}
        />

        <p>
          Uredne vodoinstalacije su važne i bitno je njihovo održavanje, a uz to
          i godišnji servis. Odvodi su jedno od najčešće pogođenih dijelova. Ako
          primijetite da vodo sporo odlazi ili se nakuplja, pokušajte odčepiti
          odvod profesionalnim sredstvima za odčepljavanje odvoda, u slučaju da
          ne bude uspješno, obavezno kontaktirajte servis.
        </p>
        <img src={vodo5} className="electro-image" />
        <p>
          Do začepljenja odvoda uopšte ne mora ni doći ako se pravilno brinemo o
          svojim cijevima. U odvod se ne smiju izlijevati masnoće, poput starog
          ulja, talog od kafe, nerazgradive vlažne maramice i što manje dlaka,
          ostataka hrane i sapuna. Preporučuje se preventivno djelovanje time
          što ćete s vremena na vrijeme u odvod ubaciti malo sode bikarbone i
          ocata, potom isprati vrućom vodom. Na ovaj način omogućava se lakši
          prolaz nakupljenim tvarima koje se inače talože po cijevima. Ako ste u
          procesu gradnje ili jednostavno želite unaprijediti i popraviti svoje
          vodoinstalacije, preporučujemo vam da nas kontaktirate i mi ćemo vam
          pružiti brzu i profesionalnu uslugu
        </p>
       
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default PlumbInstallation;
