function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export const IconZoomLogo = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  width: props.width || "28",
  height: props.height || "28",
  viewBox: "0 0 28 28",
  fill: props.fill || "'none' || '#000000",
  stroke: props.stroke || "none",
  strokeWidth: props.strokeWidth || "2",
  strokeLinecap: props.strokeLinecap || "round",
  strokeLinejoin: props.strokeLinejoin || "round"
}, props), /*#__PURE__*/React.createElement("path", {
  d: "M25 26H6.33333C5.11111 26 3.92593 25.3088 3.37037 24.1952C2.7037 22.8896 2.96296 21.3152 3.96296 20.2784L16.963 6.8H7.62963C5.07407 6.8 3 4.6496 3 2H20.1852C21.4074 2 22.5926 2.6912 23.1481 3.8048C23.8148 5.1104 23.5556 6.6848 22.5556 7.7216L9.59259 21.2384H20.3704C22.9259 21.2384 25 23.3504 25 26Z"
})));
IconZoomLogo.displayName = 'IconZoomLogo';
