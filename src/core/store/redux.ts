import { Selector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import { createWhitelistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';

import CONFIG from '@config/index';
import appReducer, { RootState } from '@modules/index';

const profile = createWhitelistFilter('profile', ['token', 'refreshToken', 'remember']);
const settingStore = createWhitelistFilter('settingStore', ['language']);
const persistConfig: PersistConfig<RootState> = {
  key: CONFIG.APP_NAME,
  storage,
  blacklist: [],
  transforms: [profile, settingStore],
  whitelist: ['profile', 'settingStore'],
};

const persistedReducer = persistReducer(persistConfig, appReducer);
const middleware: any = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
const store = createStore(persistedReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

export default store;

interface IToken {
  token?: string;
  refreshToken?: string;
}

export const TokenSelector: Selector<RootState, IToken> = state => {
  return {
    token: state.profile.token,
    refreshToken: state.profile.refreshToken,
  };
};
