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
                        Digital Craftsman ( Student / Developer / Gamer )
                    </p>
                    <p className="me_description">
                        Shuaib is a CS student and a full-stack developer based in Lynnwood, WA with a passion for 
                        building digital services/stuff he wants. He has a knack for all things launching products,
                        from planning and designing all the way to solving real-life problems with code.
                        <br></br>
                        When not online, he loves hanging out with his camera. Currently, he is studing
                        CS at Edmonds College Lynnwood, WA.
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
                <a href="https://github.com/shuaib128" target={"_blank"}>
                    <LogoGithub
                        color={'#64ffda'}
                        height="25px"
                        width="25px"
                    />
                </a>
                <a href="https://www.instagram.com/ahamed_shuaib/" target={"_blank"}>
                    <LogoInstagram
                        color={'#64ffda'}
                        height="25px"
                        width="25px"
                    />
                </a>
                <a href="https://twitter.com/beingshuiab" target={"_blank"}>
                    <LogoTwitter
                        color={'#64ffda'}
                        height="25px"
                        width="25px"
                    />
                </a>
                <a href="https://www.linkedin.com/in/shuib-ahamed-91ab52199/" target={"_blank"}>
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
