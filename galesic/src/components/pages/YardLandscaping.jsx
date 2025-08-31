import Footer from "../Footer";
import Header from "../Header";
import Contact from "./Contact";
import yl1 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/uređenjevrta/1.jpg";
import yl2 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/uređenjevrta/2.jpg";
import yl3 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/uređenjevrta/5.jpg";
import yl4 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/uređenjevrta/6.jpg";
import yl5 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/uređenjevrta/8.jpg";
import yl6 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/uređenjevrta/9.jpg";
import yl7 from "/Users/PC/OneDrive/Desktop/Muhinastranica/galesicGradnja/galesic/src/assets/Images/uređenjevrta/4.jpg";

const YardLandscaping = () =>{

    return(
        <>
            <Header/>
            <div className="main">
                    <h1>Uređenje dvorišta i sređivanje okućnice</h1>
                    <div className="parallax-container1">
                      <div className="parallax-layer">
                        <img src={yl1} alt="Parallax" style={{height:650}}/>
                      </div>
                    </div>
                    <p>
                        Većina današnjih investitora se odlučuje na uređenje dvorišta i okoline u dužem periodu ili u intervalima, pa se zato oko mnogih novogradnji dugo nakon što su svi građevinski i zanatski radovi praktično završeni, zatiče nered. Kao što proces izgradnje objekta zahteva precizan koncept i okolini kuće je potreban jasan i sveobuhvatan plan ako hoćete da se sve sredi u najkraćem roku. Cjelovito idejno riješenje spoljnog uređenja okoline je stoga presudno za zadovoljavajući rezultat.
                    </p>
                    <img src={yl2} className="electro-image" alt="Elektro instalacije" />
                    <p>
                        Sređivanje okućnice uključuje popločavanje staza i prilaznog puta, terase ili verande, stepenica, postavljanje vrtne ograde, pergole ili ljetne kuhinje i u posljednjoj fazi, naravno, uređenje zelenih površina i bašte.                    </p>
                   

                    
                    <img src={yl3} className="electro-image" />
                    <img src={yl4} className="electro-image" />

                    <p>
                        Osnova za sveobuhvatno uređenje okoline kuće je dobro postavljen i razrađen koncept i plan, na osnovu kojih se sve završava relativno brzo, čak i istovremeno sa završetkom izgradnje kuće. U idejnom nacrtu, kojim započinjete sređivanje, potrebno je od samog početka uzeti u obzir povezanost unutrašnjosti kuće i njene spoljašnjosti. Treba se usredsrediti na važne veze između kuće i dvorišta, čime će se doći do sveobuhvatnog i kvalitetnog uređenja prostora u kome ćete moći neometano da se krećete i uživate. Okućnica ni u kom slučaju nije nešto potpuno odvojeno od kuće, pa prema tome ona treba da slijedi logiku i dizajn kuće.
                    </p>
                    <img src={yl5} className="electro-image" />
                   <p>
                    Rekli bismo da samo sveobuhvatno i jednovremeno uređenje okoline donosi finansijsku i vremensku uštedu. Zahvaljujući pažljivom planiranju pejzaža, može se raditi kontinuirano po fazama i dijelovima, odnosno, jedan posao se može nastavljati na drugi. Uređenje kuće zahtijeva planiranje potrebnih iskopa, rezervoara za vodu, osvjetljenje bašte, eventualno podno grijanje garaže i tako dalje. Ovakvim načinom planiranja i rada, izbjeći ćete koliko nepotrebne ili suvišne radove koliko i veće izdatke. Naravno, uvijek je moguće da se pojave neki neplanirani problemi ili dodatni radovi, međutim, ono najvažnije - vrsta i raspored instalacija se uvijek može predvidijeti i time držati pod kontrolom.
                   </p>
                   <img src={yl6} className="electro-image" />
                   <img src={yl7} className="electro-image" />
                  </div>
           <Contact/>
           <Footer/>
        
        </>
    )
}
export default YardLandscaping;