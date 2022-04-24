import React from 'react';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Divider from '../../components/Divider';
import StyleInput from '../../components/StyleInput';
import StyledText from '../../components/StyleText';
import {Theme} from '../../constants/theme';
import {windowWidth} from '../../util';
import {lang} from '../../locale';
import StyledToggle from '../../components/StyledToggle';
import YellowShieldIcon from '../../components/icons/yellowShieldIcon';
import ProtectionIcon from '../../components/icons/protectionIcon';

interface Props {
  navigation: any;
}

const Settings = ({}: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View>
        <Divider />
        <View style={styles.container}>
          <StyledText>{lang.ui}:</StyledText>

          <StyledToggle
            isOn={isEnabled}
            onChanged={() => setIsEnabled(!isEnabled)}
          />
        </View>
        <Divider />
        <View style={styles.container}>
          <StyledText>{lang.anonymityLevel}</StyledText>
          <View style={styles.labelMarginTop}>
            <View style={styles.amountInputBox}>
              <YellowShieldIcon />
              <StyleInput style={styles.amountInput} placeholder="2" />
            </View>
            <View style={styles.amountInputBox}>
              <ProtectionIcon />
              <StyleInput style={styles.amountInput} placeholder="21" />
            </View>
            <View style={styles.amountInputBox}>
              <ProtectionIcon />
              <StyleInput style={styles.amountInput} placeholder="50" />
            </View>
          </View>
        </View>
        <Divider style={styles.divider} />
        <View style={[styles.container]}>
          <StyledText>{lang.dustThreshold}</StyledText>
          <StyleInput style={styles.labelMarginTop} placeholder="0.000001" />
        </View>
        <Divider style={styles.divider} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    minHeight: Theme.Dimensions.scrollViewHeigh,
    backgroundColor: Theme.Colors.Black,
    //padding: Theme.Dimensions.Default,
  },
  container: {
    padding: Theme.Dimensions.Default,
    //marginTop: Theme.Dimensions.Default,
  },
  heading: {
    marginTop: Theme.sizes.size57,
    fontSize: Theme.sizes.size20,
    marginBottom: Theme.sizes.size30,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',

    marginTop: Theme.Dimensions.Medium,
  },
  inputMargin: {
    marginTop: Theme.sizes.size30,
  },
  maxButton: {
    minWidth: Theme.sizes.size30,
    borderRadius: Theme.sizes.size2,
    backgroundColor: Theme.Colors.lighGray,
  },
  amountInputBox: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  amountInput: {
    width: windowWidth - Theme.sizes.size80,
    marginLeft: Theme.sizes.size10,
    //transform: [{translateY: Theme.sizes.size20}],
  },
  labelMarginTop: {
    marginTop: Theme.sizes.size30,
  },
  divider: {
    marginTop: Theme.sizes.sizeminus30,
  },
});
export default Settings;
