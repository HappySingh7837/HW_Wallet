import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import Wrapper from '../../components/wrapper';

import {RouteScreenName} from '../../constants/route.screens';
import StyledButton from '../../components/StyleButton';
import {Theme} from '../../constants/theme';
import StyledText from '../../components/StyleText';

import {windowWidth} from '../../util';
import {data} from '../../constants/phares';

import StyledCheckBox from '../../components/StyledCheckBox';
import {lang} from '../../locale';
import {TouchableHighlight} from 'react-native-gesture-handler';

interface Props {
  navigation: any;
}

const EntryList = ({content, index}: any) => {
  return (
    <View style={styles.listWrapper} key={index}>
      {content.map((item: any, i: number) => (
        <TouchableHighlight key={i}>
          <View style={styles.itemContainer}>
            <StyledText style={styles.item}>{item.word}</StyledText>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const Phrase = ({navigation}: Props) => {
  const [ischecked, setIschecked] = useState(false);
  const toggleCheck = () => {
    setIschecked(!ischecked);
  };
  return (
    <Wrapper>
      <View style={styles.container}>
        <StyledText style={styles.heading}>{lang.writedown}</StyledText>
        <View style={styles.wrapper}>
          <FlatList
            data={data}
            renderItem={(item: any) => (
              <EntryList
                key={item.index}
                index={item.index}
                content={item.item}
                keyExtractor={(_: any, index: number) => index.toString()}
              />
            )}
            numColumns={4}
          />
        </View>
        <View style={styles.button}>
          <View style={styles.textBox}>
            <StyledText style={styles.text}>{lang.youCanRecover}</StyledText>
            <StyledText style={styles.text}>. {lang.recovery}</StyledText>
            <StyledText style={styles.text}>. {lang.wordsPassword}</StyledText>

            <StyledCheckBox
              text={lang.writenDownPhrases}
              isChecked={ischecked}
              onClick={toggleCheck}
              style={styles.check}
              checkTextStyle={styles.checkTextStyle}
            />
          </View>

          <StyledButton
            title={lang.generateWallet}
            onPress={() => navigation.navigate(RouteScreenName.TestPassword)}
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
    justifyContent: 'flex-start',
  },
  button: {
    position: 'absolute',
    bottom: Theme.sizes.size30,
  },
  heading: {
    marginTop: Theme.sizes.size57,
    fontSize: Theme.FontSizes.Large,
  },
  textBox: {
    marginBottom: Theme.sizes.size40,
  },
  text: {
    fontSize: Theme.FontSizes.Small,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
    marginBottom: Theme.sizes.size10,
    marginTop: Theme.sizes.size40,
  },
  checkBox: {
    height: Theme.sizes.size20,
    transform: [{translateY: -Theme.sizes.size4}],
    marginRight: Theme.sizes.size10,
  },
  itemContainer: {
    width: windowWidth / Theme.sizes.size3,
  },
  item: {
    flex: 1,
    marginTop: Theme.sizes.size15,
    flexDirection: 'row',
    fontSize: Theme.FontSizes.Small,
  },
  listWrapper: {
    flexDirection: 'column',
    flex: 1,
  },
  wrapper: {
    marginTop: Theme.sizes.size40,
    flex: 1,
    flexDirection: 'row',
  },
  check: {
    marginBottom: Theme.sizes.size10,
    marginTop: Theme.sizes.size40,
  },
  checkTextStyle: {},
});

export default Phrase;
