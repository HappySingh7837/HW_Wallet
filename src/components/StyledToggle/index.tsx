import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import {Theme} from '../../constants/theme';
import {lang} from '../../locale';
import StyledText from '../StyleText';

interface Props {
  isOn: boolean;
  onChanged: () => void;
}
const StyledToggle = ({isOn, onChanged}: Props) => {
  return (
    <View style={styles.row}>
      <Switch
        trackColor={{true: Theme.Colors.Primary}}
        thumbColor={Theme.Colors.White}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChanged}
        value={isOn}
      />
      <StyledText style={styles.text}>{lang.autoCpoyPaste}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',

    marginTop: Theme.Dimensions.Medium,
  },
  text:{
    transform: [{translateY: Theme.sizes.size6}],
    marginLeft:Theme.sizes.size6
  }
});
export default StyledToggle;
