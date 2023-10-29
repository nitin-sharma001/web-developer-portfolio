
import '../App.css';
import './skills-logo.css'
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

const skills = () => {
    return (
        <div>
            <section className="skills section" id="skills" >
                <h2 className="section-title">Skills</h2>

                <div id="skills" className="container skills-container ">
                    {/* <div className="skill-fade-text">Skills</div> */}


                    <div className="skill-container-left">
                        <h2 className="skills__subtitle" data-aos="fade-up">Profesional Skills</h2>
                        <p className="skills__text" data-aos="fade-up">Lorem 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque sunt in blanditiis, ullam soluta labore! Modi error cum aspernatur soluta. Consequuntur nobis laudantiu
                    .</p>
                        <div className="skills__data" data-aos="fade-up">
                            <div className="skills__names" >
                                <i className='bx bxl-html5 skills__icon'></i>
                                <span className="skills__name">HTML & CSS</span>
                            </div>
                            <div className="skills__bar skills__html">

                            </div>
                            <div>
                                <span className="skills__percentage">95%</span>
                            </div>
                        </div>
                        <div className="skills__data" data-aos="fade-up">
                            <div className="skills__names">
                                <i className='bx bxl-css3 skills__icon'></i>
                                <span className="skills__name">JAVASCRIPT</span>
                            </div>
                            <div className="skills__bar skills__css">

                            </div>
                            <div>
                                <span className="skills__percentage">85%</span>
                            </div>
                        </div>
                        <div className="skills__data" data-aos="fade-up">
                            <div className="skills__names">
                                <i className='bx bxl-javascript skills__icon' ></i>
                                <span className="skills__name">REACT</span>
                            </div>
                            <div className="skills__bar skills__js">

                            </div>
                            <div>
                                <span className="skills__percentage">65%</span>
                            </div>
                        </div>
                        <div className="skills__data" data-aos="fade-up">
                            <div className="skills__names">
                                <i className='bx bxs-paint skills__icon'></i>
                                <span className="skills__name">EXPRESS</span>
                            </div>
                            <div className="skills__bar skills__ux">

                            </div>
                            <div>
                                <span className="skills__percentage">85%</span>
                            </div>
                        </div>
                    </div>

                    <div className="skill-container-right" data-aos="zoom-in-left">

                        <img src={Html} alt="" className="skills-logo" />
                        <img src={CSS} alt="" className="skills-logo" />
                        <img src={JavaScript} alt="" className="skills-logo" />
                        <img src={React} alt="" className="skills-logo" />
                        <img src={NodeJs} alt="" className="skills-logo" />

                        <img src={Tailwind} alt="" className="skills-logo" />

                        <img src={Express} alt="" className="skills-logo" />
                        <img src={Git} alt="" className="skills-logo" />
                        <img src={Github} alt="" className="skills-logo" />

                        <img src={Mongodb} alt="" className="skills-logo" />
                        <img src={Vercel} alt="" className="skills-logo" />

                    </div>



                </div>
            </section>
        </div>
    )
}

export default skills;