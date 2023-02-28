// import { useRoute } from '@react-navigation/native';
import Header from '@layout/Header'
import React, { useState } from 'react'
import { useParams } from 'react-router'
// import { useLocation, useParams } from 'react-router'
import './infodevice.scss'
import { data } from './data'
import { FormOutlined, LockOutlined, PoweroffOutlined, RightOutlined, SyncOutlined } from '@ant-design/icons'
import RightMenu from '@layout/RightMenu'
import Modal2 from './Modal2'
import './modal.scss'
import Header2 from '../Header2'
import RightMenu2 from '@layout/RightMenu2'

const InfoDevice = () => {
    const { key } = useParams()
    // console.log(key)
    // console.log(data)
    const [showModal, setShowModal] = useState(false);
    const datas = data.find((p) => p.key === key)
    console.log(datas)
    const handleSave = (formData: any) => {
        // handle the form data here, for example by making an API call
        console.log(formData);
        // hide the modal
        setShowModal(false);
    };

    const handleCancel = () => {
        // hide the modal
        setShowModal(false);
    };

    const defaultInputValues = {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        radioOption: "option1",
    };
    return (

        <div className='info-device'>
            <Header2></Header2>
            <div className="cover-content">
                <div className="title">
                    <div className="navigator">
                        <p>Danh sách thiết bị </p> <span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span> <p>Chi tiết thiết bị</p>
                    </div>
                    <div className="big-title">
                        Thông tin thiết bị - {datas?.name}
                    </div>
                </div>

                <div className="content">
                    <div className="first-block">
                        <div className="small-title">
                            Thông tin thiết bị
                        </div>
                        <div className="image">
                            <img src={datas?.pic} alt="dat dep trai" />
                        </div>
                        <div className="status">

                            <span className='dot'></span>{datas?.condition.slice(17, 32)}
                        </div>
                        <div className="info">
                            <span className='infoKey'>Ghi chú: </span>
                            <span className='infoDesc'>Văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học</span>
                        </div>
                    </div>
                    <div className="second-block">
                        <div className="small-title2">
                            {datas?.name}
                        </div>
                        <div className="detail">
                            <span className="detailKey">
                                <div className="detailKeyU">SKU/ID</div>
                                <div className="detailKeyU">Địa chỉ Mac:</div>
                                <div className="detailKeyU">Tên đăng nhập:</div>
                                <div className="detailKeyU">Định dạng:</div>
                                <div className="detailKeyU">Vị trí:</div>
                                <div className="detailKeyU">Thời hạn bảo hành:</div>
                                <div className="detailKeyU">Trạng thái thiết bị:</div>
                            </span>
                            <span className="detailValue">
                                <div className='detailValueU'>A23434455556</div>
                                <div className='detailValueU'>{datas?.MAC}</div>
                                <div className='detailValueU'>User322334</div>
                                <div className='detailValueU'>Displayable</div>
                                <div className='detailValueU'>Ho Chi Minh</div>
                                <div className='detailValueU'>{datas?.contract}</div>
                                <div className='detailValueU'>Activated</div>
                            </span>
                        </div>
                    </div>
                    <div className="third-block">
                        <div className="upperBlock">
                            <div className="small-title3">
                                Thông tin phiên bản
                            </div>
                            <div style={{ display: 'flex', marginTop: '24px' }}>
                                <span className='key-2'>
                                    Phiên bản cũ nhất:
                                </span>
                                <span className="value-2">
                                    <div className="valueU">12.3 (20/02/2020)</div>
                                    <div className="valueU padding24 paddingbot112">12.3 (20/02/2020)</div>
                                </span>
                            </div>

                        </div>
                        <div className="underBlock">
                            <div className="small-title4">
                                Dung lượng bộ nhớ
                            </div>
                            <div style={{ display: 'flex', marginTop: '24px' }}>
                                <span className='key-3'>
                                    <div className="key-U">Dung lượng</div>
                                    <div className="key-U padding24">Còn trống</div>
                                </span>
                                <span className='value-3'>
                                    <div className="value-U">512GB</div>
                                    <div className="value-U padding24">123GB</div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RightMenu2>
                <ul className='block-wrapper'>

                    <li className='block-wrapper-inside'>
                        <Modal2
                            onSave={handleSave}
                            onCancel={handleCancel}
                            defaultInputValues={defaultInputValues}
                        />
                        {/* <div className='icon-right' >
                            <FormOutlined />
                        </div> */}
                        <div className='word-right'>
                            Chỉnh sửa
                        </div>

                    </li>
                    <li className='block-wrapper-inside'>
                        <div className='icon-right'>
                            <LockOutlined />
                        </div>
                        <div className='word-right'>
                            Khôi phục mật khẩu
                        </div>

                    </li>
                    <li className='block-wrapper-inside'>
                        <div className='icon-right'>
                            <SyncOutlined />
                        </div>
                        <div className='word-right'>
                            Khôi phục bộ nhớ
                        </div>

                    </li>


                </ul>

            </RightMenu2>
        </div>
    )
}

export default InfoDevice