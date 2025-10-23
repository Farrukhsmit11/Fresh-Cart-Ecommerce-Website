import { Button } from "antd"
import "./DailyBestSells.css"
import SellsData from "./SellsData.json"
import CardWrapper from "../../uiComponents/cardsWrapper/CardsWrapper"

const DailyBestSells = () => {
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
                            <div className="cards" key={index}>
                                <CardWrapper
                                    data={[product]}
                                    className={"cards-one"}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default DailyBestSells