class PermissionsEntity {
  module = '';

  permissions: any;

  constructor(permissions: Partial<PermissionsEntity>) {
    if (!permissions) {
      return;
    }
    Object.assign(this, permissions);
  }

  static createListPermissions(
    listPermissions: Array<Partial<PermissionsEntity>>,
  ) {
    if (!Array.isArray(listPermissions)) {
      return [];
    }
    return listPermissions.map((permissions: Partial<PermissionsEntity>) => {
      return new PermissionsEntity(permissions);
    });
  }
}
export default PermissionsEntity;
