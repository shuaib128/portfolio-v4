import React from 'react'
import { LogoGithub, LogoInstagram, LogoTwitter,
    LogoLinkedin
} from 'react-ionicons'
import { motion } from "framer-motion"
import AboutSectionSkillSets from './AboutSectionSkillSets'

const AboutMe = () => {
    return (
        <div id="about_section" className="about_section">
            <div className="about_detail_image">
                <div className="about_details">
                    <p className="about_me"><span>01.</span> About Me</p>
                    <p className="name">Shuaib Ahamed</p>
                    <p className="short_Des">
                        Digital Craftsman ( Artist / Developer / Designer )
                    </p>
                    <p className="me_description">
                        Shuaib is a freelance and a full-stack developer based in Osaka with a passion for 
                        building digital services/stuff he wants. He has a knack for all things launching products,
                        from planning and designing all the way to solving real-life problems with code.
                        <br></br>
                        When not online, he loves hanging out with his camera. Currently, he is living off
                        of his own product called Inkdrop.
                    </p>
                </div>

                <motion.div className="about_image"
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 1.5, duration: .5, type: "just", stiffness: 120}}
                >
                    <img src="/Images/AboutImage/1.jpg" alt="profile_image" />
                </motion.div>
            </div>

            <div className="social_icons">
                <a href="#">
                    <LogoGithub
                        color={'#64ffda'}
                        height="25px"
                        width="25px"
                    />
                </a>
                <a href="#">
                    <LogoInstagram
                        color={'#64ffda'}
                        height="25px"
                        width="25px"
                    />
                </a>
                <a href="#">
                    <LogoTwitter
                        color={'#64ffda'}
                        height="25px"
                        width="25px"
                    />
                </a>
                <a href="#">
                    <LogoLinkedin
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
