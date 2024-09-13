import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={16}
      height={18}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.655 15.763l.052.03.022.012a.57.57 0 00.542 0l.02-.011.054-.03c.293-.175.58-.36.858-.557a14.681 14.681 0 002.012-1.712c1.458-1.492 2.973-3.735 2.973-6.62a6.187 6.187 0 10-12.376 0c0 2.884 1.516 5.128 2.973 6.62a14.68 14.68 0 002.011 1.712c.279.197.565.382.859.556zM7 9.125a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
        fill="#FF6B29"
      />
    </Svg>
  );
}

export default SvgComponent;
