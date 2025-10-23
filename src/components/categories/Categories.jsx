
import "./Categories.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import Items from "./Items.json"
import CardsWrapper from "../../uiComponents/cardsWrapper/CardsWrapper";
import { useNavigate } from "react-router-dom";

const Categories = () => {

    const navigate = useNavigate();

    return (
        <section className="section-padding">
            <div className="container">
                <h1 className="category-title">Featured Categories</h1>
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
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spacebetween: 20
                        },

                        1024: {
                            slidesPerView: 6,

                        },

                        800: {
                            slidesPerView: 4
                        },

                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                    }
                    }
                    className="mySwiper"
                >
                    {Items.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <CardsWrapper
                                    data={[item]}
                                    className="slider-view"
                                    onClick={() => navigate("/categorydetail")}
                                    
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>

    )
}

export default Categories