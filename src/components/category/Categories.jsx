import { Card } from "antd"
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
                    className="mySwiper"
                >
                    {Items.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card
                                    className="card1"
                                    onClick={navigatedDetailpage}
                                
                                >
                                    <Meta
                                        avatar={<img className="" src={item.imgSrc} alt={item.title} />}
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