import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const activeStyles = {
        fontWeight: "900",
        borderBottom: "solid whitesmoke"
    }

    return (
        <>
            <header>
                <h1 id="name">Alloco Lautaro</h1>
                <ul>
                    <li><NavLink style={({ isActive }) => isActive ? activeStyles : null} to="/" end className="nav-link">Home</NavLink></li>
                    <li><NavLink style={({ isActive }) => isActive ? activeStyles : null} to="/about" className="nav-link">About</NavLink></li>
                    <li><NavLink style={({ isActive }) => isActive ? activeStyles : null} to="/projects" className="nav-link">Projects</NavLink></li>
                    <li><NavLink style={({ isActive }) => isActive ? activeStyles : null} to="/contact" className="nav-link">Contact</NavLink></li>
                </ul>
                <img id="menuBtn" src={process.env.PUBLIC_URL + "menu.png"} onClick={toggleMenu} alt="Menu Button"/>
            </header>

            {menuOpen? 
            <div id="sidePanel" className={ "open" }>
                <ul>
                    <img id="menuBtn" src={process.env.PUBLIC_URL + "menu.png"} onClick={toggleMenu} alt="Menu Button"/>
                    <li><NavLink onClick={toggleMenu} to="/" end className="nav-link">Home</NavLink></li>
                    <li><NavLink onClick={toggleMenu} to="/about" className="nav-link">About</NavLink></li>
                    <li><NavLink onClick={toggleMenu} to="/projects" className="nav-link">Projects</NavLink></li>
                    <li><NavLink onClick={toggleMenu} to="/contact" className="nav-link">Contact</NavLink></li>
                </ul>
            </div>:null}

            <main>
                <Outlet />
            </main>
            <footer>
                <p id="copyright">
                    © Made by :
                    <a id="footerLink" target="blank_" href="https://www.linkedin.com/in/lautaro-alloco/">Lautaro Alloco</a>
                </p>
            </footer>
        </>
    );
}

