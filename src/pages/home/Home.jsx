import React from 'react'
import { Categories, DailyBestSells, Footer, HeroCards, Popularproducts , FeaturesSection } from '../../components'

const Home = () => {
    return (
        <div>
            <HeroCards />
            <Categories />
            <Popularproducts />
            <DailyBestSells />
            <FeaturesSection/>
            <Footer />
        </div>
    )
}

export default Home