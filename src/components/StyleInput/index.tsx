import React from 'react';
import {
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
  StyleProp,
  TextInputAndroidProps,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {Theme} from '../../constants/theme';
import {windowWidth} from '../../util';
import StyledText from '../StyleText';

interface Props extends ViewProps, TextInputAndroidProps {
  placeholder: string;
  icon?: any;
  style?: StyleProp<ViewStyle>;
  label?: string;
  onChangesText?: (e: any) => void;
  secure?: boolean;
  inputStyle?: any;
  multiLine?: boolean;
}

const StyleInput = ({
  placeholder,
  icon,
  style,
  secure = false,
  label,
  inputStyle,
  multiLine = false,
  onChangesText,
  ...props
}: Props) => {
  return (
    <View>
      {label && <StyledText style={styles.label}>{label}</StyledText>}
      <View {...props} style={[styles.inputContainer, style]}>
        <View>
          <TextInput
            style={[styles.input, inputStyle]}
            placeholder={placeholder}
            placeholderTextColor={Theme.Colors.lighGray}
            onChangeText={onChangesText}
            secureTextEntry={secure}
            multiline={multiLine}
          />
        </View>
        {icon && <View style={styles.icon}>{icon}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 38,
    borderBottomColor: Theme.Colors.gray1,
    borderBottomWidth: Theme.sizes.size2,
  },
  input: {
    width: windowWidth - 2 * Theme.Dimensions.Large,
    fontSize: Theme.FontSizes.Large,
    fontFamily: Theme.Fonts.Primary,
    padding: Theme.sizes.size0,
    color: Theme.Colors.White,
  },
  icon: {
    transform: [{translateY: Theme.sizes.size0}],
  },
  label: {
    marginTop: Theme.sizes.size6,
    color: Theme.Colors.lighGray,
  },
});
export default StyleInput;
