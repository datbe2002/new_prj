/* eslint-disable @typescript-eslint/ban-ts-comment */
import { LanguageSelector } from '@modules/setting/settingStore';
import { ConfigProvider } from 'antd';
import React, { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import locale from '@locale/index';

interface ThemeColors {
  [key: string]: string;
}

const ThemeContext: React.FC<
PropsWithChildren<{ token?: ThemeColors }>
> = props => {
  const { language } = useSelector(LanguageSelector);
  const rootRef = React.useRef<any>();
  const memoLangData = React.useMemo(() => {
    return locale[language];
  }, [language]);

  React.useLayoutEffect(() => {
    rootRef.current = document.querySelector(':root');
  }, []);

  React.useEffect(() => {
    if (rootRef.current && props.token) {
      Object.keys(props.token).forEach(key => {
        //@ts-ignore
        rootRef.current.style.setProperty('--' + key, props.token[key]);
      });
    }
  }, [props.token]);

  return (
    <ConfigProvider
      locale={memoLangData}
      theme={{
        token: props.token,
      }}
    >
      {props.children}
    </ConfigProvider>
  );
};

export default React.memo(ThemeContext);
