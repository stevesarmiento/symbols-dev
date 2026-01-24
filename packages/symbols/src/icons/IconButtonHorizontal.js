function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export const IconButtonHorizontal = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  width: props.width || "23.3887",
  height: props.height || "17.5488",
  viewBox: "0 0 23.3887 17.5488",
  fill: props.fill || "'none' || '#000000",
  stroke: props.stroke || "none",
  strokeWidth: props.strokeWidth || "2",
  strokeLinecap: props.strokeLinecap || "round",
  strokeLinejoin: props.strokeLinejoin || "round"
}, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "17.5488",
  opacity: "0",
  width: "23.3887",
  x: "0",
  y: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.69531 17.5293L15.332 17.5293C20.9961 17.5293 23.0273 15.4297 23.0273 10.2051L23.0273 7.33398C23.0273 2.10938 20.9961 0 15.332 0L7.69531 0C2.03125 0 0 2.10938 0 7.33398L0 10.2051C0 15.4297 2.03125 17.5293 7.69531 17.5293ZM7.69531 15.957C3.08594 15.957 1.57227 14.4629 1.57227 10.2051L1.57227 7.33398C1.57227 3.07617 3.08594 1.57227 7.69531 1.57227L15.332 1.57227C19.9414 1.57227 21.4551 3.07617 21.4551 7.33398L21.4551 10.2051C21.4551 14.4629 19.9414 15.957 15.332 15.957Z",
  fillOpacity: "0.85"
}))));
IconButtonHorizontal.displayName = 'IconButtonHorizontal';
