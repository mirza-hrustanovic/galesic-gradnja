import Footer from "../Footer";
import Header from "../Header";
import Contact from "./Contact";
import mol1 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/molerskiradovi/mol2.jpg";
import mol2 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/molerskiradovi/5.jpg";
import mol3 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/molerskiradovi/6.jpg";
import mol4 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/molerskiradovi/7.jpg";
import mol5 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/molerskiradovi/8.jpg";
import mol6 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/molerskiradovi/mol1.jpg";

const PaintingWallWorks = () =>{

    return(
        <>
            <Header/>
            <div className="main">
                    <h1>Molerski radovi</h1>
                    <div className="parallax-container1">
                      <div className="parallax-layer">
                        <img src={mol1} alt="Parallax" style={{height: 1250}}/>
                      </div>
                    </div>
                    <p>
                        Molerski radovi predstavljaju niz usluga i faza iz kojih se sastoji krečenje i postavljanje tapeta na zidne i plafonske površine. 

U molerske radove spadaju sve aktivnosti i praktični i tehnički procesi od zaštite nameštaja i podova, pripreme zidova, preko krečenja i nanošenja boje do čišćenja prostora nakon završenog posla. 

Stručno gledano, molerski radovi predstavljaju važan elemenat završnih radova u građevinarstvu i dizajnu enterijera i eksterijera.
                    </p>
                    <img src={mol6} className="electro-image" alt="Elektro instalacije" />
                    <p>
                        Sa razvojem i primenom modernih tehnologija u bojama za krečenje, sve češće se pod molerskim radovima podrazumevaju zapravo molersko-dekorativni radovi. Pored nanošenja određene boje, zidne površine mogu se dekorisati i dekorativnim bojama i tehnikama. To znači da na zidu možete imati veoma vernu imitaciju prirodnog kamena, mermera, kože, betona i sl.
                    </p>
                   

                    
                    <img src={mol2} className="electro-image" />
                    <img src={mol3} className="electro-image" />

                    <p>
                        Dobra priprema i zaštita prostora poštedeće vas dodatnih sati čišćenja i naravno, sprečiti oštećenja i fleke na nameštaju i podovima.

Najbolje je da se prostor koji se kreči potpuno isprazni, ali to nekada nije moguće. Niko ne želi mrlje od boje na novom parketu, prozorima ili nameštaju.

Pa, umesto da ih nakon završenih radova satima skidate fleke ili plaćate servis za čišćenje, dobra priprema i zaštita će uštedeti vreme i novac.
                    </p>
                    <img src={mol4} className="electro-image" />
                   <p>
                    Podovi, nameštaj, vrata, prozori i delovi koji se ne kreče prekrivaju se zaštitnom najlonskom folijom i sve se dodatno štiti lepljivom krep trakom. Na taj način sprečava se i prodorianje prašine, koja je nemonovan pratilac krečenja i adaptacija.

Najpraktičniji način zaštite stvari je da se pomere u sredinu prostorije i prekriju najlonom, tj. zaštitnom folijom za prekrivanje.

Kada se sve dobro zaštiti, prostor je spreman za sledeću fazu molerskih radova – pripremu zidnih i plafonskih površina za gletovanje i bojenje.
                   </p>
                   <img src={mol5} className="electro-image" />
                  </div>
           <Contact/>
           <Footer/>
        
        </>
    )
}
export default PaintingWallWorks;