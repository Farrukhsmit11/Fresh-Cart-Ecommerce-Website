
import "./HeroCards.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from "react";
import slideData from "./Slide.json"
import CButton from "../../uiComponents/cButton/CButton";
import "../../uiComponents/cButton/CButton.css"



const HeroCards = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };


    return (
        <>
            <section className="section-padding">
                <div className="container">
                    <div className="swipper-main">
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
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                            }}

                            onAutoplayTimeLeft={onAutoplayTimeLeft}
                            className="mySwiper"
                        >
                            {slideData.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="slide-wrapper">
                                        <img className="slide-image" src={slide.imgSrc} />
                                        <div className="slide-content">
                                            {/* <span className="badge">{slide.Badge}</span> */}
                                            <h1 className="grocery-title" style={{ fontWeight: 'bold', marginTop: '16px' }}>{slide.title}</h1>
                                            <p className="slide-description">{slide.description}</p>
                                            <CButton />
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
                </div>
            </section>
        </>
    )
}

export default HeroCards;