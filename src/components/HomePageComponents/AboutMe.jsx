import React from 'react'
import { LogoGithub, LogoInstagram, LogoTwitter,
    LogoLinkedin
} from 'react-ionicons'

const AboutMe = () => {
    return (
        <div className="about_section">
            <p className="about_me"><span>01.</span> About Me</p>
            <p className="name">Shuaib Ahamed</p>
            <p className="short_Des">
                Digital Craftsman ( Artist / Developer / Designer )
            </p>
            <p className="me_description">
                Shuaib is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop.
            </p>

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
        </div>
    )
}

export default AboutMe
