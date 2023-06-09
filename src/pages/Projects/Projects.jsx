import React from "react";
import petDOC from "../../Images/PETDOC.png";
import jam from "../../Images/JAM.png";
import slackoverflow from "../../Images/SLACKOVERFLOW.png";
import netbuster from "../../Images/NETBUSTER.png";
import snake from "../../Images/SNAKE.png";
import "./Projects.css";

export default function Projects() {
    return (
        <div id="big-project-container">
            <h1>Projects</h1>
            <h3>petDOC - Fullstack Web-based Pet Health Resource</h3>
            <div className="project-container">
                <a
                    href="https://pet-doc-4af8968aa1e4.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={petDOC}
                        alt="Screenshot of the Dashboard page of petDOC"
                        className="project-screenshot"
                    />
                </a>
                <p>
                    petDOC is an application made in collaboration with a team
                    of 3 other software developers and a team of 3 UX/UI
                    designers for General Assembly's 2023 NAM1 Spring Hackathon.
                    It was fully built from the point of initial theme
                    assignment through design and development in one week. It is
                    currently deployed through Heroku.
                </p>
                <p>
                    Our UX/UI team discovered through interviews with potential
                    users in our target demographic that a mobile application
                    would be preferable, so we built the app with mobile-first
                    principles in mind using a MERN-stack with the intention of
                    porting it into React Native in the future.
                </p>
                <p>
                    The core functionality of the app in its current iteration
                    is twofold: we have an AI-powered symptom checker/assessment
                    and a dog breed guide for users to research information
                    about their pet. The symptom checker prompts for users to
                    input their dog's symptoms and symptom duration, passes this
                    information along as a prompt to the OpenAI API, and returns
                    suggestions about how to proceed with treatment for the
                    user's pet. We have, of course, added a caveat that this
                    advice is not from a medical professional, and that the user
                    should pursue an opinion from a medical professional. The
                    breed guide calls for information from a free dog API to
                    populate our application with the names of each dog breed
                </p>
                <p>
                    We plan to develop our own API for dog-based information
                    centered around the functionality of our app, and we plan to
                    develop our own AI program to provide information catered to
                    our users and curated by medical professionals.
                    Additionally, we plan to allow vets to create their own
                    accounts in order for users to confirm possible treatment
                    plans with their medical professional(s) before proceeding.
                </p>
                <p className="repo-and-site">
                    Check out the:{" "}
                    <a
                        href="https://github.com/guantanamobosch/petDOC"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github Repo!
                    </a>{" "}
                    or{" "}
                    <a
                        href="https://pet-doc-4af8968aa1e4.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        the site itself
                    </a>
                    !
                </p>
                <p className="repo-and-site">
                    Email: <strong>test</strong> <br />
                    Password: <strong>test</strong>
                </p>
            </div>
            <h3>Jam - Fullstack Web-based Chat Application</h3>
            <div className="project-container">
                <a
                    href="https://jam-chat.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={jam}
                        alt="Screenshot of the main chat page for Jam."
                        className="project-screenshot"
                    />
                </a>
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
                    <strong>Material UI</strong>, and <strong>Bcrypt</strong>.
                    As a teammate, I focused primarily on backend development,
                    although I did choose the color scheme and designed the UI
                    for the main chat page of the app. In the backend, I built
                    our Mongoose models, wrote most of our API requests, managed
                    our database, and collaborated with Sean to build and refine
                    our socket connections for the chat interface.
                </p>
                <p className="repo-and-site">
                    Check out the:{" "}
                    <a
                        href="https://github.com/guantanamobosch/Jam"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github Repo!
                    </a>{" "}
                    or{" "}
                    <a
                        href="https://jam-chat.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        the site itself
                    </a>
                    !
                </p>
                <p className="repo-and-site">
                    Email: <strong>test@email.com</strong> <br />
                    Password: <strong>test</strong>
                </p>
            </div>
            <h3>
                Slack Overflow - Fullstack Web-based Message Board Application
            </h3>
            <div className="project-container">
                <a
                    href="https://slackoverflow.herokuapp.com/accounts/login/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={slackoverflow}
                        alt=""
                        className="project-screenshot"
                    />
                </a>
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
                    <a
                        href="https://github.com/joshuapent/SlackOverFlow"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github Repo
                    </a>{" "}
                    or{" "}
                    <a
                        href="https://slackoverflow.herokuapp.com/accounts/login/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        the site itself
                    </a>
                    !
                </p>
                <p className="repo-and-site">
                    Username: <strong>testaccount</strong> <br />
                    Password: <strong>testword</strong>
                </p>
            </div>
            <h3>Netbuster - Fullstack Web-based Video Library</h3>
            <div className="project-container">
                <a
                    href="https://netbuster95.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={netbuster}
                        alt="A screenshot of the main landing page for Netbuster."
                        className="project-screenshot"
                    />
                </a>
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
                    <a
                        href="https://github.com/guantanamobosch/netbuster_project"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github Repo
                    </a>{" "}
                    or{" "}
                    <a
                        href="https://netbuster95.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        the site itself
                    </a>
                    !
                </p>
                <p className="repo-and-site">
                    Username: <strong>testaccount</strong> <br />
                    Password: <strong>test</strong>
                </p>
            </div>
            <h3>Snake - Desktop Game</h3>
            <div className="project-container">
                <a
                    href="https://guantanamobosch.github.io/SEI-Project1-Snake-Game/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={snake}
                        alt="A screenshot of the webpage for the game snake, which consists of a white square in the center with a green, geometric snake and a red square as the apple. Additionally, another geometric snake wraps around the center gameboard."
                        className="project-screenshot"
                    />
                </a>
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
                    <a
                        href="https://github.com/guantanamobosch/SEI-Project1-Snake-Game"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github Repo
                    </a>{" "}
                    or{" "}
                    <a
                        href="https://guantanamobosch.github.io/SEI-Project1-Snake-Game/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        the site itself
                    </a>
                    !
                </p>
            </div>
        </div>
    );
}
