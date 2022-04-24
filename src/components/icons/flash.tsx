import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const FlashIcon = ({props}: any) => {
  return (
    <Svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M14.25 10H9.644l2.719-8.125L1.75 10h4.606l-2.718 8.125L14.25 10z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FlashIcon;
