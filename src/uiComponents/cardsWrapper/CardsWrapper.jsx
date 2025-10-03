import { Card } from "antd"
import "./CardsWrapper.css"


const CardsWrapper = ({ data = [], title = '' }) => {
  return (
    <div className="card-wrapper-main">
      <div className="container">
        <div className="cards-wrapper-header">
          <div className="row">
            <div className="col-md-12 col-12 col-sm-12">
              <h3>{title}</h3>
            </div>
          </div>
        </div>

        <div className="card-wrapper-content">
          <div className="g-4 row row-cols-lg-5 row-cols-md-3 row-cols-2">
            <div className="col">

              {data.map((item, index) => {
                return (
                  <div className="popular-cards-main" key={index}>
                    <Card className="popular-cards">
                      <img className="card-img" src={item.imgSrc} />
                      <h3 className="item-title">{item.title}</h3>
                      <p>{item.description}</p>
                    </Card>
                  </div>

                )
              })}
            </div>
          </div>
          <div className="card-wrapper">
            <h1 className="product-header-title">{title}</h1>
            <div className="card-data">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsWrapper