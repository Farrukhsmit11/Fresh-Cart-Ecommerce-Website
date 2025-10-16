import React from 'react'
import { Categories, DailyBestSells, Footer, HeroCards, Popularproducts } from '../../components'

const Home = () => {
    return (
        <div>
            <HeroCards />
            <Categories />
            <Popularproducts />
            <DailyBestSells />
            <Footer />
        </div>
    )
}

export default Home