import React from "react";

export default function About(){



    return (
        <>
            <div id="AboutHero">
                <img id="aboutPic" src={process.env.PUBLIC_URL+"/coolPicture.jpg"} />
                <div id="aboutTxt">
                    <h1>Student, also, developer</h1>
                    <p>Since I was young, I always liked the feeling of 
                        having a computer do what I want. With this in mind I enrolled on a 
                        technical school, wich allowed me to cement the feeling that
                         computer science was my pasion.
                    </p>
                    <p>In highschool I started learning development with Python, SQL, Java and Arduino.
                        Learning those technologies was a lot of fun so after graduating as a CS technitian
                        I enrolled in the Computer Science career in the University of Buenos Aires (wich I'm currently in)
                    </p>
                    <p>Ever since I was 15, I never stopped working on fun projects just for the sake of it.
                    and some time ago, I started to learn through courses and by myself, web development 
                    which I found really fun to play with. 
                    </p>
                </div>
            </div>
            <div id="skillsSection">
                <div className="skill">
                    <img className="icon" src="https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png"/>
                    <p>Javascript</p></div>
                <div className="skill">
                    <img className="icon" src="https://cdn-icons-png.flaticon.com/256/3128/3128323.png"/>
                    <p>HTML5</p></div>
                <div className="skill">
                    <img className="icon" src="https://img.icons8.com/color/200/css3.png"/>
                    <p>CSS</p></div>
                <div className="skill">
                    <img className="icon" src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"/>
                    <p>React</p></div>
                <div className="skill">
                    <img className="icon" src="https://www.svgrepo.com/show/354262/react-router.svg"/>
                    <p>React Router</p></div>

            </div>
        </>
    )
}