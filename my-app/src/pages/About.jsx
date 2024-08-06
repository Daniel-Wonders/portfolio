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
                <i class="fa-brands fa-html5"></i>
                <div className="skill">Javascript</div>
                <div className="skill">HTML5</div>
                <div className="skill">CSS</div>
                <div className="skill">Javascript</div>
                <div className="skill">Javascript</div>

            </div>
        </>
    )
}