import { SearchOutlined, ShoppingCartOutlined, UserOutlined, HeartOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Button, Input, Badge, Modal } from "antd";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);


  // Location Modal

  const showModal = () => {
    setOpen(true);
  };


  const handleCancel = () => {
    setOpen(false);
  }

  return (
    <div className="nav-container">
      <div className="nav-left">
        <div className="logo">
          <img
            className="cart-logo"
            src="https://freshcart-next-js-template.netlify.app/images/logo/freshcart-logo.svg"
            alt="Fresh Cart Logo"
          />
        </div>
        <div className="input-group">
          <Input size="large" placeholder="Search for products..." type="search" suffix={<SearchOutlined />} className="search-input" />
          <Button onClick={showModal} type="primary" className="location-btn">   <EnvironmentOutlined style={{ fontSize: "16px", color: "#5c6c75" }} />Location</Button>

          <Modal
            title="Choose your delivery location"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={open}
            footer={null}
            className="location-modal"
            onCancel={handleCancel}
            style={{ fontSize: "1.09375rem" }}
          >
            <p>Enter your address and we will specify the offer you area.</p>
          </Modal>

        </div>

        <div className="nav-icons">
          <Badge count={5}>
            <HeartOutlined style={{ fontSize: "24px", color: "#5c6c75" }} />
          </Badge>
          <UserOutlined style={{ fontSize: "24px", color: "#5c6c75" }} />
          <Badge count={5}>
            <ShoppingCartOutlined style={{ fontSize: "24px", color: "#5c6c75" }} />
          </Badge>
        </div>
      </div>
    </div>
  );
};


export default Navbar;
