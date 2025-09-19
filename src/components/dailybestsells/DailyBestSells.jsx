import { Button, Card } from "antd"
import "./Dailybestsells.css"

const DailyBestSells = () => {

    // const cardimages = [

    //     {
    //         image: "https://freshcart-next-js-template.netlify.app/images/banner/banner-deal.jpg",
    //         title: "100% Organic Coffee",
    //         cardDescription: "Get the best deal before close."
    //     },


    //     {
    //         image: "https://freshcart-next-js-template.netlify.app/images/products/product-img-11.jpg",
    //         description: "Tea coffee & drinks",
    //         title: "Roast Ground Coffee"
    //     },


    //     {
    //         image: "https://freshcart-next-js-template.netlify.app/images/products/product-img-12.jpg",
    //         description: "Fruits & Vegetables",
    //         title: "Crushed Tomatoes"
    //     },


    //     {
    //         image: "https://freshcart-next-js-template.netlify.app/images/products/product-img-13.jpg",
    //         description: "Fruits & Vegetables",
    //         title: "Golden Pineapple"
    //     }
    // ]

    return (

        <div className="container">
            <div className="card-header">
                <h1 className="heading-one">Daily Best Sells</h1>
            </div>
            <div className="best-sell">
                <Card
                    className="card-two"
                >
                    <div className="card-image-div">
                        <div className="card-overlay ">
                            <h1 className="title-one">100% Organic Coffee Beans.</h1>
                            <p className="coffee-card-description">Get the best deal before close.</p>
                            <Button className="shop-btn">Shop Now</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>

    )
}

export default DailyBestSells