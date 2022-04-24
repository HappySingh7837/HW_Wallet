import React from 'react';
import {useState} from 'react';
import Slider from '@react-native-community/slider';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Divider from '../../components/Divider';
import StyledButton from '../../components/StyleButton';
import StyledCheckBox from '../../components/StyledCheckBox';
import StyleInput from '../../components/StyleInput';
import StyledText from '../../components/StyleText';
import {Theme} from '../../constants/theme';
import {windowWidth} from '../../util';
import FlashIcon from '../../components/icons/flash';
import ClockIcon from '../../components/icons/clock';
import {lang} from '../../locale';
import TransectionTable from '../../components/transectionTable';
import {sendWalletData} from '../../constants/constants';
import CameraIcon from '../../components/icons/cameraIcon';
import { RouteScreenName } from '../../constants/route.screens';
interface Props {
  navigation: any;
}

const BuildWalletTransaction = ({navigation}: Props) => {
  const [ischecked, setischecked] = useState(false);
  const [selectedAll, setSelectedAll] = useState(false);
  const [transectionData, setTransectionData] = useState(sendWalletData);

  const handleSelectAll = () => {
    const makeAllSelected = transectionData.map(item => ({
      ...item,
      selected: !selectedAll,
    }));
    setTransectionData(makeAllSelected);
    setSelectedAll(!selectedAll);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <TransectionTable data={transectionData} />
      <Divider />
      <View style={styles.checkBoxContainer}>
        <StyledCheckBox
          style={styles.checkBox}
          checkTextStyle={styles.marginLeft}
          text={lang.selectPrivate}
          isChecked={ischecked}
          onClick={() => setischecked(!ischecked)}
        />
        <StyledCheckBox
          text={lang.selectAll}
          checkTextStyle={styles.marginLeft}
          isChecked={selectedAll}
          onClick={handleSelectAll}
        />
      </View>
      <View style={styles.container}>
        <StyledText>{lang.selectInputToSpend}</StyledText>
        <StyleInput
          style={styles.inputMargin}
          placeholder={lang.address}
          icon={<CameraIcon />}
        />
        <StyleInput placeholder="Label" />
        <View style={styles.amountInputBox}>
          <StyledButton
            title={lang.max}
            style={styles.maxButton}
            onPress={() => console.log('Max')}
          />
          <StyleInput style={styles.amountInput} placeholder="Amount (BTC)" />
        </View>
        <View style={[styles.amountInputBox, styles.inputMargin]}>
          <StyledText>Fee :</StyledText>
          <View style={styles.flash}>
            <FlashIcon />
          </View>
          <Slider
            value={40}
            style={styles.slider}
            thumbTintColor={Theme.Colors.Primary}
            maximumTrackTintColor={Theme.Colors.White}
            minimumTrackTintColor={Theme.Colors.Primary}
          />
          <View style={styles.clock}>
            <ClockIcon />
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <View style={styles.amountInputBox}>
            <StyledText>{lang.conformationIn}: </StyledText>
            <StyledText style={styles.greenText}>4 </StyledText>
            <StyledText>{lang.hours} (~ 0.5$)</StyledText>
          </View>
          <StyleInput
            style={styles.inputMargin}
            placeholder={lang.feeSatbByte}
          />
          <StyleInput placeholder={lang.password} secure={true} />
        </View>
        <StyledButton title={lang.buildTransaction} onPress={() => navigation.navigate(RouteScreenName.BuildWallet)} />
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
    marginTop: -Theme.sizes.size10,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: Theme.Dimensions.Default,
    marginTop: Theme.sizes.size20,
  },
  checkBox: {
    marginRight: Theme.Dimensions.ExtraLarge,
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
    flex: 1,
  },
  amountInput: {
    width: windowWidth - Theme.sizes.size100,
    marginLeft: Theme.sizes.size10,
    transform: [{translateY: Theme.sizes.size20}],
  },
  slider: {
    width: windowWidth - Theme.sizes.size120,
  },
  lowerContainer: {
    marginTop: Theme.sizes.size20,
  },
  greenText: {
    color: Theme.Colors.Primary,
  },
  marginLeft: {
    marginLeft: Theme.Dimensions.Default,
  },
  flash: {
    transform: [{translateY: -Theme.sizes.size2}],
    marginLeft: Theme.sizes.size6,
  },
  clock: {
    transform: [{translateY: Theme.sizes.size0}],
    marginLeft: Theme.sizes.size0,
  },
});
export default BuildWalletTransaction;
