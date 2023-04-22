import React from 'react';
import './Projects.css';
import projects from '../data.js';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Projects() {
    return (
        <div className='cards-contain'>



            {projects.map(project => (


                <div className='card-projects'>
                    <img src={project.img} alt={project.title} />
                    <div key={project.title} className='card-text'>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className='btns-card'>
                            <a href={project.link} className='btn-card-dep' target="_blank" rel="noopener noreferrer">Deploy</a>
                            <a href={project.link} className='btn-card-git' target="_blank" rel="noopener noreferrer">Github</a>
                        </div>
                    </div>
                </div>

            ))}




        </div>
    );
}
