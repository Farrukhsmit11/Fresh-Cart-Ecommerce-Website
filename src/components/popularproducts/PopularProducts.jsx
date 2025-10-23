
import Productlist from "./Productlist.json"
import CardsWrapper from "../../uiComponents/cardsWrapper/CardsWrapper";


const PopularProducts = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <CardsWrapper
                            data={Productlist}
                            title="Popular Products"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PopularProducts