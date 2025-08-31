import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Galery from "./pages/Galery";
import "./styles/Header.css";
import Adaptation from "./pages/Adaptation";
import ElectroInstallation from "./pages/ElectroInstallation";
import PlumbInstallation from "./pages/PlumbInstallation.jsx";
import DryConstrucion from "./pages/DryConstruction.jsx";
import PaintingWallWorks from "./pages/PaintingWallWorks.jsx";
import YardLandscaping from "./pages/YardLandscaping.jsx";
import TilesLying from "./pages/TilesLying.jsx";
import FlooringWorks from "./pages/FlooringWorks.jsx";

function Routers() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/GalesicGradnja/" element={<Home />} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/adaptacije" element={<Adaptation/>}/>
          <Route path="/elektroinstalacije" element={<ElectroInstallation />} />
          <Route path="/vodoinstalacije" element={<PlumbInstallation />} />
          <Route path="/suhagradnja" element={<DryConstrucion />} />
          <Route path="/molerskiradovi" element={<PaintingWallWorks />} />
          <Route path="/uređenjedvorišta" element={<YardLandscaping />} />
          <Route path="/keramicarskiradovi" element={<TilesLying/>} />
          <Route path="/podopolagackiradovi" element={<FlooringWorks />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
