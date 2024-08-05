import React from "react";
import { NavLink } from "react-router-dom";

export default function Home(){



    return(
        <section>
            <div id="hero">
                <h1 className="intro text">
                    Name's Lautaro, pleased to meet you
                </h1>

                <img id="pfp" src={process.env.PUBLIC_URL+"/pfp2.png"}/>

                <h2 className="intro2 text">
                    I'm a profesional web developer
                </h2>
                <h3 className="intro3 text">
                    Want to work together?
                </h3>
                <div className="btnContainer">
                    <NavLink to="/about" className="btns">
                        Learn more about me
                    </NavLink>
                    <NavLink to="/projects" className="btns btns2">
                        My projects
                    </NavLink>
                    <NavLink to="/contact" className="btns">
                        My contact information
                    </NavLink>
                    <button className="btns btns2">
                        Download Resume
                    </button>
                </div>
            </div>
        </section>
    )
}