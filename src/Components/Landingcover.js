import React from 'react';
import './CSS/Landingcover.css';

const Landingcover = () => {
    return (
        <div className='Landingcover'>
            <div className='landingheadings'>
                <div className="nameheading">
                    <div className="headingone"><p>I</p><p className=
                    'coloredheader'>'</p><p>M</p></div>
                    <p>EASTON</p>
                    <div className="headingtwo"><p>SPENCER</p><p className='coloredheader'>.</p></div>
                </div>
                <div className="jobtitleone">FULL STACK</div>
                <div className="jobtitletwo">WEB DEVELOPER</div>
                <p className="abitaboutme">A Bit About Me</p>
                I am a React Full Stack Web Developer who is passionate about utilizing and growing my knowledge of Web Development. With a career in this field i'm excited about the prospect of challenging myself in bringing big-picture project ideas to life. The bulk of my current development experience involves a stack including React, Node, Express, Massive, and PostgreSQL.
            </div>
        </div>
    );
};

export default Landingcover;