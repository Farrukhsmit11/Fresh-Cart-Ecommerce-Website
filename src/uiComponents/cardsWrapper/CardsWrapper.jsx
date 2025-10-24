import { Card, Flex, Rate, Row } from "antd"
import "./CardsWrapper.css"
import AddToCartBtn from "../../components/addToCartBtn/AddToCartBtn"

const CardsWrapper = ({ data = [], title = '', className }) => {
  return (
    <div className={className ? `slider-view` : `card-wrapper-main`}>
      <div className="container">
        <h3>{title}</h3>
        <div className="row">
          <div className="card-wrapper-header">

          </div>
          <div
            className="popular-cards-grid"
          >
            {data.map((item, index) => {
              return (
                <Card key={index} className="popular-cards"
                >
                  <div className="card-content">
                    <div className="card-img-wrapper">
                      <img className="card-img" src={item.imgSrc || item.image} />
                    </div>
                  </div>

                  <h3 className="popular-cards-title">{item.title}</h3>
                  <p className="popular-cards-subtitle">{item.description}</p>

                  <Flex vertical gap="small" style={{ marginBottom: 16 }}>
                    <Rate defaultValue={3} allowClear={false} className="cards-rate" />
                  </Flex>

                  <div className="price-wrapper">
                    <span className="current-price">${item.price}</span>
                    <AddToCartBtn />
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsWrapper