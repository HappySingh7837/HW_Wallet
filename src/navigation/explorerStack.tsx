import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {RouteScreenName} from '../constants/route.screens';

import {StyleSheet} from 'react-native';
import {Theme} from '../constants/theme';
import BackIcon from '../components/icons/backIcon';
import History from '../screens/history';
import WalletInfo from '../screens/walletInfo';
import BuildWallet from '../screens/buildWallet';
import ExploreWallet from '../screens/exploreWallet';
import BuildWalletTransaction from '../screens/buildTransaction';
import Header from '../components/header';

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

const ExplorerStackNavigation = () => {
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
        name={RouteScreenName.ExploreWallet}
        component={ExploreWallet}
        options={(route: any) => ({
          ...screenOptions,
          ...headerOption,
          header: (props: any) => (
            <Header {...props} route={route} hideBackButton />
          ),
          headerTitle: 'Wallet Explorer',
          headerShown: true,
        })}
      />
      <Stack.Screen
        name={RouteScreenName.History}
        component={History}
        options={(route: any) => ({
          ...screenOptions,
          ...headerOption,
          header: (props: any) => <Header {...props} route={route} />,
          headerTitle: 'History',
        })}
      />
      <Stack.Screen
        name={RouteScreenName.WalletInfo}
        component={WalletInfo}
        options={(route: any) => ({
          ...screenOptions,
          ...headerOption,
          header: (props: any) => <Header {...props} route={route} />,
          headerTitle: 'Wallet Info',
        })}
      />

      <Stack.Screen
        name={RouteScreenName.BuildWallet}
        component={BuildWallet}
        options={(route: any) => ({
          ...screenOptions,
          ...headerOption,
          header: (props: any) => <Header {...props} route={route} />,
          headerTitle: 'Build - Wallet1',
        })}
      />
      <Stack.Screen
        name={RouteScreenName.BuildWalletTransaction}
        component={BuildWalletTransaction}
        options={(route: any) => ({
          ...screenOptions,
          ...headerOption,
          header: (props: any) => <Header {...props} route={route} />,
          headerTitle: 'Build - Wallet1',
        })}
      />
    </Stack.Navigator>
  );
};

export default ExplorerStackNavigation;
