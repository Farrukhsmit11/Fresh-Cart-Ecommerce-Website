import { SearchOutlined, ShoppingCartOutlined, UserOutlined, HeartOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Button, Input, Badge, Modal, Space } from "antd";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false);






  // Location Modal State
  const [openLocation, setOpenLocation] = useState(false);

  const showLocationModal = () => {
    setOpenLocation(true);
  }

  const handleLocationCancel = () => {
    setOpenLocation(false);
  }


  //  Signup State
  const [openSignup, setOpenSignup] = useState(false);

  const showSignupModal = () => {
    setOpenSignup(true);
  }

  const handleSignupCancel = () => {
    setOpenSignup(false);
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

           {/* <Button className="department-btn">All Departments</Button>
         
            
            */}
           
        </div>
        <div className="input-group">
          <Input size="large" placeholder="Search for products..." type="search" suffix={<SearchOutlined />} className="search-input" />
          <Button onClick={showLocationModal} type="primary" className="location-btn">   <EnvironmentOutlined style={{ fontSize: "16px", color: "#5c6c75" }} />Location</Button>



          {/* Location Modal */}
          <Modal
            title="Choose your delivery location"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={openLocation}
            footer={null}
            className="location-modal"
            onCancel={handleLocationCancel}
            style={{ fontSize: "1.09375rem" }}
          >
            <p>Enter your address and we will specify the offer you area.</p>

            <Input placeholder="Enter your address" className="location-input" />
          </Modal>
        </div>

        <div className="nav-icons">
          <Badge count={5}>
            <HeartOutlined style={{ fontSize: "24px", color: "#5c6c75" }} />
          </Badge>
          <UserOutlined onClick={showSignupModal} style={{ fontSize: "24px", color: "#5c6c75" }} />
          <Badge count={5}>
            <ShoppingCartOutlined style={{ fontSize: "24px", color: "#5c6c75" }} />
          </Badge>
        </div>
      </div>



      {/* Signup Modal */}
      <Modal
        open={openSignup}
        title="Sign Up"
        onCancel={handleSignupCancel}
        footer={null}
      >
      </Modal>
    </div>
  );
};


export default Navbar;
