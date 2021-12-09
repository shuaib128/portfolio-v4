import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import CanvasView from './3Dview';
import AboutMe from './Aboutomponents/AboutMe';
import Experience from './ExperienceComponents/Experience';
import Works from './WorksComponents/Works';
import Contact from '../Contact';

const HomePage = () => {
    return (
        <>
            <CanvasView />
            <div className="abouts_section">
                <ScrollAnimation animateIn="animate__fadeIn">
                    <AboutMe />
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__fadeIn">
                    <Experience />
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__fadeIn">
                    <Works />
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__fadeIn">
                    <Contact />
                </ScrollAnimation>
            </div>
        </>
    )
}

export default HomePage
