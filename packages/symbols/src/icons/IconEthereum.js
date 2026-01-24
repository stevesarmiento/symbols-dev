function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export const IconEthereum = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M13.4447 20.4661L6 15.7562L13.4401 27L20.8886 15.7562L13.4401 20.4661H13.4447ZM13.5553 1L6.11368 14.2409L13.5553 18.9589L21 14.2458L13.5553 1Z"
})));
IconEthereum.displayName = 'IconEthereum';
