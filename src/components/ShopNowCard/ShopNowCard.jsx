
import "./ShopNowCard.css"
import products from "./Products.json"
import CButton from '../../uiComponents/cButton/CButton';

const ShopNowCard = () => {

    return (
        <section className='section-padding'>
            <div className="container">
                <div className="row">
                    <div className="cards-section">
                        <div className="shop-now-cards">
                            {products.map((product, index) => {
                                return (
                                    <div className="card-image-section  rounded">
                                        <img className='card-image' src={product.imgSrc} alt={product.title} />
                                        <div className="overlay">
                                            <h1 className='product-title'>{product.title}</h1>
                                            <p className='product-card-description'>{product.description}</p>
                                            <CButton />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ShopNowCard 