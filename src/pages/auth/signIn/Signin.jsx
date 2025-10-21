import { Button, Checkbox, Form, Input } from "antd"
import "../../../pages/auth/Auth.css"
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Signin = () => {
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const onFinish = values => {
        form.resetFields();
        toast.success("Login Sucessfull")
    };


    return (
        <>
            <div className="fresh-cart-banner">
                <Toaster />
                <div className="container">
                    <div className="row my-lg-14 my-8">
                        <nav className="shadow-sm">
                            <div className="logo">
                                <img
                                    className="cart-logo"
                                    src="https://freshcart-next-js-template.netlify.app/images/logo/freshcart-logo.svg"
                                    alt="Fresh Cart Logo"
                                />
                            </div>
                            <div className="content-right">
                                <div className="nav-content">
                                    <p>Already have an account? <a href="">Sign in</a></p>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="auth-wrapper">
                    <div className="auth-wrapper-eft">
                        <img src="https://freshcart-next-js-template.netlify.app/images/svg-graphics/signin-g.svg" />
                    </div>

                    <div className="auth-wrapper-right">
                        <div className="sign-in-form">
                            <h1 className="sign-in-heading">Sign in to FreshCart</h1>
                            <p className="form-description">Welcome back to FreshCart! Enter your email to get started.</p>

                            <Form
                                layout="vertical"
                                form={form}
                                name="nest-messages"
                                onFinish={onFinish}
                                style={{ maxWidth: 450 }}
                                validateMessages={validateMessages}
                                className="signIn-form"
                            >
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

                                <div className="chekbox-main">
                                    <Checkbox className="tick-select-btn">Remember me </Checkbox>
                                    <div className="forgot-password">
                                        <p className="form-description">Forgot Password?
                                            <Link to={"/"}>Reset it</Link>
                                        </p>
                                    </div>
                                </div>

                                <Form.Item label={null}>
                                    <Button className="sign-in-btn" type="primary" htmlType="submit" block>
                                        Sign in
                                    </Button>
                                </Form.Item>

                                <div className="forgot-password">
                                    <p className="form-description">Dont have an account?
                                        <Link to={"/"}>Sign Up</Link>
                                    </p>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin