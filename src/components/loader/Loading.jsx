import { Spin } from "antd"
import "./Loading.css"

const Loading = () => {
  return (
   <div className="ant-loading-page">
      <Spin size="large" tip="Loading, please wait..." />
   </div>
  )
}

export default Loading