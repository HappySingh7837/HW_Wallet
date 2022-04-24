import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {images} from '../../assets/images';
import {Theme} from '../../constants/theme';

interface Props {
  isActive?: boolean;
}
const TreeNode = ({}: Props) => {
  return <Image source={images.treenode} style={styles.image} />;
};
const styles = StyleSheet.create({
  image: {
    height: 11,
    width: 7,
    tintColor: Theme.Colors.White,
  },
});

export default TreeNode;
