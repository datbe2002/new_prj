import moment from 'moment';
interface RolePermission {
  module: string;
  permission: string;
}
class RoleEntity {
  internalComment?: string;

  createdBy?: null;

  id?: string;

  createDateTime?: string = '';

  isActive?: boolean;

  roleName?: string;

  rolePermissions?: RolePermission[];

  permissions?: string[];

  constructor(role?: any) {
    if (!role) {
      return;
    }
    Object.assign(this, role);
    this.createDateTime = role.createDateTime
      ? moment(role.createDateTime).format('DD/MM/YYYY')
      : '';
  }

  static createListRole(listRole: Array<any>) {
    if (!Array.isArray(listRole)) {
      return [];
    }
    return listRole.map((Role: RoleEntity) => {
      return new RoleEntity(Role);
    });
  }
}

export default RoleEntity;
