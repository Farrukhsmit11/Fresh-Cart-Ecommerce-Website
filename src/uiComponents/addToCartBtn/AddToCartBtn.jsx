import { PlusOutlined } from "@ant-design/icons"
import { Button } from "antd"
import "./AddToCartBtn.css"

const AddCartBtn = ({ onClick }) => {
    return (
        <div className="button-wrapper">
            <div className="container">
                <div className="row">
                    <Button className="add-to-cart-btn" onClick={onClick}> <PlusOutlined /> Add</Button>
                </div>
            </div>
        </div>
    )
}

export default AddCartBtn