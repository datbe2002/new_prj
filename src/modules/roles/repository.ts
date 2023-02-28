import { PaginationEntity } from '@core/pagination/entity';
import httpRepository from '@core/repository/http';
import { OptionEntity, TableEntity } from '@core/table';
import RoleEntity from './entity';

export const getListRole = (
  pagination?: PaginationEntity,
  options?: OptionEntity,
): Promise<{ data: RoleEntity[]; info: PaginationEntity }> => {
  const params = new TableEntity(pagination, options);
  return httpRepository.execute({
    path: '/api/Role',
    showSuccess: false,
    showError: false,
    params,
    convert: res => {
      return {
        data: RoleEntity.createListRole(res?.pagedData),
        info: new PaginationEntity(res?.pageInfo),
      };
    },
  });
};

export const getRoleDetail = (id: string) => {
  return httpRepository.execute({
    path: '/api/Role/' + id,
    showSuccess: false,
    showError: false,
    convert: res => {
      return new RoleEntity(res);
    },
  });
};

export const createRole = (payload: any) => {
  return httpRepository.execute({
    path: '/api/Role/create',
    method: 'post',
    payload,
  });
};

export const updateRole = (id: string, payload: any) => {
  return httpRepository.execute({
    path: '/api/Role/' + id,
    method: 'put',
    payload,
  });
};

export const deleteRole = (payload: any) => {
  return httpRepository.execute({
    path: '/api/Role/deletes',
    method: 'post',
    payload: {
      ids: payload,
    },
  });
};
