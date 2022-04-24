import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const WalletIcon = ({color = '#fff'}) => {
  return (
    <Svg width={20} height={18} viewBox="0 0 20 18" fill="red">
      <Path
        d="M1.316 12.537l.578-7.483L16.62 1.288v8.667a2 2 0 01-1.53 1.944L3.78 14.636a2 2 0 01-2.463-2.099z"
        fill="#252526"
        stroke={color}
        strokeWidth={2}
      />
      <Path
        d="M1 5.79a1 1 0 011-1h15.048a1 1 0 011 1v9.263a1 1 0 01-1 1H2a1 1 0 01-1-1V5.789z"
        fill={color}
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  );
};

export default WalletIcon;
