import { Col, Row } from 'antd';
import "./ShopNowCard.css"
import products from "./Products.json"
import ShopNowBtn from '../../uiComponents/cButton/CButton';


const ShopNowCard = () => {

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
                                                <ShopNowBtn />
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

export default ShopNowCard