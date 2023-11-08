import React from 'react';
import { FolderOutline, LogoGithub, OpenOutline } from 'react-ionicons'
import { Works_s } from './WorksList';

const Works = () => {

    return (
        <div id="work_section" className="works_section">
            <p className="about_me"><span>03. </span> Some Things I’ve Built</p>

            <div className="works">
                {Works_s.map((work, index) => {
                    let gridColumnRightOrLeftImage = (index + 1) % 2 === 0 ? "1 / 8" : "7 / -1";
                    let gridColumnRightOrLeftDescription = (index + 1) % 2 === 0 ? "7 / -1" : "1 / 8";
                    let alignRightOrLeft = (index + 1) % 2 === 0 ? "end" : "start";

                    return (
                        <div
                            className="work"
                            key={index}
                        >
                            <div
                                className="project-image"
                                style={{
                                    gridColumn: gridColumnRightOrLeftImage
                                }}
                            >
                                <img
                                    src={work.previewImg}
                                    alt="project-preview-iamge"
                                />
                            </div>

                            <div
                                className="project-description"
                                style={{
                                    gridColumn: gridColumnRightOrLeftDescription
                                }}
                            >
                                <div
                                    className="featuredandtitle"
                                    style={{
                                        textAlign: alignRightOrLeft
                                    }}
                                >
                                    <p className="featured_project_text">Featured Project</p>
                                    <p className="title_project">{work.title}</p>
                                </div>

                                <div className="description_text">
                                    <p>{work.exe}</p>
                                </div>

                                <div
                                    className="cats"
                                    style={{
                                        textAlign: alignRightOrLeft
                                    }}
                                >
                                    {work.cat.map((cat, index) => (
                                        <p className="ct" key={index}>{cat}</p>
                                    ))}
                                </div>

                                <div
                                    className="link-icons"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: alignRightOrLeft
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
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Works
