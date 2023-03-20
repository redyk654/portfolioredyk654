import React from 'react';
import './Skill.css';

export default function Skill(props) {
    return (
        <article className="skill">
            <div>
                <img src={props.skillImg} alt="skill" />
            </div>
            <p className="text-skill" style={{color: `${props.skillColor}`}}>
                {props.skillName}
            </p>
        </article>
    )
}
