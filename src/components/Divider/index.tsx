import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Theme} from '../../constants/theme';
interface Props {
  style?: any;
}

const Divider = ({style}: Props) => {
  return <View style={[styles.divider, style]} />;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: Theme.Colors.White,
    borderBottomWidth: Theme.sizes.size2,
  },
});
export default Divider;
