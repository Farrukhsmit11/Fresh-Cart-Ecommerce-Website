import { SearchOutlined, ShoppingCartOutlined, UserOutlined, HeartOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Button, Input, Badge, Modal, Form as AntForm, AutoComplete } from "antd";
import "./navbar.css";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
  const [form] = AntForm.useForm();
  const [openLocation, setOpenLocation] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [checkNick, setCheckNick] = useState(false);
  const [inputvalue, setinputvalue] = useState("");

  useEffect(() => {
    form.validateFields(["nickname"]);
  }, [checkNick, form]);


  const handlesubmit = () => {
    toast.success("Form submitted sucessfully");
    setOpenSignup(false);
    form.resetFields();
  }

  const onFinishFailed = () => {
    if (inputvalue.trim() === "") {
      toast.error("Input field cannot be empty");
    }
  }


  // Signup Cancel

  const signupcancel = () => {
    setOpenSignup(false)
  }

  // location oncancel function

  const locationOncancel = () => {
    setOpenLocation(false);
  }


  return (
    <div className="nav-container">
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
          onClick={() => setOpenLocation(true)}
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
            <HeartOutlined style={{ fontSize: "24px", color: "#5c6c75" }} />
          </Badge>
          <UserOutlined
            onClick={() => setOpenSignup(true)}
            style={{ fontSize: "24px", color: "#5c6c75" }}
          />
          <Badge count={5}>
            <ShoppingCartOutlined style={{ fontSize: "24px", color: "#5c6c75" }} />
          </Badge>
        </div>
      </div>


      {/* Location Modal */}
      <Modal
        title="Choose your delivery location"
        open={openLocation}
        footer={null}
        className="location-modal"
        onCancel={() => {
          locationOncancel();
          setOpenLocation(false);
          form.resetFields();
        }}
      >
        <p>Enter your address and we will specify the offer you area.</p>
        <Input placeholder="Enter your address" className="location-input" />
      </Modal>



      {/* Signup Modal */}
      <Modal
        open={openSignup}
        title="Sign Up"
        onCancel={() => {
          signupcancel();
          setOpenSignup(false);
          form.resetFields();
        }}
        footer={null}
        className="signup-modal"
      >

        <div className="signup-content">
          <AntForm
            form={form}
            name="register"
            layout="vertical"
            style={{ maxWidth: 600 }}
            scrollToFirstError
            className="signup-form"
            onFinish={handlesubmit}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >

            <AntForm.Item
              name="username"
              label="Name"
              rules={[{ required: true, message: "Enter your Name" },
              { type: "email", message: "pleaswe enter valid email" }
              ]}

              hasFeedback

            >

        
              <Input className="name-input" placeholder="Enter your Name" />
            </AntForm.Item>


            <AntForm.Item
              name="email"
              label="Email Address"
              rules={[
                { required: true, message: "Please input your email address!" },
                { type: "email", message: "Please enter valid email" },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Enter your Email Address"
                className="email-input"
                type="email"
              />
            </AntForm.Item>


            <AntForm.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please enter your password" },
                { min: 6, message: "Password must be at least 6 characters" },
              ]}
              hasFeedback
            >
              <Input.Password
                placeholder="Enter your password"
                className="email-input"
              />
            </AntForm.Item>


            <div className="agree-to-terms">
              <p>
                By Signup, you agree to <a href="">Terms and Services</a> &{" "}
                <a href="">Privacy Policy</a>
              </p>
            </div>


            <div className="submit-buttons">
              <Button type="primary" htmlType="submit" className="signup-button">
                Sign Up
              </Button>
            </div>


            <div className="account-sign-in">
              <p className="sign-in-title">
                Already have an account? <a href="#">Sign in</a>
              </p>
            </div>
          </AntForm>
        </div>
      </Modal>

    </div >
  );
};

export default Navbar;
