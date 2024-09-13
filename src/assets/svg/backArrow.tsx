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
            <G filter="url(#filter0_b_45_27)">
                <Path
                    d="M0 18C0 8.059 8.059 0 18 0s18 8.059 18 18-8.059 18-18 18S0 27.941 0 18z"
                    fill="#fff"
                    fillOpacity={0.3}
                />
                <Path
                    d="M21.125 24.25L14.875 18l6.25-6.25"
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
