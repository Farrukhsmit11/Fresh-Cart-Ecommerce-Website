import { Button, Card, Rate, Flex } from "antd"
import "./Dailybestsells.css"
import { PlusOutlined } from "@ant-design/icons"
import Countdown from "react-countdown"

const DailyBestSells = () => {

    const products = [
        {
            id: 1,
            description: "Coffee and drinks",
            img: "https://freshcart-next-js-template.netlify.app/images/products/product-img-11.jpg",
            title: "Roast Ground Coffee",
            price: 12,

        },

        {
            id: 2,
            description: "Fruits & Vegetables",
            img: "	https://freshcart-next-js-template.netlify.app/images/products/product-img-12.jpg",
            title: "Crushed Tomatoes",
            price: "20",

        },


        {
            id: 3,
            description: "Fruits & Vegetables",
            img: "https://freshcart-next-js-template.netlify.app/images/products/product-img-13.jpg",
            title: "Golden Pineapple",
            price: "15",

        }
    ]


    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div className="countdown-container">
                <div className="countdown-box">
                    <p>{days}</p>
                </div>

                <div className="countdown-box">
                    <p>{hours}</p>
                </div>

                <div className="countdown-box">
                    {minutes}
                </div>

                <div className="countdown-box">
                    {seconds}
                </div>
            </div>
        )

    }








    return (
        <section className="section-padding">
            <div className="container">
                <div className="section-header">
                    <h1 className="heading-one">Daily Best Sells</h1>
                </div>
                <div className="best-sell-grid">

                    {/* Featured Card big */}
                    <Card
                        className="featured-sell-card"
                        bodyStyle={{ padding: 0, background: "transparent" }}
                    >
                        <div className="card-image-wrapper">
                            <div className="card-overlay ">
                                <h1 className="title-one">100% Organic Coffee Beans.</h1>
                                <p className="coffee-card-description">Get the best deal before close.</p>
                                <Button className="shop-btn">Shop Now</Button>
                            </div>
                        </div>
                    </Card>

                    {products.map((product, index) => {
                        return (
                            <div className="cards">
                                <Card key={index}>
                                    <div className="cards-content">
                                        <img src={product.img} />
                                        <p>{product.description}</p>
                                        <h1>{product.title}</h1>

                                        <Flex className="rating-main">
                                            <p style={{ fontWeight: 600, fontSize: "16px", margin: 0 }}>
                                                ${Number(product.price).toFixed(2)}
                                            </p>
                                            <Rate defaultValue={3} className="cards-rate"></Rate>
                                        </Flex>
                                        <div className="buttons">
                                            <Button className="cart-add-btn"> <PlusOutlined /> Add to Cart</Button>
                                        </div>

                                        <div className="countdown-wrapper">
                                            <Countdown
                                                date={Date.now() + 1104 * 24 * 60 * 60 * 1000}
                                                renderer={renderer}
                                            />
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default DailyBestSells