import React from "react";
import headshot from "../../Images/portfolioheadshot.jpg";
import "./Headshot.css";

export default function Headshot() {
    return (
        <div id="headshot-container">
            <img id="headshot" src={headshot} alt="Luke's Headshot" />
        </div>
    );
}
