import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Headshot from "../Headshot/Headshot";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import MyResume from "../MyResume/MyResume";
import AboutMe from "../AboutMe/AboutMe";
import "./App.css";

function App() {
    return (
        <main className="App">
            <NavBar />
            <div className="main-card">
                <div id="headshot-and-contact-container">
                    <Headshot />
                    <Contact />
                </div>
                <div className="route-card">
                    <Routes>
                        <Route path="/" element={<Projects />} />
                        <Route path="/resume" element={<MyResume />} />
                        <Route path="/about" element={<AboutMe />} />
                    </Routes>
                </div>
            </div>
        </main>
    );
}

export default App;
