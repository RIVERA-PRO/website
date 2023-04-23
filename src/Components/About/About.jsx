import React from 'react';
import './About.css';

export default function About() {
    return (
        <div className="contain-about">
            <div className="text-about">
                <h2 className="title-h2">Acerca de mí</h2>
                <p>
                    Soy estudiante avanzado de la carrera de
                    <span>"Ingeniería en Sistemas"</span> y desempeño mis
                    funciones como
                    <span> Desarrollador Web Full Stack</span> y en otras ramas
                    de la informática. Tengo una gran motivación para avanzar en
                    mi carrera profesional y me destaco por mi compromiso y
                    responsabilidad.
                </p>
            </div>

            <div className="img-about">
                <img
                    src="https://rivera-pro.github.io/juan-rivera-developer/img/juan-rivera-developer-.png"
                    alt="juan rivera developer"
                />
            </div>
        </div>
    );
}
