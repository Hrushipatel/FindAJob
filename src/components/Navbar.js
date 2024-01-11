import React from 'react';
import '../styling/style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {Link} from "react-router-dom";
import SideBar from './SideBar';

function Navbar() {
    return (
        <div className='fix_nav'>
            <nav className="navbar">
                <h1>FindAJob</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <a href="/profile"><FontAwesomeIcon icon={faUser} /></a>
                    <SideBar/>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;