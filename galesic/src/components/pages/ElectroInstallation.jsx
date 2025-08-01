import Footer from "../Footer";
import Header from "../Header";
import Contact from "./Contact";
import "../styles/ElectroInstalation.css";
import paralaxImage1 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/elektroinstalacije/viber_image_2025-07-24_11-45-04-718.jpg";
import electroimage from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/elektroinstalacije/premium_photo-1661929137248-2544fd28de13.avif";
import electroimage1 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/elektroinstalacije/viber_image_2025-07-24_11-45-04-588.jpg";
import electroimage2 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/elektroinstalacije/viber_image_2025-07-24_11-45-04-616.jpg";
import electroimage3 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/elektroinstalacije/fabian-kleiser-SdjlUCZk9Hc-unsplash.jpg";
import electroimage4 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/elektroinstalacije/mike-winkler-mq0IFk8FChs-unsplash.jpg";



const ElectroInstallation = () => {
    return (
        <>
        <Header />
        <div className="main">
            <h1>Elektro Instalacije</h1>
            <div className="parallax-container1">
          <div className="parallax-layer">
            <img src={paralaxImage1} alt="Parallax" />
  </div>
        </div>
        <p>Električne instalacije su u današnje doba važan dio urbane životne sredine.One omogućavaju pristup vodi za piće, odvod otpadne vode, rasvjetu, grijanje, hlađenje te rad raznovrsnih električnih aparata i uređaja za domaćinstvo i industriju.
            Stručno urađen i dovoljno jak instalacioni sistem omogućava neometano funkcionisanje života u zajednici.Elektroinstalacije su dio tog ogromnog sistema te, kao i ostali poslovi, zahtijevaju visoku osposobljenost i iskustvo.
            Ipak, nije loše da kao neko ko ima potrebu za takvim stvarima, znate ponešto o osnovnim pojmovima i tehnikama, jer ćete se tako lakše dogovarati i pogađati sa projektantom i izvođačem radova.
            <br/>
            <br/>
            Najmanje na svakih 10 godina u kući ili stanu treba provjeriti stanje elektroinstalacija, uređaja i opreme, odnosno, izmjeriti napon i provodljivost mreže.Na taj način, električar koji vrši mjerenje, može da ustanovi ima li kakvih problema u samoj mreži ili s aparatima.
            Te tačke, ako se ne otkriju pravovremeno, mogu da dovedu do kratkog spoja i električnog udara, ali i požara.
            <br/>
            
             Ako instalacije održavate redovno i prema uputstvima (mjerenja, popravke, zamjene osigurača i slično) neće dolaziti do prekida napajanja koji, čak i kada nisu u u pitanju velike nepogode, mogu oštetiti električne uređaje.
        </p>
        <img src={electroimage} className="electro-image" alt="Elektro instalacije"/>
        <p>Uvijek je pametnije prije samog izvođenja radova prvo napraviti detaljan plan; u ovom slučaju, elektroinženjer ili iskusan električar mogu napraviti odgovarajuće nacrte za kuću ili stan. Niskonaponska instalacija služi za rasvetu i aparate za domaćinstvo, dok informaciona služi za telefone, kompjutere, klima-uređaje, interfone, protivpožarnu i protivprovalnu zaštitu. Projektovanje i ugradnja elektroinstalacija zahteva stručnu osposobljenost i iskusnog majstora. Savetujemo da se ovakvog posla ni u kom slučaju ne prihvatate sami. Pri projektovanju i ugradnji se striktno moraju poštovati mnogobrojna zakonska i pravila struke, kako bi ceo sistem bio siguran i bezbedan za rukovanje, a i lako dostupan u svakoj situaciji.  </p>
        <img src={electroimage1} className="electro-image" alt="zvono" style={{
            height:750
            }}/>
            <img src={electroimage2} className="electro-image" style={{
            height:750
            }}/>
             
            <p>U elektroinstalacijama za domaćinstva može doći do povećanja otpora u provodnicima, a shodno tome i do opadanja njihove izolativnosti. Pri razvođenju novih instalacija može doći do grešaka u spajanju vodova. Da bi se sprečile štete od strujnog udara koji može da dovede i do požara, vrlo je važna dobra zaštita. Utičnice u kuhinji zato moraju biti udaljene najmanje 1 m po visini i 50 cm po širini od vodovodnih instalacija isto kao i u kupatilu.</p>
            <img src={electroimage3} className="electro-image" />
            <p>Ako utičnice imaju zaštitne poklopce ili je neki uređaj stalno uključen u njih (na primjer, frižider, mašina za sudove i slično), taj razmak može biti smanjen na 30 cm. U kupatilu i drugim prostorijama s mokrim čvorom gdje je opasnost od strujnog udara uvijek veća, svi aparati moraju se napajati preko FED sklopki za diferencijalnu struju od 0,03 A ili preko zaštitnih sklopki takođe za diferencijalnu struju od 0,03 A. Takve sklopke uvijek moraju biti na spoljnom zidu prostorije. Preporučljiva je i zaštita utičnica i rasvijete u dječjim i spavaćim sobama, kao i u dnevnom boravku.</p>
            <img src={electroimage4} className="electro-image" style={{
            height:750
            }}/>

        </div>
        <Contact />
        <Footer />
        </>
    );
};

export default ElectroInstallation;