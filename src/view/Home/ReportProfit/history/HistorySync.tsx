import { ExportOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons'
import Header from '@layout/Header'
import RightMenu from '@layout/RightMenu'
import { Col, Row, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import './sync.scss'
import React from 'react'
import RightMenu2 from '@layout/RightMenu2';
import Header2 from '@view/Home/Header2';

interface DataType {
    key: React.Key;
    name: string;
    play: number;

}
interface DataType2 {
    key: React.Key;
    device_name: string;
    status: string;
    date: string;
    totalPlays: number;
}



const columns2: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'key',
    },
    {
        title: 'Tên thiết bị',
        dataIndex: 'device_name',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
    },
    {
        title: 'Thời gian đồng bộ dữ liệu',
        dataIndex: 'date',
    },
    {
        title: 'Tổng số lượt phát',
        dataIndex: 'totalPlays',
    },
];


const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'key',
    },
    {
        title: 'Danh sách bài hát',
        dataIndex: 'name',
    },
    {
        title: 'Số lượt phát',
        dataIndex: 'play',
    },
];

const data2: DataType2[] = [
    {
        key: '1',
        device_name: 'Dù ngay mai bão giông',
        status: 'Đang hoạt động',
        date: '22/05/2021 22:15:00',
        totalPlays: 20,
    },
    {
        key: '2',
        device_name: 'Dù ngay mai bão giông',
        status: 'Đang hoạt động',
        date: '22/05/2021 22:15:00',
        totalPlays: 20,
    },
    {
        key: '3',
        device_name: 'Dù ngay mai bão giông',
        status: 'Đang hoạt động',
        date: '22/05/2021 22:15:00',
        totalPlays: 20,
    },
    {
        key: '4',
        device_name: 'Dù ngay mai bão giông',
        status: 'Đang hoạt động',
        date: '22/05/2021 22:15:00',
        totalPlays: 20,
    },
    {
        key: '5',
        device_name: 'Dù ngay mai bão giông',
        status: 'Đang hoạt động',
        date: '22/05/2021 22:15:00',
        totalPlays: 20,
    },
    {
        key: '6',
        device_name: 'Dù ngay mai bão giông',
        status: 'Đang hoạt động',
        date: '22/05/2021 22:15:00',
        totalPlays: 20,
    },
    {
        key: '7',
        device_name: 'Dù ngay mai bão giông',
        status: 'Đang hoạt động',
        date: '22/05/2021 22:15:00',
        totalPlays: 20,
    },
    {
        key: '8',
        device_name: 'Dù ngay mai bão giông',
        status: 'Đang hoạt động',
        date: '22/05/2021 22:15:00',
        totalPlays: 20,
    },

];
const data: DataType[] = [
    {
        key: '1',
        name: 'Dù ngay mai bão giông',
        play: 32,
    },
    {
        key: '2',
        name: 'Dù em có yêu ai',
        play: 42,
    },
    {
        key: '3',
        name: 'Anh vẫn ở đây',
        play: 32,
    },
    {
        key: '4',
        name: 'Anh vẫn ở đây',
        play: 32,
    },
    {
        key: '5',
        name: 'Anh vẫn ở đây',
        play: 32,
    },
    {
        key: '6',
        name: 'Anh vẫn ở đây',
        play: 32,
    },
    {
        key: '7',
        name: 'Anh vẫn ở đây',
        play: 32,
    },
    {
        key: '8',
        name: 'Anh vẫn ở đây',
        play: 32,
    },
];
const HistorySync = () => {
    return (
        <div className='wrapper3'>
            <Header2></Header2>
            <div className="wrapper3-cover">
                <div className="content-header">
                    <p>Doanh thu</p> <span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span> <p>Báo cáo doanh thu</p><span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span><p>Báo cáo chi tiết</p><span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span><p>Lịch sử đồng bộ thiết bị</p><br />

                </div>
                <div className='big-title'>
                    Hợp đồng HD123 - Kỳ tháng 03/2021

                </div>
                <div className="small-title">
                    Danh sách thiết bị
                </div>
                <div className='contentX2'>

                    <div className='contentX2__search-input2'>
                        <input className='contentX2__search-input2__textfield2' placeholder='Nhập tên thiết bị' >

                        </input>
                        <div className='contentX2__search-input2__search2'>
                            <SearchOutlined style={{ color: 'white' }} />
                        </div>
                    </div>
                </div>
                <div className="totalX">
                    <div className="total-devices">
                        Tổng thiết bị: <span className='s'>8 thiết bị</span>
                    </div>
                    <div className="total-plays">
                        Tổng lượt phát: <span className='s'>1784</span>
                    </div>
                </div>
                <div className="table3">
                    <Row>
                        <Col span={14}>
                            <div className="table-left">
                                <Table columns={columns2} dataSource={data2} />

                            </div>
                        </Col>
                        <Col span={10}>
                            <div className="table-right">
                                <Table columns={columns} dataSource={data} />
                            </div>

                        </Col>
                    </Row>
                </div>
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

export default HistorySync