import React, { useState } from 'react';
import Navbar from './Navbar';
import "../styling/home_style.css";
import { faUser,faPlus,faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Profile() {

    const B= ["Java","Python","C++","AWS"];

    const [tick, setTick] = useState(new Set());

    const change = (language) => {
        const newTick = new Set(tick);

        if (tick.has(language)) {
            newTick.delete(language);
        } else {
            newTick.add(language);
        }
        setTick(newTick);
    };
    
    return (
        <div>
            <Navbar/>
            <div className='profile-box'>
                <div className='profile-cover'></div>
                <div className='profile-pic'>
                    <FontAwesomeIcon icon={faUser} className='fauser-style'/>
                </div>
                <div className='profile-info'>
                    <h3>Hrushi Patel</h3>
                    <p>Sattrix USA, LLC</p>
                </div>
            </div>
            <div className='profile-about'>
                <h3>About</h3>
                <p>
                Hello, I'm Hrushi, a passionate Computer Science enthusiast. My journey as a software developer 
                commenced during my undergraduate program in India, culminating in a Bachelor's of Technology 
                in Computer Science. 
                <br/>
                Throughout this academic journey, I maintained a steadfast commitment to continuous learning 
                and skill development, all with the goal of shaping a successful career.
                <br/>
                Upon completing my undergraduate program, I pursued my ambition further and recently achieved 
                a Master's degree in Computer Science from NYU, solidifying my expertise in the field. This 
                journey has equipped me with a strong foundation and a wealth of knowledge, and I'm eager to 
                leverage these experiences to contribute effectively to the world of technology.
                <br/>
                ✨My aspirations
                <br/>
                - I believe technology is the future, and it transforms our lives every day in some way or another. 
                Therefore, I want to be part of this evolving tech world and change the lives of people.
                <br/>
                - I want to be working on challenging things with people smarter than me. I want to keep 
                learning and growing both my technical and interpersonal skills so that I can strive to be 
                the most successful version of myself.
                <br/>
                Send me a message if you'd like to connect!
                </p>
            </div>
            <div className='profile-work'>
                <h3>Work Experience</h3>
                <h4> New York University</h4>
                <p>Master of Science - MS, Computer Science</p>
                <p>Sep 2021 - May 2023</p>
                <h4>SRM University</h4>
                <p>Bachelor of Technology - B.Tech, Computer Science</p>
                <p>July 2017 - May 2021</p>
            </div>
            <div className='profile-edw'>
                <div className='profile-education'>
                    <h3>Education</h3>
                    <h4> New York University</h4>
                    <p>Master of Science - MS, Computer Science</p>
                    <p>Sep 2021 - May 2023</p>
                    <h4>SRM University</h4>
                    <p>Bachelor of Technology - B.Tech, Computer Science</p>
                    <p>July 2017 - May 2021</p>
                </div>
                <div className='profile-skills'>
                    <h3>Skills</h3>
                    <div>
                        {
                            B.map((bs)=> {
                                return (
                                        <button onClick={() => change(bs)} key={bs} className='skill-button'>
                                            {tick.has(bs) ? (
                                                <div>
                                                    {bs} <FontAwesomeIcon icon={faCheck} />
                                                </div>
                                            ) : (
                                                <div>
                                                    {bs} <FontAwesomeIcon icon={faPlus} />
                                                </div>)}
                                        </button>
                            )})
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Profile;
