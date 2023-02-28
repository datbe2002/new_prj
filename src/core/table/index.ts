import { PaginationEntity } from '@core/pagination/entity';
import { SorterResult } from 'antd/lib/table/interface';
export class OptionEntity {
  search?: string;

  filterDate?: Date;

  filter?: { [propName: string]: string | number };

  sorter?: SorterResult<any>;

  constructor(option) {
    if (option == null) {
      return;
    }
    Object.assign(this, option);
  }
}

export class TableEntity extends PaginationEntity {
  constructor(pagination: any, option?: OptionEntity) {
    super(pagination);
    if (option?.search != null) {
      this.search = option.search;
    }
    if (option?.sorter != null) {
      const order = option.sorter.order === 'ascend' ? 'asc' : 'desc';
      this.OrderByQuery = `${option.sorter.field} ${order}`;
    }
    Object.assign(this, option?.filter);
  }
}
