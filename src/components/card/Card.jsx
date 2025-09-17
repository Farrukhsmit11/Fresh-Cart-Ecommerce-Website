import { Button, Col, Row } from 'antd';
import "./card.css"

const Card = () => {

    const products = [
        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/banner/grocery-banner.png",
            title: "Fruits & Vegetables",
            description: "Get up to 30% off"
        },


        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/banner/grocery-banner-2.jpg",
            title: "Freshly Baked Buns",
            description: "Get up to 25% off"
        }
    ]


    return (
        <section className='section-padding'>
            <div className="container">
                <div className="row">
                    <div className="cards-section">
                        <Row gutter={[16, 29]}>
                            {products.map((product, index) => {
                                return (
                                    <Col className='mb-3 mb-lg-0 col-md-6 col-12' key={index} span={8}>
                                        <div className="card-image-section">
                                            <img className='card-image' src={product.imgSrc} alt={product.title} />
                                            <div className="overlay">
                                                <h1 className='product-title'>{product.title}</h1>
                                                <p className='product-card-description'>{product.description}</p>
                                                <Button className="shop-now-btn">Shop Now </Button>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Card