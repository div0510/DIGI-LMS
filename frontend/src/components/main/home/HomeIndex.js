import React from 'react'
import HomeCarousel from './HomeCarousel'
import HomeFooter from './HomeFooter'
import HomeNavBar from './HomeNavBar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

const HomeIndex = () => {
    return (
        <>
            <HomeNavBar />
            <HomeCarousel />
            <Section1/>
            <Section2/>
            <Section3/>
            <HomeFooter/>

        </>

    )
}

export default HomeIndex