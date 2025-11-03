import { message } from "antd"

export const handleSuccess = (val) => {
    message.success(val || "Sucess")
}
