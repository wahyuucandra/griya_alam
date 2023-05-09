import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => { 
    return (
       <div className="header__socials">
            <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="http://github.com" target="_blank"><FaGithub/></a>
            <a href="http://instagram.com" target="_blank"><FaInstagram/></a>
       </div>
    )
}

export default HeaderSocials;