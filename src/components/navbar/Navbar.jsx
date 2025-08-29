import { SearchOutlined, ShoppingCartOutlined, UserOutlined, HeartOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Button, Input, Badge, Modal, Form, Checkbox, message } from "antd";
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

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



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
          <AntForm
            form={form}
            name="register"
            layout="vertical"
            initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
            style={{ maxWidth: 600 }}
            scrollToFirstError
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="signup-form"
            autoComplete="off"
          >

            {/* {Name} */}
            <AntForm.Item
              name="username"
              label="Name"
              rules={[{ required: true, message: 'Enter your Name' }]}
            >
              <Input className="name-input" placeholder="Enter your Name" />
            </AntForm.Item>


            {/* Email */}
            <AntForm.Item
            name={email}
              label={<span className="form-label">Email Address</span>}
              rules={[
                { required: true, message: 'Please input your email address!' },
                { type: "email", message: "please enter valid email" }
              ]}
              hasFeedback
            >
              <Input
                placeholder="Enter your Email Address"
                className="email-input"
                type="email"
              />
            </AntForm.Item>



            {/* Password */}
            <AntForm.Item
              label={<span className="form-label">Password</span>}
              name={Password}
              rules={[
                { required: true, message: "Please enter your Email" },
                {type: "password" , message: "Please enter valid password"}
              ]}
              hasFeedback
            >
              <Input
                name="Password"
                placeholder="Enter your password"
                className="email-input"
                type="password"
              />
            </AntForm.Item>

            <div className="agree-to-terms">
              <p>By Signup , you agree to <a href="">Terms and Services</a> & <a href="">Privacy Policy</a></p>
            </div>

            <div className=" submit-buttons">
              <Button type="primary" htmlType="submit" className="signup-button">Sign Up</Button>
            </div>

            <div className="account-sign-in">
              <p className="sign-in-title">Already have an account? <a href="#">Sign in</a> </p>
            </div>
          </AntForm>
        </div>
      </Modal >
    </div >

  );
};


export default Navbar;