import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect x={1} y={1} width={22} height={22} rx={11} fill="#FEDA16" />
      <Rect
        x={1}
        y={1}
        width={22}
        height={22}
        rx={11}
        stroke="#FFEA72"
        strokeWidth={2}
      />
      <Path
        d="M8.869 9.08l2.451-2.103h1.473v8.037l.135 2.01h-2.144l.134-2.01V9.683l-2.076 1.366-.201-.094.228-1.875z"
        fill="#3C453F"
      />
    </Svg>
  );
}

export default SvgComponent;
