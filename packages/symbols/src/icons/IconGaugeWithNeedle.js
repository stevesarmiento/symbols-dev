function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export const IconGaugeWithNeedle = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  width: props.width || "20.2832",
  height: props.height || "19.9316",
  viewBox: "0 0 20.2832 19.9316",
  fill: props.fill || "'none' || '#000000",
  stroke: props.stroke || "none",
  strokeWidth: props.strokeWidth || "2",
  strokeLinecap: props.strokeLinecap || "round",
  strokeLinejoin: props.strokeLinejoin || "round"
}, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "19.9316",
  opacity: "0",
  width: "20.2832",
  x: "0",
  y: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.96094 19.9219C15.4102 19.9219 19.9219 15.4004 19.9219 9.96094C19.9219 4.51172 15.4004 0 9.95117 0C4.51172 0 0 4.51172 0 9.96094C0 15.4004 4.52148 19.9219 9.96094 19.9219ZM9.96094 18.2617C5.35156 18.2617 1.66992 14.5703 1.66992 9.96094C1.66992 5.35156 5.3418 1.66016 9.95117 1.66016C14.5605 1.66016 18.2617 5.35156 18.2617 9.96094C18.2617 14.5703 14.5703 18.2617 9.96094 18.2617Z",
  fillOpacity: "0.85"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11.5234 11.3672C12.2949 10.5566 12.1387 9.47266 11.2109 8.82812L6.04492 5.21484C5.55664 4.87305 5.04883 5.39062 5.39062 5.86914L8.99414 11.0352C9.64844 11.9629 10.7324 12.1289 11.5234 11.3672Z",
  fillOpacity: "0.85"
}))));
IconGaugeWithNeedle.displayName = 'IconGaugeWithNeedle';
