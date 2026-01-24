function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export const IconPill = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  width: props.width || "19.6745",
  height: props.height || "19.3255",
  viewBox: "0 0 19.6745 19.3255",
  fill: props.fill || "'none' || '#000000",
  stroke: props.stroke || "none",
  strokeWidth: props.strokeWidth || "2",
  strokeLinecap: props.strokeLinecap || "round",
  strokeLinejoin: props.strokeLinejoin || "round"
}, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "19.3255",
  opacity: "0",
  width: "19.6745",
  x: "0",
  y: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1.5267 17.7731C3.59701 19.8337 6.4974 19.8532 8.79233 17.5583L17.5716 8.77898C19.8568 6.49383 19.8372 3.59344 17.7767 1.52312C15.7064-0.537422 12.806-0.547188 10.5208 1.73797L1.74154 10.5075C-0.553378 12.8024-0.533846 15.7028 1.5267 17.7731ZM2.56186 16.7477C1.08725 15.2829 1.27279 13.2321 2.86459 11.6208L11.6244 2.86102C13.2064 1.26922 15.2669 1.09344 16.7513 2.55828C18.2259 4.01336 18.0599 6.07391 16.4388 7.68523L7.68881 16.445C6.10678 18.027 4.03647 18.2126 2.56186 16.7477ZM6.26303 7.29461L12.0345 13.0661L13.0794 12.0212L7.29818 6.24969Z",
  fillOpacity: "0.85"
}))));
IconPill.displayName = 'IconPill';
