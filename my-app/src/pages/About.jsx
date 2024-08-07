import React from "react";

export default function About(){



    return (
        <>
            <div id="AboutHero">
                <img id="aboutPic" src={process.env.PUBLIC_URL+"/coolPicture.jpg"} />
                <div id="aboutTxt">
                    <h1>I'm a student, also, a developer</h1>
                    <p>Since I was young, I always liked the feeling of 
                        having a computer do what I want. With this in mind I enrolled on a 
                        technical school, wich allowed me to cement the feeling that
                         computer science was my pasion.
                    </p>
                    <p>In highschool I started learning development with Python, SQL, Java and Arduino.
                        Learning those technologies was a lot of fun so after graduating as a CS technitian
                        I enrolled in the Computer Science career in the University of Buenos Aires (wich I'm currently in)
                    </p>
                </div>
            </div>
            <div id="skillsSection">
                <div className="skill">
                    <img className="icon" src={process.env.PUBLIC_URL+"https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png"}/>
                    Javascript</div>
                <div className="skill">
                    <img className="icon" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp"/>
                    HTML5</div>
                <div className="skill">
                    <img className="icon" src={process.env.PUBLIC_URL+"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDwBd9LoQzBAZigXXxzQ0kKn6TwyrE0Y7Rg&s"}/>
                    CSS</div>
                <div className="skill">
                    <img className="icon" src={process.env.PUBLIC_URL+"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"}/>
                    React</div>
                <div className="skill">
                    <img className="icon" src={process.env.PUBLIC_URL+"https://www.svgrepo.com/show/354262/react-router.svg"}/>
                    React Router</div>

            </div>
        </>
    )
}