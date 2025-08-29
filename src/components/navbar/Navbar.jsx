import { SearchOutlined, ShoppingCartOutlined, UserOutlined, HeartOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Button, Input, Badge, Modal, Form, Checkbox } from "antd";
import "./navbar.css";
import { useEffect, useState } from "react";
import { Form as AntForm } from "antd";

const Navbar = () => {

  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const [checkNick, setCheckNick] = useState(false);

  useEffect(() => {
    form.validateFields(['nickname']);
  }, [checkNick, form]);
  const onCheckboxChange = e => {
    setCheckNick(e.target.checked);
  };


  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };



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



      {/* Signup Modal */}
      <Modal
        open={openSignup}
        title="Sign Up"
        onCancel={handleSignupCancel}
        footer={null}
        className="signup-modal"
      >

        <div className="signup-content">
          <Form
            form={form}
            name="register"
            initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
            style={{ maxWidth: 600 }}
            scrollToFirstError
          >

            <label className="form-label" htmlFor="username">Name</label>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your name' }]}
            >
              <Input className="name-input" placeholder="Please input your name" />
            </Form.Item>

            <label className="form-label" htmlFor="email">E-mail </label>
            <Form.Item
              name="email"
              placeholder="Please input your email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input className="email-input" />
            </Form.Item>

            <label className="form-label" htmlFor="password">Password</label>
            <Form.Item
              name="password"
              placeholder="Please input your password"

              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password className="password-input" />

              <div className="agree-to-terms">
                <p>By Signup , you agree to <a href="">Terms and Services</a> & <a href="">Privacy Policy</a></p>
              </div>

              <div className=" submit-buttons">
                <Button type="primary" htmlType="submit" className="signup-button">Sign Up</Button>
              </div>

            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>

  );
};


export default Navbar;
