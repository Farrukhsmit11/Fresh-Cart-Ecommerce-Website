import { Input, Modal } from "antd";
import { useState } from "react";

const LocationModal = ({ isOpenLocationModal, setisLocationModal }) => {

    const [openlocationModal, setOpenlocationModal] = useState(false)

    const handleCancel = () => {
        setOpenlocationModal(false)
    }

    return (
        <div>
            <Modal
                title="Choose your delivery location"
                open={isOpenLocationModal}
                footer={null}
                className="location-modal"
                onCancel={() => {
                    handleCancel();
                    setisLocationModal(false);
                }}
            >
                <p>Enter your address and we will specify the offer you area.</p>
                <Input placeholder="Enter your address" className="location-input" />
            </Modal>

        </div>
    )
}

export default LocationModal