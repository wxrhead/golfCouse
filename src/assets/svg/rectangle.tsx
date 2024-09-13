import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={1}
      height={23}
      viewBox="0 0 1 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={1} height={23} rx={0.5} fill="#EDECEC" />
    </Svg>
  );
}

export default SvgComponent;
