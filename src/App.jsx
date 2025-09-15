
import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";

import { LoadingScreen } from "./components/sections/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Footer } from "./components/footer";
import { MainLayout } from "./components/sections/mainLayout";
import { Magazin } from "./components/sections/magazin";
import { VisualIdentity } from "./components/sections/visualIdentity";
import { Posters } from "./components/sections/posters";
import { Kitchen } from "./components/sections/kitchen";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [firstLoadDone, setFirstLoadDone] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    if (!firstLoadDone && isLoaded) {
      setFirstLoadDone(true);
    }
  }, [isLoaded, firstLoadDone]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          firstLoadDone ? "opacity-100" : "opacity-0"
        } bg-slate-50`}
      >
        <Router>
          {/* Navbar and MobileMenu always visible */}
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

         
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/magazin" element={<Magazin />} />
            <Route path="/visualIdentity" element={<VisualIdentity />} />
            <Route path="/posters" element={<Posters />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="*" element={<MainLayout />} /> {/* fallback route */}
          </Routes>

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
