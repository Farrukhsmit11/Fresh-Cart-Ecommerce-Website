import { Button } from "antd"
import "./CButton.css"
import { ArrowRightOutlined } from "@ant-design/icons";

const CButton = () => {
    return (
        <div className="button-wrapper">
            <div className="container">
                <div className="row">
                    <Button className="shop-now-btn">Show Now <ArrowRightOutlined />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CButton