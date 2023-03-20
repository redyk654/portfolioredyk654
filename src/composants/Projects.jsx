import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import './Projects.css';
import mp1 from '../images/music-player1.png';
import mp2 from '../images/music-player2.png';
import calc1 from '../images/calculator1.png';
import calc2 from '../images/calculator2.png';
import covid1 from '../images/covid1.png';
import covid2 from '../images/covid2.png';
import covid3 from '../images/covid3.png';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import Project from './Project/Project';
SwiperCore.use([Pagination,Navigation]);


export default function Projects() {

    const covid = {
        images: [covid1, covid2, covid3],
        skillUse: ['JavaScript']
    };
    const calc = {
        images: [calc1, calc2],
        skillUse: ['React', 'Css']
    };
    const mp = {
        images: [mp1, mp2],
        skillUse: ['React', 'Css']
    };

    const projectsList = [
        {
            title: 'Covid-19 Stats App',
            images: [covid1, covid2, covid3],
            skillsUse: [
                {name: 'JavaScript', color: '#FFA000'},
            ],
            link: '#',
        },
        {
            title: 'Neumorphism Calculator',
            images: [calc1, calc2],
            skillsUse: [
                {name: 'React + ', color: '#3a84e5'},
                {name: 'Css', color: '#0f5ac3'}
            ],
            link: '#',
        },
        {
            title: 'Music Player',
            images: [mp1, mp2],
            skillsUse: [
                {name: 'React + ', color: '#3a84e5'},
                {name: 'Css', color: '#0f5ac3'}
            ],
            link: '#',
        },
    ];

    return (
        <section className="projects">
            <h1 style={{color: "#2d283d"}}>My Recents <span style={{color: "#ec9645"}}>Projects</span></h1>
            <article className="web-projects">
                <h2 style={{color: "#373535"}}>Web Projects</h2>
                <aside>
                    {projectsList.map(item => (
                        <Project infos={item} />
                    ))}
                </aside>
            </article>
            <article className="graphic-projects">

            </article>
        </section>
    )
}
