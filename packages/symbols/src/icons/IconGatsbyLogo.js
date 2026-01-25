function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export const IconGatsbyLogo = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M14 2C7.38125 2 2 7.38125 2 14C2 20.6187 7.38125 26 14 26C20.6187 26 26 20.6187 26 14C26 7.38125 20.6187 2 14 2ZM4.475 14L14 23.525C8.73125 23.525 4.475 19.2687 4.475 14ZM16.1375 23.2812L4.71875 11.8438C5.69375 7.625 9.48125 4.475 14 4.475C17.1125 4.475 19.8687 5.95625 21.5938 8.2625L20.1875 9.6125C18.8188 7.6625 16.5688 6.40625 14 6.40625C10.7 6.40625 7.90625 8.50625 6.85625 11.4312C8.20625 12.6875 16.1375 20.525 16.6437 21.125C19.025 20.2437 20.825 18.2188 21.4062 15.7062H17.3563V13.9438L23.5438 13.9813C23.525 18.5375 20.375 22.325 16.1375 23.2812Z"
})));
IconGatsbyLogo.displayName = 'IconGatsbyLogo';
