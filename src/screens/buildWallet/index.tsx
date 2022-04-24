import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
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

const BuildWallet = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <StyledText style={styles.text}>{lang.rawTrans}</StyledText>
        <StyleInput
          inputStyle={styles.input}
          multiLine={true}
          placeholder="dummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytxdummytx..."
        />
        <View style={styles.btnBox}>
          <StyledButton
            title={lang.copy}
            style={styles.button}
            onPress={() => console.log('click')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Theme.Dimensions.Default,
    marginTop: Theme.Dimensions.Default,
  },
  input: {
    maxHeight: Theme.sizes.size10 * Theme.sizes.size30,
    marginTop: Theme.sizes.size8,
    minWidth: windowWidth - Theme.Dimensions.Large,
    flexWrap: 'wrap',
  },
  button: {
    marginBottom: Theme.Dimensions.Default,
    borderRadius: Theme.sizes.size2,
    minWidth: Theme.sizes.size30 * Theme.sizes.size2,
  },
  btnBox: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: Theme.FontSizes.Medium,
  },
});

export default BuildWallet;
