import * as React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Svg, {Path} from 'react-native-svg';
import {Theme} from '../../constants/theme';

const BackIcon = (props: any) => {
  return (
    <TouchableWithoutFeedback style={styles.iconContainer} {...props}>
      <Svg
        width={11}
        height={10}
        style={styles.icon}
        viewBox="0 0 11 10"
        fill="none">
        <Path
          d="M.938 6.063V4.09L10.293.242v2.149L3.066 4.988v.176l7.227 2.598V9.91L.938 6.062z"
          fill="#fff"
        />
      </Svg>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: Theme.sizes.size50,
    width: Theme.sizes.size50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    transform: [{translateX: -Theme.sizes.size20}],
  },
});

export default BackIcon;
