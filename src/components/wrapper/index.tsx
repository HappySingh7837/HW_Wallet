import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Theme} from '../../constants/theme';

interface Props {
  children: React.ReactNode;
  exnternalStyle?: any;
}

const Wrapper = ({children, exnternalStyle}: Props) => {
  return <View style={[style.container, exnternalStyle]}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: Theme.Dimensions.Default,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.Colors.Black,
  },
});

export default Wrapper;
