import React from 'react'
import { Link } from 'react-router-dom'
import HiddenNav from './HiddenNav'

const Header = () => {
    return (
        <div className="header">
            <div className="logo_side">
                <a href="/home">
                    🖐 Shuaib Ahamed
                </a>
            </div>

            <div className="nav_side">
                <li><a href="#about_section"><span>01.</span> About</a></li>
                <li><a href="#experiencet_section"><span>02.</span> Experience</a></li>
                <li><a href="#work_section"><span>03.</span> Work</a></li>
                <li><a href="#"><span>04.</span> Contact</a></li>
                <li className="resume_link"><a href="#">Resume</a></li>
            </div>

            <HiddenNav />
        </div>
    )
}

export default Header
