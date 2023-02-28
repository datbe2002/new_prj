/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable max-statements */
import { Table, Typography } from 'antd';
import lodash from 'lodash';
import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import { PaginationEntity } from '@core/pagination/entity';
import { OptionEntity } from '@core/table';
import { CheckPermissionFunc } from '@hoc/CheckPermission';
import { RootState } from '@modules';
import { toSearch as toQuery, useQueryParams } from '@shared/hook/useQueryParams';

import { useLocation, useNavigate } from 'react-router-dom';
import { useAsync } from '../../hook/useAsync';
import SearchComponent from '../SearchComponent/SearchComponent';
import Pagination from './Component/Pagination';
import { IBEPaginationTable, InitOption, InitPagination } from './interface';

interface IPagination {
  pagination: PaginationEntity;
  option: OptionEntity;
}

interface IState extends IPagination {
  selection: Array<any>;
  rowKey?: any;
}

const TableComponent: React.FC<IBEPaginationTable> = (props: IBEPaginationTable) => {
  const {
    apiServices,
    columns = [],
    register,
    defaultOption,
    tableKey = 'common',
    getDataAfter,
    disableFirstCallApi = false,
    dataSource = [],
    search,
    hasStt = false,
  } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const listPermissionCode = useSelector((state: RootState) => state.profile.listPermissionCode);
  const language = useSelector((state: RootState) => state.settingStore.language);
  const [repository] = useAsync(apiServices || Promise.resolve);
  const intl = useIntl();
  const [state, setState] = useState<IState>({
    pagination: { ...InitPagination, ...props.pagination },
    option: { ...defaultOption, ...InitOption },
    selection: [],
  });
  const query = useQueryParams<IPagination>();

  const queryParam = query[tableKey] || {};

  const toSearch = (params: any) => {
    return toQuery(Object.assign({}, query, { [tableKey]: params }));
  };

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const rowSelection = {
    selectedRowKeys,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
      setSelectedRowKeys(selectedRowKeys);
      props.onRowSelect && props.onRowSelect(selectedRowKeys);
      props.onRowSelectDetail && props.onRowSelectDetail(selectedRows);
    },
  };

  React.useEffect(() => {
    setSelectedRowKeys(props.selectedRowKeys || []);
  }, [props.selectedRowKeys]);

  const handleClickOnRow = (record: any) => {
    if (typeof props.rowKey !== 'function') {
      return;
    }
    const newRowKey = props.rowKey(record);
    const isInArr = selectedRowKeys.some(key => key === newRowKey);
    let newSelectedRowKeys = selectedRowKeys;
    if (isInArr === false) {
      newSelectedRowKeys = [...selectedRowKeys, newRowKey];
      // setSelectedRow(selectedRows);
      // props.onRowSelectDetail && props.onRowSelectDetail(selectedRows);
    } else {
      newSelectedRowKeys = selectedRowKeys.filter(k => k !== newRowKey);
    }
    setSelectedRowKeys(newSelectedRowKeys);
    props.onRowSelect && props.onRowSelect(newSelectedRowKeys);
  };

  const getDataWithCurrentState = (_state?: {
    pagination?: PaginationEntity;
    option?: OptionEntity;
  }) => {
    const option = Object.assign({}, state.option, queryParam.option, _state?.option);
    const pagination = Object.assign(
      {},
      state.pagination,
      queryParam.pagination,
      _state?.pagination,
    );

    if (apiServices) {
      repository.execute(pagination, option).then((res: any) => {
        if (getDataAfter) {
          getDataAfter(res);
        }
        setState(prev => ({
          ...prev,
          pagination: {
            ...pagination,
            ...res?.info,
          },
        }));
      });
    } else {
      setState(prev => ({ ...prev, pagination, option }));
    }
  };

  useEffect(() => {
    if (!disableFirstCallApi && apiServices) {
      getDataWithCurrentState({
        pagination: { ...InitPagination },
        option: { ...defaultOption, ...InitOption },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiServices]);

  const handleSearch = (text: any) => {
    const pagination = InitPagination;
    const option = {
      search: text,
    };
    getDataWithCurrentState({ pagination, option });
  };

  const handleChangePage = (newPagination: PaginationEntity, _filter?: any, _sorter?: any) => {
    const option = Object.assign({}, state.option, queryParam.option, {
      sorter: _sorter,
    });
    delete option.sorter?.column;
    let newCurrent = newPagination.current;

    if (newPagination.pageSize !== state.pagination.pageSize) {
      newCurrent = 1;
    }

    const newQueryParam = Object.assign({}, queryParam, {
      pagination: newPagination,
      option,
    });
    delete newQueryParam.pagination.total;

    navigate({
      pathname: location.pathname,
      search: toSearch(newQueryParam),
    });
    getDataWithCurrentState({
      pagination: { ...newPagination, current: newCurrent },
      option,
    });
    setState(prev => ({ ...prev, selection: [] }));
  };

  const getData = () => {
    return {
      data: repository.value?.data || [],
      ...state,
    };
  };

  if (register) {
    register.clearSelection = () => {
      setSelectedRowKeys([]);
    };
    register.getData = getData;
    register.fetchData = (...args) => {
      const param: any = lodash.get(args, '[0]', {});
      param.pagination = Object.assign(
        {},
        state.pagination,
        queryParam.pagination,
        param.pagination,
      );
      delete param.pagination.total;
      param.option = Object.assign({}, state.option, queryParam.option, param.option);

      navigate({
        pathname: location.pathname,
        search: toSearch({ ...queryParam, ...param }),
      });
      setSelectedRowKeys([]);
      getDataWithCurrentState(param);
    };
    register.setOption = value =>
      setState(prev => ({ ...prev, option: { ...prev.option, ...value } }));
    register.setPagination = value =>
      setState(prev => ({
        ...prev,
        pagination: { ...prev.pagination, ...value },
      }));
    register.setSelection = value => setState(prev => ({ ...prev, selection: value }));
  }

  const align = {
    left: 'to-left',
    right: 'to-right',
  };

  const thisColumns = React.useMemo(() => {
    //Check permision
    const col = columns.filter(item => {
      const permissionCode = item?.permissionCode;
      if (permissionCode) {
        const checkPermissionForColumn = CheckPermissionFunc(permissionCode, listPermissionCode);
        return checkPermissionForColumn;
      }
      return true;
    });

    // translate title
    const columnTranslate = col.map(item => {
      const key = item?.title || `${tableKey}.${item?.dataIndex}`;
      // ưu tiên nếu dev truyền vào title trước nha
      const title = item?.title === '' ? '' : intl.formatMessage({ id: key, defaultMessage: key });
      return { ...item, title };
    });
    //xét có nên thêm stt
    if (hasStt) {
      const hasSttColumn = {
        title: intl.formatMessage({
          id: 'common.stt',
          defaultMessage: 'STT',
        }),
        width: '5.9rem',
        className: 'text-center',
        dataIndex: 'tableComponentStt',
        render: (_text: any, _record: any, index: any) => {
          const num = queryParam.pagination?.current || 1;
          const pageSize = queryParam.pagination?.pageSize || 1;
          return (num - 1) * pageSize + (index + 1);
        },
      };
      return [hasSttColumn, ...columnTranslate];
    }
    //dịch mỗi thằng
    return columnTranslate;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasStt, columns, listPermissionCode, language, queryParam]);

  const onRow = (record: any) => ({
    onClick: () => {
      handleClickOnRow(record);
    },
  });

  return (
    <div className={`card-main-table ${props?.className}`}>
      {search?.placeholder && (
        <div className={`search-in-table ${search?.align ? align[search?.align] : 'to-right'}`}>
          <div className="search-label-default">
            {intl.formatMessage({
              id: 'common.keyword',
              defaultMessage: 'common.keyword',
            })}
          </div>
          <SearchComponent
            onSearch={handleSearch}
            placeholder={search?.placeholder}
            classNames={search?.className ? search?.className : ''}
            name={`${tableKey}.option.search`}
          />
        </div>
      )}
      <Table
        rowSelection={props.onRowSelect != null ? rowSelection : undefined}
        onRow={props.onRowSelect ? onRow : undefined}
        summary={() => {
          if (selectedRowKeys.length === 0 || lodash.isEmpty(props.summaryKey)) {
            return undefined;
          }
          return (
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={3}>
                <Typography.Text className="ml-1 mt-4 mb-4">
                  <FormattedMessage
                    id={props.summaryKey}
                    values={{ rows: selectedRowKeys.length }}
                  />
                </Typography.Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          );
        }}
        {...props}
        className="main-table"
        dataSource={repository?.value?.data || dataSource}
        loading={props?.loading || repository?.status === 'loading'}
        pagination={props.pagination !== false && state.pagination}
        onChange={handleChangePage}
        columns={thisColumns}
      />
      {/* {props.pagination !== false && (
        <Pagination pagination={state.pagination} onChange={handleChangePage} />
      )} */}
    </div>
  );
};

export default React.memo(TableComponent);
