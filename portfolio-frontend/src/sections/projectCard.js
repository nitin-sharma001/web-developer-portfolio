import './projectCard.css';
import Html from '../assets/img/skills/HTML.png';
import CSS from '../assets/img/skills/CSS.png';
import JavaScript from '../assets/img/skills/Javascript.svg';
import React from '../assets/img/skills/React.png';
import NodeJs from '../assets/img/skills/NodeJs.svg';
import Tailwind from '../assets/img/skills/Tailwind.png';
import Express from '../assets/img/skills/Express.png';
import Git from '../assets/img/skills/Git.svg';
import Github from '../assets/img/skills/Github.svg';
import Mongodb from '../assets/img/skills/MongoDB.svg';
import Vercel from '../assets/img/skills/Vercel.svg';



const Card = (props) => {


        const id = props.id;
        const number = props.number;
        const heading = props.heading;
        const description = props.description;


    return(
        <div className="project-section" id="projects">

        <div className="project-container">
            <div className="project-card" id={id}>
                <div className="project-number project-number-right">{number}</div>
                <div className="project-content project-content-left">

                    <div className="project-skills-container">
                        <img src={Html} alt="" className="project-skill" />
                        <img src={CSS} alt="" className="project-skill" />
                        <img src={JavaScript} alt="" className="project-skill" />
                        <img src={React} alt="" className="project-skill" />
                        <img src={NodeJs} alt="" className="project-skill" />

                        <img src={Tailwind} alt="" className="project-skill" />

                        <img src={Express} alt="" className="project-skill" />
                        <img src={Git} alt="" className="project-skill" />
                        <img src={Github} alt="" className="project-skill" />

                        <img src={Mongodb} alt="" className="project-skill" />
                        <img src={Vercel} alt="" className="project-skill" />

                    </div>

                    <h2 className="project-heading">{heading} </h2>

                    <p className="project-subHeading">
                        {description}
                    </p>
                    {/* <div className="btn-grp">
                        <button className="btn-pink btn-project">Read More</button>
                        <a href="">
                        <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                        </a>
                        <a href="">
                        <i title="Live Link" className="fa-solid fa-link icon"></i>
                        </a>
                    </div> */}
                </div>
            </div>

        </div>

        </div>
            
    )
}


export default Card;