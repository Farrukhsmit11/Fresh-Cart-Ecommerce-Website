import "./PopularProducts.css"
import Productlist from "./Productlist.json"
import CardsWrapper from "../../uiComponents/cardsWrapper/CardsWrapper";


const PopularProducts = () => {
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