import { PlusOutlined } from "@ant-design/icons"
import { Button } from "antd"
import "./AddToCartBtn.css"

const AddCartBtn = () => {
    return (
        <div className="button-wrapper">
            <div className="container">
                <Button className="add-to-cart-btn"> <PlusOutlined /> Add </Button>
            </div>
        </div>
    )
}

export default AddCartBtn