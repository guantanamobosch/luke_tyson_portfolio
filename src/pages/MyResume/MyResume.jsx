import React from "react";
import "./MyResume.css";
import pageOne from "../../Images/resume.jpeg";
import pageTwo from "../../Images/resume_pg2.jpeg";

export default function MyResume() {
    const onButtonClick = () => {
        fetch("luke_tyson_resume_download.pdf").then((response) => {
            response.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "luke_tyson_resume_download.pdf";
                alink.click();
            });
        });
    };

    return (
        <>
            <div id="resume-container" onClick={onButtonClick}>
                <h4 id="download-click">(Click resume anywhere to download)</h4>
                <img className="resume" src={pageOne} alt="" />
                <img className="resume" src={pageTwo} alt="" />
            </div>
        </>
    );
}
