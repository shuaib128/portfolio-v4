import React from 'react'
import { Link } from 'react-router-dom'
import HiddenNav from './HiddenNav'
import { motion } from "framer-motion"

const Header = () => {
    return (
        <div className="header">
            <div className="logo_side">
                <motion.p href="/"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .5, duration: .5, type: 'spring', stiffness: 120 }}
                >
                    <Link to="/">🖐 Shuaib Ahamed</Link>
                </motion.p>
            </div>

            <div className="nav_side">
                <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: .5, type: 'spring', stiffness: 120 }}
                >
                    <a href="/#about_section"><span>01.</span> About</a>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: .5, type: 'spring', stiffness: 120 }}
                >
                    <a href="/#experiencet_section"><span>02.</span> Experience</a>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: .5, type: 'spring', stiffness: 120 }}
                >
                    <a href="/#work_section"><span>03.</span> Work</a>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: .5, type: 'spring', stiffness: 120 }}
                >
                    <a href="/#contact_section"><span>04.</span> Contact</a>
                </motion.li>
                <motion.li
                    className="resume_link"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: .5, type: 'spring', stiffness: 120 }}
                >
                    <a href="/Files/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </motion.li>
            </div>

            <HiddenNav />
        </div>
    )
}

export default Header