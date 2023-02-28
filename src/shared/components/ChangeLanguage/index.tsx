import { Select } from 'antd';
import { isString } from 'lodash';
import React, { memo } from 'react';
import * as Icon from 'react-feather';
import { useSelector } from 'react-redux';

import { LANGUAGE } from '@config';
import ISelect from '@core/select';
import store from '@core/store/redux';
import { RootState } from '@modules';
import settingStore from '@modules/setting/settingStore';
import { Selector } from '@reduxjs/toolkit';

interface IChangeLanguage {
  language: string;
}

const ChangeLanguageSelector: Selector<RootState, IChangeLanguage> = (
  state: RootState,
) => ({
  language: state.settingStore.language,
});

const ChangeLanguage: any = () => {
  // JUST LANGUAGE
  const { language } = useSelector(ChangeLanguageSelector);
  const { Option } = Select;
  const changeLanguage = (pLanguage: string) => {
    const key: any = pLanguage;
    store.dispatch(settingStore.actions.updateLanguage(key));
  };

  return (
    <div className={'select-language'}>
      <Select
        value={language}
        onChange={changeLanguage}
        suffixIcon={<Icon.ChevronDown />}
      >
        {LANGUAGE.map((_language: ISelect, idx) => {
          return (
            <Option value={_language.value} key={idx}>
              {_language.label}
              {isString(_language?.data) && (
                <img src={_language?.data} alt="" className="language-icon" />
              )}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default memo(ChangeLanguage);
