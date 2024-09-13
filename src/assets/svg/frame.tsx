import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.12 1.938a1.406 1.406 0 011.26 0l3.744 1.873c.08.04.172.04.252 0l2.902-1.451a1.406 1.406 0 012.034 1.258v9.364c0 .532-.3 1.02-.777 1.257l-3.656 1.828a1.406 1.406 0 01-1.258 0l-3.745-1.873a.281.281 0 00-.252 0l-2.901 1.451a1.407 1.407 0 01-2.035-1.257V5.024c0-.533.3-1.02.777-1.258L6.12 1.938zm.63 2.565a.563.563 0 01.563.562v6.188a.562.562 0 11-1.125 0V5.065a.563.563 0 01.562-.562zm5.063 2.25a.562.562 0 00-1.126 0v6.187a.563.563 0 001.126 0V6.753z"
        fill="#007AFF"
      />
    </Svg>
  );
}

export default SvgComponent;
