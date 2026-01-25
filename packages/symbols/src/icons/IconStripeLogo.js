function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
export const IconStripeLogo = /*#__PURE__*/React.forwardRef((props, ref) => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M12.3748 8.84942C12.3748 7.86382 13.1811 7.48459 14.5167 7.48459C16.4315 7.48459 18.8504 8.06606 20.7653 9.10231V3.1626C18.6741 2.32859 16.608 2 14.5167 2C9.40158 2 6 4.6792 6 9.15296C6 16.1286 15.5747 15.0166 15.5747 18.0244C15.5747 19.1868 14.567 19.5661 13.1559 19.5661C11.0646 19.5661 8.39368 18.7066 6.27709 17.544V23.5595C8.62046 24.5705 10.989 25 13.1559 25C18.3968 25 22 22.3969 22 17.8726C21.9748 10.3408 12.3748 11.6802 12.3748 8.84942Z"
})));
IconStripeLogo.displayName = 'IconStripeLogo';
