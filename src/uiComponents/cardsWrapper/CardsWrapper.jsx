import { Card, Flex, Rate, Row } from "antd"
import "./CardsWrapper.css"
import { PlusOutlined } from "@ant-design/icons"
import AddToCartBtn from "../addToCartBtn/AddToCartBtn"

const CardsWrapper = ({ data = [], title = '', className }) => {

  return (
    <div className={className ? `slider-view` : `card-wrapper-main`}>
      <div className="container">
        <div className="row">
          <div className="card-wrapper-header">
            {title}
          </div>
          <div
            className="popular-cards-grid"
          >
            {data.map((item, index) => {
              return (
                <Card className="popular-cards"
                >
                  <div className="card-content">
                    <div className="card-img-wrapper">
                      <img className="card-img" src={item.imgSrc || item.img1} />
                    </div>
                  </div>

                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-subtitle">{item.description}</p>

                  <Flex vertical gap="small" style={{ marginBottom: 16 }}>
                    <Rate defaultValue={3} allowClear={false} className="cards-rate" />
                  </Flex>

                  <div className="add-to-cart">
                    <AddToCartBtn
                      onClick={() => handleAddtoCart(item)}
                      className="add-to-cart-btn"
                    >
                      <PlusOutlined />
                    </AddToCartBtn>
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