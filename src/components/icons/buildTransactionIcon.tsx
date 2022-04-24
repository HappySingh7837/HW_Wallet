import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BuildTransactionIcon = ({props}: any) => {
  return (
    <Svg
    width={18}
    height={16}
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 8.8l.04.027 2.242 1.529.021.014.029.02 7.055 4.81v-2.653H18V8.8H0zM18 6.8l-.04-.029-2.242-1.624-.021-.016-.029-.02L8.613 0v2.819H0V6.8h18z"
      fill="#E5E5E5"
    />
  </Svg>
    
  );
};

export default BuildTransactionIcon;
