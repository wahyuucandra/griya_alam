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
                        <h4>Owen</h4>
                        <h5>micow48@gmail.com</h5>
                        <a href="mailto:micow48@gmail.com" target="_blank">Send Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>082245694545</h5>
                        <a href="https://api.whatsapp.com/send?phone=082245694545" target="_blank">Send Message</a>
                    </article>
                    <article className="contact__option">
                        <FaInstagram className='contact__option-icon'/>
                        <h4>Instagram</h4>
                        <h5>banggjip22</h5>
                        <a href="https://www.instagram.com/bangjip22/" target="_blank">Send Message</a>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Contact;