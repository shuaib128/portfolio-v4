import React, {useEffect} from 'react'
import { motion } from "framer-motion"
import CanvasViewWork from '../3DviewWorkDetail'
import { CodeWorkingOutline } from 'react-ionicons'

const SocialClone = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <CanvasViewWork />
            <motion.div
                className="workDetail"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 1.2, duration: .5, type: 'just', stiffness: 120}}
            >
                <div className="workdesBreadcrum">
                    <p className="current_page_name">Works</p>
                    <CodeWorkingOutline
                        className="to-work"
                        color={'#00000'}
                        height="20px"
                        width="20px"
                    />
                    <p className="current_page_project_name">
                        Anime Rec App
                    </p>
                </div>

                <div className="stack_blocks">
                    <div className="stack_block">
                        <p className="which_platform">PLATFORM</p>
                        <p className="type_platform">Web</p>
                    </div>
                    <div className="stack_block">
                        <p className="which_platform">STACK</p>
                        <p className="type_platform">
                            Objective-C++, Swift, BLVC CaffeNet Model
                        </p>
                    </div>
                    <div className="stack_block">
                        <p className="which_platform">SOURCE</p>
                        <a href="github.com/craftzdog/caffe-ios-sample" className="type_platform type_platform_a">
                            github.com/craftzdog/caffe-ios-sample
                        </a>
                    </div>
                    <div className="stack_block">
                        <p className="which_platform">VIEW</p>
                        <a href="facebook.com" className="type_platform type_platform_a">
                            facebook.com
                        </a>
                    </div>
                </div>

                <div className="work_detail_des">
                    <p>
                        Menkiki suggests ramen(Chinese noodle) shops based on a photo of ramen you want
                        to eat. Why? Because you don't need to input Japanese 
                        keywords to find restaurants, but just specify a ramen photo then it will 
                        suggest great shops for you. It supports 900+ famous ramen shops in Japan!
                        So, you can check a shop info as soon as you found a promising ramen shop 
                        in a food magazine. Let's go out and have a delicious ramen!
                    </p>

                    <img src="/Images/ProjectsImages/menkiki_eyecatch.png" alt="wkimage" />

                    <div className="images__work">
                        <img src="/Images/ProjectsImages/menkiki_02.jpg" alt="wkimage" />
                        <img src="/Images/ProjectsImages/menkiki_01.png" alt="wkimage" />
                    </div>

                    <ul>
                        <li>Ramen shop recommendation based on photo</li>
                        <li>Show shops near your current location</li>
                        <li>Open in Tabelog/Foursquare</li>
                    </ul>
                </div>
            </motion.div>
        </>
    )
}

export default SocialClone