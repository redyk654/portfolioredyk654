import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Banner() {
    return (
        <div className="banner">
            <h1 style={{color: '#3f93b2'}}>Welcome</h1>
                <Typewriter
                    onInit={(text) => {
                        text.typeString("<span style='color: #464646'>Hi i am <strong>Chris</strong>,</span>")
                        .changeDeleteSpeed(25)
                        .pauseFor(300)
                        .typeString("<spanHi> Web<strong style='color: #ec9645'> Designer</strong></spanHi>")
                        .pauseFor(1000)
                        .deleteChars(12)
                        .typeString("Dev <span style='color: #ffdd52'><strong>JavaScript</strong></span>")
                        .pauseFor(1000)
                        .deleteChars(11)
                        .typeString("<span style='color: #674ad9'><strong> PHP</strong></span>")
                        .pauseFor(1000)
                        .deleteChars(4)
                        .typeString("<span style='color: #0f5ac3'><strong> React</strong></span>")
                        .start()
                    }}
                />
                <a href="#about" className='visit'>visit</a>
        </div>
    )
}
