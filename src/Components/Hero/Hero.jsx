import React, { useRef } from 'react';
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReact,
    faHtml5,
    faCss3,
    faNodeJs,
    faJs,
    faBootstrap,

} from '@fortawesome/free-brands-svg-icons';

import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import Codigo from '../Codigo/Codigo';
export default function Hero() {
    const codeRef = useRef(null);

    const copyToClipboard = () => {
        const textToCopy = `const bienvenida = () => {
            const sobreMi = {
              nombre: 'Juan',
              apellido: 'Rivera',
              imagen: 'bautista.jpg',
              edad: 22,
              país: 'Argentina',
             
            }
            return sobreMi;
          }`;
        navigator.clipboard.writeText(textToCopy);
    }
    return (

        <div className='contain-hero'>

            <div className='contain-home'>
                <div className='presentacion'>
                    <h1 className='span'>Hola 👋! Soy <span>Juan</span> <span>Software</span> Developer</h1>
                    <div className='lenguajes'>
                        <div className='leng'>
                            <FontAwesomeIcon className='icon' icon={faReact} />
                            <span>React</span>
                        </div>
                        <div className='leng'>
                            <FontAwesomeIcon className='icon' icon={faHtml5} />
                            <span>Html5</span>
                        </div>

                        <div className='leng'>
                            <FontAwesomeIcon className='icon' icon={faCss3} />
                            <span>Css3</span>
                        </div>

                        <div className='leng'>
                            <FontAwesomeIcon className='icon' icon={faJs} />
                            <span>JavaScript</span>
                        </div>
                        <div className='leng'>
                            <FontAwesomeIcon className='icon' icon={faNodeJs} />
                            <span>Node</span>
                        </div>
                        <div className='leng'>
                            <FontAwesomeIcon className='icon' icon={faBootstrap} />
                            <span>Bootstrap</span>
                        </div>
                        <div className='leng'>
                            <FontAwesomeIcon className='icon' icon={faDatabase} />
                            <span>MongoDB</span>
                        </div>
                        <div className='leng'>
                            <h4 className='icon' icon={faDatabase} > EX</h4>
                            <span>Express</span>
                        </div>

                    </div>
                    <div className='mi-parrafo'>
                        <p>
                            Me encanta contribuir a proyectos emocionantes y desafiantes. Disfruto trabajar en equipo y colaborar con mis compañeros para alcanzar metas comunes. Siempre estoy en busca de nuevos desafíos y oportunidades de aprendizaje.
                        </p>
                    </div>

                    <div className='btns'>
                        <button className='btn-contact'>Contacto</button>
                        <button className='btn-cv'>Ver CV</button>
                    </div>
                </div>
                <div className='codigo'>
                    <Codigo />
                </div>
            </div>



        </div>


    )
}
