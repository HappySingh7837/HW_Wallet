import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Theme} from '../../constants/theme';
import StyledText from '../../components/StyleText';
import {windowHeight} from '../../util';
import TreeView from '../../components/TreeView';
import ArrowDownIcon from '../../components/icons/arrowDownIcon';
import ArrowIconRight from '../../components/icons/arrowIconRight';
import {lang} from '../../locale';
import EyeOpen from '../../components/icons/eyeOpenIcon';
import CircleMinIcon from '../../components/icons/circleMinIcon';
import CirclePlusIcon from '../../components/icons/circlePlus';
import WalletCircleDot from '../../components/icons/walletCircle';
import SendIcon from '../../components/icons/sendIcon';
import ReceiveIcon from '../../components/icons/recieveIcon';
import CoinJoinIcon from '../../components/icons/coinJoin';
import HistoryIcon from '../../components/icons/historyIcon';
import AdvanceIcon from '../../components/icons/advanceIcon';
import WalletInfoIcon from '../../components/icons/walletInfo';
import BuildTransactionIcon from '../../components/icons/buildTransactionIcon';
import {RouteScreenName} from '../../constants/route.screens';

interface Props {
  navigation: any;
}
const ChildNode = () => {
  const [isshowChild, setIsshowChild] = useState(false);
  return (
    <View>
      <View style={styles.walletOptions}>
        <SendIcon />
        <StyledText style={styles.subHeading}>{lang.send} </StyledText>
      </View>
      <View style={styles.walletOptions}>
        <ReceiveIcon />
        <StyledText style={styles.subHeading}>{lang.receive} </StyledText>
      </View>
      <View style={styles.walletOptions}>
        <CoinJoinIcon />
        <StyledText style={styles.subHeading}>{lang.coinJoin} </StyledText>
      </View>
      <View style={styles.walletOptions}>
        <HistoryIcon />
        <StyledText style={styles.subHeading}>{lang.history} </StyledText>
      </View>
      <View style={styles.walletOptions}>
        <TreeView
          heading="Advanced"
          headingStyle={styles.subHeading}
          preHeadingIcon={<AdvanceIcon />}
          icon={
            <View style={styles.advanceArrowIcon}>
              {isshowChild ? <ArrowDownIcon /> : <ArrowIconRight />}
            </View>
          }
          showChild={isshowChild}
          onPress={() => setIsshowChild(!isshowChild)}
          children={
            <View>
              <View style={styles.walletOptions}>
                <WalletInfoIcon />
                <StyledText style={styles.subHeading}>
                  {lang.walletInfo}
                </StyledText>
              </View>
              <View style={styles.walletOptions}>
                <BuildTransactionIcon />
                <StyledText style={styles.subHeading}>
                  {lang.buildTransaction}
                </StyledText>
              </View>
            </View>
          }
        />
      </View>
    </View>
  );
};
const TreeViewList = ({walletName}: any) => {
  const [isshowChild, setIsshowChild] = useState(false);
  return (
    <View style={styles.treeViewList}>
      <TreeView
        preHeadingIcon={<WalletCircleDot />}
        heading={walletName}
        headingStyle={styles.subHeading}
        icon={isshowChild ? <ArrowDownIcon /> : <ArrowIconRight />}
        showChild={isshowChild}
        onPress={() => setIsshowChild(!isshowChild)}
        children={<ChildNode />}
      />
    </View>
  );
};

const ExploreWallet = ({navigation}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.iconBox}>
          <View
            style={styles.minusIcon}
            onTouchEnd={() => navigation.navigate(RouteScreenName.History)}>
            <EyeOpen />
          </View>

          <View style={styles.icons}>
            <CircleMinIcon />
          </View>
        </View>

        <View>
          <View>
            <View
              style={styles.genWallet}
              onTouchEnd={() =>
                navigation.navigate(RouteScreenName.WalletInfo)
              }>
              <CirclePlusIcon />
              <StyledText style={styles.subHeading}>
                {lang.generateWallet}
              </StyledText>
            </View>
          </View>
          <View>
            <View
              style={styles.genWallet}
              onTouchEnd={() =>
                navigation.navigate(RouteScreenName.WalletInfo)
              }>
              <CirclePlusIcon />
              <StyledText style={styles.subHeading}>
                {lang.recoverWallet}
              </StyledText>
            </View>
          </View>
          <View style={styles.innerContainer}>
            <TreeViewList walletName="Wallet 1 (0.01 BTC / 500$)" />
            <TreeViewList walletName="Wallet 2" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    minHeight: windowHeight - Theme.Dimensions.Default,
    backgroundColor: Theme.Colors.Black,
    padding: Theme.Dimensions.Default,
  },
  container: {},
  heading: {
    marginTop: Theme.sizes.size30,
    fontSize: Theme.FontSizes.Large,
    textAlign: 'center',
  },
  iconBox: {
    flexDirection: 'row',
    marginLeft: Theme.Dimensions.Default,
    //flex: 1,
    marginTop: Theme.Dimensions.Large,
    transform: [{translateX: -Theme.sizes.size10}],
  },
  innerContainer: {
    padding: Theme.Dimensions.Default,
    marginTop: Theme.Dimensions.Default,
  },
  icons: {
    marginLeft: Theme.Dimensions.Default,
  },
  genWallet: {
    flexDirection: 'row',
    paddingLeft: Theme.Dimensions.Large,
    marginTop: Theme.sizes.size15,
  },
  subHeading: {
    fontSize: Theme.FontSizes.Medium,
    marginLeft: Theme.Dimensions.Default,
  },
  walletOptions: {
    flexDirection: 'row',
    marginLeft: Theme.Dimensions.Large,
    marginTop: Theme.Dimensions.Small,
    marginBottom: Theme.sizes.size20,
  },
  treeViewList: {
    marginTop: Theme.sizes.size6,
  },
  advanceArrowIcon: {
    transform: [{translateX: -Theme.sizes.size12}],
  },
  minusIcon: {
    //transform: [{translateX: -Theme.sizes.size12,translateY:Theme.sizes.size10}],
    transform: [{translateY: -Theme.sizes.size20 - Theme.sizes.size2}],
  },
});

export default ExploreWallet;
