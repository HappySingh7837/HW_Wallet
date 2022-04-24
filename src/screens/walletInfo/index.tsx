import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import StyledButton from '../../components/StyleButton';
import StyleInput from '../../components/StyleInput';
import StyledText from '../../components/StyleText';
import {Theme} from '../../constants/theme';
import {windowWidth} from '../../util';
import {RouteScreenName} from '../../constants/route.screens';
import {lang} from '../../locale';

interface Props {
  navigation: any;
}

const KeyList = () => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.innerBox}>
        <View style={[styles.btn, styles.keybox]}>
          <StyledText style={styles.keyText}>{lang.publicKey}: </StyledText>
          <StyledText style={[styles.keyText, styles.red]}>
            masdkbmnwerfwe[]fwefwejfwe...
          </StyledText>
        </View>
        {
          <View style={styles.btn}>
            <StyledButton
              style={styles.copyButton}
              title="COPY"
              onPress={() => console.log('copy')}
            />
          </View>
        }
      </View>
    </View>
  );
};
const WalletInfo = ({navigation}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <StyleInput inputStyle={styles.input} placeholder="Password" />
          <StyledButton
            style={styles.button}
            title="SHOW PRIVATE"
            onPress={() => navigation.navigate(RouteScreenName.BuildWalletTransaction)}
          />
        </View>
        <KeyList />
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
  copyButton: {
    minWidth: windowWidth / Theme.sizes.size6,
    marginBottom: Theme.Dimensions.Default,

    borderRadius: Theme.sizes.size2,
  },
  listContainer: {padding: Theme.Dimensions.Small},
  innerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginTop: Theme.Dimensions.Medium,
  },
  btn: {
    flexDirection: 'column',
  },
  keybox: {
    width: windowWidth - Theme.sizes.size100,
  },
  keyText: {
    marginTop: Theme.sizes.size10,
  },
  red: {
    color: Theme.Colors.red,
  },
});
export default WalletInfo;
