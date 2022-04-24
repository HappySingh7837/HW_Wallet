import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ErrorIcon = () => {
  return (
    <Svg width={11} height={11} viewBox="0 0 11 11" fill="none">
      <Path
        d="M8.382 10.038c.39.39 1.003.371 1.392-.019a.97.97 0 000-1.373L6.563 5.434 9.83 2.167a.941.941 0 000-1.337.941.941 0 00-1.336 0L5.226 4.097 2.015.886a.97.97 0 00-1.374 0c-.39.39-.408 1.002-.019 1.392L3.834 5.49.585 8.738c-.371.372-.39.984-.018 1.356.371.37.984.352 1.355-.019L5.17 6.826l3.211 3.212z"
        fill="#fff"
      />
    </Svg>
  );
};

export default ErrorIcon;
