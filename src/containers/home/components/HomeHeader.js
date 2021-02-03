import React, {useState} from "react";

import {Link} from "react-router-dom";

import "../styles/homeHeader.css";

import steveImg from "../../../images/Steve/steve4.jpg";

const HomeHeader = () => {
    const [nav__class, setNav__class] = useState("test");

    const [navBarShow, setNavBarShow] = useState(false);

    const [hd, setHd] = useState("hd");

    window.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        if (document.documentElement.scrollTop > 88) {
            setNav__class("headerscroll");

            setHd("hd1");

        } else {
            setNav__class("headerunscroll");

            setHd("hd");
        }
    };

    const navBar = () => {
        if (navBarShow === false) {
            setNavBarShow(true);
        } else {
            setNavBarShow(false);
        }
    };

    const scrollToDown = (height) => {
        window.scrollTo(0, height)

    }
    return (
        <>
            <div>
                <div className="headerbar">
                    <header className={nav__class}>
                        <div className="hd__col">
                            <div className="logo">
                                <span className="logo1">
                                    <img src={steveImg}
                                        alt="STEVEN OMOLE-ADEBOMI"
                                        className="logoColor"
                                        id="ServiceandMe"/>
                                </span>
                            </div>

                            <Link to="/"
                                className={hd}
                                id="hd1"
                                onClick={
                                    () => scrollToDown(0)
                            }>
                                Home
                            </Link>

                            <Link to="/"
                                className={hd}
                                id="hd2"
                                onClick={
                                    () => scrollToDown(600)
                            }>
                                About Me
                            </Link>

                            <Link to="/"
                                className={hd}
                                id="hd3"
                                onClick={
                                    () => scrollToDown(1100)
                            }>
                                My Works
                            </Link>

                            <Link to="/"
                                className={hd}
                                id="hd3"
                                onClick={
                                    () => scrollToDown(1800)
                            }>
                                Experiences
                            </Link>
                            <Link to="/"
                                className={hd}
                                id="hd3"
                                onClick={
                                    () => scrollToDown(3150)
                            }>
                                My Past Works
                            </Link>
                        </div>
                        <div className="shift__header__item__right">
                            <Link to="/" className="hd headBtn" id="hd4"
                                onClick={
                                    () => scrollToDown(3700)
                            }>
                                Contact Me
                            </Link>
                        </div>
                        <div className="logo-mobile">
                            <span className="logo1">
                                <img src={steveImg}
                                    alt="STEVEN OMOLE-ADEBOMI"
                                    className="logoColor"
                                    id="ServiceandMe"/>
                            </span>
                        </div>

                        <div className="menu__icon bar">
                            <div className="fa-stack fa-lg"
                                onClick={navBar}>
                                <i className="fa fa-bars fa-stack-1x"></i>
                            </div>
                        </div>
                        {
                        navBarShow && (
                            <div className="mobile__nav">
                                <h6 className="header__item__mobile"
                                    onClick={
                                        () => scrollToDown(0)
                                }>Home</h6>
                                <h6 className="header__item__mobile"
                                    onClick={
                                        () => scrollToDown(550)
                                }>About Me</h6>
                                <h6 className="header__item__mobile"
                                    onClick={
                                        () => scrollToDown(1900)
                                }>
                                    My Works
                                </h6>
                                {/* {
                                myWorksShow && (
                                    <h6 className="header__item__mobile__drop">
                                        <h6>Technology</h6>
                                        <h6>Career</h6>
                                    </h6>
                                )
                            } */}
                                <h6 className="header__item__mobile"
                                    onClick={
                                        () => scrollToDown(3500)
                                }>
                                    Experiences
                                </h6>
                                <h6 className="header__item__mobile"
                                    onClick={
                                        () => scrollToDown(6500)
                                }>My Past Works</h6>
                                <h6 className="header__item__mobile"
                                    onClick={
                                        () => scrollToDown(7050)
                                }>Reach Me</h6>
                            </div>
                        )
                    } </header>
                    {/* Start of Mobile View */}


                    {/* End of Mobile View */} </div>
            </div>
        </>
    );
};

export default HomeHeader;
