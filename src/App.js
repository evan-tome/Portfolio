import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
    const [dark, setDark] = useState(false);

    return (
        <div className={dark ? "app dark" : "app"}>
            <Navbar dark={dark} setDark={setDark} />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;
