import React from "react";
import jam from "../../Images/JAM.png";
import slackoverflow from "../../Images/SLACKOVERFLOW.png";
import netbuster from "../../Images/NETBUSTER.png";
import snake from "../../Images/SNAKE.png";
import "./Projects.css";

export default function Projects() {
    return (
        <div id="big-project-container">
            <h1>Projects</h1>
            <h3>Jam - Fullstack Web-based Chat Application</h3>
            <div className="project-container">
                <img
                    src={jam}
                    alt="Screenshot of the main chat page for Jam."
                    className="project-screenshot"
                />
                <p>
                    Jam is a chat application that I made in one week together
                    with Ali Colak and Sean Munjal. We envisioned a sleek and
                    easy-to-use app that our friends and loved ones could use to
                    keep in touch. We drew inspiration from two of our favorite
                    (and most-used) apps: Slack and Discord.
                </p>
                <p>
                    To create our app we used a <strong>full MERN-stack</strong>
                    , as well as <strong>socket.io</strong>,{" "}
                    <strong>axios</strong>, <strong>Material UI</strong>, and{" "}
                    <strong>Bcrypt</strong>. As a teammate, I focused primarily
                    on backend development, although I did choose the color
                    scheme and designed the UI for the main chat page of the
                    app. In the backend, I built our Mongoose models, wrote most
                    of our API requests, managed our database, and collaborated
                    with Sean to build and refine our socket connections for the
                    chat interface.
                </p>
                <p className="repo-and-site">
                    Check out the:{" "}
                    <a href="https://github.com/guantanamobosch/Jam">
                        Github Repo
                    </a>{" "}
                    or{" "}
                    <a href="https://jam-chat.herokuapp.com/">
                        the site itself
                    </a>
                    !
                </p>
            </div>
            <h3>
                Slack Overflow - Fullstack Web-based Message Board Application
            </h3>
            <div className="project-container">
                <img
                    src={slackoverflow}
                    alt=""
                    className="project-screenshot"
                />
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
                    by any subject of their choice. To do this, we took a
                    bare-bones approach and built our app with a{" "}
                    <strong>Django and Python stack</strong>, and deployed it to{" "}
                    <strong>Heroku</strong>.
                </p>
                <p className="repo-and-site">
                    Check out the:{" "}
                    <a href="https://github.com/joshuapent/SlackOverFlow">
                        Github Repo
                    </a>{" "}
                    or{" "}
                    <a href="https://slackoverflow.herokuapp.com/accounts/login/">
                        the site itself
                    </a>
                    !
                </p>
            </div>
            <h3>Netbuster - Fullstack Web-based Video Library</h3>
            <div className="project-container">
                <img
                    src={netbuster}
                    alt="A screenshot of the main landing page for Netbuster."
                    className="project-screenshot"
                />
                <p>
                    Netbuster is a web-based video library that I made in one
                    week together with Brandon Piquant. We wanted to recreate
                    Netflix's video library, but branded in the style of their
                    former-competitor, Blockbuster. We chose a lighthearted
                    theme for the branding, and sought to create a sense of
                    nostalgia for viewers who visit the page.
                </p>
                <p>
                    To do this, we used a full MEN-stack (
                    <strong>MongoDB & Mongoose</strong>,{" "}
                    <strong>Express</strong>, and <strong>Node.js</strong>).
                    While Brandon led most of our front-end design, I worked on
                    the backend to model our data for user info and
                    authentication, and our media library. We found movie
                    trailers on the web which we used as seed data to create the
                    site's first instantiation, and populated the site using API
                    calls to our database.{" "}
                </p>
                <p>
                    Additionally, we added a 'Chill' page which loads a gif of
                    some candles and auto-plays Ginuwine's 1996 hit, 'Pony'.
                </p>
                <p className="repo-and-site">
                    Check out the:{" "}
                    <a href="https://github.com/guantanamobosch/netbuster_project">
                        Github Repo
                    </a>
                    !
                </p>
            </div>
            <h3>Snake - Desktop Game</h3>
            <div className="project-container">
                <img
                    src={snake}
                    alt="A screenshot of the webpage for the game snake, which consists of a white square in the center with a green, geometric snake and a red square as the apple. Additionally, another geometric snake wraps around the center gameboard."
                    className="project-screenshot"
                />
                <p>
                    Snake is a desktop game that I designed as my first ever
                    project. I wanted to test my ability to use JavaScript and
                    HTML DOM manipulation to make a functional game, and I
                    decided to make one of my favorites. I used{" "}
                    <strong>Figma</strong> to design the main background image,
                    and nested the rest of my HTML and CSS within it.
                </p>
                <p>
                    I made the game using nothing but <strong>HTML</strong>,{" "}
                    <strong>CSS</strong>, and <strong>JavaScript</strong>. I
                    created a grid of div elements in my HTML, used
                    background-color to signify the snake and its apple, and
                    wrote some basic algorithms to handle the movement of the
                    snake, its eating of the apple, and collisions with the
                    walls.
                </p>
                <p className="repo-and-site">
                    Check out the:{" "}
                    <a href="https://github.com/guantanamobosch/SEI-Project1-Snake-Game">
                        Github Repo
                    </a>{" "}
                    or{" "}
                    <a href="https://guantanamobosch.github.io/SEI-Project1-Snake-Game/">
                        the site itself
                    </a>
                    !
                </p>
            </div>
        </div>
    );
}
