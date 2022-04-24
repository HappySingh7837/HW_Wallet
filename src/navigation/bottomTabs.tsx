import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View} from 'react-native';
import {RouteScreenName} from '../constants/route.screens';
import {Theme} from '../constants/theme';
import SearchIcon from '../components/icons/searchIcon';
import StyledText from '../components/StyleText';
import SendIcon from '../components/icons/sendIconTabIcon';
import ReceiveTabIcon from '../components/icons/receiveTabIcon';
import CoinJoinIcon from '../components/icons/coinJoinTabIcon';
import SettingsIcon from '../components/icons/settingsTabIcon';
import SendWallet from '../screens/sendWallet';
import ReceiveWallet from '../screens/receiveWallet';
import {windowWidth} from '../util';
import Settings from '../screens/settings';
import {headerOption} from './stack';
import BackIcon from '../components/icons/backIcon';
import SelectInput from '../screens/selectInput';
import ExplorerStackNavigation from './explorerStack';
import Header from '../components/header';

export interface BottomTabIcon {
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();

export const TabIcon = ({title, route, children}: any) => {
  const isActive = route.navigation.isFocused();

  return (
    <View style={style.tabIconContainer}>
      {children}
      <StyledText
        style={[
          style.tabText,
          {color: isActive ? Theme.Colors.White : Theme.Colors.gray2},
        ]}>
        {title}
      </StyledText>
    </View>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Theme.Colors.White,
        headerShown: false,
        tabBarStyle: style.tabBarStyle,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: 'grey',
        tabBarItemStyle: style.tabBarIconStyle,
        headerShadowVisible: false,
        headerLeft: (props: any) => <BackIcon {...props} />,
      }}>
      <Tab.Screen
        name={RouteScreenName.WalletExplorer}
        component={ExplorerStackNavigation}
        options={(route: any) => ({
          tabBarLabel: '',
          tabBarIcon: ({color, ...rest}: BottomTabIcon) => (
            <TabIcon title="Explorer" route={route}>
              <SearchIcon color={color} route={route} {...rest} />
            </TabIcon>
          ),
        })}
      />
      <Tab.Screen
        name={RouteScreenName.SendWallet}
        component={SendWallet}
        options={(route: any) => ({
          tabBarLabel: '',
          headerTitle: 'Send Wallet1',
          headerShown: true,
          header: (props: any) => <Header {...props} route={route} />,
          ...headerOption,
          tabBarIcon: ({color, ...rest}: BottomTabIcon) => (
            <TabIcon title="Send" route={route}>
              <SendIcon color={color} route={route} {...rest} />
            </TabIcon>
          ),
        })}
      />
      <Tab.Screen
        name={RouteScreenName.ReceiveWallet}
        component={ReceiveWallet}
        options={(route: any) => ({
          tabBarLabel: '',
          headerTitle: 'Recieve Wallet1',
          headerShown: true,
          header: (props: any) => <Header {...props} route={route} />,
          ...headerOption,
          tabBarIcon: ({color, ...rest}: BottomTabIcon) => (
            <TabIcon title="Receive" route={route}>
              <ReceiveTabIcon color={color} route={route} {...rest} />
            </TabIcon>
          ),
        })}
      />
      <Tab.Screen
        name={RouteScreenName.CoinJoin}
        component={SelectInput}
        options={(route: any) => ({
          tabBarLabel: '',
          headerTitle: 'Select Input',
          headerShown: true,
          header: (props: any) => <Header {...props} route={route} />,
          ...headerOption,
          tabBarIcon: ({color, ...rest}: BottomTabIcon) => (
            <TabIcon title="CoinJoin" route={route}>
              <CoinJoinIcon color={color} route={route} {...rest} />
            </TabIcon>
          ),
        })}
      />
      <Tab.Screen
        name={RouteScreenName.Settings}
        component={Settings}
        options={(route: any) => ({
          tabBarLabel: '',
          headerTitle: 'Settings',
          headerShown: true,
          header: (props: any) => (
            <Header {...props} route={route} hideBackButton />
          ),
          ...headerOption,
          headerLeft: null,
          tabBarIcon: ({color, ...rest}: BottomTabIcon) => (
            <TabIcon title="Settings" route={route}>
              <SettingsIcon color={color} route={route} {...rest} />
            </TabIcon>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  tabContainer: {
    backgroundColor: Theme.Colors.Black,
  },
  tabBarStyle: {
    borderTopWidth: Theme.sizes.size0,
    paddingBottom: Theme.sizes.size10,
    backgroundColor: Theme.Colors.darkBlack,
    height: Theme.sizes.size60,
    paddingTop: Theme.sizes.size8,
  },
  tabText: {
    fontSize: Theme.sizes.size12,
    marginTop: Theme.sizes.size4,
  },
  tabIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarIconStyle: {
    height: Theme.sizes.size60,
    width: windowWidth / 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomTabs;
