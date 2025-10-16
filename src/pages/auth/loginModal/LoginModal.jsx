
import { Button, Input, Modal, Form as AntForm } from "antd";
import "../../../pages/auth/Auth.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const LoginModal = ({ isOpenSignupModal, setIsOpenSignupModal }) => {

    const [form] = AntForm.useForm();
    const [openSignup, setOpenSignup] = useState(false);
    const [inputValue, setinputValue] = useState(false)

    const signupcancel = () => {
        setOpenSignup(false)
    }

    const handlesubmit = () => {
        toast.success("Form submitted sucessfully");
        setIsOpenSignupModal(false);
        form.resetFields();
    }

    const onFinishFailed = () => {
        if (inputValue.trim() === "") {
            toast.error("Input field cannot be empty");   
        }
    }


    return (
        <div>
            {/* Login Modal */}
            <Modal
                open={isOpenSignupModal}
                title="Sign Up"
                onCancel={() => {
                    signupcancel();
                    setIsOpenSignupModal(false);
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
                            { type: "username", message: "Please enter valid email" }
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
                                { type: "password", min: 6, message: "Password must be at least 6 characters" },
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
                            <p className="sign-in-title" onClick={() => {
                                window.location.href = "/signin";
                            }}>
                                Already have an account? <Link to={"/signin"}>Sign in</Link>
                            </p>
                        </div>
                    </AntForm>
                </div>
            </Modal>
        </div>
    )
}

export default LoginModal