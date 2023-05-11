import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import Logo from '../../assets/logo.png'
import {useState} from 'react'
import { Link } from "react-scroll"


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')

    window.addEventListener('scroll', () => {
        if( window.scrollY > 0)
            document.getElementById("nav").classList.add("window-scrolled");
        else
            document.getElementById("nav").classList.remove("window-scrolled");
    });

    return (
        <nav id="nav">
            {/* Navbar Mobile */}
            <div className="nav__mobile">
            <   li><Link href="#home" activeClass='active' spy to="home"><AiOutlineHome/></Link></li>
                <li><Link href="#about" activeClass='active' spy to="about"><AiOutlineUser/></Link></li>
                <li><Link href="#experience" activeClass='active' spy to="experience"><BiBook/></Link></li>
                <li><Link href="#services" activeClass='active' spy to="services"><RiServiceLine/></Link></li>
                <li><Link href="#contact" activeClass='active' spy to="contact"><BiMessageSquareDetail/></Link></li>
            </div>

            {/* Navbar Desktop */}
            <div className="container nav__container">
                <a href="index.html"><img src={Logo} alt="Nav Logo" className="nav__logo"/></a>
                
                <ul className = "nav__links">
                    <li><Link href="#home" activeClass='active' spy to="home">Home</Link></li>
                    <li><Link href="#about" activeClass='active' spy to="about">About</Link></li>
                    <li><Link href="#experience" activeClass='active' spy to="experience">Experience</Link></li>
                    <li><Link href="#services" activeClass='active' spy to="services">Services</Link></li>
                    <li><Link href="#contact" activeClass='active' spy to="contact">Contact</Link></li>
                </ul>
            </div>

        </nav>
    )
}

export default Nav;