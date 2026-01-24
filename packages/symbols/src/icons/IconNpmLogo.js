function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export const IconNpmLogo = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M2 9H26V17.5706H14V19H8.66581V17.5706H2V9ZM3.33355 16.1431H6.00065V11.8569H7.33419V16.1431H8.66774V10.4294H3.33355V16.1431ZM9.99935 10.4294V17.5706H12.6665V16.1431H15.3335V10.4294H9.99935ZM12.6665 11.8588H14V14.7137H12.6665V11.8588ZM16.6671 10.4294V16.1431H19.3342V11.8569H20.6677V16.1431H22.0013V11.8569H23.3348V16.1431H24.6684V10.4294H16.6671Z"
})));
IconNpmLogo.displayName = 'IconNpmLogo';
