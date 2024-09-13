import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={18}
            height={21}
            viewBox="0 0 18 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.54 20.352l.07.04.028.015a.76.76 0 00.723 0l.028-.015.071-.04c.391-.232.773-.48 1.144-.742a19.581 19.581 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.828a8.25 8.25 0 10-16.5 0c0 3.847 2.02 6.838 3.963 8.828a19.58 19.58 0 002.682 2.282c.372.262.754.51 1.145.742zM9 11.5a3 3 0 100-6 3 3 0 000 6z"
                fill="#fff"
            />
        </Svg>
    )
}

export default SvgComponent
