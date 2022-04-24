import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HistoryIcon = () => {
  return (
    <Svg width={19} height={16} viewBox="0 0 19 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.357 0a7.715 7.715 0 00-7.715 7.714H.071l3.334 3.335.06.12 3.463-3.455H4.357c0-3.317 2.683-6 6-6s6 2.683 6 6-2.683 6-6 6a5.952 5.952 0 01-4.235-1.765l-1.217 1.217a7.675 7.675 0 005.452 2.263 7.715 7.715 0 000-15.429zM9.5 4.286V8.57l3.643 2.16.66-1.097-3.018-1.791V4.286H9.5z"
        fill="#E5E5E5"
      />
    </Svg>
  );
};

export default HistoryIcon;
