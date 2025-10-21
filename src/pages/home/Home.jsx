import React from 'react'
import { Categories, DailyBestSells, Footer, HeroCards, Popularproducts, FeaturesSection, ShopNowCard } from '../../components'

const Home = () => {
    return (
        <div>
            <HeroCards />
            <Categories />
            <ShopNowCard />
            <Popularproducts />
            <DailyBestSells />
            <FeaturesSection />
            <Footer />
        </div>
    )
}

export default Home