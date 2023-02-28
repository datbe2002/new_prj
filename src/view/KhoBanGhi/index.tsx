import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Sidebar from '@view/Home/Sidebar';
import { Dropdown, Input, Menu, Select, Table } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

interface DataProps {
  key: number;
  stt: number;
  name: string;
  isrc: string;
  duration: string;
  singer: string;
  author: string;
  category: string;
  format: string;
  expiryDate: string;
  updatedAt: string;
}

const SampleData: DataProps[] = [
  {
    key: 1,
    stt: 1,
    name: 'Sample 1',
    isrc: 'ISRC-1234',
    duration: '3:45',
    singer: 'John Smith',
    author: 'Jane Doe',
    category: 'Pop',
    format: 'MP3',
    expiryDate: '2023-03-31',
    updatedAt: '2022-12-31',
  },
  {
    key: 3,
    stt: 23,
    name: 'Sample 2',
    isrc: 'ISRC-5678',
    duration: '4:15',
    singer: 'Jane Doe',
    author: 'John Smith',
    category: 'Rock',
    format: 'FLAC',
    expiryDate: '2023-04-30',
    updatedAt: '2023-01-31',
  },
  {
    key: 4,
    stt: 24,
    name: 'Sample 2',
    isrc: 'ISRC-5678',
    duration: '4:15',
    singer: 'Jane Doe',
    author: 'John Smith',
    category: 'Rock',
    format: 'FLAC',
    expiryDate: '2023-04-30',
    updatedAt: '2023-01-31',
  },
];

const columns: ColumnProps<DataProps>[] = [
  {
    title: 'STT',
    dataIndex: 'stt',
    key: 'stt',
  },
  {
    title: 'Tên bản ghi',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Mã ISRC',
    dataIndex: 'isrc',
    key: 'isrc',
  },
  {
    title: 'Thời lượng',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: 'Ca sĩ',
    dataIndex: 'singer',
    key: 'singer',
  },
  {
    title: 'Tác giả',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Thể loại',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Định dạng',
    dataIndex: 'format',
    key: 'format',
  },
  {
    title: 'Thời hạn sử dụng',
    dataIndex: 'expiryDate',
    key: 'expiryDate',
  },
  {
    title: '',
    // dataIndex: 'updatedAt',
    key: 'update',
    render: () => <div>Cập nhật</div>,
  },
  {
    title: '',
    key: 'listen',
    render: () => <div>Nghe</div>,
  },
];

const KhoBanGhi = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Sidebar />
      <div
        style={{
          marginLeft: '170px',
          backgroundColor: '#1E1E2E',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          color: 'white',
          padding: '60px',
        }}
      >
        <h1>Kho bản ghi</h1>
        <Input
          size="large"
          title="search"
          placeholder="Tên bản ghi, ca sĩ..."
          suffix={<HomeOutlined />}
          style={{
            width: '300px',
            marginTop: '20px',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '50px',
            marginTop: '20px',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              Thể loại
            </h2>
            <Select
              defaultValue="Tất cả"
              options={[
                { label: 'Tất cả', value: 'Tất cả' },
                { label: 'Pop', value: 'Pop' },
                { label: 'EDM', value: 'EDM' },
                { label: 'Ballad', value: 'Ballad' },
              ]}
              style={{
                width: '100px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              Định dạng
            </h2>
            <Select
              defaultValue="Tất cả"
              options={[
                { label: 'Tất cả', value: 'Tất cả' },
                { label: 'Âm thanh', value: 'Âm thanh' },
                { label: 'Video', value: 'Video' },
              ]}
              style={{
                width: '100px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              Thời hạn sử dụng
            </h2>
            <Select
              defaultValue="Tất cả"
              options={[
                { label: 'Tất cả', value: 'Tất cả' },
                { label: 'Còn thời hạn', value: 'Còn thời hạn' },
                { label: 'Hết hạn', value: 'Hết hạn' },
              ]}
              style={{
                width: '150px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h2
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              Trạng thái
            </h2>
            <Select
              defaultValue="Tất cả"
              options={[
                { label: 'Tất cả', value: 'Tất cả' },
                { label: 'Duyệt bởi người dùng', value: 'Duyệt bởi người dùng' },
                { label: 'Duyệt tự động', value: 'Duyệt tự động' },
              ]}
              style={{
                width: '200px',
              }}
            />
          </div>
          <div
            style={{
              float: 'right',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <HomeOutlined height={40} width={40} />
            <HomeOutlined height={40} width={40} />
          </div>
        </div>
        <Table
          dataSource={SampleData}
          columns={columns}
          pagination={{
            pageSize: 2,
          }}
          style={{
            marginTop: '20px',
          }}
        />
      </div>
    </div>
  );
};

export default KhoBanGhi;
