import { AppstoreOutlined, ClockCircleOutlined, GiftOutlined, ReloadOutlined } from "@ant-design/icons";
import "./FeaturesSection.css"
import FeaturesData from "./FetauresData"

const FeaturesSection = () => {

    const iconMap = {
        ClockCircleOutlined: <ClockCircleOutlined />,
        GiftOutlined: <GiftOutlined />,
        AppstoreOutlined: <AppstoreOutlined />,
        ReloadOutlined: <ReloadOutlined />,
    };

    return (

        <section className="features-section my-lg-14 my-8 ">
            <div className="features-one">
                <div className="container">
                    <div className="feature-wrapper">
                        {FeaturesData.map((item, index) => {
                            return (
                                <div className="card-div mb-8 mb-xl-0" key={index}>
                                    <div className="feature-icon">{iconMap[item.icon]}</div>
                                    <div className="feature-content">
                                        {item.title}
                                    </div>
                                    <p className="subtitle">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection