import * as React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

const ReceiveIcon = () => {
  return (
    <Svg width={21} height={19} viewBox="0 0 21 19" fill="none">
      <Circle
        cx={12.0711}
        cy={11}
        r={7.25}
        stroke="#E5E5E5"
        strokeWidth={1.5}
      />
      <G clipPath="url(#clip0_1_132)">
        <Path
          d="M12.084 5.426l-1.601 1.947-5.258-4.321-2.402 2.922 5.259 4.321-1.601 1.948 8.06.913-2.457-7.73z"
          fill="#E5E5E5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_132">
          <Path
            fill="#fff"
            transform="rotate(129.415 6.913 9.308)"
            d="M0 0H10.0851V15.5568H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ReceiveIcon;
