import * as React from 'react';
import Svg, {Path, G, Defs, ClipPath} from 'react-native-svg';

const ReceiveTabIcon = ({color}: any) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 26 24" fill="none">
      <Path
        d="M25 13.779c0 4.95-4.16 9.021-9.364 9.021-5.204 0-9.365-4.07-9.365-9.021 0-4.95 4.16-9.021 9.364-9.021 5.204 0 9.365 4.07 9.365 9.021z"
        stroke={color}
        strokeWidth={2}
      />
      <G clipPath="url(#clip0_1_243)">
        <Path
          d="M15.652 6.796l-2.074 2.44-6.812-5.413-3.111 3.66 6.812 5.413-2.074 2.44 10.442 1.143-3.183-9.683z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_243">
          <Path
            fill={color}
            transform="matrix(-.64766 .76193 -.78292 -.62212 23.956 12.373)"
            d="M0 0H12.8092V19.8883H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ReceiveTabIcon;
