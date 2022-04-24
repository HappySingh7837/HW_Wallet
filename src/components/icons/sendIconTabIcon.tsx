import * as React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

const SendIcon = ({color}: any) => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 30 28"
      fill="none"
      style={{transform: [{translateX: 2}]}}>
      <Circle
        cx={9.92284}
        cy={17.2774}
        r={8.92284}
        stroke={color}
        strokeWidth={2}
      />
      <G clipPath="url(#clip0_1_233)">
        <Path
          d="M21.164 15.242l-1.993-2.425-6.545 5.38-2.99-3.636 6.546-5.38-1.993-2.426 10.033-1.137-3.058 9.624z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_233">
          <Path
            fill={color}
            transform="scale(-1 1) rotate(-50.58 -4.308 35.69)"
            d="M0 0H12.5549V19.3667H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SendIcon;
