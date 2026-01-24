function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export const IconBalloonFill = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  width: props.width || "12.9688",
  height: props.height || "26.709",
  viewBox: "0 0 12.9688 26.709",
  fill: props.fill || "'none' || '#000000",
  stroke: props.stroke || "none",
  strokeWidth: props.strokeWidth || "2",
  strokeLinecap: props.strokeLinecap || "round",
  strokeLinejoin: props.strokeLinejoin || "round"
}, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "26.709",
  opacity: "0",
  width: "12.9688",
  x: "0",
  y: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.29883 14.9609C9.84375 14.9609 12.6074 11.1914 12.6074 6.48438C12.6074 2.7832 10.0293 0 6.29883 0C2.56836 0 0 2.7832 0 6.48438C0 11.1914 2.75391 14.9609 6.29883 14.9609ZM4.93164 14.2871L4.47266 16.0449C4.375 16.4355 4.58008 16.8555 5.07812 16.8555L7.5293 16.8555C8.02734 16.8555 8.24219 16.4355 8.13477 16.0449L7.65625 14.2871ZM6.18164 26.5723C6.5625 26.5723 6.875 26.25 6.875 25.8691C6.875 23.7305 8.81836 23.2324 8.81836 21.0645C8.81836 18.8379 6.94336 18.418 6.96289 16.4746L5.57617 16.4746C5.56641 19.1309 7.44141 19.541 7.44141 21.0645C7.44141 22.6172 5.48828 22.8516 5.48828 25.8691C5.48828 26.25 5.80078 26.5723 6.18164 26.5723Z",
  fillOpacity: "0.85"
}))));
IconBalloonFill.displayName = 'IconBalloonFill';
