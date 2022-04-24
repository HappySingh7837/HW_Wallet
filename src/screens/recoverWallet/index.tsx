import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ArrowDownIcon from '../../components/icons/arrowDownIcon';
import ArrowIconRight from '../../components/icons/arrowIconRight';
import LockIcon from '../../components/icons/lockIcon';
import WalletIcon from '../../components/icons/walletIcon';
import StyledButton from '../../components/StyleButton';
import StyleInput from '../../components/StyleInput';
import StyledText from '../../components/StyleText';
import TreeView from '../../components/TreeView';
import {RouteScreenName} from '../../constants/route.screens';
import {Theme} from '../../constants/theme';
import {lang} from '../../locale';
import {windowWidth} from '../../util';

interface Props {
  navigation: any;
}

const RecoverWallet = ({navigation}: Props) => {
  const [isshowChild, setIsshowChild] = useState(false);
  const [states, setStates] = useState({
    wallet: '',
    password: '',
    recoveryWords: '',
  });

  const handleInput = (key: any, value: string) => {
    const newValues: any = {...states};
    newValues[key] = value;
    setStates(newValues);
  };

  const newLockIcon = (key: any) => (
    <LockIcon
      color={(states as any)[key] ? Theme.Colors.White : Theme.Colors.lighGray}
    />
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.paraBox}>
          <StyledText style={styles.para}>{lang.headsUp}</StyledText>
          <StyledText style={styles.para}>{lang.atrecovery}</StyledText>
          <StyleInput
            style={styles.textInput}
            placeholder={lang.walletName}
            icon={
              <WalletIcon
                color={
                  states.wallet ? Theme.Colors.White : Theme.Colors.lighGray
                }
              />
            }
            onChangesText={v => handleInput('wallet', v)}
          />
          <StyleInput
            placeholder={lang.password}
            icon={newLockIcon('password')}
            onChangesText={v => handleInput('password', v)}
          />
          <StyleInput
            placeholder={lang.recoveryWords}
            icon={newLockIcon('recoveryWords')}
            onChangesText={v => handleInput('recoveryWords', v)}
          />

          <TreeView
            heading={lang.advanceOptions}
            icon={isshowChild ? <ArrowDownIcon /> : <ArrowIconRight />}
            showChild={isshowChild}
            onPress={() => setIsshowChild(!isshowChild)}
            children={
              <>
                <StyleInput
                  label={lang.acctPathKey}
                  placeholder="m/84’/0’/0’"
                  style={styles.input}
                />
                <StyleInput
                  label={lang.minimunGapLimit}
                  placeholder="100"
                  style={styles.input}
                />
              </>
            }
          />
        </View>
        <StyledButton
          style={styles.recrWallet}
          title={lang.recoverWallet}
          onPress={() => navigation.navigate(RouteScreenName.ReceiveWallet)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    minHeight: Theme.Dimensions.scrollViewHeigh,
    backgroundColor: Theme.Colors.Black,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: Theme.Dimensions.Default,
  },
  logo: {
    marginBottom: Theme.sizes.size100,
  },

  recrWallet: {
    backgroundColor: Theme.Colors.Secondary,
    bottom: Theme.sizes.size0,
    marginVertical: Theme.sizes.size30,
  },
  heading: {
    marginTop: Theme.sizes.size57,
    fontSize: Theme.FontSizes.Large,
  },
  para: {
    fontSize: Theme.FontSizes.Small,
  },
  paraBox: {
    flex: 1,
    padding: 'auto',
    marginTop: Theme.sizes.size40,
    width: windowWidth - Theme.sizes.size2 * Theme.Dimensions.Default,
  },
  textInput: {
    marginTop: Theme.sizes.size30,
  },
  input: {
    marginBottom: Theme.sizes.size12,
  },
});

export default RecoverWallet;
