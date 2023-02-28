
import { SearchOutlined } from '@ant-design/icons'
import RightMenu from '@layout/RightMenu'
import SelectAndLabelComponent from '@shared/components/SelectAndLabelComponent'
import { Modal } from 'antd'
import React, { useState } from 'react'
import './content.scss'
import { DeleteOutlined, LockOutlined, PlusOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TableView from './TableView'
import RightMenu2 from '@layout/RightMenu2'
// import RightMenu2 from '@layout/RightMenu2'
const ContentOnboard = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = (e: any) => {
        setVisible(false);
    };

    const handleCancel = (e: any) => {
        setVisible(false);
    };
    return (
        <>
            <div className='tiltle-content'>
                <p>Danh sách thiết bị</p>
            </div>
            <div className='contentX'>
                <div className='contentX__account-choose'>
                    <SelectAndLabelComponent value={'Chọn nhóm tài khoản'} dataString={[{ value: '1', label: 'Tất cả', data: 'dasdsa' },
                    { value: '2', label: 'Công ty TMCP Bách Hóa Xanh', data: 'dasdsa' }, { value: '3', label: 'Công ty TNHH XYZ', data: 'dasdsa' }, { value: '4', label: 'Công ty TMCP Adora', data: 'ssdasd' }]}

                    ></SelectAndLabelComponent >
                </div>
                <div className='contentX__account-column'>
                    <SelectAndLabelComponent value={'Ẩn hiện cột'} dataString={[{ value: '1', label: 'Ẩn hiện cột', data: 'dasdsa' },]}></SelectAndLabelComponent>
                </div>
                <div className='contentX__search-input'>
                    <input className='contentX__search-input__textfield' placeholder='Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac' >

                    </input>
                    <div className='contentX__search-input__search'>
                        <SearchOutlined style={{ color: 'white' }} />
                    </div>
                </div>
            </div>


            <TableView></TableView>
            <RightMenu2>
                <ul className='block-wrapper'>
                    <li className='block-wrapper-inside'>
                        <Link to={'/add-device'}>

                            <div className='icon-right'>
                                <PlusOutlined />

                            </div>
                        </Link>
                        <div className='word-right'>
                            Thêm thiết bị
                        </div>
                    </li>
                    <li className='block-wrapper-inside'>
                        <div className='icon-right'>
                            <PoweroffOutlined />
                        </div>
                        <div className='word-right'>
                            Kích hoạt thiết bị
                        </div>

                    </li>
                    <li className='block-wrapper-inside'>
                        <div className='icon-right'>
                            <LockOutlined />
                        </div>
                        <div className='word-right'>
                            Khóa thiết bị
                        </div>

                    </li>
                    <li className='block-wrapper-inside'>
                        <div className='icon-right red' onClick={showModal}>
                            <DeleteOutlined />
                        </div>
                        <div className='word-right bottom30' >
                            Xóa thiết bị
                        </div>
                        <Modal
                            title="Xóa thiết bị"
                            visible={visible}
                            onOk={handleOk}
                            onCancel={handleCancel}

                        >
                            <p>Bạn có chắc chắn muốn xoá các thiết bị này? Hành động này không thể hoàn tác.</p>
                        </Modal>
                    </li>
                </ul>
            </RightMenu2>
        </>
    )
}

export default ContentOnboard