import { ExportOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons'
import Header from '@layout/Header'
import RightMenu from '@layout/RightMenu'
import SiderComponent from '@layout/Sidebar'
import { Col, DatePicker, Row, Space, Table } from 'antd'
import React from 'react'
import './history.scss'
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom'
// import SiderComponent2 from '../SiderComponent/SiderComponent2'
import RightMenu2 from '@layout/RightMenu2'
import Header2 from '../Header2'
import Sidebar from '../Sidebar'
const HistoryProfit = () => {
    interface DataType {
        key: React.Key;
        name: string;
        donvi: string;
        date: string;
        contract: string;
        count: string;
        profit: string;
        full_profit: string;
        date_success: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'key',
        },
        {
            title: 'Số hợp đồng',
            dataIndex: 'name',
        },
        {
            title: 'Đơn vị khai thác',
            dataIndex: 'donvi',
        },
        {
            title: 'Thời hạn hợp đồng',
            dataIndex: 'date',
        },
        {
            title: 'Loại hợp đồng',
            dataIndex: 'contract',
        },
        {
            title: 'Tổng lượt phát',
            dataIndex: 'count',
        },
        {
            title: 'Tổng doanh thu',
            dataIndex: 'profit',
        },
        {
            title: 'Doanh thu chưa phân phối',
            dataIndex: 'full_profit',
        },
        {
            title: 'Ngày chốt đối soát',
            dataIndex: 'date_success',
        },
        {

            render: (_, record) => (
                <Space size="middle" >
                    <Link to={`/history-profit-detail/${record.key}`}>
                        <span style={{ color: '#FF7506', textDecoration: 'underline' }}>Xem chi tiết</span>
                    </Link>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'HĐ123',
            donvi: 'Cty TNHH TM DV ABCEDEF',
            date: '10/07/2020 - 10/07/2021',
            contract: 'Trọn gói',
            count: '365',
            profit: '365.000.000',
            full_profit: '100000000',
            date_success: '10/07/2021'
        },
        {
            key: '2',
            name: 'HĐ123',
            donvi: 'Cty TNHH TM DV ABCEDEF',
            date: '10/07/2020 - 10/07/2021',
            contract: 'Trọn gói',
            count: '365',
            profit: '365.000.000',
            full_profit: '100000000',
            date_success: '10/07/2021',
        },
        {
            key: '3',
            name: 'HĐ123',
            donvi: 'Cty TNHH TM DV ABCEDEF',
            date: '10/07/2020 - 10/07/2021',
            contract: 'Trọn gói',
            count: '365',
            profit: '365.000.000',
            full_profit: '100000000',
            date_success: '10/07/2021'
        },
    ];
    return (
        <div className='wrapper-cover'>
            <Header2></Header2>
            <Row>
                <Col span={18} push={3} style={{ marginTop: '80px' }}>
                    <div className="wrapper">
                        <div className="content-header">
                            <p>Doanh thu</p> <span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span> <p>Lịch sử đối soát</p><br />

                        </div>
                        <div className='big-title'>
                            Lịch sử đối soát doanh thu

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
                            <div className="contentX">

                                <input className='contentX__search-input__textfield' placeholder='Nhập tên bài hát' >

                                </input>
                                <div className='contentX__search-input__search'>
                                    <SearchOutlined style={{ color: 'white' }} />
                                </div>
                            </div>
                        </div>

                        <div className="content-table">
                            <div className="content-title">
                                Danh sách hợp đồng khai thác đã đối soát
                            </div>
                            <div className="table">
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

export default HistoryProfit