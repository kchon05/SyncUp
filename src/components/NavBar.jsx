import React from "react";
import { NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <nav>
            <div className="navbar-cont">
                <div className="navbar">
                    <NavLink to="/ai">Ask AI</NavLink>
                    <NavLink to="/likes">Likes</NavLink>
                    <NavLink to="/"><img src="img/logotitlepic.svg" className="logopic"/></NavLink>
                    <NavLink to="/chat">Chat</NavLink>           
                    <NavLink to="/profile" className="navbar-pfp">
                        <img src="img/blackpfp.svg" className="pfp black"/>
                        <img src="img/greenpfp.svg" className="pfp green"/>
                        </NavLink>
                </div>
            </div>
        </nav>
    )
}