import React from 'react';
import "./Portofolio.css";
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio6.jpg'
import {useState} from 'react'

const Portofolio = () => {
    const [currentIndex, setCurrentIndex] = useState();

    function handleChange(index) {
        setCurrentIndex(index);
    }
    return (
        <section id='portofolio'>
            <h5>My Recent Work</h5>
            <h2>Portolio</h2>

            <div className="container portofolio__container">
                <article className="portofolio__item">
                    <div className="portofolio__item-image">
                        <img src={IMG1} className="portofolio__image" alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portofolio__item-cta">
                        <a href="https://github.com/wahyuucandra" className="btn" target="_blank">Github</a>
                        <a href="https://github.com/wahyuucandra" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portofolio__item">
                    <div className="portofolio__item-image">
                        <img src={IMG2} className="portofolio__image" alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portofolio__item-cta">
                        <a href="https://github.com/wahyuucandra" className="btn" target="_blank">Github</a>
                        <a href="https://github.com/wahyuucandra" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portofolio__item">
                    <div className="portofolio__item-image">
                        <img src={IMG3} className="portofolio__image" alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portofolio__item-cta">
                        <a href="https://github.com/wahyuucandra" className="btn" target="_blank">Github</a>
                        <a href="https://github.com/wahyuucandra" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portofolio__item">
                    <div className="portofolio__item-image">
                        <img src={IMG4} className="portofolio__image" alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portofolio__item-cta">
                        <a href="https://github.com/wahyuucandra" className="btn" target="_blank">Github</a>
                        <a href="https://github.com/wahyuucandra" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
                <article className="portofolio__item">
                    <div className="portofolio__item-image">
                        <img src={IMG5} className="portofolio__image" alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portofolio__item-cta">
                        <a href="https://github.com/wahyuucandra" className="btn" target="_blank">Github</a>
                        <a href="https://github.com/wahyuucandra" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Portofolio;