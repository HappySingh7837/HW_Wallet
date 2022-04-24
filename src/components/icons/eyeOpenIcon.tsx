import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const EyeOpen = () => {
  return (
    <Svg width={25} height={39} viewBox="0 0 25 39" fill="none">
      <Path
        d="M17.308 33.173c0 2.938-2.19 5.25-4.808 5.25s-4.808-2.312-4.808-5.25 2.19-5.25 4.808-5.25 4.808 2.312 4.808 5.25z"
        stroke="#fff"
      />
      <Path
        d="M.533 31.785a.5.5 0 00.934.36l-.934-.36zm.934.36l.143-.373-.934-.359-.143.372.934.36zm.143-.373c3.876-10.073 18.258-9.691 21.595.574l.95-.31C20.529 20.877 4.892 20.462.677 31.414l.934.36z"
        fill="#fff"
      />
    </Svg>
  );
};

export default EyeOpen;
