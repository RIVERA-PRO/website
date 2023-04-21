import React from 'react'
import { Link as Anchor, } from "react-router-dom";
import './Footer.css'

export default function FooterC() {
    return (
        <div className='contain-footer '>

            <div className='Footer-contain '>

                <div className='Footer-links '>
                    <div className='logo'>
                        <img src="https://rivera-pro.github.io/juan-rivera-developer/img/logo.png" alt="logo" />
                    </div>

                    <Anchor to={`/`} >indiojuan2012.jr@gmail.com</Anchor>
                    <Anchor to={`/`} >+54 3875683101</Anchor>
                    <Anchor to={`/`} > Salta, Argentina</Anchor>

                </div>
                <div className='Footer-links'>
                    <h4>Links</h4>
                    <Anchor to={`/`} >Inicio</Anchor>
                    <Anchor to={`/`} >Blog</Anchor>
                    <Anchor to={`/`} >Tols</Anchor>
                    <Anchor to={`/`} >Docs</Anchor>
                </div>
                <div className='Footer-links'>
                    <h4>Front-end</h4>
                    <Anchor to={`/`} >JavaScript</Anchor>
                    <Anchor to={`/`} >React</Anchor>
                    <Anchor to={`/`} >Html5</Anchor>
                    <Anchor to={`/`} >Sass</Anchor>
                    <Anchor to={`/`} >Css3</Anchor>
                </div>
                <div className='Footer-links'>
                    <h4>Back-end</h4>
                    <Anchor to={`/`} >Node</Anchor>
                    <Anchor to={`/`} >Express</Anchor>
                    <Anchor to={`/`} >MongoDB</Anchor>
                    <Anchor to={`/`} >JavaScript</Anchor>
                    <Anchor to={`/`} >Node</Anchor>
                </div>

            </div>

            <hr />

            <div className='footer-footer'>
                <div className="redes-socialesf">
                    <Anchor to={`/`}><i className='fa fa-twitter'></i></Anchor>
                    <Anchor to={`/`}><i className='fa fa-instagram'></i></Anchor>
                    <Anchor to={`/`}> <i className='fa fa-linkedin'></i></Anchor>
                    <Anchor to={`/`}> <i className='fa fa-github'></i></Anchor>
                </div>
                <p>Copyright © 2023 JR DEV | Reservados todos los derechos</p>
            </div>
        </div>
    )
}
