import React from 'react';
import Svg, {Rect} from 'react-native-svg';

interface Props {}

const CheckIcon = (props: Props) => {
  return (
    <Svg width={16} height={13} viewBox="0 0 16 13" fill="none" {...props}>
      <Rect
        x={12.3525}
        width={3.84325}
        height={14.1451}
        rx={1.92163}
        transform="rotate(45 12.352 0)"
        fill="#fff"
      />
      <Rect
        width={3.03163}
        height={6.78098}
        rx={1.51581}
        transform="rotate(-45 9.2 3.81)"
        fill="#fff"
      />
    </Svg>
  );
};

export default CheckIcon;
