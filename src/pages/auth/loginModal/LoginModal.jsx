
import { Button, Input, Modal, Form as AntForm, message } from "antd";
import "./LoginModal.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { validationSchema } from "./Validations";
import {handleSuccess} from "../../../utils/Methods"

const LoginModal = ({ isOpenSignupModal, setIsOpenSignupModal }) => {

    const [form] = AntForm.useForm();
    const [openSignup, setOpenSignup] = useState(false);

    const signupCancel = () => {
        setOpenSignup(false)
    }

    const handleSubmit = (values) => {
        setIsOpenSignupModal(false);
        form.resetFields();
        console.log(values);
        handleSuccess("Form submitted successfully!");
     

    }

    const initialValues = {
        name: "",
        email: "",
        password: "",
    }

    return (
        <div>
            {/* Login Modal */}
            <Modal
                open={isOpenSignupModal}
                title="Sign Up"
                onCancel={() => {
                    signupCancel();
                    setIsOpenSignupModal(false);
                    form.resetFields();
                }}
                footer={null}
                destroyOnClose
                className="signup-modal"
                
            >

                <div className="signup-content">

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}


                    >
                        {({
                            handleSubmit,
                            handleBlur,
                            handleChange,
                            errors,
                            touched,
                            values
                        }) => (

                            <AntForm
                                form={form}
                                name="register"
                                layout="vertical"
                                className="signup-form"
                                onFinish={handleSubmit}
                            >

                                <AntForm.Item
                                    name="username"
                                    label="Name"
                                    hasFeedback
                                    help={
                                        errors.name && touched.name ? (
                                            <span>{errors.name}</span>
                                        ) : null
                                    }

                                    validateStatus={touched.name && errors.name ? "error" : ""}
                                >
                                    <Input
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="name-input"
                                        placeholder="Enter your Name" />

                                </AntForm.Item>

                                {/* Email */}

                                <AntForm.Item
                                    label="Email Address"
                                    hasFeedback
                                    help={
                                        errors.email && touched.email ? (
                                            <span>{errors.email}</span>
                                        ) : null
                                    }
                                    validateStatus={touched.email && errors.email ? "error" : ""}
                                >

                                    <Input
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter your Email Address"
                                        className="login-email-input"
                                        value={values.email}
                                    />
                                </AntForm.Item>

                                {/* Password */}

                                <AntForm.Item
                                    name="password"
                                    label="Password"
                                    hasFeedback
                                    help={
                                        errors.password && touched.password ? (
                                            <span>{errors.password}</span>
                                        ) : null
                                    }
                                    validateStatus={touched.password && errors.password ? "error" : ""}
                                >
                                    <Input.Password
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter your password"
                                        className="login-password-input"
                                        value={values.password}
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
                        )}
                    </Formik>
                </div>
            </Modal>
        </div>
    )
}

export default LoginModal