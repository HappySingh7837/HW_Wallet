import AsyncStorage from '@react-native-async-storage/async-storage';
import {compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import ReactotronConfig from './ReactotronConfig';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  persistedReducer,
  composeEnhancers(ReactotronConfig.createEnhancer!()),
);

export default function configureStore() {
  const persistor = persistStore(store);

  return {store, persistor};
}
