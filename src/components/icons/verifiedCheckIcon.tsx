import * as React from "react"
import Svg, { Path } from "react-native-svg"

const VerifiedCheckIcon=({props}:any) =>{
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8 16c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM8 1.333A6.674 6.674 0 001.333 8 6.674 6.674 0 008 14.667 6.674 6.674 0 0014.667 8 6.674 6.674 0 008 1.333z"
        fill="#74B64A"
      />
      <Path
        d="M7.333 10.667a.664.664 0 01-.37-.112l-2-1.334a.667.667 0 01.74-1.11l1.502 1 2.95-3.539a.666.666 0 111.024.854l-3.333 4a.665.665 0 01-.513.24z"
        fill="#74B64A"
      />
    </Svg>
  )
}

export default VerifiedCheckIcon


//export default VerifiedCheckIcon
