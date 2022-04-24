import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Theme} from '../../constants/theme';
import StyledText from '../StyleText';

interface Props {
  icon?: any;
  heading: string;
  children?: any;
  showChild?: boolean;
  onPress?: () => void;
  headingStyle?: any;
  preHeadingIcon?: React.ReactElement;
}

const TreeView = ({
  icon,
  heading,
  children,
  showChild = false,
  headingStyle,
  preHeadingIcon,
  ...props
}: Props) => {
  return (
    <TouchableOpacity {...props} activeOpacity={1}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          {icon && icon}
          {preHeadingIcon}
          <StyledText style={[{marginLeft: Theme.sizes.size15}, headingStyle]}>
            {heading}
          </StyledText>
        </View>
        {showChild && children && <View>{children}</View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  subContainer: {
    flexDirection: 'row',
    marginBottom: Theme.sizes.size10,
  },
});
export default TreeView;
