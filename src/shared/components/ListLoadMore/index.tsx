import { List, ListProps, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import { useSingleAsync } from '@shared/hook/useAsync';

interface IList extends ListProps<any> {
  apiService: any;
  filter: any;
  pageSize: number;
  pageStart: number;
  classNameMain?: string;
  isRefresh: boolean;
}

const ListLoadMore: React.FC<IList> = ({
  apiService,
  pageSize = 7,
  pageStart = 1,
  classNameMain = '',
  isRefresh,
  ...props
}) => {
  const apiCall = useSingleAsync(apiService);
  const [dataSource, setDataSource] = useState<any[]>([]);
  const [pageTotal, setPageTotal] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);
  const [resetStartPage, setResetStartPage] = useState(false);

  useEffect(() => {
    if (apiCall != null) {
      setIsLoading(true);
      apiCall
        .execute(
          {
            pageSize: pageSize,
            current: pageStart,
          },
          { filter: { ...props.filter } },
        )
        .then(({ data, info }) => {
          setDataSource(data);
          setPageTotal(info.total);
          setIsLoading(false);
          setResetStartPage(!resetStartPage);
        });
    } else {
      setDataSource(props?.dataSource || []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.filter, isRefresh]);

  const handleInfiniteOnLoad = (page: number) => {
    setIsLoading(true);
    if (pageTotal < page) {
      setIsLoading(false);
      return;
    } else {
      apiCall
        .execute(
          {
            pageSize: pageSize,
            current: page,
          },
          { filter: props.filter },
        )
        .then(({ data }) => {
          setDataSource(oldData => oldData.concat(data));
          setIsLoading(false);
        });
    }
  };

  return (
    <div className={`infinite-container ${classNameMain}`}>
      <InfiniteScroll
        initialLoad={false}
        pageStart={pageStart}
        loadMore={handleInfiniteOnLoad}
        hasMore={isLoading}
        useWindow={false}
        loader={<Skeleton paragraph={{ rows: 1 }} active />}
        resetStartPage={resetStartPage}
      >
        <List {...props} dataSource={dataSource} />
      </InfiniteScroll>
    </div>
  );
};

export const Item = List.Item;

export default ListLoadMore;
