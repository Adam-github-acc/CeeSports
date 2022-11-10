import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar";
import SportsCards from "./components/SportCards/SportCards";

const App: React.FC = () => {
  return (
    <div>
      <SportsCards />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
