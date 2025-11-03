import * as Yup from "yup"

export const ValidationSchema = Yup.object({
    email: Yup.string().email('Email is invalid').required("Email is required"),
    password: Yup.string().min("Password be must atleast 6 characters").required("Password is required")
})

export default ValidationSchema