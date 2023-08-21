import React from 'react'
import { motion } from "framer-motion"

const Footer = () => {
    const now = new Date();
    const year = now.getFullYear();

    return (
        <motion.div className="footer_section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5, duration: .5, type: 'spring', stiffness: 120 }}
        >
            <p>© {year} Shuaib Ahamed. All Rights Reserved.</p>
        </motion.div>
    )
}

export default Footer
