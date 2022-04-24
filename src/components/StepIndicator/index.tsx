import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {Theme} from '../../constants/theme';

const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: Theme.Colors.Primary,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: Theme.Colors.Primary,
  //stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: Theme.Colors.Primary,
  separatorUnFinishedColor: Theme.Colors.Primary,
  stepIndicatorFinishedColor: Theme.Colors.Primary,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  //stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: Theme.Colors.Primary,
  stepIndicatorLabelFinishedColor: Theme.Colors.White,
  stepIndicatorLabelUnFinishedColor: Theme.Colors.Primary,
  //labelColor: "#999999",
  //labelSize: 13,
  currentStepLabelColor: Theme.Colors.Primary,
};
const StepIndicatorProgressBar = () => {
  return (
    <View style={styles.container}>
      <StepIndicator
        stepCount={4}
        labels={[]}
        currentPosition={2}
        customStyles={customStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginLeft: -Theme.sizes.size30,
    marginTop: Theme.Dimensions.Default,
    marginBottom: Theme.Dimensions.Default,
  },
});
export default StepIndicatorProgressBar;
