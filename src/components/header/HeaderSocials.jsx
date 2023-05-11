import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => { 
    return (
       <div className="header__socials">
            <a href="https://www.linkedin.com/in/wahyu-buana-2182211ab/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/wahyuucandra" target="_blank"><FaGithub/></a>
            <a href="https://www.instagram.com/wahyucandraaa/" target="_blank"><FaInstagram/></a>
       </div>
    )
}

export default HeaderSocials;