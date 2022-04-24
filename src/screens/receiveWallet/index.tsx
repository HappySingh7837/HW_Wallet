import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import StyledButton from '../../components/StyleButton';
import StyleInput from '../../components/StyleInput';
import StyledText from '../../components/StyleText';
import {Theme} from '../../constants/theme';
import {windowWidth} from '../../util';
import TreeView from '../../components/TreeView';
import ArrowDownIcon from '../../components/icons/arrowDownIcon';
import ArrowIconRight from '../../components/icons/arrowIconRight';
import {RouteScreenName} from '../../constants/route.screens';
import {lang} from '../../locale';
import QRCode from 'react-native-qrcode-svg';

interface Props {
  navigation: any;
}
const WalletList = [
  {
    wallet: 'bclaj2692ypvqe8m9u8k0aanyskf72n4ut8',
    label: 'test',
    KeyPath: '84’/0’/0’/0/1',
    publicKey: 'key1....',
  },
  {
    wallet: '2bclaj2692ypvqe8m9u8k0aanyskf72n4ut8',
    label: 'test2',
    KeyPath: '84’/0’/0’/0/1',
    publicKey: 'key2....',
  },
];

const TreeChild = ({}: any) => {
  return (
    <View>
      <View style={styles.QrBox}>
        <View>
          <QRCode value="https://www.figma.com/" />
        </View>
        <View style={styles.QrRight}>
          <View style={styles.labeLBtnBox}>
            <StyledText style={styles.label}>{lang.label} : test !</StyledText>
            <StyledButton
              style={styles.QrBtn}
              title="Copy"
              onPress={() => console.log('recieve wallet')}
            />
          </View>
          <StyledText style={styles.text}>
            {lang.keypath}: 84’/0’/0’/0/1
          </StyledText>
          <StyledText style={[styles.textkey]}>
            {lang.keypath}: KeyKey ...
          </StyledText>
        </View>
      </View>
    </View>
  );
};

const TreeViewList = ({heading}: any) => {
  const [isshowChild, setIsshowChild] = useState(false);
  return (
    <View>
      <TreeView
        heading={heading}
        icon={isshowChild ? <ArrowDownIcon /> : <ArrowIconRight />}
        showChild={isshowChild}
        onPress={() => setIsshowChild(!isshowChild)}
        children={<TreeChild />}
      />
    </View>
  );
};

const ReceiveWallet = ({navigation}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <StyleInput inputStyle={styles.input} placeholder="Label" />
          <StyledButton
            style={styles.button}
            title={lang.generate}
            onPress={() => navigation.navigate(RouteScreenName.WalletInfo)}
          />
        </View>
        <View>
          <TreeViewList heading="bclaj2692ypvqe8m9u8k0aanyskf72n4ut8" />
          <TreeViewList heading="bclaj2692ypvqe8m9u8k0aanyskf72n4ut8" />
          <TreeViewList heading="bclaj2692ypvqe8m9u8k0aanyskf72n4ut8" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    minHeight: Theme.Dimensions.scrollViewHeigh,
    backgroundColor: Theme.Colors.Black,
    padding: Theme.Dimensions.Default,
  },
  container: {
    justifyContent: 'space-between',
    marginTop: Theme.Dimensions.Default,
  },
  inputBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input: {
    width: windowWidth / Theme.sizes.size2 + Theme.sizes.size20,
  },
  button: {
    minWidth: windowWidth / Theme.sizes.size3p5,
    marginBottom: Theme.Dimensions.Default,
    transform: [{translateY: Theme.sizes.sizeminus30}],
    backgroundColor: Theme.Colors.Secondary,
    borderRadius: Theme.sizes.size2,
  },
  QrBox: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: Theme.sizes.size25,
    marginBottom: Theme.sizes.size20,
  },
  QrRight: {
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    marginLeft: Theme.Dimensions.Default,
    flexWrap: 'wrap',
  },
  labeLBtnBox: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'flex-end',
  },
  QrBtn: {
    minWidth: windowWidth / Theme.sizes.size6,
    transform: [{translateX: Theme.sizes.size15 + Theme.sizes.size3}],
    height: Theme.sizes.size40,
    borderRadius: Theme.sizes.size2,
  },
  label: {
    marginRight: Theme.sizes.size10,
    transform: [{translateY: Theme.sizes.size15}],
    width: windowWidth / Theme.sizes.size2 - Theme.sizes.size45,
  },
  text: {
    transform: [{translateY: -Theme.sizes.size20}],
  },
  textkey: {
    transform: [{translateY: Theme.sizes.sizeminus30 + Theme.sizes.size20}],
  },
});
export default ReceiveWallet;
