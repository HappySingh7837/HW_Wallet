import React from 'react';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Divider from '../../components/Divider';
import StyledButton from '../../components/StyleButton';
import StyledCheckBox from '../../components/StyledCheckBox';
import StyleInput from '../../components/StyleInput';
import StyledText from '../../components/StyleText';
import {Theme} from '../../constants/theme';
import {RouteScreenName} from '../../constants/route.screens';
import ProtectionIcon from '../../components/icons/protectionIcon';
import StepIndicatorProgressBar from '../../components/StepIndicator';
import {sendWalletData} from '../../constants/constants';
import {lang} from '../../locale';
import TransectionTable from '../../components/transectionTable';

interface Props {
  navigation: any;
}

const SelectInput = ({navigation}: Props) => {
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
          text="Select private"
          isChecked={ischecked}
          checkTextStyle={styles.marginLeft}
          onClick={() => setischecked(!ischecked)}
        />
        <StyledCheckBox
          text="Select all"
          isChecked={ischecked}
          checkTextStyle={styles.marginLeft}
          onClick={handleSelectAll}
        />
      </View>
      <Divider />
      <View style={[styles.container, styles.row, styles.marginTop]}>
        <ProtectionIcon />
        <StyledText style={styles.tragetText}>
          {lang.target}: 50 {lang.set}
        </StyledText>
      </View>
      <Divider />
      <View style={styles.marginTop}>
        <View style={styles.marginLeft}>
          <View style={styles.row}>
            <StyledText>
              {lang.status}: {lang.minimum}
            </StyledText>
            <StyledText style={styles.greenText}>0.00123123123</StyledText>
            <StyledText> is</StyledText>
          </View>

          <StyledText>required for CoinJoin. Moderator fee:</StyledText>
          <StyledText>0.001% per set</StyledText>
          <StepIndicatorProgressBar />
        </View>
      </View>

      <Divider />
      <View style={[styles.container, styles.marginTop]}>
        <StyledText style={styles.heading}>{lang.registration}</StyledText>
        <StyledText style={styles.marginTop}>
          {lang.registrationEnds}: 54m12s
        </StyledText>
        <View style={styles.row}>
          <StyledText style={styles.marginTop}>
            {lang.numberofPeers}:{' '}
          </StyledText>
          <StyledText style={[styles.marginTop, styles.greenText]}>
            {' '}
            22
          </StyledText>
          <StyledText style={styles.marginTop}>/100</StyledText>
        </View>
        <StyleInput
          placeholder={lang.password}
          style={styles.input}
          secure={true}
        />
      </View>
      <View style={[styles.buttonBox]}>
        <StyledButton
          style={[styles.loadButton, styles.button]}
          title={lang.startCoinJoin}
          onPress={() => navigation.navigate(RouteScreenName.History)}
        />
        <StyledButton
          title={lang.stopCoinJoin}
          style={[styles.button]}
          onPress={() => navigation.navigate(RouteScreenName.WalletInfo)}
        />
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
  row: {
    flexDirection: 'row',
    //marginTop: Theme.sizes.size10,
  },
  tragetText: {
    transform: [{translateY: Theme.sizes.size10}],
    marginLeft: Theme.sizes.size10,
  },
  status: {
    padding: Theme.Dimensions.Default,
    // marginRight:Theme.Dimensions.Large
  },
  marginTop: {
    marginTop: Theme.sizes.size10,
  },
  marginLeft: {
    marginLeft: Theme.Dimensions.Default,
  },
  greenText: {
    color: Theme.Colors.Primary,
  },
  heading: {
    fontSize: Theme.FontSizes.Medium,
  },
  input: {
    marginTop: Theme.sizes.size30,
  },
  buttonBox: {
    // marginBottom: Theme.sizes.size15,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    padding: Theme.Dimensions.Default,
  },
  loadButton: {
    backgroundColor: Theme.Colors.Secondary,
    textAlign: 'center',
  },
  button: {
    minWidth: '45%',
  },
});
export default SelectInput;
