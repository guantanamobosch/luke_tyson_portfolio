import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Contact.css";

export default function Contact() {
    return (
        <div id="contact-container">
            <a
                href="https://github.com/guantanamobosch"
                target="_blank"
                rel="noreferrer"
            >
                <GitHubIcon />
            </a>
            <a
                href="mailto:luketyson17@gmail.com?subject=Hello&body=Hi%20there!"
                target="_blank"
                rel="noreferrer"
            >
                <EmailIcon />
            </a>
            <a
                href="https://www.linkedin.com/in/luke-tyson-dev/"
                target="_blank"
                rel="noreferrer"
            >
                <LinkedInIcon />
            </a>
            <LocalPhoneIcon />
        </div>
    );
}
