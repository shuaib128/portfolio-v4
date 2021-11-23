import React, {useState} from 'react'

const HiddenNav = () => {
    const [NevActive, setNevActive] = useState(false)

    return (
        <div className="hidden_nav">
            <button className="hidden_nav_button" onClick={() => {
                NevActive ? setNevActive(false) : setNevActive(true)
            }}>
                {NevActive ?
                    <div className="ham-box">
                        <div className="ham-box-inner-close"></div>
                        <div className="ham-box-inner2-close"></div>
                    </div> :
                    <div className="ham-box-close">
                        <div className="ham-box-inner"></div>
                        <div className="ham-box-inner2"></div>
                        <div className="ham-box-inner3"></div>
                    </div>
                }
            </button>

            <div className={NevActive ? "hiddenbuttonPaddOpen": "hiddenbuttonPadd"}>
                <div className="hiddenbuttonPaddMain">
                    <li><a href="#"><span>01.</span> About</a></li>
                    <li><a href="#"><span>02.</span> Experience</a></li>
                    <li><a href="#"><span>03.</span> Work</a></li>
                    <li><a href="#"><span>04.</span> Contact</a></li>
                    <li className="resume_link"><a href="#">Resume</a></li>
                </div>
            </div>
        </div>
    )
}

export default HiddenNav
