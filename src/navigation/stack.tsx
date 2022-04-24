import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {RouteScreenName} from '../constants/route.screens';

import {StyleSheet} from 'react-native';
import {Theme} from '../constants/theme';

import Welcome from '../screens/welcome';
import Pharse from '../screens/phrase';
import React from 'react';
import Generate from '../screens/generateWallet';
import RecoverWallet from '../screens/recoverWallet';
import TestPassword from '../screens/testPassword';
import BackIcon from '../components/icons/backIcon';
import BottomTabs from './bottomTabs';
import SelectInput from '../screens/selectInput';
import History from '../screens/history';
import WalletInfo from '../screens/walletInfo';
import BuildWallet from '../screens/buildWallet';

const styles = StyleSheet.create({
  cardStyle: {
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: Theme.Colors.Black,
  },
  header: {
    backgroundColor: Theme.Colors.Black,
    height: Theme.sizes.size100,
    borderColor: 'none',
  },
  headerTitle: {
    fontSize: Theme.sizes.size20,
    fontFamily: Theme.Fonts.Primary,
  },
  title: {
    fontFamily: Theme.Fonts.Primary,
  },
});

export const headerOption: any = {
  headerStyle: styles.header,
  headerTitleAlign: 'center',
  headerTitleStyle: styles.headerTitle,
  cardStyle: styles.cardStyle,
  headerTintColor: Theme.Colors.White,
};

const Stack = createStackNavigator();

const StackNavigation = () => {
  const screenOptions: any = {
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerLeft: (props: any) => <BackIcon {...props} />,
        ...headerOption,
      }}>
      <Stack.Screen
        name={RouteScreenName.Welcome}
        component={Welcome}
        options={{...screenOptions, ...headerOption, headerShown: false}}
      />
      <Stack.Screen
        name={RouteScreenName.Generate}
        component={Generate}
        options={{...screenOptions, headerShown: false}}
      />
      <Stack.Screen
        name={RouteScreenName.Phrase}
        component={Pharse}
        options={{...screenOptions, ...headerOption, headerShown: false}}
      />
      <Stack.Screen
        name={RouteScreenName.RecoverWallet}
        component={RecoverWallet}
        options={{
          ...screenOptions,
          ...headerOption,
          headerTitle: 'Recover Wallet',
        }}
      />
      <Stack.Screen
        name={RouteScreenName.History}
        component={History}
        options={{
          ...screenOptions,
          ...headerOption,
          headerTitle: 'History',
        }}
      />
      <Stack.Screen
        name={RouteScreenName.TestPassword}
        component={TestPassword}
        options={{
          ...screenOptions,
          ...headerOption,
          headerTitle: 'Test Password',
        }}
      />
      <Stack.Screen
        name={RouteScreenName.SelectInput}
        component={SelectInput}
        options={{
          ...screenOptions,
          ...headerOption,
          headerTitle: 'Select Input',
        }}
      />
      <Stack.Screen
        name={RouteScreenName.WalletInfo}
        component={WalletInfo}
        options={{
          ...screenOptions,
          ...headerOption,
          headerTitle: 'Wallet Info',
        }}
      />
      <Stack.Screen
        name={RouteScreenName.BuildWallet}
        component={BuildWallet}
        options={{
          ...screenOptions,
          ...headerOption,
          headerTitle: 'Build - Wallet1',
        }}
      />
      <Stack.Screen
        name={RouteScreenName.Home}
        component={BottomTabs}
        options={{
          ...screenOptions,
          ...headerOption,
          headerTitle: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
