import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Theme} from '../../constants/theme';
import {windowWidth} from '../../util';
import BackIcon from '../icons/backIcon';
import CharingIcon from '../icons/charginIcon';
import GreenCheckIcon from '../icons/greenCheckIcon';
import StyledText from '../StyleText';

const Header = ({options, route, hideBackButton, hideTopInfo}: any) => {
  const handleGoBack = () => {
    route.navigation.goBack();
  };
  return (
    <View style={styles.wrapper}>
      {!hideTopInfo && (
        <View style={[styles.rowWrapper, styles.topInfo]}>
          <View style={[styles.iconContainer, styles.rowWrapper]}>
            <GreenCheckIcon />
            <CharingIcon />
          </View>
          <View style={[styles.content, styles.rowWrapper]}>
            <StyledText>Peers: 12</StyledText>
            <StyledText>BTS/USD: $50000</StyledText>
          </View>
        </View>
      )}
      <StyledText style={styles.heading}>{options.headerTitle}</StyledText>
      {!hideBackButton && (
        <View style={styles.backIcon}>
          <BackIcon onPress={handleGoBack} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Theme.Dimensions.fullWidth,
    paddingHorizontal: Theme.Dimensions.Default,
    paddingTop: Theme.sizes.size10,
    height: Theme.sizes.size100,
  },
  rowWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  topInfo: {
    position: 'absolute',
    top: Theme.sizes.size10,
    left: Theme.Dimensions.Default,
    width: windowWidth - 2 * Theme.Dimensions.Default,
  },
  iconContainer: {
    width: Theme.sizes.size50,
  },
  content: {
    width: Theme.sizes.size200,
  },
  heading: {
    fontSize: Theme.sizes.size20,
    width: Theme.Dimensions.fullWidth,
    textAlign: 'center',
    marginVertical: Theme.sizes.size20,
    marginTop: Theme.sizes.size35,
  },
  backIcon: {
    position: 'absolute',
    left: Theme.Dimensions.Default,
    top: 32,
  },
});

export default Header;
