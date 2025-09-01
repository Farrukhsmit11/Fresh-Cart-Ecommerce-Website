import { Card, Avatar } from "antd"
const { Meta } = Card;
import "./categories.css"
import "../imageslider/ImageSlider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';


const Categories = () => {

    const items = [
        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/category/category-fruits-vegetables.jpg",
            title: "Fruits & Vegetables"
        },

        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/category/category-dairy-bread-eggs.jpg",
            title: "Dairy, Bread & Eggs"

        },
        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/category/category-bakery-biscuits.jpg",
            title: "Bakery & Biscuits"
        },

        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/category/category-snack-munchies.jpg",
            title: "Snack & Munchies"
        },


        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/category/category-instant-food.jpg",
            title: "Instant Food"
        },

        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/category/category-cleaning-essentials.jpg",
            title: "Cleaning Essentials"
        },

        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/category/category-tea-coffee-drinks.jpg",
            title: "Tea, Coffee & Drinks"
        },

        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/category/category-atta-rice-dal.jpg",
            title: "Atta, Rice & Dal"
        },

        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/category/category-chicken-meat-fish.jpg",
            title: "Chicken, Meat & Fish"
        },

        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/category/category-pet-care.jpg",
            title: "Pet Care"
        }
    ]


    return (
        <section className="section-padding">
            <div className="container">
                <h1>Featured Categories</h1>
                <Swiper
                    slidesPerView={'6'}
                    spaceBetween={30}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {items.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card
                                    className="card1"
                                >
                                    <Meta
                                        avatar={<img src={item.imgSrc} alt={item.title} />}
                                        title={item.title}
                                    />
                                </Card>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>


    )
}

export default Categories