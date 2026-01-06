import { React } from "react";
import "./Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";

function Home() {
  return (
    <div className="home" id="home">
      <p className="gif" align="center">
        <a href="https://github.com/mandefro-abebaw">
          <img
            src="public\assets\home.jpg"
            alt="Animated footer bars"
            width="100%"
            max-width="1024px"
          />
        </a>
      </p>
      <div className="home-data">
        <h1 className="home-title">
          Hey!,
          <img
            src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
            alt=""
            width="50px"
          ></img>
          <br />
          I'am <span>Mandefro</span>
          <br />
          Full Stack Developer
        </h1>
        <div className="home-img">
          <img src="assets/home.Jpg" alt=""></img>
        </div>
      </div>

      <div className="home-social">
        <a
          href="#"
          className="home-social-icon"
        >
          <LinkedInIcon className="icon" />
        </a>
        <a
          href="https://twitter.com/manirmas6532new"
          className="home-social-icon"
        >
          <TwitterIcon className="icon" />
        </a>
        <a href="https://github.com/mandefro-abebaw" className="home-social-icon">
          <GitHubIcon className="icon" />
        </a>
        <a href="https://t.me/Siparia" className="home-social-icon">
          <TelegramIcon className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Home;
