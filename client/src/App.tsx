import React from "react";
import Footer from "./components/Footer";
import MatchList from "./components/MatchList";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <MatchList />
      <Footer />
    </div>
  );
}

export default App;
