
import "./ImageSlider.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from "react";
import { Badge, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";


const ImageSlider = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const slidesData = [
        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/slider/slide-1.jpg",
            title: "SuperMarket For Fresh Grocery",
            description: "Introduced a new model for online grocery shopping and convenient home delivery.",
            Badge: "Open sale Discount 50%"
        },

        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/slider/slide-2.jpg",
            title: "Free Shipping on orders over $100",
            description: "Free Shipping to First-Time Customers Only, After promotions and discounts are applied",
            Badge: "Free Shipping - orders over $100"

        },

    ]

    return (
        <main>
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}

                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-wrapper">
                                <img src={slide.imgSrc} />
                                <div className="slide-content">
                                   <span className= "badge">{slide.Badge}</span>
                                    <h1 className="grocery-title" style={{ fontWeight: 'bold', marginTop: '16px' }}>{slide.title}</h1>
                                    <p className="slide-description">{slide.description}</p>
                                    <Button className="show-now-btn">Show Now  <ArrowRightOutlined /></Button>
                                </div>
                            </div>

                        </SwiperSlide>
                    ))}

                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </main>

    )
}

export default ImageSlider;