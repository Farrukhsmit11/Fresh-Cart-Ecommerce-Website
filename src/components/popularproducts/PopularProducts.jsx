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
            </div>
        </section>

    )
}

export default PopularProducts