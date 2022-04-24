import * as React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

const SendIcon = () => {
  return (
    <Svg width={24} height={22} viewBox="0 0 24 22" fill="none">
      <Circle
        cx={8.07104}
        cy={13.9294}
        r={7.25}
        stroke="#E5E5E5"
        strokeWidth={1.5}
      />
      <G clipPath="url(#clip0_1_156)">
        <Path
          d="M17.134 12.288l-1.607-1.954-5.277 4.337-2.41-2.932 5.277-4.338-1.607-1.955 8.09-.916-2.466 7.758z"
          fill="#E5E5E5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_156">
          <Path
            fill="#fff"
            transform="scale(-1 1) rotate(-50.58 -3.509 28.849)"
            d="M0 0H10.1221V15.6139H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SendIcon;
