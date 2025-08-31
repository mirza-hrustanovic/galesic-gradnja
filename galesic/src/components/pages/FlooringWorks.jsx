import Footer from "../Footer";
import Header from "../Header";
import Contact from "./Contact";
import f1 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/podoradovi/1.jpg";
import f2 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/podoradovi/2.jpg";
import f3 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/podoradovi/3.jpg";
import f4 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/podoradovi/4.jpg";
import f5 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/podoradovi/5.jpg";
import f6 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/podoradovi/6.jpg";
import f7 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/podoradovi/7.jpg";
import f8 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/podoradovi/8.jpg";
import f9 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/podoradovi/9.jpg";

const FlooringWorks = () =>{

    return(
        <>
            <Header/>
            <div className="main">
                    <h1>Podopolagacki radovi</h1>
                    <div className="parallax-container1">
                      <div className="parallax-layer">
                        <img src={f1} alt="Parallax" style={{height: 550}}/>
                      </div>
                    </div>
                    <p>
                        Sve podne obloge moraju biti izvedene kvalitetno - površine moraju biti horizontalne, vertikalne ili zaobljene u zavisnosti od vrste podne obloge ili opisa poda, kutne letvice i drveni ili plastični profili moraju biti dobro pričvršćeni i priljubljeni uz zid.Normativom vremena su obuhvaćeni i svi pomoćni radovi potrebni za kompletno izvođenje svake pozicije, kao i prijenos potrebnog materijala od mjesta uskladištenja do mjesta ugrađivanja, računajući da je materijal uskladišten na udaljenosti do 10 m od objekta. 
                    </p>
                    <img src={f2} className="electro-image" alt="Elektro instalacije" />
                    <p>
                        Blindit i ksilolit se rade na podlozi od betona koju prije polaganja treba dobro očistiti, po potrebi čeličnom četkom i oprati, a zatim natopiti rastvorom magnezijklorida ili solne kiseline, da bi veza sa betonom bila što čvršća.
Blindit se radi kao podloga za ksilolit ili parket.
Na osušeni blindit se nanosi sloj ksilolita koji se izgleta, po izvršenom sušenju premazuje rastvorom boje i magnezijklorida, a zatim, poslije potpunog sušenja, premazuje rastvorom benzina, parketne masti i boje.
                    </p>
                   

                    
                    <img src={f3} className="electro-image" />
                    <img src={f4} className="electro-image" />

                    <p>
                        Parket se polaže na slijepi pod, blindit, beton ili cementnu košuljicu, koji moraju biti ravno izvedeni i suhi.
                        Parket mora biti potpuno ravan i horizontalno izveden, sa minimalnim spojnicama.
                        Svaka druga parketna daščica mora biti čavlima pričvršćena kroz žlijeb za podlogu, a ako se parket postavlja na blindit, mora se prikovati pocinčanim čavlima. Svaku daščicu pored zida treba pričvrstiti čavlima. Ukucavanje čavala u daščice radi se naizmjence. Kod parketa koji se polaže na "friz", tj. sa rubnim pojasom, sve daščice treba pravilno sasjeći i svaku treću daščicu učvrstiti perom u rubni pojas. 
                    </p>
                    <img src={f5} className="electro-image" />
                   <p>
                    Pri polaganju parketa na betonsku podlogu, daščice moraju dobro naleći u asfaltnu masu koja mora ispuniti sve žlijebove.
Novopoloženi parket mora se močiti i strugati.
Zabranjeno je struganje parketa na suho.
                   </p>
                   <img src={f6} className="electro-image" />
                   <img src={f7} className="electro-image" />
                   <p>Fiksiranje tepiha obavlja se pomoću drvene, ugrađene letve i to čavlima na rastojanju od 5 cm, tako da se tepih razastre i zatim fiksira u obodne letve. Nakon zatezanja, oštrim nožem treba odstraniti višak tekstilne obloge po obodu prostorije.  </p>
                   <img src={f8} className="electro-image" />
                   <img src={f9} className="electro-image" />
                  </div>
           <Contact/>
           <Footer/>
        
        </>
    )
}
export default FlooringWorks;