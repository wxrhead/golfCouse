import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={10}
      height={15}
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.22.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06L1.28 9.78A.75.75 0 01.22 8.72L3.94 5 .22 1.28a.75.75 0 010-1.06z"
        fill="#8C9590"
      />
    </Svg>
  );
}

export default SvgComponent;
