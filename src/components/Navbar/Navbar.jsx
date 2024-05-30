import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";


export default function Navbar() {

    const [isActive, setIndex] = useState(false);


    return (
        <nav className="navSection">
            <div className="navLogo">
                <img src="./../../../public/image/logo.svg" alt="logo image" />
                <h1>Digital marketing agency</h1>
            </div>
            <FontAwesomeIcon icon={faBars} className='bars' onClick={()=>{setIndex(!isActive)}}/>
            <ul className={isActive ? "navLinks"+" active" : "navLinks"}>
                <li><a href="#">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Clients&partners</a></li>
                <li><a href="#" className='activeLink'>X Academy</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Let's Talk</a></li>
            </ul>
        </nav>
    )
}
