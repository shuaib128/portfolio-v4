import React, { useState } from 'react'
import { expoDes } from './expericenceJson'

const Experience = () => {
    const experiences = ["Front-end", "Api", "App Development", "Full Stack", "Wordpress"]
    const [Istoggle, setIstoggle] = useState(0)
    const toggleTab = (tabIndex) => {
        setIstoggle(tabIndex)
    }

    return (
        <div id="experiencet_section" className="experience_section">
            <p className="about_me"><span>02.</span> Experience</p>

            <div className="experience_block">
                <div className="experience_block_button">
                    <div className="stickIndicator" style={{ top: 40 * Istoggle }}></div>
                    {experiences.map((expe, index) => (
                        <button
                            key={index}
                            className={Istoggle === index ? "activeTab" : "tab"}
                            onClick={() => toggleTab(index)}
                        >
                            {expe}
                        </button>
                    ))}
                </div>

                <div className="experience_block_inner">
                    {expoDes.map((des, index) => (
                        <div>
                            <p
                                id="desSkill"
                                className={Istoggle === index ? "openDesBox" : "closeDesBox"}
                                key={index}
                            >
                                <p className="desTitle">
                                    Experience <span>@{experiences[index]}</span>
                                </p>
                                {des.des}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
