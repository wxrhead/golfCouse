import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={29}
      height={16}
      viewBox="0 0 29 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.2}
        d="M1 1l6.293 6.293a1 1 0 010 1.414L1 15"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        opacity={0.5}
        d="M11 1l6.293 6.293a1 1 0 010 1.414L11 15"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M21 1l6.293 6.293a1 1 0 010 1.414L21 15"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgComponent
