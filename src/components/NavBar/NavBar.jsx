import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <h1>Luke Tyson || Fullstack Developer </h1>

            <Link to="/projects">
                <h3>Projects</h3>
            </Link>

            <Link to="/resume">
                <h3>Resume</h3>
            </Link>

            <Link to="/about">
                <h3>About</h3>
            </Link>

            <Link to="/contact">
                <h3>Contact</h3>
            </Link>
        </>
    );
}
