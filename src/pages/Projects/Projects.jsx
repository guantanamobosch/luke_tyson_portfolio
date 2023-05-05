import React from "react";
import headshot from "../../Images/portfolioheadshot.jpg";
import "./Projects.css";

export default function Projects() {
    return (
        <div id="big-project-container">
            <h1>Projects</h1>
            <h3>Jam - Fullstack Web-based Chat Application</h3>
            <div className="project-container">
                <img src={headshot} alt="" className="project-screenshot" />
                <p>
                    Jam is a chat application that I made in one week together
                    with Ali Colak and Sean Munjal. We envisioned a sleek and
                    easy-to-use app that our friends and loved ones could use to
                    keep in touch. We drew inspiration from two of our favorite
                    (and most-used) apps: Slack and Discord.
                </p>
                <p>
                    To create our app we used a full MERN-stack, as well as
                    socket.io, axios, Material UI, and Bcrypt. As a teammate, I
                    focused primarily on backend development, although I did
                    choose the color scheme and designed the UI for the main
                    chat page of the app. In the backend, I built our Mongoose
                    models, wrote most of our API requests, managed our
                    database, and collaborated with Sean to build and refine our
                    socket connections for the chat interface.
                </p>
                <p>
                    Check out the: <a href="">Github Repo</a> or{" "}
                    <a href="">the site itself</a>!
                </p>
            </div>
            <h3>
                Slack Overflow - Fullstack Web-based Message Board Application
            </h3>
            <div className="project-container">
                <img src={headshot} alt="" className="project-screenshot" />
                <p>
                    Slack Overflow is a message board application that I made in
                    one week together with Josh Pent. For this project, we chose
                    to initiate our design phase with utility in mind. As
                    fellows at General Assembly, we wanted a message board where
                    we would be able to make posts to boards that we would
                    either share exclusively with other developers of our choice
                    or globally with any user.
                </p>
                <p>
                    We saw the success of Stack Overflow and used that as a
                    jumping off point. Instead of only posting globally, we also
                    wanted to give users the ability to create their own private
                    boards for their teammates, classmates, and friends where
                    they could also organize posts by languages, frameworks, or
                    by any subject of their choice.
                </p>
                <p>
                    To do this, we took a bare-bones approach and built our app
                    with a Django and Python stack
                </p>
                <p>
                    Check out the: <a href="">Github Repo</a> or{" "}
                    <a href="">the site itself</a>!
                </p>
            </div>
            <h3>Netbuster - Fullstack Web-based Video Library</h3>
            <div className="project-container">
                <img src={headshot} alt="" className="project-screenshot" />
                <p></p>
                <p>
                    Check out the: <a href="">Github Repo</a> or{" "}
                    <a href="">the site itself</a>!
                </p>
            </div>
            <h3>Snake - Desktop Game</h3>
            <div className="project-container">
                <img src={headshot} alt="" className="project-screenshot" />
                <p></p>
                <p>
                    Check out the: <a href="">Github Repo</a> or{" "}
                    <a href="">the site itself</a>!
                </p>
            </div>
        </div>
    );
}
