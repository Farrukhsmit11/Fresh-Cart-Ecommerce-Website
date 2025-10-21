
import Productlist from "./Productlist.json"
import CardsWrapper from "../../uiComponents/cardsWrapper/CardsWrapper";


const PopularProducts = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="g-4 row row-cols-lg-5 row-cols-md-3 row-cols-2">
                    <div className="col">
                        <CardsWrapper
                            data={Productlist}
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PopularProducts