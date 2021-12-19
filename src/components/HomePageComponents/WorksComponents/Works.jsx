import React, {useState} from 'react'
import { FolderOutline, LogoGithub } from 'react-ionicons'
import { Link } from 'react-router-dom';
import sanityClient from './Client'


const Works = () => {
    const [Projects, setProjects] = useState(() => {
        sanityClient.fetch(`*[_type == "projects"]`)
        .then((data) => setProjects(data))
        .catch(console.error);
    })

    return (
        <div id="work_section" className="works_section">
            <p className="about_me"><span>03.</span> Works</p>

            <div className="works">
                {Projects && Projects.map((work, index) => (
                    <div className="work" key={index}>
                        <div className="file_github_diret_link">
                            <FolderOutline
                                color={'#64ffda'}
                                height="33px"
                                width="33px"
                            />
                            <a href={work && work.source}>
                            <LogoGithub
                                color={'#c9c9c9'}
                                height="23px"
                                width="23px"
                            />
                            </a>
                        </div>

                        <p className="title_project">
                            <Link to={"/works/" + index}>
                                {work.title}
                            </Link>
                        </p>
                        <p className="exe_project">{work.excerpt.slice(0, 100)}....</p>
                        
                        <div className="cats">
                            {work.category && work.category.map((cat, index) => (
                                <p className="ct" key={index}>{cat.cat}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Works
