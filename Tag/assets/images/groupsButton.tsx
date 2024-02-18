import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={57} height={30} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M19.939 16.14c3.775 4.857 4.558 12.692-.376 12.692-7.152 0-2.676-16.457 9.078-16.457 3.646 0 6.549 1.584 8.635 3.77 4.639 4.858 4.589 12.217 1.02 12.688-5.442.717-5.024-7.725-1.02-12.705M1 28.875s.242-16.5 9.821-16.5c1.645 0 3.047.849 3.929 1.678"
    />
    <Path
      fill="#fff"
      d="M11.36 5.598a2.8 2.8 0 1 0 0-5.598 2.8 2.8 0 0 0 0 5.598ZM27.862 5.598a2.8 2.8 0 1 0 0-5.598 2.8 2.8 0 0 0 0 5.598Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M56 28.875s-.163-16.497-9.604-16.497c0 0-2.756-.165-4.834 2.305"
    />
    <Path
      fill="#fff"
      d="M44.361 5.598a2.8 2.8 0 1 0 0-5.598 2.8 2.8 0 0 0 0 5.598Z"
    />
  </Svg>
);
export default SvgComponent;
