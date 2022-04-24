import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {}

const AddIcon = (props: Props) => {
  return (
    <Svg width={390} height={664} viewBox="0 0 390 664" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M195 295c-5.523 0-10 4.477-10 10v30h-30c-5.523 0-10 4.477-10 10s4.477 10 10 10h30v30c0 5.523 4.477 10 10 10s10-4.477 10-10v-30h30c5.523 0 10-4.477 10-10s-4.477-10-10-10h-30v-30c0-5.523-4.477-10-10-10z"
        fill="#fff"
        fillOpacity={0.96}
      />
    </Svg>
  );
};

export default AddIcon;
