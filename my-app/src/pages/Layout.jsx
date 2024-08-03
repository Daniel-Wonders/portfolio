import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <header>
                <h1 id="name">Alloco Lautaro</h1>
                <ul>
                    <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
                    <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
            © Made by :
                <a id="footerLink" target="blank_" href="https://www.linkedin.com/in/lautaro-alloco/">Lautaro Alloco</a>
            </footer>
        </>
    );
}
