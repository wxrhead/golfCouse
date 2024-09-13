import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect x={0.5} y={0.5} width={35} height={35} rx={17.5} fill="#fff" />
      <Rect x={0.5} y={0.5} width={35} height={35} rx={17.5} stroke="#EDECEC" />
      <Path
        d="M21.125 24.25L14.875 18l6.25-6.25"
        stroke="#1B2620"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
