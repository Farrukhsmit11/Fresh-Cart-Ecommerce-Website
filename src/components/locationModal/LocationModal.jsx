import { Button, Divider, Input, List, Modal } from "antd";
import { useState } from "react";
import "./LocationModal.css"
import LocationData from "./LocationData";

const LocationModal = ({ isOpenLocationModal, setIsLocationModal }) => {

    const [openlocationModal, setOpenlocationModal] = useState(false)

    const handleCancel = () => {
        setOpenlocationModal(false)
    }

    return (
        <div>
            <Modal
                title="Choose your delivery location"
                open={isOpenLocationModal}
                closable={true}
                footer={null}
                className="location-modal"
                onCancel={() => {
                    handleCancel();
                }}
            >
                <p>Enter your address and we will specify the offer you area.</p>
                <Input placeholder="Search your area" className="location-input" />

                <div className="location-list-data">


                    <div className="location-btn-main">
                        <h1 className="location-heading">Select Location</h1>
                        <Button className="clear-all-btn">Clear All</Button>
                    </div>

                    {LocationData.map((item, index) => {
                        return (

                            <div className="text-content">
                                {item.location}
                            </div>

                        )
                    })}
                </div>
            </Modal>


        </div>
    )
}

export default LocationModal