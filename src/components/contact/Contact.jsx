import React from 'react';
import "./Contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'


const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Message</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>Wahyuucandra@gmail.com</h5>
                        <a href="mailto:wahyuucandra@gmail.com" target="_blank">Send Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>082112426284</h5>
                        <a href="https://api.whatsapp.com/send?phone=082112426284" target="_blank">Send Message</a>
                    </article>
                    <article className="contact__option">
                        <FaInstagram className='contact__option-icon'/>
                        <h4>Instagram</h4>
                        <h5>wahyucandraaa</h5>
                        <a href="https://www.instagram.com/wahyucandraaa/" target="_blank">Send Message</a>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Contact;