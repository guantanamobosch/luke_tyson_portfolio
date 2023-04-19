import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../Projects/Projects";
import MyResume from "../MyResume/MyResume";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import "./App.css";

function App() {
    return (
        <main className="App">
            <NavBar />
            <Routes>
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<MyResume />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
    );
}

export default App;
