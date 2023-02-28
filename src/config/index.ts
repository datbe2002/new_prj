import ISelect from '@core/select';
import { PresetColorType } from 'antd/lib/_util/colors';
import {languageVN, languageEN} from '@assets/images';

export const LANGUAGE: ISelect<string>[] = [
  { value: 'en', label: 'English', data: languageEN},
  { value: 'vi', label: 'Tiếng Việt', data: languageVN },
];

export const allSelect: ISelect = { label: 'common.all', value: undefined };

const CONFIG = {
  API_BASE_URL: process.env.API_BASE_URL,
  APP_NAME: process.env.APP_NAME || 'CMS-SSO',
  LOGIN_PAGE: '/#/login',
  SSO_PAGE: '/#',
};

export const colors: PresetColorType[] = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];

export default CONFIG;
