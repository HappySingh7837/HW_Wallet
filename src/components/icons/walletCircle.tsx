import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path, Ellipse} from 'react-native-svg';

const WalletCircleDot = () => {
  return (
    <View style={{marginLeft: 12}}>
      <Svg width={21} height={18} viewBox="0 0 21 18" fill="none">
        <Path
          d="M1.023 4.263L16.443.32a1 1 0 011.247.969v8.667a3 3 0 01-2.294 2.916l-11.31 2.736A3 3 0 01.39 12.46l.633-8.197z"
          fill="#252526"
        />
        <Path
          d="M1.023 4.263L16.443.32a1 1 0 011.247.969v8.667a3 3 0 01-2.294 2.916l-11.31 2.736A3 3 0 01.39 12.46l.633-8.197z"
          fill="#252526"
        />
        <Path
          d="M1.023 4.263L16.443.32a1 1 0 011.247.969v8.667a3 3 0 01-2.294 2.916l-11.31 2.736A3 3 0 01.39 12.46l.633-8.197z"
          stroke="#fff"
          strokeWidth={2}
        />
        <Path
          d="M.071 5.79a2 2 0 012-2H17.12a2 2 0 012 2v9.263a2 2 0 01-2 2H2.07a2 2 0 01-2-2V5.789z"
          fill="#252526"
        />
        <Path
          d="M.071 5.79a2 2 0 012-2H17.12a2 2 0 012 2v9.263a2 2 0 01-2 2H2.07a2 2 0 01-2-2V5.789z"
          fill="#252526"
        />
        <Path
          d="M2.071 17.053H17.12a2 2 0 002-2V5.789a2 2 0 00-2-2H2.07a2 2 0 00-2 2v9.264a2 2 0 002 2z"
          stroke="#fff"
          strokeWidth={2}
        />
        <Ellipse
          cx={15.7853}
          cy={13.7369}
          rx={4.28571}
          ry={4.26316}
          fill="#F7931A"
        />
      </Svg>
    </View>
  );
};

export default WalletCircleDot;
