import React from "react";
import { Link} from "react-router-dom";

export default function Projects(){

    window.scrollTo({top:0,behavior:"smooth"});


    return(
        <div id="projectContainer">
            <div id="project1" className="project">
                <img  src={process.env.PUBLIC_URL+"/memeGenerator.jfif"} />
                <div className="container">
                    <h3 style={{marginTop:"5px"}}>Meme Generator</h3>
                    <p>Web app I made using the imgflip API. It utiliizes React. It takes a random image from the memes stored in imgFlip and allows you create and download a self made meme.</p>
                    <div className="btnContainer2">
                        <a href="https://daniel-wonders.github.io/meme-generator/" target="_blank" className="btns">Website</a>
                        <a href="https://github.com/Daniel-Wonders/meme-generator" target="_blank" className="btns btns2">Source Code</a>
                    </div>
                </div>
            </div>
            <div id="project2" className="project">
                <div className="container">
                    <h3 style={{marginTop:"5px"}}>The Anime Quiz</h3>
                    <p>Fun little game made using the OpenTrivia API. It was made with multiple hooks, asynchronus API fetching and error handling so it doesn't crash.</p>
                    <div className="btnContainer2">
                        <a href="https://daniel-wonders.github.io/anime-quiz/" target="_blank" className="btns">Website</a>
                        <a href="https://github.com/Daniel-Wonders/anime-quiz" target="_blank" className="btns btns2">Source Code</a>
                    </div>
                </div>
            <img  src={process.env.PUBLIC_URL+"/animeQuiz.png"} />
            </div>
            <div id="project3" className="project">
            <img  src={process.env.PUBLIC_URL+"/portfolio.png"} />
                <div className="container">
                    <h3 style={{marginTop:"5px"}}>Personal landing page</h3>
                    <p>This website you're looking right now was made using different routes from React Router, also, I made it responsive so it can be displayed from any device.</p>
                    <div className="btnContainer2">
                        <Link to="/" className="btns">Website</Link>
                        <a target="_blank" href="https://github.com/Daniel-Wonders/portfolio" className="btns btns2">Source Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}