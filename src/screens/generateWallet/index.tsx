import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {RouteScreenName} from '../../constants/route.screens';
import StyledButton from '../../components/StyleButton';

import {Theme} from '../../constants/theme';
import StyledText from '../../components/StyleText';
import StyleInput from '../../components/StyleInput';
import WalletIcon from '../../components/icons/walletIcon';
import LockIcon from '../../components/icons/lockIcon';
import {lang} from '../../locale';
import ScrolledView from '../../components/scrolledView';

interface Props {
  navigation: any;
}

const GenerateWallet = ({navigation}: Props) => {
  const [wallet, setWallet] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrolledView>
      <StyledText style={styles.heading}>{lang.generateWalletSmall}</StyledText>
      <View style={styles.InputContainer}>
        <StyleInput
          placeholder={lang.walletName}
          icon={
            <WalletIcon
              color={wallet ? Theme.Colors.White : Theme.Colors.lighGray}
            />
          }
          onChangesText={setWallet}
        />
        <StyleInput
          placeholder={lang.password}
          secure
          icon={
            <LockIcon
              color={password ? Theme.Colors.White : Theme.Colors.lighGray}
            />
          }
          onChangesText={setPassword}
        />
      </View>
      <View style={styles.button}>
        <StyledButton
          title={lang.next}
          onPress={() => navigation.navigate(RouteScreenName.Phrase)}
        />
      </View>
    </ScrolledView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: Theme.sizes.size10,
    marginTop: Theme.sizes.size50,
    flex: 1,
    justifyContent: 'flex-end',
  },

  heading: {
    marginTop: Theme.sizes.size57,
    fontSize: Theme.FontSizes.Large,
    textAlign: 'center',
  },
  InputContainer: {
    marginTop: Theme.sizes.size129,
  },
});

export default GenerateWallet;
