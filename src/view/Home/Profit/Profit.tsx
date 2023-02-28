import { ExportOutlined, LockOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons'

import { Col, DatePicker, Row, Space } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React from 'react'
import { Table } from 'antd'
import './profit.scss'
import { Link } from 'react-router-dom'
import Header2 from '../Header2'
import RightMenu2 from '@layout/RightMenu2'
// import SiderComponent2 from '../SiderComponent/SiderComponent2'
import Sidebar from '../Sidebar'
interface DataType {
    key: React.Key;
    contract: string,
    name: string;
    number: number;
    profit: string;
    profit2: string;
    profit3: string;
    profit4: string;
    profit5: string;
}
const Profit = () => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'key'
        },
        {
            title: 'Hợp đồng ủy quyền',
            dataIndex: 'contract',
        },
        {
            title: 'Người ủy quyền',
            dataIndex: 'name',
        },
        {
            title: 'Số bài hát ủy quyền',
            dataIndex: 'number',
        },
        {
            title: 'Doanh thu(VNĐ)',
            dataIndex: 'profit',
        },
        {
            title: 'Hành phí chính(VNĐ)',
            dataIndex: 'profit2',
        },
        {
            title: 'Mức nhuận bút (VNĐ)',
            dataIndex: 'profit3',
        },
        {
            title: 'Ngày chốt đối soát',
            dataIndex: 'profit4',
        },
        {
            title: 'Chi tiết doanh thu',
            key: 'profit5',
            render: (_, record) => (
                <Space size="middle" >
                    <Link to={`/profit-detail/${record.key}`}>
                        <span style={{ color: '#FF7506', textDecoration: 'underline' }}>Xem chi tiết</span>
                    </Link>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            contract: 'UQ789',
            name: 'Vương Anh Tú',
            number: 32,
            profit: '365.000.000',
            profit2: '365.000.000',
            profit3: '365.000.000',
            profit4: '21/07/2021',
            profit5: '365.000.000',
        },
        {
            key: '2',
            contract: 'UQ789',
            name: 'Nguyễn Đức Cường',
            number: 42,
            profit: '365.000.000',
            profit2: '365.000.000',
            profit3: '365.000.000',
            profit4: '21/07/2021',
            profit5: '365.000.000',
        },
        {
            key: '3',
            contract: 'UQ789',
            name: 'Hứa Kim Tuyền',
            number: 32,
            profit: '365.000.000',
            profit2: '365.000.000',
            profit3: '365.000.000',
            profit4: '21/07/2021',
            profit5: '365.000.000',
        },
    ];

    return (
        <div className='wrapper-cover-all'>
            <Header2></Header2>


            <Row>
                <Col span={18} push={3} style={{ marginTop: '80px' }}>
                    <div className="wrapper">
                        <div className="content-header">
                            <p>Doanh thu</p> <span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span> <p>Phân thối doanh thu</p><br />

                        </div>
                        <div className='big-title'>
                            Quản lý phân phối doanh thu
                        </div>
                        <div className="content-input">
                            <div className="date-picker">
                                <div className="small-title">
                                    Theo tháng:
                                </div>

                                <div className="date-picker-form">
                                    <DatePicker style={{ backgroundColor: '#2B2B3F', color: 'white', marginTop: '24px' }} />
                                </div>
                            </div>
                            <div className="searchX">

                                <input className='searchX__search-input__textfield' placeholder='Nhập tên bài hát' >

                                </input>
                                <div className='searchX__search-input__search'>
                                    <SearchOutlined style={{ color: 'white' }} />
                                </div>
                            </div>
                        </div>
                        <div className="content-table">
                            <div className="content-title">
                                Danh sách hợp đồng ủy quyền
                            </div>
                            <div className="tableXXX">
                                <Table columns={columns} dataSource={data} />
                            </div>
                        </div>
                    </div>


                </Col>
                <Col span={3} pull={18}>

                    {/* <SiderComponent2></SiderComponent2> */}
                    <Sidebar></Sidebar>
                </Col>
            </Row>
            <RightMenu2>
                <ul className='block-wrapper'>

                    <li className='block-wrapper-inside'>
                        <div className='icon-right'>
                            <ExportOutlined />
                        </div>
                        <div className='word-right'>
                            Xuất dữ liệu
                        </div>

                    </li>

                </ul>
            </RightMenu2>
        </div>
    )
}

export default Profit