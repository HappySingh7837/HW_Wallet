import * as React from 'react';

import {Text, StyleSheet, TextProps} from 'react-native';

import {Theme} from '../../constants/theme';

interface Props extends TextProps {
  selected?: boolean;
}

const StyledText: React.FunctionComponent<Props> = ({
  selected,
  style,
  ...props
}) => {
  const fontFamily = selected ? Theme.Fonts.PrimaryBold : Theme.Fonts.Primary;

  return <Text {...props} style={[styles.text, style, {fontFamily}]} />;
};

const styles = StyleSheet.create({
  text: {
    color: Theme.Colors.White,
    fontSize: Theme.FontSizes.Small,
    fontFamily: Theme.Fonts.Primary,
  },
});

export default StyledText;
