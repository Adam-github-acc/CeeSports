import React, { useState } from "react";
import Footer from "./bar/Footer";
import Main from "./components/Main/Main";
import Navbar from "./bar/Navbar";
import SportsCards from "./components/SportCards/SportCards";
import './App.css'

const App: React.FC = () => {
  const [sport, setSport] = useState('')
  return (
    <div>
      {Boolean(sport) || <SportsCards setSport={setSport} />}
      {sport && <Navbar setSport={setSport} />}
      {sport && <Main sport={sport} />}
      {sport && <Footer />}
    </div>
  );
}

export default App;
