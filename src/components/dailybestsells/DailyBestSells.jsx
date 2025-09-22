import { Button, Card } from "antd"
import "./Dailybestsells.css"

const DailyBestSells = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="section-header">
                    <h1 className="heading-one">Daily Best Sells</h1>
                </div>
                <div className="best-sell-grid">
                    <Card
                        className="featured-sell-card"
                    >
                        <div className="card-image-wrapper">
                            <div className="card-overlay ">
                                <h1 className="title-one">100% Organic Coffee Beans.</h1>
                                <p className="coffee-card-description">Get the best deal before close.</p>
                                <Button className="shop-btn">Shop Now</Button>
                            </div>
                        </div>
                    </Card>

                    <Card className="discount-cards">
                        <img src={"https://freshcart-next-js-template.netlify.app/images/products/product-img-11.jpg"} />

                        <div className="discount-cards-content">
                            <p className="discount-cards-description">Tea Coffee & Drinks</p>
                            <h1>Roast Ground Coffee</h1>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default DailyBestSells