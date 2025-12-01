import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import SectionView from "./ui/SectionView.jsx";
import { useState } from "react";

export default function App() {
  const [active, setActive] = useState("home");

  return (
    <>
      <Navbar active={active} setActive={setActive} />

      <SectionView className={"pt-5"} id="home" setActive={setActive}>
        <Hero />
      </SectionView>

      <SectionView className={"pt-5"} id="about" setActive={setActive}>
        <About />
      </SectionView>

      <SectionView className={"pt-5"} id="portfolio" setActive={setActive}>
        <Portfolio />
      </SectionView>

      <SectionView className={"pt-5"} id="contact" setActive={setActive}>
        <Contact />
      </SectionView>
      <SectionView className={"pt-5"} id="footer" setActive={setActive}>
        <Footer />
      </SectionView>
    </>
  );
}
