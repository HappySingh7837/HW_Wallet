import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import StyledText from '../StyleText';
import CheckBox from 'react-native-check-box';
import {Theme} from '../../constants/theme';

interface Props {
  isChecked: boolean;
  text?: string;
  onClick: () => void;
  checkBoxStyle?: any;
  style?: any;
  checkTextStyle?: any;
}

const StyledCheckBox = ({
  isChecked,
  text,
  checkBoxStyle,
  checkTextStyle,
  style,
  ...props
}: Props) => {
  return (
    <View style={[styles.checkBoxContainer, style]}>
      <CheckBox
        checkBoxColor="#fff"
        isChecked={isChecked}
        style={checkBoxStyle}
        {...props}
      />
      {text && (
        <StyledText style={[styles.text, styles.checkBox, checkTextStyle]}>
          {text}
        </StyledText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: Theme.FontSizes.Small,
  },
  checkBox: {
    marginTop: Theme.sizes.size4,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    //marginBottom: Theme.sizes.size10,
    //marginTop: Theme.sizes.size40,
  },
});
export default StyledCheckBox;
