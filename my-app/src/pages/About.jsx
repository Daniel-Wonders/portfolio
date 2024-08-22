import React from "react";

export default function About(){

    window.scrollTo({top:0,behavior:"smooth"});


    return (
        <>
            <div id="AboutHero">
                <img alt="myself at the beach" id="aboutPic" src={process.env.PUBLIC_URL+"/coolPicture.jpg"} />
                <div id="aboutTxt">
                    <h1>Student, also, developer</h1>
                    <p>Ever since I was young, I always liked the feeling of having a computer do what I want. With this in mind, I enrolled in a technical school, which allowed me to cement the feeling that computer science was my passion.</p>
                    <p>In high school, I dove into programming with languages such as Python, SQL, Java, and Arduino. The joy I found in learning these technologies was immense, and after graduating as a Computer Science technician, I continued my journey by enrolling in the Computer Science program at the University of Buenos Aires, where I am currently studying.</p>
                    <p>Since I was 15, I have been constantly working on fun projects, driven purely by curiosity and the joy of creation. Recently, I ventured into web development through courses and self-study, and I've found it incredibly enjoyable.</p>
                    <p>Nowadays, I'm constantly working on fun projects (like the page you're currently on), and I don't plan to ever stop. In the future, I'd like to have my own software factory to develop cool pieces of technology for the world.</p>
                    <p>Beyond my professional interests, I enjoy surfing whenever I can and have a deep love for the beach, as evidenced by the photo (I swear I'm having fun). I also share my life with a cat and a dog, whom I consider family.</p></div>
            </div>
            <div id="skillsSection">
                <h2 id="lenguages">Lenguages and technologies:</h2>
                <div className="skill">
                    <img alt="icon" className="icon" src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"/>
                    <p>Javascript</p></div>
                <div className="skill">
                    <img alt="icon" className="icon" src="https://cdn-icons-png.flaticon.com/256/3128/3128323.png"/>
                    <p>HTML5</p></div>
                <div className="skill">
                    <img alt="icon" className="icon" src="https://img.icons8.com/color/200/css3.png"/>
                    <p>CSS</p></div>
                <div className="skill">
                    <img alt="icon" className="icon" src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"/>
                    <p>React</p></div>
                <div className="skill">
                    <img alt="icon" className="icon" src="https://www.svgrepo.com/show/354262/react-router.svg"/>
                    <p>React Router</p></div>
                <div className="skill">
                    <img alt="icon" className="icon" src="https://cdn.iconscout.com/icon/free/png-256/free-python-3628999-3030224.png?f=webp&w=256"/>
                    <p>Python</p></div>
                <div className="skill">
                    <img alt="icon" className="icon" src="https://cdn-icons-png.freepik.com/512/4299/4299956.png"/>
                    <p>SQL</p></div>
                <div className="skill">
                    <img alt="icon" className="icon" src="https://img.icons8.com/?size=512&id=13679&format=png"/>
                    <p>Java</p></div>
                <div className="skill">
                    <img alt="icon" className="icon" src="https://static.thenounproject.com/png/410844-200.png"/>
                    <p>Restful API's</p></div>
                <div className="skill">
                    <img alt="icon" className="icon" src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp&w=256"/>
                    <p>NodeJs</p></div>
                <div className="skill">
                    <img alt="icon" className="icon" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/arduino_logo_icon_170518.png"/>
                    <p>Arduino</p></div>
                <div className="skill">
                    <img alt="icon" className="icon" src="https://cdn.iconscout.com/icon/free/png-256/free-firebase-3521427-2944871.png?f=webp"/>
                    <p>Firebase</p></div>
                <div className="skill">
                    <img alt="icon" className="icon" src="https://cdn-icons-png.flaticon.com/512/5968/5968259.png"/>
                    <p>Haskell</p></div>
                    
            </div>
        </>
    )
}