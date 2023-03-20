import React, { Fragment } from 'react';
import './About.css';

export default function About() {
    return (
        <Fragment>
            <h1 id="about" className='title-about'>About me</h1>
            <section className='about'>
                <article className='acticle'>
                    I am a full-stack jr developer passionate about the web and 
                    seeking to make my modest contribution to the evolution of 
                    web technologies.
                </article>
                <article className='acticle'>
                    being at the base student in computer science
                    I decided to follow my passion and to immerse myself in the 
                    world of the web by following online training and by learning 
                </article>
                <article className='acticle'>
                    
                    by myself and even if for lack of means I could not pay myself 
                    training, I reached a great level today thanks to my determination.
                    Hope to work with you cordially;).
                </article>
            </section>
        </Fragment>

    )
}
