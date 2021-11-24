import React from 'react'
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <motion.div className="footer_section"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: .5, duration: .5, type: 'spring', stiffness: 120}}
        >
            <p>© 2021 Takuya Matsuyama. All Rights Reserved.</p>
        </motion.div>
    )
}

export default Footer
