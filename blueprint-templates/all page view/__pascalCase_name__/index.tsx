import './style.scss';

import { MenuProps, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';
import { router{{ pascalCase name }} } from './router';

import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import CircleLabel from '@shared/components/CircleLabel';
import EditIconComponent from '@shared/components/EditIconComponent';
import InformationIconComponent from '@shared/components/InformationIcon';
import MainTitleComponent from '@shared/components/MainTitleComponent';
import SearchComponent from '@shared/components/SearchComponent/SearchComponent';
import SelectAndLabelComponent from '@shared/components/SelectAndLabelComponent';
import TableComponent from '@shared/components/TableComponent';
import useTable from '@shared/components/TableComponent/hook';
import { useAltaIntl } from '@shared/hook/useTranslate';

import ModalComponents from './component/MainModal/Modal{{pascalCase name}}';
import { IModal } from './interface';
import ButtonComponent from '@shared/components/ButtonComponent';
import ButtonDropdown from '@shared/components/ButtonDropdown';
import { DeleteConfirm } from '@shared/components/ConfirmDelete';

const dataTable = require('./data.json');


const {{ pascalCase name }} = () => {
  const { formatMessage } = useAltaIntl();
  const table = useTable();

  const [modal, setModal] = useState<IModal>({
    isVisible: false,
    dataEdit: null,
    isReadOnly: false,
  });
  const [search, setSearch] = useState<string>('');
  const [filter, setFilterOption] = useState<any>();

  const idChooses = 'id'; //get your id here. Ex: accountId, userId,...
  const columns: ColumnsType = [
    {
      dataIndex: 'tagName',
    },
    {
      dataIndex: 'lastUpdate',
    },
    {
      dataIndex: 'group',
    },
    {
      dataIndex: 'group',
      render: () => <CircleLabel text={formatMessage('common.statusActive')} colorCode='blue'/>,
    },
    {
      dataIndex: 'action',
      render: (_item:any, record: any) => (
        <Space>
          <EditIconComponent
            onClick={() => {
              setModal({
                dataEdit: record,
                isVisible: true,
                isReadOnly: false,
              });
            }}
          />
          <InformationIconComponent
            onClick={() => {
              setModal({
                dataEdit: record,
                isVisible: true,
                isReadOnly: true,
              });
            }}
          />
        </Space>
      ),
    },
  ];

  const handleRefresh = () => {
    table.fetchData({ option: { search: search, filter: { ...filter } } });
  };
 
  useEffect(() => {
    table.fetchData({ option: { search: search, filter: { ...filter } } });
  }, [search, filter, table]);

  const handleSearch = (searchKey: string) => {
    setSearch(searchKey);
  };

  const dataString = [
    { label: 'common.all', value: null },
    { label: 'common.statusActive', value: 1 },
    { label: 'common.statusDeactive', value: 0 },
  ];


  const handleFilter = (value:any)  => {
   console.debug('======>:',value);
  };

  const items: MenuProps['items'] = [
    {
      label: formatMessage('{{kebabCase name}}.delete'),
      key: '1',
      icon: <DeleteOutlined />,
      // disabled: selectedRowKeys?.length === 0 || selectedRowKeys?.length < 0,
    },
  ];

  const handleMenuClick: MenuProps['onClick'] =  ({ key }: any) => {
    switch (key) {
      case '1':
        DeleteConfirm({
          title: formatMessage('common.delete'),
          content: formatMessage('{{kebabCase name}}.content.delete'),
          handleOk: () => {
            // userPresenter.deleteUser(selectedRowKeys).then(() => {
            //   handleRefresh();
            // });
          },
          handleCancel: () => {},
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className='{{kebabCase name}}'>
      <div className='main-card'>
      <MainTitleComponent breadcrumbs={router{{pascalCase name}} } />
        <div className='d-flex flex-row justify-content-md-between mb-4 align-items-end'>
          <div className='d-flex flex-row intro-y'>
            <SearchComponent
              onSearch={handleSearch}
              placeholder={'common.keyword'}
              classNames='mb-0 search-table'
              formItems={[
                {
                  name: 'isActive',
                  label: formatMessage('users.isActive'),
                  element: <SelectAndLabelComponent dataString={dataString} />,
                },
              ]}
              onFinish={handleFilter}
            />
          </div>
          <div className="wrap_btn intro-y">
            <ButtonComponent
              mr_2={true}
              icon={<PlusOutlined />}   
              text={formatMessage('{{kebabCase name}}.create')}
              onClick={() => {
                setModal({
                  isVisible: true,
                  dataEdit: null,
                  isReadOnly: false,
                });
              }}
            />
            <ButtonDropdown items={items} handleMenuClick={handleMenuClick} />
          </div>
        </div>
        <TableComponent
          // apiServices={}
          defaultOption={filter }
          tableKey='{{camelCase name}}'
          rowKey={(res) => res[idChooses]}
          register={table}
          columns={columns}
          dataSource={dataTable}
          disableFirstCallApi={true}
          rowClassName="zoom-in"
        />
      </div>
      <ModalComponents
        modal={modal}
        handleRefresh={handleRefresh}
        setModal={setModal}
      />
    </div>
  );
};

export default {{ pascalCase name }};

