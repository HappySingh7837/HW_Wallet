import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import StyledButton from '../../components/StyleButton';
import StyledText from '../../components/StyleText';
import {Theme} from '../../constants/theme';
import {windowWidth} from '../../util';
import {RouteScreenName} from '../../constants/route.screens';
import Divider from '../../components/Divider';
import {lang} from '../../locale';

interface Props {
  navigation: any;
}
const TrxListData = [
  {
    date: '01/01/2021',
    amount: '0.000123',
  },
  {
    date: '01/01/2021',
    amount: '0.000123',
  },
];

const TrxList = ({navigation, data}: any) => {
  return (
    <View>
      {data.map((val: any) => {
        return (
          <View>
            <View style={styles.container}>
              <View style={styles.innerConatiner}>
                <StyledText>
                  {lang.date} {val.date}
                </StyledText>
                <StyledText>
                  {lang.amount} — {val.amount}{' '}
                </StyledText>
              </View>

              <View style={styles.innerConatiner}>
                <View>
                  <StyledText style={styles.text}>
                    {lang.date} {val.date}
                  </StyledText>
                  <StyledText style={styles.text}>
                    {lang.amount} — {val.amount}
                  </StyledText>
                </View>
                <View>
                  <StyledButton
                    style={styles.button}
                    title={lang.copyTxId}
                    onPress={() => navigation}
                  />
                </View>
              </View>
            </View>
            <Divider />
          </View>
        );
      })}
    </View>
  );
};
const History = ({navigation}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Divider />
      <TrxList
        navigation={() => navigation.navigate(RouteScreenName.WalletInfo)}
        data={TrxListData}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    minHeight: Theme.Dimensions.scrollViewHeigh,
    backgroundColor: Theme.Colors.Black,
    //
  },
  text: {
    marginTop: Theme.sizes.size10,
  },
  button: {
    maxWidth: windowWidth / Theme.sizes.size3p5,
    marginBottom: Theme.Dimensions.Default,

    borderRadius: Theme.sizes.size2,
  },
  container: {padding: Theme.Dimensions.Default},
  innerConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: Theme.Dimensions.Medium,
  },
});
export default History;
