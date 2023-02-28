import { FormOutlined } from "@ant-design/icons";
import React, { useState } from "react";

type ModalProps = {
    onSave: (formData: FormData) => void;
    onCancel: () => void;
    defaultInputValues: {
        input1: string;
        input2: string;
        input3: string;
        input4: string;
        input5: string;
        radioOption: string;
    };
};

type FormData = {
    input1: string;
    input2: string;
    input3: string;
    input4: string;
    input5: string;
    radioOption: string;
};

const Modal2: React.FC<ModalProps> = ({
    onSave,
    onCancel,
    defaultInputValues,
}) => {
    const [formData, setFormData] = useState<FormData>(defaultInputValues);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setFormData((prevState) => ({ ...prevState, radioOption: value }));
    };

    const handleSave = () => {
        setIsOpen(!isOpen);
        onSave(formData);
    };

    const handleCancel = () => {
        setIsOpen(!isOpen);
        onCancel();

    };

    const handleOpen = () => {
        setIsOpen(true);
        console.log('testing');
    }


    return (
        <>
            <div className="icon-right" onClick={handleOpen}>
                <FormOutlined />

            </div>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <form>
                            <div className="title-big">
                                Chỉnh sửa thông tin thiết bị
                            </div>
                            <div className="input-field">
                                <label htmlFor="input1">Tên thiết bị:<span style={{ color: 'red' }}>*</span></label><br />
                                <input
                                    type="text"
                                    id="input1"
                                    name="input1"
                                    value={formData.input1}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="input2">SKU/ID:<span style={{ color: 'red' }}>*</span></label><br />
                                <input
                                    type="text"
                                    id="input2"
                                    name="input2"
                                    value={formData.input2}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="input3">Địa chỉ Mac:<span style={{ color: 'red' }}>*</span></label><br />
                                <input
                                    type="text"
                                    id="input3"
                                    name="input3"
                                    value={formData.input3}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="input4">Tên đăng nhập:<span style={{ color: 'red' }}>*</span></label><br />
                                <input
                                    type="text"
                                    id="input4"
                                    name="input4"
                                    value={formData.input4}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="input-field">
                                <label htmlFor="input5">Vị trí:<span style={{ color: 'red' }}>*</span></label><br />
                                <input
                                    type="text"
                                    id="input5"
                                    name="input5"
                                    value={formData.input5}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="option-radio">
                                <label htmlFor="">Trạng thái thiết bị:<span style={{ color: 'red' }}>*</span></label>
                                <div style={{ display: 'flex', paddingLeft: '10px' }}>
                                    <input
                                        type="radio"
                                        id="radioOption1"
                                        name="radioOption"
                                        value="option1"
                                        checked={formData.radioOption === "option1"}
                                        onChange={handleRadioChange}
                                    />
                                    <label className="datbe" htmlFor="radioOption1">Đã kích hoạt</label>

                                </div>
                                <div style={{ display: 'flex', paddingLeft: '10px' }}>
                                    <input
                                        type="radio"
                                        id="radioOption2"
                                        name="radioOption"
                                        value="option2"
                                        checked={formData.radioOption === "option2"}
                                        onChange={handleRadioChange}
                                    />
                                    <label className="datbe" htmlFor="radioOption2">Ngưng kích hoạt</label>

                                </div>
                            </div>

                        </form>
                        <div className="modal-buttons">
                            <button className="huy-button" onClick={handleCancel}>Hủy</button>

                            <button className="save-button" onClick={handleSave}>Lưu</button>
                        </div>
                    </div>


                </div >
            )}
        </>
    );
};

export default Modal2;