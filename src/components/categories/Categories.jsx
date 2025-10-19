import { Card, Col, Row } from "antd"
const { Meta } = Card;
import "./Categories.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import Items from "./Items.json"
import { useNavigate } from "react-router-dom";

const Categories = () => {

    const navigate = useNavigate();

    const navigatedDetailpage = () => {
        navigate("/categorydetail");
    }

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

                        }
                    }
                    }

                    className="mySwiper"
                >
                    <Row gutter={[16, 16]}>
                        {Items.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>

                                    {/* <CardsWrapper data={Productlist} className={`slider-view`} /> */}
                                        <Card
                                            className="card1 mb-lg-4 card"
                                            onClick={navigatedDetailpage}

                                        >
                                            <Meta
                                                avatar={<img className="categories-img" src={item.imgSrc} alt={item.title} />}
                                                title={item.title}
                                            />
                                        </Card>
                                

                                </SwiperSlide>
                            )
                        })}
                    </Row>
                </Swiper>
            </div>
        </section >


    )
}

export default Categories