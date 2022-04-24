import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SmallAddIcon = () => {
  return (
    <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 0a4 4 0 00-4 4v12H4a4 4 0 100 8h12v12a4 4 0 108 0V24h12a4 4 0 000-8H24V4a4 4 0 00-4-4z"
        fill="#fff"
        fillOpacity={0.93}
      />
    </Svg>
  );
};

export default SmallAddIcon;
