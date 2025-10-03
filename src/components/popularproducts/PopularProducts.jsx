import { Card } from "antd"
const { Meta } = Card;
import "./PopularProducts.css"
import Productlist from "./Productlist.json"
import { useState } from "react";
import CardsWrapper from "../../uiComponents/cardsWrapper/CardsWrapper";

const PopularProducts = () => {

    const [DataTosave, setDataTosave] = useState("false");

    const handleInputChange = (e) => {
        setDataTosave(e.target.value);
    }


    return (
        <section className="section-padding">
            <div className="container">


                <CardsWrapper
                    data={Productlist}
                />



                {/* <div className="row"> */}
                {/* <h1 className="product-header-title">Popular Products</h1> */}
                {/* </div> */}


                {/* <div className="cards-grid">
                    {Productlist.map((product, index) => {
                        return (
                            <div className="products-cards">
                                <Card
                                    className="card-two"
                                    key={index}
                                >
                                    <div className="cards-header">
                                        <img className="product-image" src={product.imgSrc} />
                                    </div>
                                    <div className="text-content">
                                        <p className="product-description">{product.description}</p>
                                        <h1 className="product-card-title">{product.title}</h1>
                                    </div>
                                    <Flex gap="middle" vertical>
                                        <Flex gap="middle">
                                            <div className="rating-price">
                                                <Rate defaultValue={3} className="cart-rateing" />
                                                <p>{product.price.toFixed(2)}</p>
                                            </div>
                                            <div className="add-to-cart">
                                                <Button className="add-to-cart-button"><PlusOutlined /> Add</Button>
                                            </div>
                                        </Flex>
                                    </Flex>
                                </Card>
                            </div>
                        )
                    })}
                </div> */}
            </div>
        </section>

    )
}

export default PopularProducts