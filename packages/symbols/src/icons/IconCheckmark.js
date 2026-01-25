function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export const IconCheckmark = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
  ref: ref,
  width: props.width || "17.1875",
  height: props.height || "17.2363",
  viewBox: "0 0 17.1875 17.2363",
  fill: props.fill || "'none' || '#000000",
  stroke: props.stroke || "none",
  strokeWidth: props.strokeWidth || "2",
  strokeLinecap: props.strokeLinecap || "round",
  strokeLinejoin: props.strokeLinejoin || "round"
}, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
  height: "17.2363",
  opacity: "0",
  width: "17.1875",
  x: "0",
  y: "0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.36719 17.2363C6.78711 17.2363 7.11914 17.0508 7.35352 16.6895L16.582 2.1582C16.7578 1.875 16.8262 1.66016 16.8262 1.43555C16.8262 0.898438 16.4746 0.546875 15.9375 0.546875C15.5469 0.546875 15.332 0.673828 15.0977 1.04492L6.32812 15.0195L1.77734 9.0625C1.5332 8.7207 1.28906 8.58398 0.9375 8.58398C0.380859 8.58398 0 8.96484 0 9.50195C0 9.72656 0.0976562 9.98047 0.283203 10.2148L5.35156 16.6699C5.64453 17.0508 5.94727 17.2363 6.36719 17.2363Z",
  fillOpacity: "0.85"
}))));
IconCheckmark.displayName = 'IconCheckmark';
