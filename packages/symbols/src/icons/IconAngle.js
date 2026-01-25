function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export const IconAngle = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  width: props.width || "22.1875",
  height: props.height || "16.4355",
  viewBox: "0 0 22.1875 16.4355",
  fill: props.fill || "'none' || '#000000",
  stroke: props.stroke || "none",
  strokeWidth: props.strokeWidth || "2",
  strokeLinecap: props.strokeLinecap || "round",
  strokeLinejoin: props.strokeLinejoin || "round"
}, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "16.4355",
  opacity: "0",
  width: "22.1875",
  x: "0",
  y: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 15.6543C0 16.084 0.361328 16.4355 0.78125 16.4355L21.0352 16.4355C21.4648 16.4355 21.8262 16.084 21.8262 15.6543C21.8262 15.2246 21.4648 14.8633 21.0352 14.8633L2.68555 14.8633L16.1426 1.40625C16.4453 1.10352 16.4453 0.595703 16.1426 0.292969C15.8398-0.00976562 15.3418-0.00976562 15.0293 0.292969L0.224609 15.0977C0.0976562 15.2344 0 15.4395 0 15.6543ZM11.3867 15.625L12.959 15.625C12.959 12.2852 11.6016 9.25781 9.41406 7.06055L8.29102 8.16406C10.2051 10.0781 11.3867 12.7148 11.3867 15.625Z",
  fillOpacity: "0.85"
}))));
IconAngle.displayName = 'IconAngle';
