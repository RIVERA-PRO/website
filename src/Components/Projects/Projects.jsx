import React from 'react';
import './Projects.css';
import projects from '../data.js';

export default function Projects() {
    return (
        <div className='proyectos'>
            <h2 className='title-h2'>Proyectos</h2>

            <div className='cards-contain'>
                {projects.map(project => (
                    <div className='card-projects'>
                        <img src={project.img} alt={project.title} />
                        <div key={project.title} className='card-text'>
                            <h2>{project.title}</h2>
                            <p>{project.lengujes}</p>
                            <div className='btns-card'>
                                <a href={project.link} className='btn-card-dep' target="_blank" rel="noopener noreferrer">Deploy</a>
                                <a href={project.git} className='btn-card-git' target="_blank" rel="noopener noreferrer">Github</a>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}
