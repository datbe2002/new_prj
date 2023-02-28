import { ExportOutlined, FileDoneOutlined, RightOutlined } from '@ant-design/icons'
import SelectAndLabelComponent from '@shared/components/SelectAndLabelComponent'
import React, { useState } from 'react'
import './reportdetail.scss'
import type { ColumnsType } from 'antd/es/table';
import { Modal, Space, Table } from 'antd'
import { Link } from 'react-router-dom'
import RightMenu2 from '@layout/RightMenu2'
import Header2 from '../Header2'

interface DataType {
    key: React.Key;
    contract: string;
    unit: string;
    date: string;
    contractType: string;
    totalSync: string;
    total: string;
    endDate: string;
}



const ReportDetail = () => {
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
    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'key',
        },
        {
            title: 'Số hợp đồng',
            dataIndex: 'contract',
        },
        {
            title: 'Đơn vị khai thác',
            dataIndex: 'unit',
        },
        {
            title: 'Thời hạn hợp đồng',
            dataIndex: 'date',
        },
        {
            title: 'Loại hợp đồng',
            dataIndex: 'contractType',
        },
        {
            title: 'Số thiết bị đã đồng bộ',
            dataIndex: 'totalSync',
        },
        {
            title: 'Tổng số lượt phát',
            dataIndex: 'total',
        },
        {
            title: 'Ngày chốt đối soát',
            dataIndex: 'endDate',
        },
        {

            render: (_, record) => (
                <Space size="middle" >
                    <Link to={`/report-detail/${record.key}`}>
                        <span style={{ color: '#FF7506', textDecoration: 'underline' }}>Chi tiết doanh thu</span>
                    </Link>
                </Space>
            ),
        },
        {

            render: (_, record) => (
                <Space size="middle" >
                    <Link to={`/report-detail/sync-history/${record.key}`}>
                        <span style={{ color: '#FF7506', textDecoration: 'underline' }}>Lịch sử đồng bộ trên thiết bị</span>
                    </Link>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            contract: 'HD123',
            unit: 'CTY TNHH MTV XYZ',
            date: '01/04/2021 - 09/02/2025',
            contractType: 'Trọn gói',
            totalSync: '8/8',
            total: '321.000',
            endDate: '22/04/2021'
        },
        {
            key: '2',
            contract: 'HD123',
            unit: 'CTY TNHH MTV XYZ',
            date: '01/04/2021 - 09/02/2025',
            contractType: 'Trọn gói',
            totalSync: '8/8',
            total: '321.000',
            endDate: '22/04/2021'
        },
        {
            key: '3',
            contract: 'HD123',
            unit: 'CTY TNHH MTV XYZ',
            date: '01/04/2021 - 09/02/2025',
            contractType: 'Trọn gói',
            totalSync: '8/8',
            total: '321.000',
            endDate: '22/04/2021'
        },
        {
            key: '4',
            contract: 'HD123',
            unit: 'CTY TNHH MTV XYZ',
            date: '01/04/2021 - 09/02/2025',
            contractType: 'Trọn gói',
            totalSync: '8/8',
            total: '321.000',
            endDate: '22/04/2021'
        },
        {
            key: '5',
            contract: 'HD123',
            unit: 'CTY TNHH MTV XYZ',
            date: '01/04/2021 - 09/02/2025',
            contractType: 'Trọn gói',
            totalSync: '8/8',
            total: '321.000',
            endDate: '22/04/2021'
        },
        {
            key: '6',
            contract: 'HD123',
            unit: 'CTY TNHH MTV XYZ',
            date: '01/04/2021 - 09/02/2025',
            contractType: 'Trọn gói',
            totalSync: '8/8',
            total: '321.000',
            endDate: '22/04/2021'
        },
        {
            key: '7',
            contract: 'HD123',
            unit: 'CTY TNHH MTV XYZ',
            date: '01/04/2021 - 09/02/2025',
            contractType: 'Trọn gói',
            totalSync: '8/8',
            total: '321.000',
            endDate: '22/04/2021'
        },
        {
            key: '8',
            contract: 'HD123',
            unit: 'CTY TNHH MTV XYZ',
            date: '01/04/2021 - 09/02/2025',
            contractType: 'Trọn gói',
            totalSync: '8/8',
            total: '321.000',
            endDate: '22/04/2021'
        },
        {
            key: '9',
            contract: 'HD123',
            unit: 'CTY TNHH MTV XYZ',
            date: '01/04/2021 - 09/02/2025',
            contractType: 'Trọn gói',
            totalSync: '8/8',
            total: '321.000',
            endDate: '22/04/2021'
        },
        {
            key: '10',
            contract: 'HD123',
            unit: 'CTY TNHH MTV XYZ',
            date: '01/04/2021 - 09/02/2025',
            contractType: 'Trọn gói',
            totalSync: '8/8',
            total: '321.000',
            endDate: '22/04/2021'
        },

    ];
    return (
        <div className='wrapper-all2'>
            <Header2></Header2>
            <div className="wrapper-cover">
                <div className="content-header">
                    <p>Doanh thu</p> <span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span> <p>Báo cáo doanh thu</p><span><RightOutlined style={{ color: '#8E654B', fontSize: '1.5rem', padding: '3px 5px 0px 5px' }} /></span> <p>Báo cáo chi tiết</p><br />

                </div>
                <div className='big-title'>
                    Doanh thu theo hợp đồng khai thác

                </div>
                <div className="content-input">
                    <div className="choose-options">
                        <div className="small-title">
                            Theo tháng:
                        </div>
                        <div className="month-dropdown">
                            <SelectAndLabelComponent value={'Theo tháng'} dataString={[{ value: 'month', label: 'Theo tháng', data: 'dasdsa' },
                            { value: 'quy', label: 'Theo quý', data: 'dasdsa' }]}

                            ></SelectAndLabelComponent>
                        </div>
                        <div className="all-date">
                            <SelectAndLabelComponent value={'Tháng 1/2021'} dataString={[{ value: '1', label: 'Tháng 1/2021', data: 'Tháng 1' },
                            { value: '2', label: 'Tháng 2/2021', data: 'aaa' }, { value: '3', label: 'Tháng 3/2021', data: 'dasdsa' }, { value: '4', label: 'Tháng 4/2021', data: 'ssdasd' }, { value: '5', label: 'Tháng 5/2021', data: 'ssdasd' }, { value: '6', label: 'Tháng 6/2021', data: 'ssdasd' }, { value: '7', label: 'Tháng 7/2021', data: 'ssdasd' }, { value: '8', label: 'Tháng 8/2021', data: 'ssdasd' }, { value: '9', label: 'Tháng 9/2021', data: 'ssdasd' }, { value: '10', label: 'Tháng 10/2021', data: 'ssdasd' }, { value: '11', label: 'Tháng 11/2021', data: 'ssdasd' }, { value: '12', label: 'Tháng 12/2021', data: 'ssdasd' },]}

                            ></SelectAndLabelComponent>
                        </div>
                    </div>
                </div>
                <div className="table2">
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
            <RightMenu2>
                <ul className='block-wrapper'>

                    <li className='block-wrapper-inside'>
                        <div className='icon-right' onClick={showModal}>
                            <FileDoneOutlined />
                        </div>
                        <div className='word-right'>
                            Chốt doanh thu
                        </div>
                        <Modal
                            title="Chốt doanh thu"
                            visible={visible}
                            onOk={handleOk}
                            onCancel={handleCancel}

                        >
                            <p>Doanh thu sẽ được chốt từ ngày 01/05/2021 đến ngày 14/05/2021 trên
                                tất cả các hợp đồng sử dụng.

                                Nhấn Tiếp tục để chốt doanh thu.
                                Nhấn Hủy để hủy bỏ và không chốt doanh thu.</p>
                        </Modal>
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

export default ReportDetail