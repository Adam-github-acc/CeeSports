import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
