import React, { useState } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import './table.scss'
import { useNavigate } from 'react-router';
interface DataType {
    key: React.Key;
    name: string;
    condition: string;
    address: string;
    contract: string;
    MAC: string;
    memory: string;
}



const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        dataIndex: 'key',
    },
    {
        title: 'Tên thiết bị',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Trạng thái',
        dataIndex: 'condition',
    },
    {
        title: 'Địa điểm',
        dataIndex: 'address',
    },
    {
        title: 'Hạn hợp đồng',
        dataIndex: 'contract',
    },
    {
        title: 'MAC Address',
        dataIndex: 'MAC',
    },
    {
        title: 'Memory',
        dataIndex: 'memory',
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'Device A12231',
        condition: 'Đang kích hoạt | Đang hoạt động ',
        address: 'New York No. 1 Lake Park',
        contract: '21/04/2021',
        MAC: '123.12.156.10',
        memory: '0.00GB/32GB',
    },
    {
        key: '2',
        name: 'Device A12231',
        condition: 'Đang kích hoạt | Đang hoạt động ',
        address: 'London No. 1 Lake Park',
        contract: '21/04/2021',
        MAC: '123.12.156.10',
        memory: '0.00GB/32GB',
    },
    {
        key: '3',
        name: 'Device A12231',
        condition: 'Đang kích hoạt | Đang hoạt động ',
        address: 'Sydney No. 1 Lake Park',
        contract: '21/04/2021',
        MAC: '123.12.156.10',
        memory: '0.00GB/32GB',
    },
    {
        key: '4',
        name: 'Device A12231',
        condition: 'Đang kích hoạt | Đang hoạt động ',
        address: 'Sydney No. 1 Lake Park',
        contract: '21/04/2021',
        MAC: '123.12.156.10',
        memory: '0.00GB/32GB',
    },
    {
        key: '5',
        name: 'Device A12231',
        condition: 'Đang kích hoạt | Đang hoạt động ',
        address: 'Sydney No. 1 Lake Park',
        contract: '21/04/2021',
        MAC: '123.12.156.10',
        memory: '0.00GB/32GB',
    },
    {
        key: '6',
        name: 'Device A12231',
        condition: 'Đang kích hoạt | Đang hoạt động ',
        address: 'Sydney No. 1 Lake Park',
        contract: '21/04/2021',
        MAC: '123.12.156.10',
        memory: '0.00GB/32GB',
    },
    {
        key: '7',
        name: 'Device A12231',
        condition: 'Đang kích hoạt | Đang hoạt động ',
        address: 'Sydney No. 1 Lake Park',
        contract: '21/04/2021',
        MAC: '123.12.156.10',
        memory: '0.00GB/32GB',
    },
    {
        key: '8',
        name: 'Device A12231',
        condition: 'Đang kích hoạt | Đang hoạt động ',
        address: 'Sydney No. 1 Lake Park',
        contract: '21/04/2021',
        MAC: '123.12.156.10',
        memory: '0.00GB/32GB',
    },
    {
        key: '9',
        name: 'Device A12231',
        condition: 'Đang kích hoạt | Đang hoạt động ',
        address: 'Sydney No. 1 Lake Park',
        contract: '21/04/2021',
        MAC: '123.12.156.10',
        memory: '0.00GB/32GB',
    },
    {
        key: '10',
        name: 'Device A12231',
        condition: 'Đang kích hoạt | Đang hoạt động ',
        address: 'Sydney No. 1 Lake Park',
        contract: '21/04/2021',
        MAC: '123.12.156.10',
        memory: '0.00GB/32GB',
    },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    // getCheckboxProps: (record: DataType) => ({
    //     disabled: record.name === '', // Column configuration not to be checked
    //     name: record.name,
    // }),
};

const TableView: React.FC = () => {
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const navigation = useNavigate();

    function handleClick(record: any) {
        navigation(`/info-device/${record.key}`);
    }
    return (
        <div className='tableXX'>


            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                rowClassName={"row-table"}
                className={'table'}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (event) => { handleClick(record) }, // click row

                    };
                }}
            />
        </div>
    );
};

export default TableView;