import React from 'react';
import { FolderOutline, LogoGithub, OpenOutline } from 'react-ionicons'
import { Link } from 'react-router-dom';
import { Works_s } from './WorksList';

const Works = () => {

    return (
        <div id="work_section" className="works_section">
            <p className="about_me"><span>03.</span> Works</p>

            <div className="works">
                {Works_s.map((work, index) => {
                    return (
                        <div
                            className="work"
                            key={index}
                        >
                            <div className="file_github_diret_link">
                                <FolderOutline
                                    color={'#64ffda'}
                                    height="33px"
                                    width="33px"
                                />

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center"
                                    }}
                                >
                                    {work.source !== "" ?
                                        <a
                                            style={{
                                                marginRight: "10px"
                                            }}
                                            href={work.source}
                                            target={"_blank"}
                                            rel="noreferrer"
                                            title='Github'
                                        >
                                            <LogoGithub
                                                color={'#c9c9c9'}
                                                height="23px"
                                                width="23px"
                                            />
                                        </a> :
                                        <div></div>
                                    }

                                    <a
                                        href={work.view}
                                        target={"_blank"}
                                        rel="noreferrer"
                                        title='External Link'
                                    >
                                        <OpenOutline
                                            color={'#c9c9c9'}
                                            height="23px"
                                            width="23px"
                                        />
                                    </a>
                                </div>
                            </div>

                            <p className="title_project">
                                <a
                                    href={work.source}
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    {work.title}
                                </a>
                            </p>
                            <p className="exe_project">{work.exe.slice(0, 100)}....</p>

                            <div className="cats">
                                {work.cat.map((cat, index) => (
                                    <p className="ct" key={index}>{cat}</p>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Works
