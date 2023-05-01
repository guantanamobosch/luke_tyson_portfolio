import React from "react";
import "./MyResume.css";
import pageOne from "../../Images/resume.jpg";
import pageTwo from "../../Images/resume_pg2.jpg";

export default function MyResume() {
    return (
        <>
            <div id="resume-container">
                <img className="resume" src={pageOne} alt="" />
                <img className="resume" src={pageTwo} alt="" />
            </div>
        </>
    );
}
