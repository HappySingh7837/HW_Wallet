import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import ScrolledView from '../../components/scrolledView';
import StyledButton from '../../components/StyleButton';
import StyleInput from '../../components/StyleInput';
import StyledText from '../../components/StyleText';
import {RouteScreenName} from '../../constants/route.screens';
import {Theme} from '../../constants/theme';
import {lang} from '../../locale';
import {windowWidth} from '../../util';

interface Props {
  navigation: any;
}
const WalletData = [
  {
    id: 1,
    value: 'Wallet 1',
  },
  {
    id: 2,
    value: 'Wallet 2',
  },
  {
    id: 3,
    value: 'Wallet 3',
  },
];

const EntryList = ({content}: any) => {
  const [selected, setSelected] = useState(-1);

  return (
    <>
      {content.map((item: any, i: number) => (
        <TouchableHighlight key={i} onPress={() => setSelected(i)}>
          <View>
            <StyledText
              style={selected === i ? styles.active : styles.walletHeading}>
              {item.value}
            </StyledText>
          </View>
        </TouchableHighlight>
      ))}
    </>
  );
};
const TestPassword = ({navigation}: Props) => {
  return (
    <ScrolledView exStyleScrollView={styles.scrollView}>
      <View style={styles.addWalletCont}>
        <StyledText style={styles.walletHeading}>{lang.addWallet}</StyledText>
        <EntryList content={WalletData} />
        <StyledText style={styles.walletTest}>{lang.stp}</StyledText>
      </View>
      <StyleInput
        style={styles.input}
        placeholder={lang.enterPassword}
        secure={true}
      />
      <View style={[styles.buttonBox]}>
        <StyledButton
          style={[styles.loadButton, styles.button]}
          title={lang.loadWallet}
          onPress={() => navigation.navigate(RouteScreenName.Home)}
        />
        <StyledButton
          title={lang.testPassword}
          style={[styles.button]}
          onPress={() => navigation.navigate(RouteScreenName.RecoverWallet)}
        />
      </View>
    </ScrolledView>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    marginBottom: Theme.sizes.size15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  scrollView: {
    minHeight: Theme.Dimensions.scrollViewHeigh,
    backgroundColor: Theme.Colors.Black,
    padding: Theme.Dimensions.Default,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  heading: {
    marginTop: Theme.sizes.size57,
    fontSize: Theme.FontSizes.Large,
  },
  para: {
    flex: 1,
  },
  paraBox: {
    flex: 1,
    flexDirection: 'row',
    marginTop: Theme.sizes.size40,
  },
  walletHeading: {
    marginBottom: Theme.sizes.size10,
    fontSize: Theme.FontSizes.Medium,
    paddingVertical: Theme.sizes.size10,
    paddingLeft: Theme.Dimensions.Default,
  },
  walletTest: {
    marginTop: Theme.sizes.size70,
    fontSize: Theme.FontSizes.Small,
    paddingLeft: Theme.Dimensions.Default,
  },
  loadButton: {
    backgroundColor: Theme.Colors.Secondary,
    textAlign: 'center',
  },
  input: {
    marginTop: -Theme.sizes.size60,
  },
  button: {
    minWidth: '48%',
  },
  active: {
    fontSize: Theme.FontSizes.Small,
    backgroundColor: Theme.Colors.lighGray,
    paddingVertical: Theme.sizes.size10,
    paddingLeft: Theme.Dimensions.Default,
  },
  addWalletCont: {
    width: windowWidth,
    transform: [{translateX: -Theme.Dimensions.Default}],
  },
});

export default TestPassword;
