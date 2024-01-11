import React from 'react';
import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
    return (
        <nav className="navbar">
            <h1>FindAJob</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/second">New Blog</a>
                <a href="/"><FontAwesomeIcon icon={faUser} /></a>
            </div>
        </nav>
    );
}

export default Navbar;