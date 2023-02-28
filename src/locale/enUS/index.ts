import enUS from 'antd/lib/locale/en_US';

import auth from './auth';
import common from './common';
import pageError from './pageError';
import server from './server';
import user from './user';
import customer from './customer';
import transactions from './transactions';
import device from './device';
import menu from './menu';
import products from './products';
import roles from './roles';
import brands from './brands';

export default {
  ...enUS,
  ...common,
  ...server,
  ...auth,
  ...pageError,
  ...roles,
  ...user,
  ...customer,
  ...device,
  ...transactions,
  ...products,
  ...menu,
  ...brands,
};
