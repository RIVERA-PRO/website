import React from 'react'
import Header from '../Pages/Header/Header'
import Hero from '../Components/Hero/Hero'
import Footeer from '../Pages/Footeer/Footeer'
import AboutPage from '../Pages/AboutPage/AboutPage'
import Projects from '../Components/Projects/Projects'
import ButonScroll from '../Components/ButonScroll/ButonScroll'
export default function IndexLayout() {
    return (
        <div className='fondo'>
            <Header />
            <Hero />
            <AboutPage />
            <Projects />
            <ButonScroll />
            <Footeer />

        </div>
    )
}
