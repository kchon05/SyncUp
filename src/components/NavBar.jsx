import React from "react";
import { NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <nav>
            <div className="navbar-cont">
                <div className="navbar">
                    <NavLink to="/search">Search</NavLink>
                    <NavLink to="/likes">Likes</NavLink>
                    <NavLink to="/"><img src="src/assets/logotitlepic.svg"/></NavLink>
                    <NavLink to="/chat">Chat</NavLink>
                    <NavLink to="/profile"><img src="src/assets/Default_pfp.svg"/></NavLink>
                </div>
            </div>
        </nav>
    )
}