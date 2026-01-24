function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export const IconOvalFill = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  width: props.width || "25.5566",
  height: props.height || "18.9746",
  viewBox: "0 0 25.5566 18.9746",
  fill: props.fill || "'none' || '#000000",
  stroke: props.stroke || "none",
  strokeWidth: props.strokeWidth || "2",
  strokeLinecap: props.strokeLinecap || "round",
  strokeLinejoin: props.strokeLinejoin || "round"
}, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "18.9746",
  opacity: "0",
  width: "25.5566",
  x: "0",
  y: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 9.48242C0 15.0098 5.21484 18.9746 12.5977 18.9746C19.9805 18.9746 25.1953 15.0098 25.1953 9.48242C25.1953 3.94531 19.9805 0 12.5977 0C5.21484 0 0 3.94531 0 9.48242Z",
  fillOpacity: "0.85"
}))));
IconOvalFill.displayName = 'IconOvalFill';
