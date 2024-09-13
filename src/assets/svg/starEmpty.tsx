import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.192 1.14c.298-.718 1.317-.718 1.616 0l1.388 3.337 3.602.29c.776.062 1.091 1.03.5 1.536l-2.745 2.352.838 3.515c.18.757-.643 1.355-1.307.95L7 11.236 3.915 13.12c-.664.405-1.487-.193-1.307-.95l.838-3.515L.702 6.303C.11 5.797.425 4.83 1.2 4.767l3.603-.29L6.192 1.14z"
        fill="#EDECEC"
      />
    </Svg>
  );
}

export default SvgComponent;
