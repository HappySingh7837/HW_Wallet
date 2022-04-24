import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reactotron = Reactotron.setAsyncStorageHandler!(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings e.g. { host: 192.168.1.2 }
  .useReactNative()
  .use(reactotronRedux()) // add all built-in react native plugins
  .connect();

// wrap the old console.log function so that we reactotron log it at the same time
const oldConsoleLog = console.log;
console.log = (...args: any[]) => {
  oldConsoleLog(...args);

  Reactotron.display({
    name: 'CONSOLE.LOG',
    important: true,
    value: args,
    preview: args.length ? JSON.stringify(args) : args[0],
  });
};

export default reactotron;
