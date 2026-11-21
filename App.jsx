import React, { useState } from "react";
import Header from "./components/navbar/Header";
import Footer from "./components/navbar/Footer";
import Home from "./components/pages/home";
import About from "./components/pages/about";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <Header activePage={activePage} onNavigate={setActivePage} />
      {activePage === "home" ? <Home /> : <About />}
      <Footer />
    </>
  );
}

export default App;
