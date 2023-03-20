import React from 'react';
import './Services.css';

import web from '../images/web-dev.png';
import design from '../images/web-design.png';
import graphic from '../images/graphic.png';

export default function Services() {
    return (
        <section className="services">
            <div className="services-title">
                <h1 style={{color: '#2d283d'}}>My Awesome <span style={{color: '#3f93b2'}}>Services</span></h1>
            </div>
            <div className="services-items">
                <article>
                    <div className="image">
                        <img src={web} alt="image" />
                    </div>
                    <div className="describe">
                        <h3>Web Development</h3>
                        <p>
                            Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. 
                            Vel error quos assumenda temporibus
                             eaque itaque ducimus magnam corporis 
                             culpa exercitationem, in aliquam.
                        </p>
                    </div>
                </article>
                <article>
                    <div className="image">
                        <img src={design} alt="image" />
                    </div>
                    <div className="describe">
                        <h3>Web Design</h3>
                        <p>
                            Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. 
                            Vel error quos assumenda temporibus
                             eaque itaque ducimus magnam corporis 
                             culpa exercitationem, in aliquam.
                        </p>
                    </div>
                </article>
                <article>
                    <div className="image">
                        <img src={graphic} alt="image" />
                    </div>
                    <div className="describe">
                        <h3>Graphic design</h3>
                        <p>
                            Lorem ipsum dolor sit amet 
                            consectetur adipisicing elit. 
                            Vel error quos assumenda temporibus
                             eaque itaque ducimus magnam corporis 
                             culpa exercitationem, in aliquam.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    )
}
