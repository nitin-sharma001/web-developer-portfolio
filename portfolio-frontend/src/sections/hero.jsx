import image from '../assets/img/about.jpg';
import '../App.css';
import heroImage from "../assets/img/nithin.png";
import Typewriter from "typewriter-effect";

import { useState } from 'react';

const hero = () => {

    

    return (
        <div>
            <section className="home bd-grid" id="home">
                <div className="home__data" data-aos="fade-up">
                    <h1 className="home__title" >Hi,<br/>I'am <span className="home__title-color">John</span><br/> 
                    <span className='role'> 
                        <Typewriter
                            options={
                                {
                                    autoStart: true,
                                    loop: true,
                                    delay: 40,
                                    strings: [
                                        "Full Stack Developer",
                                        "Web Developer",
                                        "Backend Developer",
                                        "Coder",
                                    ]
                                }
                            }
                        ></Typewriter>
                    </span></h1>

                    <a href="#contact" className="button" data-aos="fade-up">Contact</a>
                </div>

                <div className="home__social">
                    <a href="" className="home__social-icon" ><i className='bx bxl-linkedin'></i></a>
                    <a href="" className="home__social-icon"><i className='bx bxl-behance' ></i></a>
                    <a href="" className="home__social-icon"><i className='bx bxl-github' ></i></a>
                </div>

                <div className="home__img" data-aos="fade-up">
                    <svg className="home__blob" viewBox="0 0 479 467" >
                        <mask id="mask0" mask-type="alpha">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                            <image className="home__blob-img" x="50" y="1" href={heroImage}/>
                        </g>
                    </svg>
                </div>
            </section>

            {/* <!--===== ABOUT =====--> */}
            <section className="about section " id="about">
                <h2 className="section-title" data-aos="fade-up">About</h2>

                <div className="about__container bd-grid">
                    <div className="about__img" data-aos="fade-up">
                        <img src="https://e1.pxfuel.com/desktop-wallpaper/795/927/desktop-wallpaper-hero-nithin-pics-hero-nithiin.jpg" alt=""></img>
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle" data-aos="fade-up">I'am John Doe</h2>
                        <p className="about__text" data-aos="fade-up">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
                    </div>                                   
                </div>
            </section>
        </div>
    )
}


export default hero;