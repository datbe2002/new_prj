import RoleEntity from '@modules/roles/entity';
import moment from 'moment';

export class UserPermissionEntity {
  accountPermissionId: string = '';

  permissionCode = '';

  accountId = '';

  accountPermissionCreateAt = '';

  constructor(permission: Partial<UserPermissionEntity>) {
    if (!permission) {
      return;
    }
    Object.assign(this, permission);
  }

  static createlistPermisison(list?: Array<Partial<UserPermissionEntity>>) {
    if (list === undefined) {
      return undefined;
    }
    return list.map(ll => {
      return new UserPermissionEntity(ll);
    });
  }
}
class UserEntity {
  userName = '';

  fullName = '';

  permissions: UserPermissionEntity[] = [];

  id = '';

  createDateTime?: any;

  updateAt = '';

  roleId?: any;

  role?: RoleEntity;

  avatar?: string = '';

  phone?: string = '';

  internalComment?: string = '';

  isActive?: boolean = false;

  userType: number = 0;

  createdBy?: string = '';

  constructor(user?: Partial<UserEntity>) {
    if (!user) {
      return;
    }
    Object.assign(this, user);
    this.permissions = UserPermissionEntity.createlistPermisison(user?.permissions) || [];
    this.createDateTime = user?.createDateTime ? moment(user?.createDateTime) : '';

    this.updateAt = user?.updateAt
      ? moment(user?.createDateTime).format('DD/MM/YYYY HH:mm:ss')
      : '';
  }

  static createArrayUser(arrUser: Array<Partial<UserEntity>>): Array<UserEntity> {
    if (!arrUser) {
      return [];
    }
    return arrUser.map(x => new UserEntity(x));
  }
}

export default UserEntity;
