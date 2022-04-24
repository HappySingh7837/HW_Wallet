import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

import StyledText from '../StyleText';

import {Theme} from '../../constants/theme';

interface Props extends TouchableOpacityProps {
  disabled?: boolean;

  style?: StyleProp<ViewStyle>;

  title?: string;
  titleStyle?: StyleProp<TextStyle>;

  image?: any;
  onPress: () => void;
}

const StyledButton = ({
  disabled = false,
  style,
  title,
  titleStyle,
  image,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.6}
      disabled={disabled}
      style={[styles.container, style, disabled && styles.disabled]}>
      {image && image}
      {image && <View style={{marginRight: Theme.Dimensions.Small}} />}

      {title && title !== '' && (
        <StyledText style={[styles.text, titleStyle]}>{title}</StyledText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.Colors.Primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    minWidth: Theme.Dimensions.fullWidth,
    borderRadius: Theme.Dimensions.Medium,
    height: Theme.Height.Default,
    margin: 0,
    padding: Theme.Dimensions.Medium,
  },

  text: {
    color: Theme.Colors.White,
    fontSize: Theme.FontSizes.Medium,
    fontFamily: Theme.Fonts.Primary,
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  disabled: {
    opacity: 0.5,
  },
});

export default StyledButton;
