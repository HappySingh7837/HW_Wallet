import * as React from 'react';
import {
  StyleSheet,
  ViewProps,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {Theme} from '../../constants/theme';

interface Props extends ViewProps {
  style?: any;
  children?: any;
}

const StyledContainer: React.FC<Props> = ({style, children, ...props}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">
        <View {...props} style={[styles.container, style]}>
          {children}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Colors.Black,
  },
});

export default StyledContainer;
