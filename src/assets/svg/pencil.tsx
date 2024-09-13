import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18.11 1.89a2.188 2.188 0 00-3.094 0l-.965.965 3.094 3.094.964-.965a2.187 2.187 0 000-3.093zM16.261 6.832L13.168 3.74 3.042 13.865a4.375 4.375 0 00-1.1 1.844l-.666 2.238a.625.625 0 00.777.777l2.238-.666a4.375 4.375 0 001.844-1.1L16.261 6.832z"
        fill="#8C9590"
      />
    </Svg>
  );
}

export default SvgComponent;
