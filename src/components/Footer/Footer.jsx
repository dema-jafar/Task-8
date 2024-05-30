import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faBehance} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div className="footerContent">
                <div className="footerLogo">
                    <img src="./../../../public/image/logo.png" alt="footer logo image" />
                    <span>.agency</span>
                    <h3>Head Office</h3>
                    <a href="#">Syria - Latakia - grh2+hjx 35.5199518</a>
                </div>
                <div className="footerInfo">
                    <div className="infoItem">
                        <h3>Sales</h3>
                        <a href="#">contact@focal-x.com</a>
                        <a href="#">+963 953 666 056</a>
                        <h3>Public Relations</h3>
                        <a href="#">pr@focal-x.com</a>
                        <a href="#">+963 953 666 056</a>
                    </div>
                    <div className="infoItem">
                        <h3>Customer Support</h3>
                        <a href="#">info@focal-x.com</a>
                        <a href="#">+963 953 666 056</a>
                        <h3>Human resources</h3>
                        <a href="#">hr@focal-x.com</a>
                    </div>
                    <div className="infoItem">
                        <h3>Useful Links</h3>
                        <a href="#">Clients & Partners</a>
                        <a href="#">Check Certificate ID</a>
                        <a href="#">Check for employee</a>
                        <a href="#">Our Brand ID guidelines</a>
                    </div>
                    <div className="infoItem">
                        <h3>Keep In Touch</h3>
                        <ul className="social">
                            <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href=""><FontAwesomeIcon icon={faBehance} /></a></li>
                            <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyRight">
                <p>© 2021 - 2023 focal X L.L.C All Right Reserved</p>
            </div>
        </footer>
    )
}
