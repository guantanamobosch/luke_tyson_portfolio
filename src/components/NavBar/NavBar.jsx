import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <div className="NavBar">
            <h1>Luke Tyson || Fullstack Developer </h1>

            <Link to="/projects">
                <h3>projects</h3>
            </Link>

            <Link to="/resume">
                <h3>resume</h3>
            </Link>

            <Link to="/about">
                <h3>about</h3>
            </Link>
        </div>
    );
}
