import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../Projects/Projects";
import MyResume from "../MyResume/MyResume";
import AboutMe from "../AboutMe/AboutMe";
import headshot from "../../Images/portfolioheadshot.jpg";
import "./App.css";

function App() {
    return (
        <main className="App">
            <NavBar />
            <div className="main-card">
                <div id="headshot-and-contact-container">
                    <div id="headshot-container">
                        <img
                            id="headshot"
                            src={headshot}
                            alt="Luke's Headshot"
                        />
                    </div>
                    <div id="contact-container">
                        <ul>
                            <li>Email</li>
                            <li>Phone Number</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className="route-card">
                    <Routes>
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/resume" element={<MyResume />} />
                        <Route path="/about" element={<AboutMe />} />
                    </Routes>
                </div>
            </div>
        </main>
    );
}

export default App;
