import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import todoReducer from './async/todos/reducer';
import langReducer from './lang/reducer';

const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_ENCRYPT_KEY,
  onError: (error) => {
    console.log('Encryption error:', error);
  },
});

const rootReducer = combineReducers({
  todo: todoReducer,
  lang: langReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todo'],
  transforms: [encryptor],
};

// Persist the entire state to localStorage
const persistedReducer = persistReducer(persistConfig, rootReducer);

const logMiddleware = (store) => (next) => (action) => {
  console.log('Dispatching action:', action);
  const result = next(action);
  console.log('New state:', store.getState());
  return result;
};

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk, logMiddleware)));

const persistor = persistStore(store);

export { store, persistor };
