import { Button, Checkbox, Form, Input } from "antd"
import Banner from "../../../uiComponents/banner/Banner"
import "./ForgotPassword.css"
import { ArrowLeftOutlined } from "@ant-design/icons";

const ForgotPassword = () => {

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
  };


  return (

    <>
      <Banner />
      <div className="container">
        <div className="auth-wrapper">
          <div className="auth-wrapper-eft">
            <img src="https://freshcart-next-js-template.netlify.app/images/svg-graphics/signin-g.svg" />
          </div>

          <div className="auth-wrapper-right">
            <div className="forgot-password-form">
              <h1 className="forgot-password-heading">Forgot your Password?</h1>

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
                  <Input className="email-input-one" placeholder="Email" autoComplete="email" />
                </Form.Item>

                <div className="buttons">
                  <Button className="reset-btn">Reset Password</Button>
                  <Button className="back-btn"><ArrowLeftOutlined /> Back to Login</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ForgotPassword