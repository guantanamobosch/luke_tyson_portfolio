import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../Projects/Projects";
import MyResume from "../MyResume/MyResume";
import AboutMe from "../AboutMe/AboutMe";
import headshot from "../../Images/portfolioheadshot.jpg";
import "./App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";

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
                        <a href="https://github.com/guantanamobosch">
                            <GitHubIcon />
                        </a>
                        <a href="mailto:luketyson17@gmail.com?subject=Hello&body=Hi%20there!">
                            <EmailIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/luke-tyson-dev/">
                            <LinkedInIcon />
                        </a>
                        <LocalPhoneIcon />
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
