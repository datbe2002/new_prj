import { RightOutlined } from '@ant-design/icons';
import Header from '@layout/Header';
import { DatePicker, Space } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header2 from '../Header2';
import './add.scss'
import eyePassword from './eyes/fi_eye-off.png'
const AddNewDevice = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };
    return (
        <div className='wrapper2'>
            <Header2></Header2>
            <div className="wrapper-cover">
                <div className="title">
                    <div className="navigator">
                        <p>Danh sách thiết bị </p> <span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span> <p>Chi tiết thiết bị</p> <span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span> <p>Thêm thiết bị mới</p>
                    </div>
                    <div className="big-title">
                        Thêm thiết bị mới
                    </div>
                </div>
            </div>
            <div className="body-content">
                <div className="left-block">
                    <div className="key1">
                        <div className="keyU">Tên thiết bị:<span style={{ color: 'red', fontSize: '1rem' }}>*</span></div>
                        <div className="keyU">SKU/ID:<span style={{ color: 'red', fontSize: '1rem' }}>*</span></div>
                        <div className="keyU">Địa chỉ Mac:<span style={{ color: 'red', fontSize: '1rem' }}>*</span></div>
                        <div className="keyU">Thời hạn bảo hành:<span style={{ color: 'red', fontSize: '1rem' }}>*</span></div>
                        <div className="keyU">Label:<span style={{ color: 'red', fontSize: '1rem' }}>*</span></div>
                        <div className="keyU">Thông tin:<span style={{ color: 'red', fontSize: '1rem' }}>*</span></div>
                        <div className="keyU">Ghi chú</div>
                    </div>
                    <div className="value1">
                        <input className="valueU"></input>
                        <input className="valueU"></input>
                        <input className="valueU"></input>
                        <div className="valueDate">
                            <Space direction="vertical">
                                <DatePicker style={{ backgroundColor: '#2B2B3F', color: 'white', marginTop: '24px' }} />

                            </Space>
                        </div>
                        <div className='valueDropdown'>
                            <select id="dropdown" name="dropdown ">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className='valueDropdown'>
                            <select id="dropdown" name="dropdown">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className="textarea-block">
                            <textarea id="message" name="message" rows="5" cols="40"></textarea>
                        </div>
                    </div>
                </div>
                <div className="middle"></div>
                <div className="right-block">
                    <div className="key2">
                        <div className="keyU">Tên đăng nhập:<span style={{ color: 'red', fontSize: '1rem' }}>*</span></div>
                        <div className="keyU">Mật khẩu:<span style={{ color: 'red', fontSize: '1rem' }}>*</span></div>
                        <div className="keyU">Nhập lại mật khẩu:<span style={{ color: 'red', fontSize: '1rem' }}>*</span></div>
                        <div className="keyU">Vị trí:<span style={{ color: 'red', fontSize: '1rem' }}>*</span></div>
                    </div>
                    <div className="value2">
                        <input className="valueU"></input>
                        <div style={{ position: 'relative' }}>
                            <input type={showPassword ? "text" : "password"} className="valueU" />
                            <img className='imagee' src={eyePassword} alt="" onClick={togglePasswordVisibility} />
                        </div>
                        <div style={{ position: 'relative' }}>
                            <input type={showPassword2 ? "text" : "password"} className="valueU" />
                            <img className='imagee2' src={eyePassword} alt="" onClick={togglePasswordVisibility2} />

                        </div>
                        <input className="valueU"></input>
                    </div>
                </div>
            </div>
            <div className='footer-content'>
                <div className="constrain">
                    <span style={{ color: 'red', fontSize: '1rem' }}>*</span> là những trường thông tin bắt buộc
                </div>
                <div className='button-wrapper'>
                    <Link to={'/management'}>
                        <button className='huy-button'>Hủy</button>

                    </Link>
                    <button className='save-button'>Lưu</button>
                </div>

            </div>
        </div>
    );
};

export default AddNewDevice