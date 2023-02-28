import { ExportOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons'
import React from 'react'
import './profit-detail.scss'
import { useParams } from 'react-router'
import { Col, Row, Table } from 'antd'
import RightMenu from '@layout/RightMenu'
import type { ColumnsType } from 'antd/es/table';
import { dataProfit } from '../Profit/dataProfit'
import Header2 from '../Header2'
import RightMenu2 from '@layout/RightMenu2'
const ProfitDetail = () => {
    const { id } = useParams()
    const profit_data = dataProfit.find(data => data.key === id)
    console.log(profit_data)
    interface DataType {
        key: React.Key;
        name: string;
        number: number;
        profit: string;
        profit2: string;
        profit3: string;
    }
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'key',
        },
        {
            title: 'Bài hát',
            dataIndex: 'name',
        },
        {
            title: 'Số lượt phát',
            dataIndex: 'number',
        },
        {
            title: 'Doanh thu(VNĐ)',
            dataIndex: 'profit',
        },
        {
            title: 'Hành chính phí (VNĐ)',
            dataIndex: 'profit2',
        },
        {
            title: 'Nhuận bút (VNĐ)',
            dataIndex: 'profit3',
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            number: 32,
            profit: '20000000',
            profit2: '20000000',
            profit3: '20000000',
        },
        {
            key: '2',
            name: 'Jim Green',
            number: 42,
            profit: '40000000',
            profit2: '40000000',
            profit3: '40000000',
        },
        {
            key: '3',
            name: 'Joe Black',
            number: 32,
            profit: '50000000',
            profit2: '50000000',
            profit3: '50000000',
        },
    ];


    interface DataType2 {
        key: React.Key;
        name: string;
        age: number;
        profit: string;
    }

    const columns2: ColumnsType<DataType2> = [
        {
            title: 'Đơn vị khai thác',
            dataIndex: 'name',
        },
        {
            title: 'Số lượt phát',
            dataIndex: 'age',
        },
        {
            title: 'Doanh thu(VNĐ)',
            dataIndex: 'profit',
        },
    ];

    const data2: DataType2[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            profit: '2.500.000',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            profit: '4.500.000',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            profit: '8.500.880',
        },
    ];
    return (
        <div className='wrapper-all'>
            <Header2></Header2>
            <div className="title">
                <div className="navigator">
                    <p>Doanh thu </p> <span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span> <p>Phân phối doanh thu</p> <span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span> <p>Chi tiết doanh thu</p>
                </div>
                <div className="big-title">
                    Hợp đồng Ủy quyền {profit_data?.contract} - Quý 1
                </div>
            </div>
            <div className="content-mid">
                <Row>
                    <Col flex={2}>
                        <div className='left-block'>
                            <div className="content-input">
                                <div className="small-title">
                                    Danh sách bản ghi
                                </div>
                                <div className="contentX33">
                                    <input className='contentX33__search-input__textfield' placeholder='Nhập tên bài hát' >

                                    </input>
                                    <div className='contentX33__search-input__search'>
                                        <SearchOutlined style={{ color: 'white' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="table">
                                <Table columns={columns} dataSource={data} />
                            </div>
                        </div>
                    </Col>
                    <Col flex={3}>
                        <div className='right-block'>
                            <div className="content">
                                <div className="small-title">
                                    Doanh thu bản ghi

                                </div>
                                <div className="big-title">
                                    Cuộc gọi nhỡ
                                </div>
                            </div>
                            <div className="table">
                                <Table columns={columns2} dataSource={data2} />

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
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

export default ProfitDetail