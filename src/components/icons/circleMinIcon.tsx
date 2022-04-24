import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CircleMinIcon = () => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
      <Path fill="#252526" stroke="#fff" d="M4.5 0.5H15.5V11.5H4.5z" />
      <Path fill="#252526" stroke="#fff" d="M2.5 2.5H13.5V13.5H2.5z" />
      <Path fill="#252526" stroke="#fff" d="M0.5 4.5H11.5V15.5H0.5z" />
      <Path fill="#5D98CC" d="M3 9H9V11H3z" />
    </Svg>
  );
};

export default CircleMinIcon;
