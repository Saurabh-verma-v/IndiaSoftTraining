import React from 'react'

import TopNavbar from '../compnents/TopNavbar'
import Nav_bottom from '../compnents/Nav_bottom'
import NavTab from '../compnents/NavTab'
import Hero from '../compnents/Hero'
import AboutTraining from '../compnents/AboutTraining'
import StatSection from '../compnents/StatSection'
import OurPrograms from '../compnents/OurPrograms'
import Events from '../compnents/Events'
import Video from '../compnents/Video'
import StartLearning from '../compnents/StartLearning'
import Footer from '../compnents/Footer'

const HomePage = () => {
    return (
        <div>
            {/* <TopNavbar /> */}
            <NavTab />
            <Hero />
            <AboutTraining />
            <Nav_bottom />
            <StatSection />
            <OurPrograms />
            <Events />
            <Video />
            <StartLearning/>
            <Footer/>
        </div>
    )
}

export default HomePage