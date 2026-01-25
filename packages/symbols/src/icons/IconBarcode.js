function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export const IconBarcode = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  width: props.width || "19.3164",
  height: props.height || "15.0684",
  viewBox: "0 0 19.3164 15.0684",
  fill: props.fill || "'none' || '#000000",
  stroke: props.stroke || "none",
  strokeWidth: props.strokeWidth || "2",
  strokeLinecap: props.strokeLinecap || "round",
  strokeLinejoin: props.strokeLinejoin || "round"
}, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "15.0684",
  opacity: "0",
  width: "19.3164",
  x: "0",
  y: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 15L1.5918 15L1.5918 0L0 0ZM3.13477 15L4.04297 15L4.04297 0L3.13477 0ZM5.56641 15L8.16406 15L8.16406 0L5.56641 0ZM9.11133 15L10.7715 15L10.7715 0L9.11133 0ZM11.7578 15L14.3359 15L14.3359 0L11.7578 0ZM15.127 15L17.1484 15L17.1484 0L15.127 0ZM17.6465 15L18.9551 15L18.9551 0L17.6465 0Z",
  fillOpacity: "0.85"
}))));
IconBarcode.displayName = 'IconBarcode';
