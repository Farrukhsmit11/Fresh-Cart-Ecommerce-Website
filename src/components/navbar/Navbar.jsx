import { SearchOutlined, ShoppingCartOutlined, UserOutlined, HeartOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Button, Input, Badge, Modal, Form } from "antd";
import "./navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [form] = Form.useForm();
  const [openLocation, setOpenLocation] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  // Checkbox state (agar zaroori ho)
  const [checkNick, setCheckNick] = useState(false);

  useEffect(() => {
    form.validateFields(["nickname"]);
  }, [checkNick, form]);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="nav-container">
      {/* Left Section */}
      <div className="nav-left">
        <div className="logo">
          <img
            className="cart-logo"
            src="https://freshcart-next-js-template.netlify.app/images/logo/freshcart-logo.svg"
            alt="Fresh Cart Logo"
          />
        </div>

        <div className="input-group">
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

          {/* Location Modal */}
          <Modal
            title="Choose your delivery location"
            open={openLocation}
            footer={null}
            className="location-modal"
            onCancel={() => setOpenLocation(false)}
          >
            <p>Enter your address and we will specify the offer you area.</p>
            <Input placeholder="Enter your address" className="location-input" />
          </Modal>
        </div>
      </div>

      {/* Right Icons */}
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

      {/* Signup Modal */}
      <Modal
        open={openSignup}
        title="Sign Up"
        onCancel={() => setOpenSignup(false)}
        footer={null}
        className="signup-modal"
      >
        <div className="signup-content">
          <Form
            form={form}
            name="register"
            layout="vertical"
            style={{ maxWidth: 600 }}
            scrollToFirstError
            className="signup-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {/* Name */}
            <Form.Item
              name="username"
              label="Name"
              rules={[{ required: true, message: "Enter your Name" }]}
            >
              <Input className="name-input" placeholder="Enter your Name" />
            </Form.Item>

            {/* Email */}
            <Form.Item
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
            </Form.Item>

            {/* Password */}
            <Form.Item
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
            </Form.Item>

            {/* Terms */}
            <div className="agree-to-terms">
              <p>
                By Signup, you agree to <a href="">Terms and Services</a> &{" "}
                <a href="">Privacy Policy</a>
              </p>
            </div>

            {/* Submit */}
            <div className="submit-buttons">
              <Button type="primary" htmlType="submit" className="signup-button">
                Sign Up
              </Button>
            </div>

            {/* Already have account */}
            <div className="account-sign-in">
              <p className="sign-in-title">
                Already have an account? <a href="#">Sign in</a>
              </p>
            </div>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
