import React, { useState, useEffect } from 'react'
import './Navbar.css'

import { Link as Anchor, useNavigate, useLocation } from "react-router-dom";




export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const [isOpen, setIsOpen] = useState(false)



    return (
        <header>
            <nav className={scrolled ? "navbar scrolled" : "navbar"}>
                <div className='logo'>
                    <img src="https://rivera-pro.github.io/juan-rivera-developer/img/logo.png" alt="logo" />
                </div>

                <div className={`nav_items ${isOpen && "open"}`} >

                    <div className='logo-nav'>
                        <img src="https://rivera-pro.github.io/juan-rivera-developer/img/logo.png" alt="logo" />

                    </div>

                    <div>
                        <div className='enlaces'>
                            <Anchor to={`/`} >Inicio</Anchor>
                            <Anchor to={`/`} >Blog</Anchor>
                            <Anchor to={`/`} >Tols</Anchor>
                            <Anchor to={`/`} >Docs</Anchor>
                        </div>
                        <div className="redes-sociales">
                            <Anchor to={`/`}><i className='fa fa-instagram'></i></Anchor>
                            <Anchor to={`/`}> <i className='fa fa-linkedin'></i></Anchor>
                            <Anchor to={`/`}> <i className='fa fa-github'></i></Anchor>
                        </div>

                    </div>

                </div>



                <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="redes-sociales1">
                    <Anchor to={`/`}><i className='fa fa-instagram'></i></Anchor>
                    <Anchor to={`/`}> <i className='fa fa-linkedin'></i></Anchor>
                    <Anchor to={`/`}> <i className='fa fa-github'></i></Anchor>
                </div>



            </nav>


        </header>
    )
}
