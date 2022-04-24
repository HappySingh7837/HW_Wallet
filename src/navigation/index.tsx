import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './stack';
import {Theme} from '../constants/theme';

const AppNavigationNavigator = () => {
  const theme: any = {colors: {background: Theme.Colors.Black}};
  return (
    <View style={styles.wrapper}>
      <NavigationContainer theme={theme}>
        <StackNavigation />
      </NavigationContainer>
    </View>
  );
};

const ConnectedAppNavigation = AppNavigationNavigator;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Theme.Colors.Black,
  },
});

export default ConnectedAppNavigation;
