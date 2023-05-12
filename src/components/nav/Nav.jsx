import React from 'react'
import './Nav.css'
import Logo from '../../assets/logo.png'
import { Link } from "react-scroll"
import {useState} from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"


const Nav = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const [menuclick, setMenuClick] = useState(false)

    const toogleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)

        if(hamburgerOpen){
            document.getElementById("nav-link").style.display = "none";
        }else{
            setMenuClick(false)
            document.getElementById("nav-link").style.display = "flex";
        }
    }

    const hideMenu = () => {
        if (window.innerWidth <= 600) {
            setMenuClick(!menuclick)

            if(!menuclick){
                setHamburgerOpen(!hamburgerOpen)
                document.getElementById("nav-link").style.display = "none";
            }
        }
    }

    window.addEventListener('scroll', () => {
        if( window.scrollY > 0)
            document.getElementById("nav").classList.add("window-scrolled");
        else
            document.getElementById("nav").classList.remove("window-scrolled");
    });

    return (
        <nav id="nav">
            <div className="container nav__container">
                <div className="mobile__header">
                    <a href="index.html"><img src={Logo} alt="Nav Logo" className="nav__logo"/></a>
                    <a className='hamburger__bar' onClick={toogleHamburger}> {hamburgerOpen ? <AiOutlineClose/> : <GiHamburgerMenu/>}</a>
                </div>

                <ul id="nav-link" className = "nav__links">
                    <li><Link href="#home" activeClass='active' spy to="home" onClick={hideMenu}>Home</Link></li>
                    <li><Link href="#about" activeClass='active' spy to="about" onClick={hideMenu}>About</Link></li>
                    <li><Link href="#experience" activeClass='active' spy to="experience" onClick={hideMenu}>Experience</Link></li>
                    <li><Link href="#portofolio" activeClass='active' spy to="portofolio" onClick={hideMenu}>Portofolio</Link></li>
                    <li><Link href="#contact" activeClass='active' spy to="contact" onClick={hideMenu}>Contact</Link></li>
                </ul>
            </div>

        </nav>
    )
}

export default Nav;