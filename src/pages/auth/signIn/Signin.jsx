import { Button, Checkbox, Form as AntForm, Input } from "antd"
import "./Signin.css"
import { useNavigate } from "react-router-dom";
import { Banner } from "../../../components"
import { Formik } from "formik";
import Validation from "./Validation"

const Signin = () => {

    const [form] = AntForm.useForm();
    const navigate = useNavigate()

    const initialValues = {
        email: "",
        password: ""
    }

    const handleSubmit = (values) => {
        console.log("Signing in", values)
    }

    return (
        <>
            <Banner />

            <div className="container">
                <div className="auth-wrapper">
                    <div className="saas">
                        <div className="auth-wrapper-header-left">
                            <img src="https://freshcart-next-js-template.netlify.app/images/svg-graphics/signin-g.svg" />
                        </div>

                        <div className="auth-wrapper-right">
                            <div className="sign-in-form">
                                <div className="auth-header">
                                    <h1 className="sign-in-heading">Sign in to FreshCart</h1>
                                    <p className="">Welcome back to FreshCart! Enter your email to get started.</p>
                                </div>

                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={Validation}
                                    onSubmit={handleSubmit}
                                >
                                    {({
                                        handleSubmit,
                                        handleBlur,
                                        handleChange,
                                        touched,
                                        errors,
                                        values
                                    }) => (
                                        <AntForm layout="vertical" form={form} onFinish={handleSubmit}>
                                            <AntForm.Item
                                                help={
                                                    touched.email && errors.email ? (
                                                        <span>{errors.email}</span>
                                                    ) : null
                                                }
                                                validateStatus={touched.email && errors.email ? "error" : ""}
                                            >
                                                <Input value={values.email} onChange={handleChange} onBlur={handleBlur} className="email-input" name="email" placeholder="Email" ></Input>
                                            </AntForm.Item>

                                            <AntForm.Item
                                                help={
                                                    touched.password && errors.password ? (
                                                        <span>{errors.password}</span>
                                                    ) : null
                                                }
                                                validateStatus={touched.password && errors.password ? "error" : ""}
                                            >
                                                <Input className="email-input password" name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="Password"></Input>
                                            </AntForm.Item>
                                        </AntForm>
                                    )}
                                </Formik>







                                <div className="chekbox-main">
                                    <Checkbox className="tick-select-btn">Remember me </Checkbox>
                                    <div className="social-links-main">
                                        <p className="form-title">Forgot password?
                                            <a href="#" onClick={() => navigate("/forgotpassword")}>Reset It</a>
                                        </p>
                                    </div>
                                </div>
                                <Button className="sign-in-btn" type="primary" htmlType="submit" block>
                                    Sign in
                                </Button>

                                <div className="forgot-password">
                                    <p className="text-sm">Dont have an account?
                                        <a href="#" to={"/"}>Sign Up</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Signin