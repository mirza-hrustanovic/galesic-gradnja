import Footer from "../Footer";
import Header from "../Header";
import Contact from "./Contact";
import suh1 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/suhagradnja/1.jpg";
import suh2 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/suhagradnja/2.jpg";
import suh3 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/suhagradnja/3.jpg";
import suh4 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/suhagradnja/4.jpg";


const DryConstrucion = () => {
    return (
        <>
            <Header/>
             <div className="main">
                    <h1>Suha gradnja</h1>
                    <div className="parallax-container1">
                      <div className="parallax-layer">
                        <img src={suh3} alt="Parallax" style={{height: 750}}/>
                      </div>
                    </div>
                    <p>
                     Suha gradnja je termin koji se koristi za posebnu metodu gradnje interijera, odnosno za unutarnje uređenje prostora, čiji je temelj korištenje industrijski pretgotovljenih sustava gradnje. Stoga ne čudi da je postala sinonim za brzu, sigurnu i kvalitetu gradnju, koja probija uobičajene rokove adaptacije stana. Metodom suhe gradnje izvode se pregradni zidovi, zidne obloge, stropovi, podovi, dekorativni elementi...
                    <br />
                     Ovaj princip gradnje pruža niz prednosti, posebice na mjestima gdje je moguća pojava statičkih problema. Manja debljina i težina pregradnih zidova omogućuje jednostavnu izradu i montažu. Osim toga, nije potrebno štemanje, odnosno naknadno razbijanje zidova za polaganje instalacijskih vodova, s obzirom na to da se sve žice i cijevi polažu za vrijeme gradnje u šupljinu zida ili stropa gdje ostaju nevidljive.

                    
                     
                    </p>
                    <img src={suh2} className="electro-image" alt="Elektro instalacije" />
                    <p>
                      Suha gradnja osigurava čistoću i ne rezultira problematičnim građevinskim otpadom. Zbog suhog postupka izrade, sve se površine mogu obrađivati bez daljnjeg čekanja. Budući da nam je danas vrijeme veoma dragocjeno, izreka “vrijeme je novac” kod građevinskih radova u suhoj gradnji u potpunosti opravdava svoj smisao.
                      ips  je jedan od najstarijih građevinskih materijala u čovječanstvu. Neovisno o stilovima i trendovima u arhitekturi, kroz stoljeća je zadržao svojstvo inovativnog građevinskog materijala s mnogim mogućnostima primjene.

Danas gips uglavnom nalazimo u materijalima namijenjenim za završnu obradu unutrašnjih prostora: u gipsanim pločama i unutarnjim žbukama.
                        Statika i dimenzije: mala debljina i težina pregradnih zidova, nema problema kod statike objekta.
                    </p>
                   

                    
                    <img src={suh1} className="electro-image" />
                    <p>
                     Gips je vrlo povoljan materijal za zdravlje čovjeka. Zahvaljujući higroskopnim svojstvima, gips je materija koja iz svoje okoline može vezati vodu tj. on upija višak vlage u unutrašnjosti i ispušta ju kada zrak postane previše suh.

Na taj način regulira koncentraciju vlage u zraku koja postaje najpovoljnija za ljude. Stoga u unutrašnjim prostorima obrađenim gipsom vlada optimalna klima.

Pored svega, riječ je o potpuno prirodnom materijalu koji posjeduje pH vrijednost ljudske kože te je bezmirisan i bezopasan. Ekološki je besprijekoran, a s biološkog gledišta potpuno neškodljiv.
                    </p>
                    <img src={suh4} className="electro-image" />
                   
                  </div>
            <Contact/>
            <Footer/>
        
        </>
    );
};

export default DryConstrucion;