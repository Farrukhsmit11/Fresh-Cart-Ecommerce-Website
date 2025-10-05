import { Button, Card, Col, Flex, Rate, Row } from "antd"
import "./CardsWrapper.css"
import { PlusOutlined } from "@ant-design/icons"

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
              <div className="card-header">
                <h1 className="card-heading">Popular Products</h1>
              </div>
              <Row gutter={[16, 16]}>
                <div className="cards-grid">
                  {data.map((item, index) => {
                    return (
                      <Card className="popular-cards">
                        <img className="card-img" src={item.imgSrc} />
                        <h3 className="item-title">{item.title}</h3>
                        <p>{item.description}</p>
                        <Flex gap="middle" vertical style={{ marginBottom: "17px" }}>
                          <Flex gap="middle">
                            <Rate className="cards-rate" defaultValue={3} allowClear={false} />
                          </Flex>
                        </Flex>

                        <div className="add-to-cart">
                          ${Number(item.price).toFixed(2)}
                          <Button className="add-to-cart-btn">  <PlusOutlined />  Add</Button>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </Row>
            </div>
          </div>

          {/* <div className="card-wrapper">
            <h1 className="product-header-title">{title}</h1>
            <div className="card-data">
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default CardsWrapper