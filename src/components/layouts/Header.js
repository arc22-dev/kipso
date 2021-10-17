import React from 'react'

import { Link } from 'react-router-dom';

export default function Header() {
    const menuToggler = () => {
        const mainNav = document.querySelector(".main-navigation");
        mainNav.style.display = "block" !== mainNav.style.display ? "block" : "none";
    }
    return (
        <>
            <header className="site-header site-header__header-one ">
                <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky ">
                    <div className="container clearfix">
                        <div className="logo-box clearfix"><a className="navbar-brand" href="index.html"><img
                            src="assets/images/logo-dark.png" className="main-logo" width="128" alt="Awesome Logo" /></a>
                            <div className="header__social"><a href="/"><i className="fab fa-twitter"></i></a><a href="/"><i
                                className="fab fa-facebook-square"></i></a><a href="/"><i className="fab fa-pinterest-p"></i></a><a
                                    href="/"><i className="fab fa-instagram"></i></a></div><button className="menu-toggler" onClick={menuToggler}><span
                                        className="kipso-icon-menu"></span></button>
                        </div>
                        <div className="main-navigation">
                            <ul className=" navigation-box">
                                <li className="current"><Link to="index.html">Home</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/">Home 01</Link></li>
                                        <li><Link to="/">Home 02</Link></li>
                                        <li><Link to="/">Home 03</Link></li>
                                        <li><Link to="/">Header Versions</Link>
                                            <ul className="sub-menu">
                                                <li><Link to="/">Header 01</Link></li>
                                                <li><Link to="/">Header 02</Link></li>
                                                <li><Link to="/">Header 03</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><Link to="/">Pages</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/about">About Page</Link></li>
                                        <li><Link to="/gallery">Gallery</Link></li>
                                        <li><Link to="/pricing">Pricing Plans</Link></li>
                                        <li><Link to="/faq">FAQ&#x27;S</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="courses">Courses</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/courses">Courses</Link></li>
                                        <li><Link to="/course-details">Courses Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/teachers">Teachers</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/teachers">Teachers</Link></li>
                                        <li><Link to="/teacher-details">Teachers Details</Link></li>
                                        <li><Link to="/become-teacher">Become Teacher</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/news">News</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/news">News Page</Link></li>
                                        <li><Link to="/news-details">News Details</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="right-side-box"><a className="header__search-btn search-popup__toggler search-toggle" href="/"><i
                            className="kipso-icon-magnifying-glass"></i></a></div>
                    </div>
                </nav>
                <div className="site-header__decor">
                    <div className="site-header__decor-row">
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-1"></div>
                        </div>
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-2"></div>
                        </div>
                        <div className="site-header__decor-single">
                            <div className="site-header__decor-inner-3"></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
