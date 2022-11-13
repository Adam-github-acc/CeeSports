import React, { useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar";
import SportsCards from "./components/SportCards/SportCards";

const App: React.FC = () => {
  const [sport, setSport] = useState('')
  return (
    <div>
      {sport || <SportsCards setSport={setSport}/>}
      {sport && <Navbar />}
      {sport && <Main sport={sport} />}
      {sport && <Footer />}
    </div>
  );
}

export default App;
