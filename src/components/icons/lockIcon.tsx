import * as React from 'react';
import Svg, {G, Mask, Path} from 'react-native-svg';
import {Theme} from '../../constants/theme';

const LockIcon = ({color = '#fff'}) => {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      style={{
        transform: [
          {translateY: -Theme.sizes.size6},
          {translateX: -Theme.sizes.size6},
        ],
      }}
      fill="none">
      <Mask
        id={`clip`}
        style={
          {
            // maskType: 'alpha',
          }
        }>
        <Path
          d="M16 22a2 2 0 100-4 2 2 0 000 4zm6-9a2 2 0 012 2v10a2 2 0 01-2 2H10a2 2 0 01-2-2V15a2 2 0 012-2h1v-2a5 5 0 0110 0v2h1zm-6-5a3 3 0 00-3 3v2h6v-2a3 3 0 00-3-3z"
          fill={color}
        />
      </Mask>
      <G mask={`url(#clip)`}>
        <Path fill={color} d="M0 0H32V32H0z" />
      </G>
    </Svg>
  );
};

export default LockIcon;
