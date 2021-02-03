import React from "react";

import {Ripple} from "react-preloaders";

import AOS from "aos";

import "aos/dist/aos.css";

import "../styles/homeBody.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import {Carousel} from 'react-responsive-carousel';

import mypic from "../../../images/Steve/steve3.jpg";

import fullStack from "../../../images/g2.jpg";

import writing from "../../../images/g2.jpg";

import coaching from "../../../images/g2.jpg";

// import the portfolio images.
import portA1 from "../../../images/portfolio/Screenshot from 2021-02-03 01-37-05.png";

import portA2 from "../../../images/portfolio/Screenshot from 2021-02-03 01-37-17.png";

import portB1 from "../../../images/portfolio/Screenshot from 2021-02-03 01-38-26.png";

import portB2 from "../../../images/portfolio/Screenshot from 2021-02-03 01-38-39.png";

import portC1 from "../../../images/portfolio/Screenshot from 2021-02-03 01-39-48.png";

import portC2 from "../../../images/portfolio/Screenshot from 2021-02-03 01-40-05.png";

import portD1 from "../../../images/portfolio/Screenshot from 2021-02-03 01-48-39.png";

import portD2 from "../../../images/portfolio/Screenshot from 2021-02-03 01-49-12.png";

import portE1 from "../../../images/portfolio/Screenshot from 2021-02-03 02-00-36.png";

import portE2 from "../../../images/portfolio/Screenshot from 2021-02-03 02-00-31.png";

import portF1 from "../../../images/portfolio/Screenshot from 2021-02-03 09-28-47.png";

import portF2 from "../../../images/portfolio/Screenshot from 2021-01-16 15-00-17.png";


const HomeBody = () => {
    AOS.init();
    return (
        <>
            <Ripple color={"rgb(0, 68, 72)"}
                background="white"
                time={3000}
                customLoading={false}/>
            <div className="bodyContainer" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine">
                <section className="first__layer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    <div>.</div>

                    <h2 className="mypicture__class">
                        <img src={mypic}
                            alt="steven"
                            className="mypicture"/>
                    </h2>
                    <h2 className="first__layer__top">Hello, I'm Steven Omole-Adebomi</h2>
                    <h5 className="first__layer__bottom">
                        Full Stack Web Developer / Software Engineer
                    </h5>
                </section>

                <section className="second__layer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    <h2 className="aboutMe">About Me</h2>

                    <div className="layer__container">
                        <div className="second__layer__pic__class">
                            <img src={mypic}
                                alt="steven"
                                className="second__layer__pic"/>
                        </div>
                        <div className="second__layer__right">
                            <h3 className="second__layer__title">Who Am I?</h3>
                            <h5 className="second__layer__desc1">
                                Nice to meet you, I am Steven Omole-Adebomi, a Full Stack Web Developer / Software Engineer
                            </h5>

                            <h6 className="second__layer__desc2">
                                As a
                                <b> {" "}
                                    Frontend / Full Stack Web developer {" "} </b>
                                who has acquired proficient development in new areas and technologies since the past 3 years, I have learnt both from self taught and team work experiences to deliver excellent communication skills including ability to distill technical details into human terms, learn quickly new technologies and work in highly collaborative and open communicative environments.         proper software engineering techniques and practices.
                            </h6>

                            <h6 className="second__layer__desc2">
                                My self taught and team work experiences have made me to become a technical writer on Medium and LinkedIn.
                            </h6>
                            <h6 className="bookMeClass">
                                <div className="bookMe">Book Me</div>
                            </h6>
                        </div>
                    </div>

                </section>
                {/* What do I do? */}
                <section className="services" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    <div>.</div>
                    <h3 className="serv1">What do I do?</h3>
                    <h6 className="serv2">I Am Available For Hire Or Booking.</h6>

                    <div className="layer__container">
                        {/* <div className="" */}
                        <div className="containerr">
                            <div className="row mt-3">
                                <div className="col-sm-12 col-lg-6 col-xl-4 col-md-6">
                                    <div className="card2 third--layer--card">
                                        <div className="third__card__image">
                                            <img src={fullStack}
                                                className="service__image"
                                                alt="Past works"/>
                                        </div>
                                        <h5 className="third__card__title">
                                            Full Stack Web Development
                                        </h5>
                                        <h6 className="third__card__desc">
                                            <li className="skill__content__bullet">
                                                I am capable of designing a full functional website for your company or yourself like this one.
                                            </li>
                                            <li className="skill__content__bullet">
                                                I develop websites with the LAMP (Linux, Apache, Mysqli, PHP) or MERN (MongoDB, ExpressJs, ReactJs, NodeJs) Stacks.
                                            </li>
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-6 col-xl-4 col-md-6">
                                    <div className="card2 third--layer--card">
                                        <div className="third__card__image">
                                            <img src={writing}
                                                alt="Steven Speaks"
                                                className="service__image"/>
                                        </div>
                                        <h5 className="third__card__title">Speaking & Writing.</h5>
                                        <h6 className="third__card__desc">
                                            <li className="skill__content__bullet">
                                                As someone who loves to see people progress in life, I love to impart lives through speaking and writing.
                                            </li>
                                            <li className="skill__content__bullet">
                                                I speak on career and leadership. I also write on medium and linkedin. Book me or follow me on social media via the links on the footer.
                                            </li>
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-6 col-xl-4 col-md-6">
                                    <div className="card2 third--layer--card">
                                        <div className="third__card__image">
                                            <img src={coaching}
                                                alt="imag"
                                                className="service__image"/>
                                        </div>
                                        <h5 className="third__card__title">
                                            Coaching And Mentorship
                                        </h5>
                                        <h6 className="third__card__desc">
                                            <li className="skill__content__bullet">
                                                I provide mentorship and coaching services to people who are starting their career in tech
                                            </li>
                                        </h6>
                                        <h6 className="third__card__desc newline">
                                            <div className="sendBtnCon">
                                                <a href="https://wa.me/2349056409882?text=Hi!%20I'm%20interested%20in%20this%20your%20service.%20____%20my%20name%20is%20____%20Thanks" target="__blank" className="sendBtn">Contact Me</a>
                                            </div>
                                        </h6>
                                        <h6 className="third__card__desc newline">
                                            <div className="sendBtnCon">
                                                <a href="https://cutt.ly/steven__omole__adebomi" target="__blank" className="sendBtn">My CV</a>
                                            </div>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Skills & Experiences */}
                <section className="skill__layer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    <div className="layer__container">
                        <div className="left__skill__layer">
                            <div className="dot">.</div>
                            <h2 className="skill__layer__headline">Experiences & Honors</h2>
                            <div className="skill__container">
                                <h6 className="skill__year">
                                    <p className="year">2020</p>
                                </h6>
                                <h5 className="skill__title">
                                    Enyata's Top 50 Winners Out of 5,000 Contestants.
                                </h5>
                                <p className="skill__content">
                                    <li className="skill__content__bullet">
                                        Aced up the first stage to be among the 2,000 shortlisted contestants.
                                    </li>
                                    <li className="skill__content__bullet">
                                        Aced up the second stage to be among the 200 shortlisted contestants.
                                    </li>
                                    <li className="skill__content__bullet">
                                        Aced up the the last stage to be among the 50 contestants given a MacBook Pro 2020 PC.
                                    </li>
                                </p>
                            </div>
                            <div className="skill__container">
                                <h6 className="skill__year">
                                    <p className="year">2019</p>
                                </h6>
                                <h5 className="skill__title">
                                    Two Different University Honorary Letter
                                </h5>
                                <p className="skill__content">
                                    <li className="skill__content__bullet">
                                        Received a letter of recommendation from my college.
                                    </li>
                                    <li className="skill__content__bullet">
                                        Received a letter of excellence to mark my impacts.
                                    </li>
                                </p>
                            </div>
                            <div className="skill__container">
                                <h6 className="skill__year">
                                    <p className="year">2019</p>
                                </h6>
                                <h5 className="skill__title">
                                    University Honorary Plaque Award of Productivity And Excellence.
                                </h5>
                                <p className="skill__content">
                                    <li className="skill__content__bullet">
                                        Received an award in recognition of my positive imparts made through competitions for my my university along side other colleagues during the graduating set productivity and excellence awards day.
                                    </li>
                                </p>
                            </div>
                            <div className="skill__container">
                                <h6 className="skill__year">
                                    <p className="year">2019</p>
                                </h6>
                                <h5 className="skill__title">
                                    First Runner Up NCPC / APCP'19
                                </h5>
                                <p className="skill__content">
                                    <li className="skill__content__bullet">
                                        Was a member of a team of four who took second place at the Nigeria Collegiate Programming Contest / Africa & Arab Collegiate Programming Contest.
                                    </li>
                                    <li className="skill__content__bullet">
                                        The team was sent and coached by the head of computer science department to represent the university.
                                    </li>
                                </p>
                            </div>

                        </div>
                        <div className="right__skill__layer">
                            <h2 className="skill__layer__headline">Education</h2>
                            <div className="skill__container">
                                <h6 className="skill__year">
                                    <p className="year">2017 - 2020</p>
                                </h6>
                                <h5 className="skill__title">
                                    Bachelor of Technology, Federal University of Technology Akure.
                                </h5>
                                <p className="skill__content">
                                    Currently a second class upper fourth year college student who is into the field of Cyber security and computer science but loves to practice software engineering.
                                </p>
                            </div>
                            <div className="skill__container">
                                <h6 className="skill__year">
                                    <p className="year">2018 - 2019</p>
                                </h6>
                                <h5 className="skill__title">Software Director</h5>
                                <p className="skill__content">
                                    <li className="skill__content__bullet">
                                        Served as a software director for a faculty (of computing) with over 1500 students.
                                    </li>
                                    <li className="skill__content__bullet">
                                        Competed for the post a day before the election and still had a vote count twice as more than my competitior.
                                    </li>
                                </p>
                            </div>
                            <div className="skill__container">
                                <h6 className="skill__year">
                                    <p className="year">2020</p>
                                </h6>
                                <h5 className="skill__title">Startup School Fellow.</h5>
                                <p className="skill__content">
                                    Enrolled as a successful fellow of the startup school in combination with YCombinator.
                                </p>
                                <p className="skill__content">
                                    Applied for the YCombinator programme.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="carousel__layer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    <h4 className="carousel__headline">My Past Works.</h4>
                    <Carousel className="carousel__container">
                        <div className="carousel__slide">
                            <img src={portA1}
                                className="carousel__image"
                                alt="Past works"/>

                            <img src={portA2}
                                className="carousel__image"
                                alt="Past works"/>
                            <a href="https://serviceandme.com" target="__blank">
                                <p className="legend course__title">ServiceandMe - Frontend Developer (ReactJs). Click me to view.</p>
                            </a>
                        </div>
                        <div className="carousel__slide">
                            <img src={portB1}
                                className="carousel__image"
                                alt="Past works"/>

                            <img src={portB2}
                                className="carousel__image"
                                alt="Past works"/>
                            <a href="https://martln.netlify.com" target="__blank">
                                <p className="legend course__title">MartLn - Full Stack Developer (ReactJs & NodeJs). Click me to view.</p>
                            </a>
                        </div>
                        <div className="carousel__slide">
                            <img src={portC1}
                                className="carousel__image"
                                alt="Past works"/>

                            <img src={portC2}
                                className="carousel__image"
                                alt="Past works"/>
                            <a href="https://ifamlm.netlify.com" target="__blank">
                                <p className="legend course__title">IFA - Full Stack Developer (ReactJs & NodeJs). Click me to view.</p>
                            </a>
                        </div>
                        <div className="carousel__slide">
                            <img src={portD1}
                                className="carousel__image"
                                alt="Past works"/>

                            <img src={portD2}
                                className="carousel__image"
                                alt="Past works"/>
                            <a href="https://dashingsplash.com" target="__blank">
                                <p className="legend course__title">DashingSplash - Full Stack Developer (Boostrap & PHP 7). Click me to view.</p>
                            </a>
                        </div>
                        <div className="carousel__slide">
                            <img src={portE1}
                                className="carousel__image"
                                alt="Past works"/>

                            <img src={portE2}
                                className="carousel__image"
                                alt="Past works"/>
                            <a href="https://dashingsplash.com" target="__blank">
                                <p className="legend course__title">ShapeApp - JavaScript Developer (ReactJs). Click me to view.</p>
                            </a>
                        </div>
                        <div className="carousel__slide">
                            <img src={portF1}
                                className="carousel__image"
                                alt="Past works"/>

                            <img src={portF2}
                                className="carousel__image"
                                alt="Past works"/>
                            <a href="https://github.com/omosteven/" target="__blank">
                                <p className="legend course__title">My Github Backend Repositories (NodeJs). Click me to view.</p>
                            </a>
                        </div>
                    </Carousel>
                </section>
                {/* End of Contact Us section */}
                <section className="last__layer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    <h2 className="aboutMe">Contact Me</h2>
                    <h6 className="last__layer__title2">
                        Feel free to reach out to me for booking, hiring or freelance (gig).
                    </h6>

                    <div className="last_layer__container">
                        <div className="input__cont">
                            <input type="text" placeholder=" Fullname" className="layer__input__half fullname--input"/>
                            <input type="email" placeholder=" Email" className="layer__input__half"/>
                        </div>
                        <div className="input__cont">
                            <input type="text" placeholder=" Subject" className="layer__input__full"/>
                        </div>
                        <div className="input__cont">
                            <textarea type="text" placeholder=" Message" className="layer__textarea__full"></textarea>
                        </div>
                        <div className="sendBtnCon">
                            <button className="sendBtn">SEND</button>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};

export default HomeBody;
