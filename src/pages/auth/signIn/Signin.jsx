import { Button, Checkbox, Form, Input } from "antd"
import "./Signin.css"
import { useNavigate } from "react-router-dom";
import { Banner } from "../../../components"
import validateMessages from "./Validation";

const Signin = () => {
    const [form] = Form.useForm();

    const navigate = useNavigate()

    const onFinish = values => {
        form.resetFields();
    };

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
                                <Form
                                    layout="vertical"
                                    form={form}
                                    name="nest-messages"
                                    onFinish={onFinish}
                                    style={{ maxWidth: 450 }}
                                    validateMessages={validateMessages}
                                    className="signIn-form"
                                >
                                    <div className="input-main">
                                        <Form.Item
                                            name="email"
                                            rules={[{ type: "email", required: true, message: "Please enter email Address" }]}>
                                            <Input className="email-input" placeholder="Email" autoComplete="email" />
                                        </Form.Item>

                                        <Form.Item
                                            name="password"
                                            rules={[{ required: true, message: 'Please input your Password!' }]}
                                            hasFeedback
                                        >
                                            <Input.Password className="password-input" placeholder="Password" autoComplete="current-password" />
                                        </Form.Item>
                                    </div>


                                    <div className="chekbox-main">
                                        <Checkbox className="tick-select-btn">Remember me </Checkbox>
                                        <div className="social-links-main">
                                            <p className="form-title">Forgot password?
                                                <a href="#" onClick={() => navigate("/forgotpassword")}>Reset It</a>
                                            </p>
                                        </div>
                                    </div>

                                    <Form.Item>
                                        <Button className="sign-in-btn" type="primary" htmlType="submit" block>
                                            Sign in
                                        </Button>
                                    </Form.Item>

                                    <div className="forgot-password">
                                        <p className="text-sm">Dont have an account?
                                            <a href="#" to={"/"}>Sign Up</a>
                                        </p>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin