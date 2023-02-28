import { ExportOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons'
import Header from '@layout/Header'
import RightMenu from '@layout/RightMenu'
import { Col, DatePicker, Row, Table } from 'antd'
import React from 'react'
import './historydetail.scss'
import type { ColumnsType } from 'antd/es/table';
import RightMenu2 from '@layout/RightMenu2'
import Header2 from '../Header2'

interface DataType {
    key: React.Key;
    name: string;
    total: number;
    totalProfit: string;
    totalPerformance: string;
    product: string;
    VCPMC: string

}
const HistoryProfitDetail = () => {
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'key',
        },
        {
            title: 'Tên bài hát',
            dataIndex: 'name',
        },
        {
            title: 'Tổng lượt phát',
            dataIndex: 'total',
        },
        {
            title: 'Tổng doanh thu',
            dataIndex: 'totalProfit',
        },
        {
            title: 'Quyền biểu diễn',
            dataIndex: 'totalPerformance',
        },
        {
            title: 'Quyền sản xuất',
            dataIndex: 'product',
        },
        {
            title: 'VCPMC',
            dataIndex: 'VCPMC',
        },
    ];

    const data: DataType[] = [

        {
            key: '1',
            name: 'Bài hát 1',
            total: 365,
            totalProfit: '365.000.000',
            totalPerformance: '36.266',
            product: '36.266',
            VCPMC: '36.266',
        },
        {
            key: '2',
            name: 'Bài hát 1',
            total: 365,
            totalProfit: '365.000.000',
            totalPerformance: '36.266',
            product: '36.266',
            VCPMC: '36.266',
        },
        {
            key: '3',
            name: 'Bài hát 1',
            total: 365,
            totalProfit: '365.000.000',
            totalPerformance: '36.266',
            product: '36.266',
            VCPMC: '36.266',
        },
        {
            key: '4',
            name: 'Bài hát 1',
            total: 365,
            totalProfit: '365.000.000',
            totalPerformance: '36.266',
            product: '36.266',
            VCPMC: '36.266',
        },
        {
            key: '5',
            name: 'Bài hát 1',
            total: 365,
            totalProfit: '365.000.000',
            totalPerformance: '36.266',
            product: '36.266',
            VCPMC: '36.266',
        },
        {
            key: '6',
            name: 'Bài hát 1',
            total: 365,
            totalProfit: '365.000.000',
            totalPerformance: '36.266',
            product: '36.266',
            VCPMC: '36.266',
        },

    ];
    return (
        <div className='wrapper-all'>
            <Header2></Header2>
            <div className="wrapper">
                <div className="content-header">
                    <p>Doanh thu</p> <span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span> <p>Lịch sử đối soát</p><span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span><p>Chi tiết</p>

                </div>
                <div className='big-title'>
                    Doanh thu theo hợp đồng - HĐ123 - Kỳ Tháng 03/2021

                </div>
            </div>
            <div className="content-table">
                <Row>
                    <Col flex={1}>
                        <div className="left-block">
                            <div className="top-table">
                                <div className="small-title">
                                    Thông tin hợp đồng
                                </div>
                                <div className="block-content1">
                                    <Row>
                                        <Col flex={1}>
                                            <div className="sohopdong">
                                                Số hợp đồng:
                                            </div>
                                            <div className="sohopdong">
                                                Đơn vị khai thác:
                                            </div>
                                            <div className="sohopdong">
                                                Loại hợp đồng:
                                            </div>
                                            <div className="sohopdong">
                                                Hiệu lực từ:
                                            </div>
                                            <div className="sohopdong">
                                                Ngày hết hạn:
                                            </div>
                                            <div className="sohopdong">
                                                Giá trị hợp đồng:
                                            </div>
                                            <div className="sohopdong">
                                                Giá trị phân phối theo ngày:
                                            </div>
                                        </Col>
                                        <Col flex={4}>
                                            <div className="value">
                                                HĐ123
                                            </div>
                                            <div className="value">
                                                Công ty TNHH ABC
                                            </div>
                                            <div className="value">
                                                Trọn gói
                                            </div>
                                            <div className="value">
                                                01/01/2020
                                            </div>
                                            <div className="value">
                                                01/01/2022
                                            </div>
                                            <div className="value">
                                                730.000.000 VNĐ
                                            </div>
                                            <div className="value">
                                                365.000.000 VNĐ
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="under-table">
                                <div className="small-title">
                                    Thông tin đối soát
                                </div>
                                <div className="block-content1">
                                    <Row>
                                        <Col flex={1}>
                                            <div className="sohopdong">
                                                Ký đối soát:
                                            </div>
                                            <div className="sohopdong">
                                                Số bài hát:
                                            </div>
                                            <div className="sohopdong">
                                                Tổng số lượt phát:
                                            </div>
                                            <div className="sohopdong">
                                                Tổng doanh thu:
                                            </div>
                                            <div className="sohopdong">
                                                Doanh thu chưa phân phối:
                                            </div>
                                            <div className="sohopdong">
                                                Trạng thái đối soát:
                                            </div>

                                        </Col>
                                        <Col flex={4}>
                                            <div className="value">

                                                01/01/2020
                                            </div>
                                            <div className="value">
                                                13 bai
                                            </div>
                                            <div className="value">
                                                200.000 lượt
                                            </div>
                                            <div className="value">
                                                300.000.000 VNĐ
                                            </div>
                                            <div className="value">
                                                1.000.000 VNĐ
                                            </div>
                                            <div className="value">
                                                Chưa đối soát
                                            </div>

                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col flex={4}>
                        <div className="right-block">
                            <div className='big-title'>
                                Danh sách bản ghi

                            </div>
                            <div className="content-input">
                                <div className="date-picker">
                                    <div className="small-title">
                                        Xem theo ngày/tuần
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
                            <div className="table">
                                <Table columns={columns} dataSource={data} />
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

export default HistoryProfitDetail