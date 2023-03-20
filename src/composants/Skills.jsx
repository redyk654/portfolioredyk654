import React from 'react';
import skill1 from '../images/javascript.svg';
import skill2 from '../images/react.svg';
import skill3 from '../images/php.svg';
import skill4 from '../images/mysql.svg';
import skill5 from '../images/firebase.svg';
import skill6 from '../images/photoshop.svg';
import skill7 from '../images/html.svg';
import skill8 from '../images/css.svg';

/* 
    Importation des dépendances de la librairie Swiper js.
    J'ai juste copié sans réellement comprendre le fonctionnement
*/
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./Skills.css";
import Skill from './Skill';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';
SwiperCore.use([Pagination,Navigation]);


export default function Skills() {

    const skills = [
        {
            id : 1,
            skillImg : skill1,
            skillName : "Javascript",
            skillColor : "#fbd63f"
        },
        {
            id : 2,
            skillImg : skill2,
            skillName : "React",
            skillColor : "#41d7d2"
        },
        {
            id : 3,
            skillImg : skill3,
            skillName : "Php",
            skillColor : "#727b9c"
        },
        {
            id : 4,
            skillImg : skill4,
            skillName : "MySQL",
            skillColor : "#5f8291"
        },
        {
            id : 5,
            skillImg : skill5,
            skillName : "Firebase",
            skillColor : "#fbd63f"
        },
        {
            id : 6,
            skillImg : skill6,
            skillName : "Photoshop",
            skillColor : "#2d3271"
        },
        {
            id : 7,
            skillImg : skill7,
            skillName : "Html",
            skillColor : "#ff7644"
        },
        {
            id : 8,
            skillImg : skill8,
            skillName : "Css",
            skillColor : "#3a84e5"
        }
    ]

    return (
        <section className="skills-container">
            <h1 className="title-skills">
                My Skills
            </h1>
            <Swiper 
            pagination={{
                "type": "progressbar"
            }}
            navigation={true} 
            className="mySwiper"
            >
                {skills.map( skill => (
                    <SwiperSlide key={skill.id}>
                        <Skill
                            key={skill.id}
                            skillImg={skill.skillImg}
                            skillName={skill.skillName}
                            skillColor={skill.skillColor} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
