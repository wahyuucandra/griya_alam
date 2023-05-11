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
                <li><a href="#services">Services</a></li>
                <li><a href="#portofolio">Portofolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
            <div className="footer__socials">
                        <a href="https://www.linkedin.com/in/wahyu-buana-2182211ab/" target="_blank"><BsLinkedin/></a>
                        <a href="https://github.com/wahyuucandra" target="_blank"><FaGithub/></a>
                        <a href="https://www.instagram.com/wahyucandraaa/" target="_blank"><FaInstagram/></a>
                    </div>

            <div className="footer__copyright">
                <small>&copy; Wahyu Candra Buana. All rights reserved</small>
            </div>
        </footer>
    );
}

export default Footer;