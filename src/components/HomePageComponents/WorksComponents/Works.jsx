import React from 'react'
import { FolderOutline, LogoGithub } from 'react-ionicons'
import { Link } from 'react-router-dom';
import { Works_s } from './WorksList'


const Works = () => {
    return (
        <div id="work_section" className="works_section">
            <p className="about_me"><span>03.</span> Works</p>

            <div className="works">
                {Works_s.map((work, index) => (
                    <div className="work" key={index}>
                        <div className="file_github_diret_link">
                            <FolderOutline
                                color={'#64ffda'}
                                height="33px"
                                width="33px"
                            />
                            <LogoGithub
                                color={'#c9c9c9'}
                                height="23px"
                                width="23px"
                            />
                        </div>

                        <p className="title_project">
                            <Link to={"/works/" + index}>
                                {work.title}
                            </Link>
                        </p>
                        <p className="exe_project">{work.exe}</p>
                        
                        <div className="cats">
                            {work.cat.map((cat, index) => (
                                <p className="ct" key={index}>{cat}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Works
