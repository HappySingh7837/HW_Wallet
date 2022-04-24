import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Theme} from '../../constants/theme';
import {windowHeight} from '../../util';

interface Props {
  children: any;
  exStyleScrollView?: any;
  containerStyle?: any;
}

const ScrolledView = ({
  children,
  exStyleScrollView = {},
  containerStyle = {},
}: Props) => {
  return (
    <ScrollView contentContainerStyle={[styles.scrollView, exStyleScrollView]}>
      <View style={[styles.container, containerStyle]}>{children}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    minHeight: windowHeight - Theme.sizes.size30,
    backgroundColor: Theme.Colors.Black,
    padding: Theme.Dimensions.Default,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default ScrolledView;
