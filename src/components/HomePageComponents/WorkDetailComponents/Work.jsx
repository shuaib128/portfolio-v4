import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import CanvasViewWork from '../3DviewWorkDetail'
import { CodeWorkingOutline } from 'react-ionicons'
import { useParams } from 'react-router-dom'
import sanityClient from '../WorksComponents/Client'
const BlockContent = require('@sanity/block-content-to-react')


const serializers = {
    types: {
        code: (props) => (
            <pre data-language={props.node.language}>
                <code>{props.node.code}</code>
            </pre>
        ),
    },
}

const AnimeApp = () => {
    const { id } = useParams()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [Project, setProject] = useState(() => {
        sanityClient.fetch(`*[_type == "projects"][${id}]`)
            .then((data) => setProject(data))
            .catch(console.error);
    })

    return (
        <>
            <CanvasViewWork />
            <motion.div
                className="workDetail"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: .5, type: 'just', stiffness: 120 }}
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
                        {Project && Project.title}
                    </p>
                </div>

                <div className="stack_blocks">
                    <div className="stack_block">
                        <p className="which_platform">PLATFORM</p>
                        <p className="type_platform">{Project && Project.platform}</p>
                    </div>
                    <div className="stack_block">
                        <p className="which_platform">STACK</p>
                        <p className="type_platform">
                            {Project && Project.stack}
                        </p>
                    </div>
                    <div className="stack_block">
                        <p className="which_platform">SOURCE CODE</p>
                        <a href={Project && Project.source} className="type_platform type_platform_a">
                            View Source Code
                        </a>
                    </div>
                    <div className="stack_block">
                        <p className="which_platform">VIEW</p>
                        <a href={Project && Project.view} className="type_platform type_platform_a">
                            See Demo
                        </a>
                    </div>
                </div>

                <div className="work_detail_des">
                    <BlockContent
                        blocks={Project && Project.body}
                        serializers={serializers}
                        imageOptions={{ w: 620, h: 540, fit: 'max' }}
                        projectId="dka9odgj"
                        dataset="production"
                    />
                </div>
            </motion.div>
        </>
    )
}

export default AnimeApp