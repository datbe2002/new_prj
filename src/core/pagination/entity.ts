import lodash from 'lodash';

export class PaginationEntity {
  pageSize?: number;

  current?: number = 1;

  total?: number = undefined;

  //set total undefined để lấy hết các row từ bảng
  search?: string;

  OrderByQuery?: string;

  private static initPaginationEntity = null;

  constructor(pagination) {
    if (!pagination) {
      return;
    }
    this.pageSize = lodash.get(pagination, 'pageSize', 10);
    this.current = lodash.get(pagination, 'current', 1);
    this.total = lodash.get(pagination, 'total', 0);
    this.search = lodash.get(pagination, 'search', undefined);
  }

  static init() {
    if (PaginationEntity.initPaginationEntity != null) {
      return PaginationEntity.initPaginationEntity;
    }
    PaginationEntity.initPaginationEntity = null;
    return PaginationEntity.initPaginationEntity;
  }
}
