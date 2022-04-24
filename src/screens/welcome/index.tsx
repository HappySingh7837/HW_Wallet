import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Wrapper from '../../components/wrapper';

import {RouteScreenName} from '../../constants/route.screens';
import StyledButton from '../../components/StyleButton';

import {images} from '../../assets/images';
import {Theme} from '../../constants/theme';
import {lang} from '../../locale';

interface Props {
  navigation: any;
}

const Welcome = ({navigation}: Props) => {
  return (
    <Wrapper>
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <View style={styles.button}>
          <StyledButton
            title={lang.generateWallet}
            onPress={() => navigation.navigate(RouteScreenName.Generate)}
          />
          <StyledButton
            title={lang.recoverWallet}
            style={styles.recrWallet}
            onPress={() => navigation.navigate(RouteScreenName.RecoverWallet)}
          />
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: Theme.sizes.size100,
  },
  button: {
    position: 'absolute',
    bottom: Theme.sizes.size30,
  },
  recrWallet: {
    backgroundColor: Theme.Colors.Secondary,
    marginTop: Theme.sizes.size10,
  },
});

export default Welcome;
