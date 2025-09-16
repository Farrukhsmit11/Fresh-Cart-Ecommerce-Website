import { Card, Avatar, Flex, Rate } from "antd"
const { Meta } = Card;
import "./products.css"
import { useState } from "react";

const PopularProducts = () => {
    const [value, setValue] = useState(false);


    // const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


    const prodctslist = [
        {

            imgSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-img-2.jpg",
            description: "Bakery & Biscuits",
            title: "NutriChoice Digestive",
            price : 24

        },

        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-img-3.jpg",
            description: "Bakery & Biscuits",
            title: " Cadbury 5 Star Chocolate",
            price: 20
        },

        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-img-4.jpg",
            description: "Snack & Munchies",
            title: "Onion Flavour Potato",
            price: 19
        },


        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-img-5.jpg",
            description: "Instant food",
            title: "Salted Instant Popcorn",
            price: 50
        },


        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-img-6.jpg",
            description: "Daily Bread Eggs",
            title: "Blueberry Greek Yogurt",
            price: 40
        },


        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-img-7.jpg",
            description: "Daily Bread Eggs",
            title: "Britannia Cheese Slices",
            price: 10

        },

    ]

    return (
        <div className="section-padding">
            <div className="container">
                <div className="row">
                    <h1 className="product-title">Popular Products</h1>
                </div>
                <div className="products-content">
                    {prodctslist.map((product, index) => {
                        return (
                            <div key={index} className="products">
                                <Card
                                    className="card-two"
                                >
                                    <div className="custom-meta">
                                        <img className="product-image" src={product.imgSrc} />

                                    </div>
                                    <div className="text-content">
                                        <p className="product-description">{product.description}</p>
                                        <h1 className="product-card-title">{product.title}</h1>
                                    </div>
                                    <Flex gap="middle" vertical>
                                        <Flex gap="middle">
                                            <Rate defaultValue={3}  className="cart-rateing"/>
                                            <p>{product.price.toFixed(2)}</p>
                                        </Flex>
                                    </Flex>
                                </Card>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default PopularProducts