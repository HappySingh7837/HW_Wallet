import * as React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import 'react-native-gesture-handler';
import './src/store/ReactotronConfig';
import SplashScreen from 'react-native-splash-screen';
import configureStore from './src/store/configureStore';

import AppNavigation from './src/navigation';
import {useEffect} from 'react';

const {store, persistor} = configureStore();
export const storeRef = store;

//LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
}
