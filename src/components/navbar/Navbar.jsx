import { SearchOutlined, HeartOutlined, EnvironmentOutlined, UserOutlined, MenuOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Button, Input, Badge, Form as AntForm, Drawer, List, Divider } from "antd";
import "./Navbar.css";
import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import LoginModal from "../../pages/auth/loginModal/LoginModal";
import LocationModal from "../locationModal/LocationModal"

const Navbar = () => {
  const [form] = AntForm.useForm();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const [IsloginModdal, setIsloginModdal] = useState(false);
  const [IslocationModal, setIslocationModal] = useState(false);
  const navigate = useNavigate();
  const [showMenu, setShowMneu] = useState(false);
  const [Menuleft, setMenuleft] = useState("left");

  // Cart Drawer Functionality
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = e => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  // navigate to wihslist

  const navigatetowishlist = () => {
    navigate("/Wishlist");
  }


  // Hamburger Menu
  const showMenuDrawer = () => {
    setShowMneu(true)
  }

  const Menuclose = () => {
    setShowMneu(false)
  }


  return (
    <div className="container">
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

          {/* Nav middle section */}
          <div className="nav-middle-section deskstop-only">
            <div className="input-group">
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
                <EnvironmentOutlined className="locationn-icon" />
                Location
              </Button>
            </div>
          </div>

          <div className="hamburger-menu-section">
            <MenuFoldOutlined className="hamburger-icon" onClick={showMenuDrawer} />
            <Drawer
              title="Basic Drawer"
              placement={Menuleft}
              closable={true}
              onClose={Menuclose}
              open={showMenu}
              key={placement}
            >
              <Input
                size="large"
                placeholder="Search for products..."
                type="search"
                suffix={<SearchOutlined />}
                className="search-input"
              />
            </Drawer>
          </div>


          <div className="nav-right">
            <div className="nav-icons">
              {/* Icons */}
              <HeartOutlined onClick={navigatetowishlist} className="wishlist-icon" />

              <UserOutlined
                onClick={() => setIsloginModdal(true)}
                className="user-icon"
              />
              <FaCartArrowDown onClick={showDrawer} className="nav-cart-icon" />

              {/* {Cart Drawer} */}
              <Drawer
                title={
                  <div>
                    <div>
                      <h1 className="drawer-title">Shop Cart</h1>
                    </div>
                    <div>
                      <p>Location in 382480</p>
                    </div>
                  </div>
                }
                placement={placement}
                width={500}
                onClose={onClose}
                open={open}
              >
                <List
                  // dataSource={Cartitems}
                  renderItem={(item) => (
                    <List.Item
                      actions={[<Button key="button">Hello button</Button>]}
                      key={item.id}>
                      {item.title}
                      <div>{item.title}</div>
                    </List.Item>
                  )}
                />
              </Drawer>
            </div>
          </div>
        </nav>
      </div >

      <LoginModal
        isOpenSignupModal={IsloginModdal}
        setIsOpenSignupModal={setIsloginModdal}
      />

      <LocationModal
        isOpenLocationModal={IslocationModal}
        setislocationModal={setIslocationModal}
      />
    </div>
  );
};

export default Navbar;
