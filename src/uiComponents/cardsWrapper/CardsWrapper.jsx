import { Card, Flex, Rate, Row } from "antd"
import "./CardsWrapper.css"
import { PlusOutlined } from "@ant-design/icons"
import AddCartBtn from "../cButton/AddCartBtn"

const CardsWrapper = ({ data = [], title = '', className, cartItems, setCartItems }) => {

  const handleAddtoCart = (product) => {
    console.log("Adding to cart:", product);
    const existingItem = cartItems.find(item => item.id === product.id)
    if (existingItem) {
      return setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      return setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  return (
    <div className={className ? `slider-view` : `card-wrapper-main`}>
      <div className="container">
        <div className="cards-wrapper-header">
          <div className="row">
            <div className="col-md-12 col-12 col-sm-12">
              <h3>{title}</h3>
            </div>
          </div>
        </div>

        <div className="card-wrapper-content">
          <div className="g-4 row row-cols-lg-4 row-cols-md-3 row-cols-2">
            <div className="col">
              <div className="card-header">
                <h1 className="card-heading">Popular Products</h1>
              </div>
              <Row gutter={[16, 16]}>
                <div className="cards-grid">
                  {data.map((item, index) => {
                    return (
                      <Card className="popular-cards">
                        <img className="card-img" src={item.imgSrc || item.img1} alt={item.title || item.name} />

                        <h3 className="item-title">{item.title}</h3>
                        <p>{item.description}</p>
                        <Flex gap="middle" vertical style={{ marginBottom: "17px" }}>
                          <Flex gap="middle">
                            <Rate className="cards-rate" defaultValue={3} allowClear={false} />
                          </Flex>
                        </Flex>

                        <div className="add-to-cart">
                          ${Number(item.price).toFixed(2)}
                          <AddCartBtn onClick={() => handleAddtoCart(item)} className="add-to-cart-btn"> <PlusOutlined /></AddCartBtn>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsWrapper