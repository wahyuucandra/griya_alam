import React from 'react';
import "./Footer.css";
import Logo from '../../assets/logo.png'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>

            <a href="#home"  className="footer__logo"><img src={Logo} alt="Nav Logo" className="logo"/></a>

            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portofolio">Portofolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
            <div className="footer__socials">
                        <a href="https://www.linkedin.com/in/michael-owen-4384431a2/" target="_blank"><BsLinkedin/></a>
                        <a href="https://github.com/bangjip22" target="_blank"><FaGithub/></a>
                        <a href="https://www.instagram.com/bangjip22/" target="_blank"><FaInstagram/></a>
                    </div>

            <div className="footer__copyright">
                <small>&copy; Owen Sound. All rights reserved</small>
            </div>
        </footer>
    );
}

export default Footer;