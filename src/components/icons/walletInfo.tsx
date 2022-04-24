import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const WalletInfoIcon = ({}: any) => {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
      <Path
        d="M17 9A8 8 0 111 9a8 8 0 0116 0zM9 13V9"
        stroke="#E5E5E5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={9} cy={6} r={1} fill="#E5E5E5" />
    </Svg>
  );
};

export default WalletInfoIcon;
