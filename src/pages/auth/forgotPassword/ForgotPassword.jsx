import { Button, Form as AntForm, Input } from "antd"
import "./ForgotPassword.css"
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Banner } from "../../../components"
import { Formik } from "formik";
import { ForgotPasswordSchema } from "./ForgotPasswordSchema";

const ForgotPassword = () => {

  const navigate = useNavigate();

  const [form] = AntForm.useForm();

  const handleSubmit = (values) => {
    form.resetFields();
    console.log("Password reset sucessfully", values)
  }

  const initialValues = {
    email: ""
  }


  return (
    <>
      <Banner />

      <div className="container">
        <div className="row">
          <div className="auth-wrapper">
            <div className="saas">
              <div className="auth-wrapper-left">
                <img src="https://freshcart-next-js-template.netlify.app/images/svg-graphics/fp-g.svg" />
              </div>

              <div className="auth-wrapper-right">
                <div className="forgot-password-form">
                  <h1 className="forgot-password-heading">Forgot your Password?</h1>
                  <p className="form-subtitile">Please enter the email address associated with your account</p>

                  <Formik
                    initialValues={initialValues}
                    validationSchema={ForgotPasswordSchema}
                    onSubmit={handleSubmit}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      touched,
                      errors,
                      values
                    }) => (
                      <AntForm layout="vertical" form={form} onFinish={handleSubmit}>
                        <AntForm.Item
                          validateStatus={touched.email && errors.email ? "error" : ""}
                          help={
                            touched.email && errors.email ? (
                              <span>{errors.email}</span>
                            ) : null
                          }
                        >
                          <Input value={values.email} onChange={handleChange} onBlur={handleBlur} className="email-input" name="email" placeholder="Email" required ></Input>
                        </AntForm.Item>

                        <div className="buttons">
                          <Button htmlType="submit" className="reset-btn">Reset Password</Button>
                          <Button onClick={() => navigate("../signIn")} className="back-to-login-btn"><ArrowLeftOutlined /> Back to Login</Button>
                        </div>
                      </AntForm>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

    </>

  )
}

export default ForgotPassword