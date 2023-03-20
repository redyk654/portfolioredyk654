import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import ProjectTitle from '../ProjectTitle/ProjectTitle';
import ProjectSkills from '../ProjectSkills/ProjectSkills';
import ProjectLink from '../ProjectLink/ProjectLink';
SwiperCore.use([Pagination,Navigation]);

export default function Project(props) {
  return (
    <div className="project">
        <Swiper navigation={true}>
            {props.infos.images.map(item => (
                <SwiperSlide>
                    <img src={item} alt="" />
                </SwiperSlide>
            ))}
        </Swiper>
        <div className="text-project">
            <ul>
                <li><ProjectTitle title={props.infos.title} /></li>
                <li>{props.infos.skillsUse.map(item => (<ProjectSkills name={item.name} color={item.color} />))}</li>
                <li><ProjectLink link={props.infos.link} /></li>
            </ul>
        </div>
    </div>
  )
}
