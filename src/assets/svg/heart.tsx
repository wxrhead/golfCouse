import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_b_45_32)">
        <Path
          d="M0 18C0 8.059 8.059 0 18 0s18 8.059 18 18-8.059 18-18 18S0 27.941 0 18z"
          fill="#fff"
          fillOpacity={0.3}
        />
        <Path
          d="M25.5 14.875c0-2.071-1.749-3.75-3.906-3.75-1.613 0-2.998.939-3.594 2.278-.596-1.34-1.98-2.278-3.594-2.278-2.157 0-3.906 1.679-3.906 3.75 0 6.017 7.5 10 7.5 10s7.5-3.983 7.5-10z"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export default SvgComponent
