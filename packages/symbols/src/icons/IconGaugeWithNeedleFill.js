function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export const IconGaugeWithNeedleFill = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M19.9219 9.96094C19.9219 15.4004 15.4102 19.9219 9.96094 19.9219C4.52148 19.9219 0 15.4004 0 9.96094C0 4.51172 4.51172 0 9.95117 0C15.4004 0 19.9219 4.51172 19.9219 9.96094ZM5.2832 5.79102L9.00391 11.1133C9.67773 12.0801 10.8008 12.2461 11.6113 11.4648C12.4121 10.625 12.2559 9.50195 11.2891 8.83789L5.9668 5.10742C5.45898 4.75586 4.93164 5.29297 5.2832 5.79102Z",
  fillOpacity: "0.85"
}))));
IconGaugeWithNeedleFill.displayName = 'IconGaugeWithNeedleFill';
