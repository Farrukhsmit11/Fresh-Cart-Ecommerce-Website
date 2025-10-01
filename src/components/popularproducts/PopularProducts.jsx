import { Card, Avatar, Flex, Rate, Button } from "antd"
const { Meta } = Card;
import "./Popularproducts.css"
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const PopularProducts = () => {

    const [DataTosave, setDataTosave] = useState("false");


    const handleInputChange = (e) => {
        setDataTosave(e.target.value);
    }


    const handleSaveClick = () => {
        localStorage.setItem("myKey", JSON.stringify(DataTosave));
    }



    const prodctslist = [
        {

            imgSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-img-2.jpg",
            description: "Bakery & Biscuits",
            title: "NutriChoice Digestive",
            price: 24

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


        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-img-2.jpg",
            description: "Bakery & Biscuits",
            title: "NutriChoice Digestive",
            price: 24

        },

        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-img-3.jpg",
            description: "Bakery & Biscuits",
            title: " Cadbury 5 Star Chocolate",
            price: 20
        },


        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-img-9.jpg",
            description: "Snack and Munchies",
            title: "Slurp Milk Chocolate",
            price: 45

        },

        {
            imgSrc: "https://freshcart-next-js-template.netlify.app/images/products/product-img-10.jpg",
            description: "Dairy Bread and Eggs",
            title: "Amul Butter -500g",
            price: 120
        },
    ]

    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <h1 className="product-header-title">Popular Products</h1>
                </div>

                <div className="cards-grid">
                    {prodctslist.map((product, index) => {
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
                                                <Button onClick={handleSaveClick} className="add-to-cart-button"><PlusOutlined /> Add</Button>
                                            </div>
                                        </Flex>
                                    </Flex>
                                </Card>
                            </div>

                        )
                    })}
                </div>
            </div>
        </section>

    )
}

export default PopularProducts