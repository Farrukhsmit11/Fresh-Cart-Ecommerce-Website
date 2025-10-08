import { Button, Card, Rate, Flex } from "antd"
import "./DailyBestSells.css"
import { PlusOutlined } from "@ant-design/icons"
import SellsData from "./SellsData.json"

const DailyBestSells = () => {

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
                    <div className="card-image-wrapper">
                        <div className="background-overlay ">
                            <h1 className="title-one">100% Organic Coffee Beans.</h1>
                            <p className="coffee-card-description">Get the best deal before close.</p>
                            <Button className="shop-btn">Shop Now</Button>
                        </div>
                    </div>


                    {SellsData.map((product, index) => {
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