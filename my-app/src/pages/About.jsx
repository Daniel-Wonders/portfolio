import React from "react";

export default function About(){



    return (
        <>
            <div id="AboutHero">
                <img id="aboutPic" src={process.env.PUBLIC_URL+"/coolPicture.jpg"} />
                <div id="aboutTxt">
                    <h1>Student, also, developer</h1>
                    <p>Since I was young, I always liked the feeling of having a computer do what I want. With this in mind, I enrolled in a technical school, which allowed me to cement the feeling that computer science was my passion.</p>
<p>In high school, I dove into programming with languages such as Python, SQL, Java, and Arduino. The joy I found in learning these technologies was immense, and after graduating as a Computer Science technician, I continued my journey by enrolling in the Computer Science program at the University of Buenos Aires, where I am currently studying.</p>
<p>Since I was 15, I have been constantly working on fun projects, driven purely by curiosity and the joy of creation. Recently, I ventured into web development through courses and self-study, and I've found it incredibly enjoyable.</p>
<p>Nowadays, I'm constantly working on fun projects (like the page you're currently on), and I don't plan to ever stop. In the future, I'd like to have my own software factory to develop cool pieces of technology for the world.</p>
<p>Beyond my professional interests, I enjoy surfing whenever I can and have a deep love for the beach, as evidenced by the photo (I swear I'm having fun). I also share my life with a cat and a dog, whom I consider family.</p></div>
            </div>
            <div id="skillsSection">
                <h2 id="lenguages">Lenguages and technologies:</h2>
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
                <div className="skill">
                    <img className="icon" src="https://cdn.iconscout.com/icon/free/png-256/free-python-3628999-3030224.png?f=webp&w=256"/>
                    <p>Python</p></div>
                <div className="skill">
                    <img className="icon" src="https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png"/>
                    <p>SQL</p></div>
                <div className="skill">
                    <img className="icon" src="https://img.icons8.com/?size=512&id=13679&format=png"/>
                    <p>Java</p></div>
                <div className="skill">
                    <img className="icon" src="https://static.thenounproject.com/png/410844-200.png"/>
                    <p>Restful API's</p></div>
                <div className="skill">
                    <img className="icon" src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp&w=256"/>
                    <p>NodeJs</p></div>
                <div className="skill">
                    <img className="icon" src="https://static-00.iconduck.com/assets.00/apps-arduino-icon-256x256-mp2raho4.png"/>
                    <p>Arduino</p></div>
                <div className="skill">
                    <img className="icon" src="https://cdn.iconscout.com/icon/free/png-256/free-firebase-3521427-2944871.png?f=webp"/>
                    <p>Firebase</p></div>
                <div className="skill">
                    <img className="icon" src="https://cdn-icons-png.flaticon.com/512/5968/5968259.png"/>
                    <p>Haskell</p></div>
                    
            </div>
        </>
    )
}