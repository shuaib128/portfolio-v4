import React from 'react'
import {
    LogoGithub, LogoInstagram, LogoLinkedin
} from 'react-ionicons'
import { motion } from "framer-motion"
import AboutSectionSkillSets from './AboutSectionSkillSets'

const AboutMe = () => {
    return (
        <div id="about_section" className="about_section">
            <div className="about_detail_image">
                <div className="about_details">
                    <p className="about_me"><span>01. </span> About Me</p>
                    <p className="name">Shuaib Ahamed</p>
                    <p className="short_Des">
                        Digital Craftsman ( Student / Developer / Gamer )
                    </p>
                    <p className="me_description">
                        Shuaib, a CS student at Edmonds College in Lynnwood, Washington, is a budding software engineer with expertise in Python, JavaScript (ES6+), TypeScript, React, React Native, Next.js, WordPress, Docker, Django, and Django REST.
                        <br></br>
                        Skilled in developing digital solutions from concept to code, he's passionate about solving real-world problems with technology. When he's not programming, he enjoys photography. Shuaib's diverse skill set positions him well for roles in software engineering and development.
                    </p>
                </div>

                <motion.div className="about_image"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: .5, type: "just", stiffness: 120 }}
                >
                    <img src="/Images/AboutImage/1.jpg" alt="profile_image" />
                </motion.div>
            </div>

            <div className="social_icons">
                <a
                    href="https://github.com/shuaib128"
                    rel="noreferrer"
                    target={"_blank"}
                    title='Github'
                >
                    <LogoGithub
                        color={'#64ffda'}
                        height="25px"
                        width="25px"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/shuaib-ahamed-194384238/"
                    rel="noreferrer"
                    target={"_blank"}
                    title='LinkedIn'
                >
                    <LogoLinkedin
                        color={'#64ffda'}
                        height="25px"
                        width="25px"
                    />
                </a>
                <a
                    href="https://www.instagram.com/ahamed_shuaib/"
                    rel="noreferrer"
                    target={"_blank"}
                    title='Instagram'
                >
                    <LogoInstagram
                        color={'#64ffda'}
                        height="25px"
                        width="25px"
                    />
                </a>
            </div>

            <AboutSectionSkillSets />
        </div>
    )
}

export default AboutMe
