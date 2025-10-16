import { SearchOutlined, HeartOutlined, EnvironmentOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input, Badge, Form as AntForm, Drawer, Alert, List } from "antd";
import "./Navbar.css";
import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import LoginModal from "../../pages/auth/loginModal/LoginModal";
import LocationModal from "../locationModal/LocationModal"

const Navbar = ({ cartItems, setCartItems }) => {
  const [form] = AntForm.useForm();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const [IsloginModdal, setIsloginModdal] = useState(false);
  const [IslocationModal, setIslocationModal] = useState(false);

  const navigate = useNavigate();

  // Drawer Functionality
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = e => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  // navigate to wihslist on same page function

  const navigatetowishlist = () => {
    navigate("/Wishlist");
  }


  return (
    <div className="container">
      <nav className="navbar">
        <Toaster />
        <div className="nav-left">
          <div className="logo">
            <img
              className="cart-logo"
              src="https://freshcart-next-js-template.netlify.app/images/logo/freshcart-logo.svg"
              alt="Fresh Cart Logo"
            />
          </div>
        </div>
        <div className="nav-middle-section">
          <Input
            size="large"
            placeholder="Search for products..."
            type="search"
            suffix={<SearchOutlined />}
            className="search-input"
          />
          <Button
            onClick={() => setIslocationModal(true)}
            type="primary"
            className="location-btn"
          >
            <EnvironmentOutlined style={{ fontSize: "16px", color: "#5c6c75" }} />
            Location
          </Button>
        </div>

        <div className="nav-right">
          <div className="nav-icons">
            <Badge count={5}>
              <HeartOutlined style={{ fontSize: "24px", color: "#5c6c75" }} onClick={navigatetowishlist} />
            </Badge>

            <UserOutlined
              onClick={() => setIsloginModdal(true)}
              style={{ fontSize: "24px", color: "#5c6c75" }}
            />

            <FaCartArrowDown onClick={showDrawer} className="nav-cart-icon" />

            <Drawer
              title={
                <div>
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                    Shop Cart
                  </div>
                  <div style={{ fontSize: "14px", color: "gray" }}>
                    Location in 382480
                  </div>
                </div>
              }
              placement={placement}
              width={500}
              onClose={onClose}
              open={open}
            >
              <List
                dataSource={cartItems}
                renderItem={(item) => (
                  <List.Item
                    actions={[<Button key="button">Hello button</Button>]}
                    key={item.id}>
                    {item.title}
                    <div>{item.title}</div>
                  </List.Item>
                )}
              />

              {/* <Alert message="You’ve got FREE delivery. Start checkout now!" type="success" /> */}
            </Drawer>
          </div>
        </div>
      </nav>

      <LoginModal
        isOpenSignupModal={IsloginModdal}
        setIsOpenSignupModal={setIsloginModdal}
      />

      <LocationModal
        IslocationModal={IslocationModal}
        setIslocationModal={setIslocationModal}
      />
    </div>
  );
};

export default Navbar;
