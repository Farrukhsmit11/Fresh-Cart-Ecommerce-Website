import { PlusOutlined } from "@ant-design/icons"
import { Button } from "antd"

const AddCartBtn = ({ onClick }) => {
    return (
        <div className="button-wrapper">
            <div className="container">
                <div className="row">
                    <Button className="add-to-cart-btn" onClick={onClick}> <PlusOutlined /> Add To Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default AddCartBtn