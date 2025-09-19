import { Badge, Button, Checkbox, Form, Input, Layout } from "antd"
import "./signin.css"
import { Link } from "react-router-dom";

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
        console.log(values);
        form.resetFields();
    };


    return (
        <>
            <div className="fresh-cart-banner">
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


            <div className="signin-container">
                <div className="content row">
                    <img src="https://freshcart-next-js-template.netlify.app/images/svg-graphics/signin-g.svg" />
                    <div className="sign-in-form">
                        <h1>Sign in to FreshCart</h1>
                        <p className="form-description">Welcome back to FreshCart! Enter your email to get started.</p>
                        <Form
                            layout="vertical"
                            form={form}
                            name="nest-messages"
                            onFinish={onFinish}
                            style={{ maxWidth: 450 }}
                            validateMessages={validateMessages}
                        >
                            <Form.Item
                                name={['user', 'email']}
                                rules={[{ type: "email", required: true, message: "Please enter email Address" }]}>
                                <Input className="email-input" placeholder="Email" autoComplete="off" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                                hasFeedback
                            >
                                <Input.Password className="password-input" type="password" placeholder="*****" />
                            </Form.Item>


                            <div className="form-content">
                                <Checkbox className="tick-select-btn">Remember me </Checkbox>
                                <div className="forgot-password">
                                    <p className="form-description">Forgot Password?
                                        <Link to={"/"}>Reset it</Link>
                                    </p>
                                </div>
                            </div>

                            <Form.Item label={null}>
                                <Button className="sign-in-btn" type="primary" htmlType="submit" block>
                                    Sign In
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
        </>
    )
}

export default Signin

