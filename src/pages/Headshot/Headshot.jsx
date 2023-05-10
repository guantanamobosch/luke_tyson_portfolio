import React from "react";
import headshot from "../../Images/portfolioheadshot.jpg";
import "./Headshot.css";

export default function Headshot() {
    return (
        <div id="headshot-container">
            <div className="headshot-lines"></div>
            <img id="headshot" src={headshot} alt="Luke's Headshot" />
            <div className="headshot-lines"></div>
        </div>
    );
}
