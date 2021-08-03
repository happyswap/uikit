import React, { useRef, useEffect, isValidElement, cloneElement, Children, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css as css$4, useTheme, createGlobalStyle } from 'styled-components';
import { space, typography, variant as variant$1, layout, background, border, position, flexbox } from 'styled-system';
import get from 'lodash/get';
import { useCountUp } from 'react-countup';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '@fontsource/roboto-condensed';
import '@fontsource/roboto';
import '@fontsource/comfortaa';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate = keyframes(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css$4(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$M, templateObject_2$g, templateObject_3$9;

var Icon$1c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor$1 = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), getColor$1, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, space, typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$L;

var FormattedText = function (_a) {
    var value = _a.value, decimals = _a.decimals, _b = _a.prefix, prefix = _b === void 0 ? '' : _b;
    var _c = useCountUp({
        start: 0,
        end: value,
        duration: 1,
        separator: ',',
        decimals: 
        // eslint-disable-next-line no-nested-ternary
        decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
    }), countUp = _c.countUp, update = _c.update;
    var updateValue = useRef(update);
    useEffect(function () {
        updateValue.current(value);
    }, [value, updateValue]);
    return (React.createElement("span", null,
        prefix,
        countUp));
};

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$4 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$1 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var _a$2, _b;
var scaleVariants = (_a$2 = {},
    _a$2[scales$4.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a$2[scales$4.SM] = {
        height: "32px",
        padding: "0 16px",
    },
    _a$2[scales$4.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$2);
var styleVariants = (_b = {},
    _b[variants$1.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b[variants$1.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b[variants$1.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b[variants$1.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "primary",
    },
    _b[variants$1.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b[variants$1.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b[variants$1.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b);

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled.button(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, variant$1({
    prop: "scale",
    variants: scaleVariants,
}), variant$1({
    variants: styleVariants,
}), layout, space);
var templateObject_1$K;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("pancake-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("pancake-button--disabled");
    }
    return (React.createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React.createElement(React.Fragment, null,
            isValidElement(startIcon) &&
                cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            isValidElement(endIcon) &&
                cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$1.PRIMARY,
    scale: scales$4.MD,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$J;

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$10 = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React.createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$O = function (props) {
    return (React.createElement("img", { width: "220px", height: "50px", src: "/images/mobile-logo.png" }));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M222.46,134.29s-11-48.07-55.48-65.87S60.16,41.12,18.62,72,33.46,209.66,70.84,214.4,167,197.79,212.08,240.51,228.32,151.63,222.46,134.29Z", transform: "translate(-4 -51.89)", fill: "#9c9b9b" }),
            React.createElement("path", { d: "M189,127.17C174.2,91.56,106.45,73.76,66.69,89.78s8.75,83.08,21.81,92.58c12.71,9.25,57.11,19,68.39,15.43S192.86,136.59,189,127.17Z", transform: "translate(-4 -51.89)", fill: "#706f6e" })),
        React.createElement("g", null,
            React.createElement("path", { d: "M293.54,134.29s11-48.07,55.48-65.87S455.84,41.12,497.38,72,482.54,209.66,445.16,214.4,349,197.79,303.92,240.51,287.68,151.63,293.54,134.29Z", transform: "translate(-4 -51.89)", fill: "#a7a5a5" }),
            React.createElement("path", { d: "M327,127.17c14.76-35.61,82.51-53.41,122.27-37.39s-8.75,83.08-21.81,92.58c-12.71,9.25-57.12,19-68.39,15.43S323.14,136.59,327,127.17Z", transform: "translate(-4 -51.89)", fill: "#868686" })),
        React.createElement("g", null,
            React.createElement("path", { d: "M259.41,482.28c109.57,0,242.08-80.54,214.87-192.9C465,251.11,457.8,207,457.8,207A139.36,139.36,0,0,0,318.45,67.65s-37.52,5.5-59.58,5.5-59.58-5.5-59.58-5.5A139.36,139.36,0,0,0,59.94,207s-7.21,44.1-16.48,82.37c-27.22,112.36,105.3,192.9,214.87,192.9Z", transform: "translate(-4 -51.89)", fill: "#f2f2f2" }),
            React.createElement("path", { d: "M258.73,73.15c-22.07,0-59.44-5.5-59.44-5.5A139.36,139.36,0,0,0,59.94,207s-7.21,44.1-16.48,82.37c-27.22,112.36,105.3,192.9,214.87,192.9h.4Z", transform: "translate(-4 -51.89)", fill: "#fff" })),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M148.37,279.69c-5.75,1.59-13.51-3.11-15.1-8.86s1.74-13.31,7.7-13.6c7.9-.4,13.34,3.42,14.93,9.17A10.8,10.8,0,0,1,148.37,279.69Zm.1-17.76a3.34,3.34,0,1,0,3.11,3.34A3.24,3.24,0,0,0,148.47,261.93Z", transform: "translate(-4 -51.89)", fill: "#585857" }),
                React.createElement("path", { d: "M356.34,266.4c1.59-5.75,7-9.57,14.93-9.17,6,.29,9.28,7.86,7.7,13.6s-9.35,10.45-15.1,8.86A10.8,10.8,0,0,1,356.34,266.4Zm13.87-1.13a3.12,3.12,0,1,0,3.11-3.34A3.22,3.22,0,0,0,370.21,265.27Z", transform: "translate(-4 -51.89)", fill: "#585857" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M306.69,402.75c0-30.05-48-4.59-48-23.52,0,18.93-48-6.53-48,23.52s21.47,47,48,47S306.69,432.8,306.69,402.75Z", transform: "translate(-4 -51.89)", fill: "#bdbcbc" }),
                React.createElement("path", { d: "M306,397.28c-5.74-21.28-47.3-.43-47.3-18,0,17.45-40.76-2.83-47.12,17.45-.54,1.72,16,15.08,47.23,15.08S306.46,398.86,306,397.28Z", transform: "translate(-4 -51.89)", fill: "#cdcccc" }),
                React.createElement("path", { d: "M258.75,379.47c0-.08,0-.15,0-.24,0,18.93-48-6.53-48,23.52s21.47,47,48,47h0Z", transform: "translate(-4 -51.89)", fill: "#b3b3b3" }),
                React.createElement("path", { d: "M258.75,379.49c0-.09,0-.17,0-.26,0,17.45-40.76-2.83-47.12,17.45-.54,1.72,16,15.05,47.14,15.08Z", transform: "translate(-4 -51.89)", fill: "#c3c2c2" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M258.84,235.15a53.48,53.48,0,0,1,22.07,4.75c25.79,11.62,38.15,43.21,30.1,71.78l-.22.8a51.8,51.8,0,0,0-1.41,21.42h0a42.25,42.25,0,0,1-1.36,19c-6.9,21.14-25.75,36-47.55,36h-3c-21.8,0-40.65-14.84-47.55-36a42.39,42.39,0,0,1-1.35-19h0a52,52,0,0,0-1.41-21.42l-1.38-4.91c-3.24-11.5-3.52-23.9.17-35.25,7.11-21.82,24.41-37.17,48-37.17Z", transform: "translate(-4 -51.89)", fill: "#4d4d4c" }),
                React.createElement("path", { d: "M258.73,235.15H254c-23.59,0-40.89,15.35-48,37.17-3.69,11.35-3.41,23.75-.17,35.25l1.38,4.91a52,52,0,0,1,1.41,21.42,42.39,42.39,0,0,0,1.35,19c6.9,21.14,25.75,36,47.55,36h1.26Z", transform: "translate(-4 -51.89)", fill: "#585857" })))));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React.createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React.createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React.createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React.createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React.createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React.createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React.createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React.createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React.createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React.createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React.createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React.createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React.createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$K = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React.createElement("g", { mask: "url(#A)" },
            React.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { d: "M48,55.29a28.44,28.44,0,0,1-39.78-.7l-.79-.83A28.43,28.43,0,0,1,8.88,14C19.3,4.14,56.83,1.43,63.07,1.05L64,1s0,.32-.1.89C63.13,8.09,58.37,45.42,48,55.29Z", transform: "translate(0 -1)", fill: "#36b397" }),
        React.createElement("path", { d: "M63.84,1.91,2.14,60.31l-.79-.84L63.05,1.08,64,1S63.92,1.32,63.84,1.91Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M38.31,23.87c-.57,1.31-1.17,2.33-1.34,2.26a5.63,5.63,0,0,1,.74-2.52L43.18,10.9c.57-1.31,1.17-2.33,1.33-2.26s-.16,1.2-.73,2.52Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M29.63,32.08c-.57,1.31-1.16,2.33-1.33,2.25A5.61,5.61,0,0,1,29,31.82l8.37-19.44c.56-1.31,1.17-2.33,1.33-2.26s-.16,1.21-.73,2.52Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M21,40.29c-.56,1.31-1.17,2.33-1.33,2.26A5.51,5.51,0,0,1,20.36,40L32,13.08c.57-1.31,1.17-2.34,1.33-2.26s-.16,1.21-.73,2.52Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M12.29,48.5c-.57,1.31-1.17,2.33-1.33,2.26s.16-1.21.73-2.52L25.33,16.57c.57-1.31,1.17-2.33,1.33-2.26s-.16,1.21-.73,2.52Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M39.72,25.36c-1.35.5-2.39,1-2.33,1.2S38.6,26.46,40,26l13-4.77c1.34-.49,2.39-1,2.32-1.2s-1.21.1-2.55.59Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M31.05,33.57c-1.35.49-2.39,1-2.34,1.21a5.78,5.78,0,0,0,2.56-.6l19.87-7.29c1.34-.49,2.39-1,2.33-1.21a5.62,5.62,0,0,0-2.56.6Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M22.37,41.78C21,42.27,20,42.82,20,43s1.22-.1,2.56-.59L50.15,32.28c1.33-.5,2.39-1,2.33-1.21a5.67,5.67,0,0,0-2.56.59Z", transform: "translate(0 -1)", fill: "#125f4f" }),
        React.createElement("path", { d: "M13.71,50c-1.35.49-2.4,1-2.34,1.21a5.59,5.59,0,0,0,2.55-.6L46.29,38.71c1.34-.49,2.39-1,2.33-1.2a5.64,5.64,0,0,0-2.56.6Z", transform: "translate(0 -1)", fill: "#125f4f" })));
};

var Icon$H = function (props) {
    return (React.createElement("img", { width: "24px", height: "24px", src: "/images/price-token.png" }));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("g", null,
            React.createElement("g", null,
                React.createElement("path", { d: "M3.64,15.33a1.67,1.67,0,0,1-1.83-1.07c-.19-.7.21-1.62.94-1.66a1.66,1.66,0,0,1,1.81,1.12A1.31,1.31,0,0,1,3.64,15.33Zm0-2.15a.39.39,0,0,0-.38.4.4.4,0,0,0,.38.41A.4.4,0,0,0,4,13.58.39.39,0,0,0,3.66,13.18Z", fill: "#585857" }),
                React.createElement("path", { d: "M28.89,13.72a1.66,1.66,0,0,1,1.82-1.12c.72,0,1.12,1,.93,1.66a1.66,1.66,0,0,1-1.83,1.07A1.31,1.31,0,0,1,28.89,13.72Zm1.69-.14a.38.38,0,1,0,.75,0,.38.38,0,1,0-.75,0Z", fill: "#585857" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M22.86,30.27c0-3.65-5.82-.56-5.82-2.85,0,2.29-5.82-.8-5.82,2.85A5.47,5.47,0,0,0,17,36,5.47,5.47,0,0,0,22.86,30.27Z", fill: "#bdbcbc" }),
                React.createElement("path", { d: "M22.79,29.61C22.09,27,17,29.56,17,27.42c0,2.12-4.95-.35-5.72,2.12-.06.2,1.94,1.83,5.74,1.83S22.84,29.8,22.79,29.61Z", fill: "#cdcccc" }),
                React.createElement("path", { d: "M17,27.45v0c0,2.29-5.82-.8-5.82,2.85A5.47,5.47,0,0,0,17,36h0Z", fill: "#b3b3b3" }),
                React.createElement("path", { d: "M17,27.45v0c0,2.12-4.95-.35-5.72,2.12-.06.2,1.94,1.82,5.72,1.83Z", fill: "#c3c2c2" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M17.06,9.93a6.54,6.54,0,0,1,2.68.57c3.13,1.41,4.63,5.25,3.65,8.72l0,.09a6.52,6.52,0,0,0-.17,2.6h0A5.13,5.13,0,0,1,23,24.22a6.16,6.16,0,0,1-5.78,4.37h-.36a6.14,6.14,0,0,1-5.77-4.37A5.14,5.14,0,0,1,11,21.91h0a6.18,6.18,0,0,0-.17-2.6l-.17-.59a7.51,7.51,0,0,1,0-4.28,6.09,6.09,0,0,1,5.83-4.51Z", fill: "#4d4d4c" }),
                React.createElement("path", { d: "M17,9.93h-.58a6.09,6.09,0,0,0-5.83,4.51,7.51,7.51,0,0,0,0,4.28l.17.59a6.18,6.18,0,0,1,.17,2.6,5.14,5.14,0,0,0,.17,2.31,6.14,6.14,0,0,0,5.77,4.37H17Z", fill: "#585857" })))));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React.createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React.createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React.createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Box = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$I;

var Flex = styled(Box)(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
var templateObject_1$H;

var variants = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.INFO : _b;
    switch (variant) {
        case variants.DANGER:
            return theme.colors.failure;
        case variants.WARNING:
            return theme.colors.warning;
        case variants.SUCCESS:
            return theme.colors.success;
        case variants.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants.INFO; }
    switch (variant) {
        case variants.DANGER:
            return Icon$1a;
        case variants.WARNING:
            return Icon$1b;
        case variants.SUCCESS:
            return Icon$1c;
        case variants.INFO:
        default:
            return Icon$19;
    }
};
var IconLabel = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$U, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$G, templateObject_2$f, templateObject_3$8, templateObject_4$4;

var Separator = styled.div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$W, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$F, templateObject_2$e;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$1.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$E;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$4.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$1.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$1.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return (React.createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary", colorKey: variant === variants$1.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React.createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$D;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow$1 = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$C;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$B;

var CardHeader = styled.div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$A;

var CardFooter = styled.div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$z;

var StyledCardRibbon = styled.div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor },
        React.createElement("div", { title: text }, text)));
};
var templateObject_1$y;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var getScale$2 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$3.SM:
            return "24px";
        case scales$3.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$2, getScale$2, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$3.MD,
};
var templateObject_1$x;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$3 = styled.div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container$3, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$w, templateObject_2$d;

var bunnyFall = keyframes(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled.div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArrays(Array(count)).map(function (_, index) { return (React.createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React.createElement(Icon$O, { width: size, height: size }))); });
    return React.createElement("div", null, bunnies);
};
var templateObject_1$v, templateObject_2$c;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$1;
var style = (_a$1 = {},
    _a$1[sizes.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$1[sizes.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$1[sizes.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$1[sizes.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$1);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$u;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$1 = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;  \n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;  \n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$t;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper$1, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper$1, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$s, templateObject_2$b;

var scales$2 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$2.MD : _b;
    switch (scale) {
        case scales$2.SM:
            return "32px";
        case scales$2.LG:
            return "48px";
        case scales$2.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled.input(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$2.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$r;

var GridLayout$1 = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$q;

var GridLayout = styled(GridLayout$1)(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$p;

var scales$1 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$1.SM:
            return "24px";
        case scales$1.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$1.SM:
            return "12px";
        case scales$1.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$1.MD,
    m: 0,
};
var templateObject_1$o;

var getColor = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor(variant, theme) : "#ffffff";
};
var StyledTag = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink$1 = styled(Text)(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$m;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$J, { color: "primary", ml: "4px" })));
};

var Bar = styled.div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$l, templateObject_2$a;

var ProgressBunnyWrapper = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$k;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React.createElement(StyledProgress, null,
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$D, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var Icon$v = function (props) {
    return (React.createElement("img", { src: "/images/pageloader.png" }));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("path", { d: "M103,31.17V31c0-11.63-8.41-22.27-21-22.27-10,0-15.87,7.22-17.86,14h0c-2-6.76-7.81-14-17.86-14-12.64,0-21,10.64-21,22.27v.18c-.07,2.53,0,28.27,38.9,49.26h0C103,59.44,103.06,33.7,103,31.17Z", transform: "translate(-25.17 -8.72)", fill: "#d56799" })));
};

var float = keyframes(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$2 = styled.div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(Icon$u)(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 40px;\n  animation: ", " 3s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 40px;\n  animation: ", " 3s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var FloatingPanIcon = styled(Icon$v)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  position: absolute;\n  top: 40px;\n"], ["\n  position: absolute;\n  top: 40px;\n"])));
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$2, null,
        React.createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" }),
        React.createElement(FloatingPanIcon, { width: size + "px" })));
};
var templateObject_1$j, templateObject_2$9, templateObject_3$7, templateObject_4$3;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$i, templateObject_2$8, templateObject_3$6, templateObject_4$2, templateObject_5$1;

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled.input(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$h, templateObject_2$7, templateObject_3$5;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked, scale: scale },
        React.createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React.createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales.MD,
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$3 = "\nhtml {\n  font-family : sans-serif;\n  line-height : 1.15;\n  -webkit-text-size-adjust : 100%;\n      -ms-text-size-adjust : 100%;\n  -ms-overflow-style : scrollbar;\n  -webkit-tap-highlight-color : transparent;\n}\n\n@-ms-viewport {\n  width : device-width;\n}\n\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display : block;\n}\n\n[tabindex='-1']:focus {\n  outline : 0 !important;\n}\n\nhr {\n  -webkit-box-sizing : content-box;\n     -moz-box-sizing : content-box;\n          box-sizing : content-box;\n  height : 0;\n  overflow : visible;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  margin-top : 0;\n  margin-bottom : 0.5rem;\n}\n\np {\n  margin-top : 0;\n  margin-bottom : 1.5rem;\n}\n\nabbr[title], abbr[data-original-title] {\n          text-decoration : underline;\n  -webkit-text-decoration : underline dotted;\n     -moz-text-decoration : underline dotted;\n          text-decoration : underline dotted;\n  cursor : help;\n  border-bottom : 0;\n}\n\naddress {\n  margin-bottom : 1rem;\n  font-style : normal;\n  line-height : inherit;\n}\n\nol, ul, dl {\n  margin-top : 0;\n  margin-bottom : 1rem;\n}\n\nol ol, ul ul, ol ul, ul ol {\n  margin-bottom : 0;\n}\n\ndt {\n  font-weight : 700;\n}\n\ndd {\n  margin-bottom : 0.5rem;\n  margin-left : 0;\n}\n\nblockquote {\n  margin : 0 0 1rem;\n}\n\ndfn {\n  font-style : italic;\n}\n\nb, strong {\n  font-weight : bolder;\n}\n\nsmall {\n  font-size : 80%;\n}\n\nsub, sup {\n  position : relative;\n  font-size : 75%;\n  line-height : 0;\n  vertical-align : baseline;\n}\n\nsub {\n  bottom : -0.25em;\n}\n\nsup {\n  top : -0.5em;\n}\n\na {\n\n  text-decoration : none;\n  background-color : transparent;\n  -webkit-text-decoration-skip : objects;\n}\na:hover {\n\n  text-decoration : underline;\n}\n\na:not([href]):not([tabindex]) {\n  color : inherit;\n  text-decoration : none;\n}\na:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n  color : inherit;\n  text-decoration : none;\n}\na:not([href]):not([tabindex]):focus {\n  outline : 0;\n}\n\npre, code, kbd, samp {\n  font-family : monospace, monospace;\n  font-size : 1em;\n}\n\npre {\n  margin-top : 0;\n  margin-bottom : 1rem;\n  overflow : auto;\n  -ms-overflow-style : scrollbar;\n}\n\nfigure {\n  margin : 0 0 1rem;\n}\n\nimg {\n  vertical-align : middle;\n  border-style : none;\n}\n\nsvg:not(:root) {\n  overflow : hidden;\n}\n\ntable {\n  border-collapse : collapse;\n}\n\ncaption {\n  padding-top : 0.75rem;\n  padding-bottom : 0.75rem;\n  color : #6C757D;\n  text-align : left;\n  caption-side : bottom;\n}\n\nth {\n  text-align : inherit;\n}\n\nlabel {\n  display : inline-block;\n  margin-bottom : 0.5rem;\n}\n\nbutton {\n  border-radius : 0;\n}\n\nbutton:focus {\n  outline : 1px dotted;\n  outline : 5px auto -webkit-focus-ring-color;\n}\n\ninput, button, select, optgroup, textarea {\n  margin : 0;\n  font-family : inherit;\n  font-size : inherit;\n  line-height : inherit;\n}\n\nbutton, input {\n  overflow : visible;\n}\n\nbutton, select {\n  text-transform : none;\n}\n\nbutton, html [type='button'], [type='reset'], [type='submit'] {\n  -webkit-appearance : button;\n}\n\nbutton::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner {\n  padding : 0;\n  border-style : none;\n}\n\ninput[type='radio'], input[type='checkbox'] {\n  -webkit-box-sizing : border-box;\n     -moz-box-sizing : border-box;\n          box-sizing : border-box;\n  padding : 0;\n}\n\ninput[type='date'], input[type='time'], input[type='datetime-local'], input[type='month'] {\n  -webkit-appearance : listbox;\n}\n\ntextarea {\n  overflow : auto;\n  resize : vertical;\n}\n\nfieldset {\n  min-width : 0;\n  padding : 0;\n  margin : 0;\n  border : 0;\n}\n\nlegend {\n  display : block;\n  width : 100%;\n  max-width : 100%;\n  padding : 0;\n  margin-bottom : 0.5rem;\n  font-size : 1.5rem;\n  line-height : inherit;\n  color : inherit;\n  white-space : normal;\n}\n\nprogress {\n  vertical-align : baseline;\n}\n\n[type='number']::-webkit-inner-spin-button, [type='number']::-webkit-outer-spin-button {\n  height : auto;\n}\n\n[type='search'] {\n  outline-offset : -2px;\n  -webkit-appearance : none;\n}\n\n[type='search']::-webkit-search-cancel-button, [type='search']::-webkit-search-decoration {\n  -webkit-appearance : none;\n}\n\n::-webkit-file-upload-button {\n  font : inherit;\n  -webkit-appearance : button;\n}\n\noutput {\n  display : inline-block;\n}\n\nsummary {\n  display : list-item;\n  cursor : pointer;\n}\n\ntemplate {\n  display : none;\n}\n\n[hidden] {\n  display : none !important;\n}\n\nh1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom : 0.5rem;\n  font-family : inherit;\n  font-weight : 500;\n  line-height : 1.5;\n  color : inherit;\n}\n\nh1, .h1 {\n  font-size : 2.5rem;\n}\n\nh2, .h2 {\n  font-size : 2rem;\n}\n\nh3, .h3 {\n  font-size : 1.75rem;\n}\n\nh4, .h4 {\n  font-size : 1.5rem;\n}\n\nh5, .h5 {\n  font-size : 1.25rem;\n}\n\nh6, .h6 {\n  font-size : 1rem;\n}\n\n.lead {\n  font-size : 1.25rem;\n  font-weight : 300;\n}\n\n.display-1 {\n  font-size : 6rem;\n  font-weight : 300;\n  line-height : 1.5;\n}\n\n.display-2 {\n  font-size : 5.5rem;\n  font-weight : 300;\n  line-height : 1.5;\n}\n\n.display-3 {\n  font-size : 4.5rem;\n  font-weight : 300;\n  line-height : 1.5;\n}\n\n.display-4 {\n  font-size : 3.5rem;\n  font-weight : 300;\n  line-height : 1.5;\n}\n\nhr {\n  margin-top : 1rem;\n  margin-bottom : 1rem;\n  border : 0;\n  border-top : 1px solid rgba(0, 0, 0, 0.1);\n}\n\nsmall, .small {\n  font-size : 80%;\n  font-weight : 400;\n}\n\nmark, .mark {\n  padding : 0.2em;\n  background-color : #FCF8E3;\n}\n\n.list-unstyled {\n  padding-left : 0;\n  list-style : none;\n}\n\n.list-inline {\n  padding-left : 0;\n  list-style : none;\n}\n\n.list-inline-item {\n  display : inline-block;\n}\n.list-inline-item:not(:last-child) {\n  margin-right : 0.5rem;\n}\n\n.initialism {\n  font-size : 90%;\n  text-transform : uppercase;\n}\n\n.blockquote {\n  margin-bottom : 1rem;\n  font-size : 1.25rem;\n}\n\n.blockquote-footer {\n  display : block;\n  font-size : 80%;\n  color : #6C757D;\n}\n.blockquote-footer::before {\n  content : '\\2014 \\00A0';\n}\n\n.img-fluid {\n  max-width : 100%;\n  height : auto;\n}\n\n.img-thumbnail {\n  padding : 0.25rem;\n  background-color : #FFFFFF;\n  border : 1px solid #DEE2E6;\n  border-radius : 0.25rem;\n  max-width : 100%;\n  height : auto;\n}\n\n.figure {\n  display : inline-block;\n}\n\n.figure-img {\n  margin-bottom : 0.5rem;\n  line-height : 1;\n}\n\n.figure-caption {\n  font-size : 90%;\n  color : #6C757D;\n}\n\ncode, kbd, pre, samp {\n  font-family : SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n}\n\ncode {\n  font-size : 87.5%;\n  color : #E83E8C;\n  word-break : break-word;\n}\na > code {\n  color : inherit;\n}\n\nkbd {\n  padding : 0.2rem 0.4rem;\n  font-size : 87.5%;\n  color : #FFFFFF;\n  background-color : #212529;\n  border-radius : 0.2rem;\n}\nkbd kbd {\n  padding : 0;\n  font-size : 100%;\n  font-weight : 700;\n}\n\npre {\n  display : block;\n  font-size : 87.5%;\n  color : #212529;\n}\npre code {\n  font-size : inherit;\n  color : inherit;\n  word-break : normal;\n}\n\n.pre-scrollable {\n  max-height : 340px;\n  overflow-y : scroll;\n}\n\n.container {\n  width : 100%;\n  padding-right : 15px;\n  padding-left : 15px;\n  margin-right : auto;\n  margin-left : auto;\n}\n@media (min-width: 576px) {\n  .container {\n    max-width : 540px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width : 720px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    max-width : 960px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    max-width : 1140px;\n  }\n}\n\n.container-fluid {\n  width : 100%;\n  padding-right : 15px;\n  padding-left : 15px;\n  margin-right : auto;\n  margin-left : auto;\n}\n\n.row {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-flex-wrap : wrap;\n      -ms-flex-wrap : wrap;\n          flex-wrap : wrap;\n  margin-right : -15px;\n  margin-left : -15px;\n}\n\n.no-gutters {\n  margin-right : 0;\n  margin-left : 0;\n}\n.no-gutters > .col, .no-gutters > [class*='col-'] {\n  padding-right : 0;\n  padding-left : 0;\n}\n\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {\n  position : relative;\n  width : 100%;\n  min-height : 1px;\n  padding-right : 15px;\n  padding-left : 15px;\n}\n\n.col {\n  -webkit-flex-basis : 0;\n  -ms-flex-preferred-size : 0;\n          flex-basis : 0;\n  -webkit-box-flex : 1;\n  -webkit-flex-grow : 1;\n     -moz-box-flex : 1;\n  -ms-flex-positive : 1;\n          flex-grow : 1;\n  max-width : 100%;\n}\n\n.col-auto {\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 0 auto;\n     -moz-box-flex : 0;\n      -ms-flex : 0 0 auto;\n          flex : 0 0 auto;\n  width : auto;\n  max-width : none;\n}\n\n.col-1 {\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 0 8.33333%;\n     -moz-box-flex : 0;\n      -ms-flex : 0 0 8.33333%;\n          flex : 0 0 8.33333%;\n  max-width : 8.33333%;\n}\n\n.col-2 {\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 0 16.66667%;\n     -moz-box-flex : 0;\n      -ms-flex : 0 0 16.66667%;\n          flex : 0 0 16.66667%;\n  max-width : 16.66667%;\n}\n\n.col-3 {\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 0 25%;\n     -moz-box-flex : 0;\n      -ms-flex : 0 0 25%;\n          flex : 0 0 25%;\n  max-width : 25%;\n}\n\n.col-4 {\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 0 33.33333%;\n     -moz-box-flex : 0;\n      -ms-flex : 0 0 33.33333%;\n          flex : 0 0 33.33333%;\n  max-width : 33.33333%;\n}\n\n.col-5 {\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 0 41.66667%;\n     -moz-box-flex : 0;\n      -ms-flex : 0 0 41.66667%;\n          flex : 0 0 41.66667%;\n  max-width : 41.66667%;\n}\n\n.col-6 {\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 0 50%;\n     -moz-box-flex : 0;\n      -ms-flex : 0 0 50%;\n          flex : 0 0 50%;\n  max-width : 50%;\n}\n\n.col-7 {\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 0 58.33333%;\n     -moz-box-flex : 0;\n      -ms-flex : 0 0 58.33333%;\n          flex : 0 0 58.33333%;\n  max-width : 58.33333%;\n}\n\n.col-8 {\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 0 66.66667%;\n     -moz-box-flex : 0;\n      -ms-flex : 0 0 66.66667%;\n          flex : 0 0 66.66667%;\n  max-width : 66.66667%;\n}\n\n.col-9 {\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 0 75%;\n     -moz-box-flex : 0;\n      -ms-flex : 0 0 75%;\n          flex : 0 0 75%;\n  max-width : 75%;\n}\n\n.col-10 {\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 0 83.33333%;\n     -moz-box-flex : 0;\n      -ms-flex : 0 0 83.33333%;\n          flex : 0 0 83.33333%;\n  max-width : 83.33333%;\n}\n\n.col-11 {\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 0 91.66667%;\n     -moz-box-flex : 0;\n      -ms-flex : 0 0 91.66667%;\n          flex : 0 0 91.66667%;\n  max-width : 91.66667%;\n}\n\n.col-12 {\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 0 100%;\n     -moz-box-flex : 0;\n      -ms-flex : 0 0 100%;\n          flex : 0 0 100%;\n  max-width : 100%;\n}\n\n.order-first {\n  -webkit-box-ordinal-group : 0;\n  -webkit-order : -1;\n     -moz-box-ordinal-group : 0;\n  -ms-flex-order : -1;\n          order : -1;\n}\n\n.order-last {\n  -webkit-box-ordinal-group : 14;\n  -webkit-order : 13;\n     -moz-box-ordinal-group : 14;\n  -ms-flex-order : 13;\n          order : 13;\n}\n\n.order-0 {\n  -webkit-box-ordinal-group : 1;\n  -webkit-order : 0;\n     -moz-box-ordinal-group : 1;\n  -ms-flex-order : 0;\n          order : 0;\n}\n\n.order-1 {\n  -webkit-box-ordinal-group : 2;\n  -webkit-order : 1;\n     -moz-box-ordinal-group : 2;\n  -ms-flex-order : 1;\n          order : 1;\n}\n\n.order-2 {\n  -webkit-box-ordinal-group : 3;\n  -webkit-order : 2;\n     -moz-box-ordinal-group : 3;\n  -ms-flex-order : 2;\n          order : 2;\n}\n\n.order-3 {\n  -webkit-box-ordinal-group : 4;\n  -webkit-order : 3;\n     -moz-box-ordinal-group : 4;\n  -ms-flex-order : 3;\n          order : 3;\n}\n\n.order-4 {\n  -webkit-box-ordinal-group : 5;\n  -webkit-order : 4;\n     -moz-box-ordinal-group : 5;\n  -ms-flex-order : 4;\n          order : 4;\n}\n\n.order-5 {\n  -webkit-box-ordinal-group : 6;\n  -webkit-order : 5;\n     -moz-box-ordinal-group : 6;\n  -ms-flex-order : 5;\n          order : 5;\n}\n\n.order-6 {\n  -webkit-box-ordinal-group : 7;\n  -webkit-order : 6;\n     -moz-box-ordinal-group : 7;\n  -ms-flex-order : 6;\n          order : 6;\n}\n\n.order-7 {\n  -webkit-box-ordinal-group : 8;\n  -webkit-order : 7;\n     -moz-box-ordinal-group : 8;\n  -ms-flex-order : 7;\n          order : 7;\n}\n\n.order-8 {\n  -webkit-box-ordinal-group : 9;\n  -webkit-order : 8;\n     -moz-box-ordinal-group : 9;\n  -ms-flex-order : 8;\n          order : 8;\n}\n\n.order-9 {\n  -webkit-box-ordinal-group : 10;\n  -webkit-order : 9;\n     -moz-box-ordinal-group : 10;\n  -ms-flex-order : 9;\n          order : 9;\n}\n\n.order-10 {\n  -webkit-box-ordinal-group : 11;\n  -webkit-order : 10;\n     -moz-box-ordinal-group : 11;\n  -ms-flex-order : 10;\n          order : 10;\n}\n\n.order-11 {\n  -webkit-box-ordinal-group : 12;\n  -webkit-order : 11;\n     -moz-box-ordinal-group : 12;\n  -ms-flex-order : 11;\n          order : 11;\n}\n\n.order-12 {\n  -webkit-box-ordinal-group : 13;\n  -webkit-order : 12;\n     -moz-box-ordinal-group : 13;\n  -ms-flex-order : 12;\n          order : 12;\n}\n\n.offset-1 {\n  margin-left : 8.33333%;\n}\n\n.offset-2 {\n  margin-left : 16.66667%;\n}\n\n.offset-3 {\n  margin-left : 25%;\n}\n\n.offset-4 {\n  margin-left : 33.33333%;\n}\n\n.offset-5 {\n  margin-left : 41.66667%;\n}\n\n.offset-6 {\n  margin-left : 50%;\n}\n\n.offset-7 {\n  margin-left : 58.33333%;\n}\n\n.offset-8 {\n  margin-left : 66.66667%;\n}\n\n.offset-9 {\n  margin-left : 75%;\n}\n\n.offset-10 {\n  margin-left : 83.33333%;\n}\n\n.offset-11 {\n  margin-left : 91.66667%;\n}\n\n@media (min-width: 576px) {\n  .col-sm {\n    -webkit-flex-basis : 0;\n    -ms-flex-preferred-size : 0;\n            flex-basis : 0;\n    -webkit-box-flex : 1;\n    -webkit-flex-grow : 1;\n       -moz-box-flex : 1;\n    -ms-flex-positive : 1;\n            flex-grow : 1;\n    max-width : 100%;\n  }\n  .col-sm-auto {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 auto;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 auto;\n            flex : 0 0 auto;\n    width : auto;\n    max-width : none;\n  }\n  .col-sm-1 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 8.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 8.33333%;\n            flex : 0 0 8.33333%;\n    max-width : 8.33333%;\n  }\n  .col-sm-2 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 16.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 16.66667%;\n            flex : 0 0 16.66667%;\n    max-width : 16.66667%;\n  }\n  .col-sm-3 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 25%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 25%;\n            flex : 0 0 25%;\n    max-width : 25%;\n  }\n  .col-sm-4 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 33.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 33.33333%;\n            flex : 0 0 33.33333%;\n    max-width : 33.33333%;\n  }\n  .col-sm-5 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 41.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 41.66667%;\n            flex : 0 0 41.66667%;\n    max-width : 41.66667%;\n  }\n  .col-sm-6 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 50%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 50%;\n            flex : 0 0 50%;\n    max-width : 50%;\n  }\n  .col-sm-7 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 58.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 58.33333%;\n            flex : 0 0 58.33333%;\n    max-width : 58.33333%;\n  }\n  .col-sm-8 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 66.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 66.66667%;\n            flex : 0 0 66.66667%;\n    max-width : 66.66667%;\n  }\n  .col-sm-9 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 75%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 75%;\n            flex : 0 0 75%;\n    max-width : 75%;\n  }\n  .col-sm-10 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 83.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 83.33333%;\n            flex : 0 0 83.33333%;\n    max-width : 83.33333%;\n  }\n  .col-sm-11 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 91.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 91.66667%;\n            flex : 0 0 91.66667%;\n    max-width : 91.66667%;\n  }\n  .col-sm-12 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 100%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 100%;\n            flex : 0 0 100%;\n    max-width : 100%;\n  }\n  .order-sm-first {\n    -webkit-box-ordinal-group : 0;\n    -webkit-order : -1;\n       -moz-box-ordinal-group : 0;\n    -ms-flex-order : -1;\n            order : -1;\n  }\n  .order-sm-last {\n    -webkit-box-ordinal-group : 14;\n    -webkit-order : 13;\n       -moz-box-ordinal-group : 14;\n    -ms-flex-order : 13;\n            order : 13;\n  }\n  .order-sm-0 {\n    -webkit-box-ordinal-group : 1;\n    -webkit-order : 0;\n       -moz-box-ordinal-group : 1;\n    -ms-flex-order : 0;\n            order : 0;\n  }\n  .order-sm-1 {\n    -webkit-box-ordinal-group : 2;\n    -webkit-order : 1;\n       -moz-box-ordinal-group : 2;\n    -ms-flex-order : 1;\n            order : 1;\n  }\n  .order-sm-2 {\n    -webkit-box-ordinal-group : 3;\n    -webkit-order : 2;\n       -moz-box-ordinal-group : 3;\n    -ms-flex-order : 2;\n            order : 2;\n  }\n  .order-sm-3 {\n    -webkit-box-ordinal-group : 4;\n    -webkit-order : 3;\n       -moz-box-ordinal-group : 4;\n    -ms-flex-order : 3;\n            order : 3;\n  }\n  .order-sm-4 {\n    -webkit-box-ordinal-group : 5;\n    -webkit-order : 4;\n       -moz-box-ordinal-group : 5;\n    -ms-flex-order : 4;\n            order : 4;\n  }\n  .order-sm-5 {\n    -webkit-box-ordinal-group : 6;\n    -webkit-order : 5;\n       -moz-box-ordinal-group : 6;\n    -ms-flex-order : 5;\n            order : 5;\n  }\n  .order-sm-6 {\n    -webkit-box-ordinal-group : 7;\n    -webkit-order : 6;\n       -moz-box-ordinal-group : 7;\n    -ms-flex-order : 6;\n            order : 6;\n  }\n  .order-sm-7 {\n    -webkit-box-ordinal-group : 8;\n    -webkit-order : 7;\n       -moz-box-ordinal-group : 8;\n    -ms-flex-order : 7;\n            order : 7;\n  }\n  .order-sm-8 {\n    -webkit-box-ordinal-group : 9;\n    -webkit-order : 8;\n       -moz-box-ordinal-group : 9;\n    -ms-flex-order : 8;\n            order : 8;\n  }\n  .order-sm-9 {\n    -webkit-box-ordinal-group : 10;\n    -webkit-order : 9;\n       -moz-box-ordinal-group : 10;\n    -ms-flex-order : 9;\n            order : 9;\n  }\n  .order-sm-10 {\n    -webkit-box-ordinal-group : 11;\n    -webkit-order : 10;\n       -moz-box-ordinal-group : 11;\n    -ms-flex-order : 10;\n            order : 10;\n  }\n  .order-sm-11 {\n    -webkit-box-ordinal-group : 12;\n    -webkit-order : 11;\n       -moz-box-ordinal-group : 12;\n    -ms-flex-order : 11;\n            order : 11;\n  }\n  .order-sm-12 {\n    -webkit-box-ordinal-group : 13;\n    -webkit-order : 12;\n       -moz-box-ordinal-group : 13;\n    -ms-flex-order : 12;\n            order : 12;\n  }\n  .offset-sm-0 {\n    margin-left : 0;\n  }\n  .offset-sm-1 {\n    margin-left : 8.33333%;\n  }\n  .offset-sm-2 {\n    margin-left : 16.66667%;\n  }\n  .offset-sm-3 {\n    margin-left : 25%;\n  }\n  .offset-sm-4 {\n    margin-left : 33.33333%;\n  }\n  .offset-sm-5 {\n    margin-left : 41.66667%;\n  }\n  .offset-sm-6 {\n    margin-left : 50%;\n  }\n  .offset-sm-7 {\n    margin-left : 58.33333%;\n  }\n  .offset-sm-8 {\n    margin-left : 66.66667%;\n  }\n  .offset-sm-9 {\n    margin-left : 75%;\n  }\n  .offset-sm-10 {\n    margin-left : 83.33333%;\n  }\n  .offset-sm-11 {\n    margin-left : 91.66667%;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-md {\n    -webkit-flex-basis : 0;\n    -ms-flex-preferred-size : 0;\n            flex-basis : 0;\n    -webkit-box-flex : 1;\n    -webkit-flex-grow : 1;\n       -moz-box-flex : 1;\n    -ms-flex-positive : 1;\n            flex-grow : 1;\n    max-width : 100%;\n  }\n  .col-md-auto {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 auto;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 auto;\n            flex : 0 0 auto;\n    width : auto;\n    max-width : none;\n  }\n  .col-md-1 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 8.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 8.33333%;\n            flex : 0 0 8.33333%;\n    max-width : 8.33333%;\n  }\n  .col-md-2 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 16.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 16.66667%;\n            flex : 0 0 16.66667%;\n    max-width : 16.66667%;\n  }\n  .col-md-3 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 25%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 25%;\n            flex : 0 0 25%;\n    max-width : 25%;\n  }\n  .col-md-4 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 33.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 33.33333%;\n            flex : 0 0 33.33333%;\n    max-width : 33.33333%;\n  }\n  .col-md-5 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 41.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 41.66667%;\n            flex : 0 0 41.66667%;\n    max-width : 41.66667%;\n  }\n  .col-md-6 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 50%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 50%;\n            flex : 0 0 50%;\n    max-width : 50%;\n  }\n  .col-md-7 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 58.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 58.33333%;\n            flex : 0 0 58.33333%;\n    max-width : 58.33333%;\n  }\n  .col-md-8 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 66.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 66.66667%;\n            flex : 0 0 66.66667%;\n    max-width : 66.66667%;\n  }\n  .col-md-9 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 75%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 75%;\n            flex : 0 0 75%;\n    max-width : 75%;\n  }\n  .col-md-10 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 83.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 83.33333%;\n            flex : 0 0 83.33333%;\n    max-width : 83.33333%;\n  }\n  .col-md-11 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 91.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 91.66667%;\n            flex : 0 0 91.66667%;\n    max-width : 91.66667%;\n  }\n  .col-md-12 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 100%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 100%;\n            flex : 0 0 100%;\n    max-width : 100%;\n  }\n  .order-md-first {\n    -webkit-box-ordinal-group : 0;\n    -webkit-order : -1;\n       -moz-box-ordinal-group : 0;\n    -ms-flex-order : -1;\n            order : -1;\n  }\n  .order-md-last {\n    -webkit-box-ordinal-group : 14;\n    -webkit-order : 13;\n       -moz-box-ordinal-group : 14;\n    -ms-flex-order : 13;\n            order : 13;\n  }\n  .order-md-0 {\n    -webkit-box-ordinal-group : 1;\n    -webkit-order : 0;\n       -moz-box-ordinal-group : 1;\n    -ms-flex-order : 0;\n            order : 0;\n  }\n  .order-md-1 {\n    -webkit-box-ordinal-group : 2;\n    -webkit-order : 1;\n       -moz-box-ordinal-group : 2;\n    -ms-flex-order : 1;\n            order : 1;\n  }\n  .order-md-2 {\n    -webkit-box-ordinal-group : 3;\n    -webkit-order : 2;\n       -moz-box-ordinal-group : 3;\n    -ms-flex-order : 2;\n            order : 2;\n  }\n  .order-md-3 {\n    -webkit-box-ordinal-group : 4;\n    -webkit-order : 3;\n       -moz-box-ordinal-group : 4;\n    -ms-flex-order : 3;\n            order : 3;\n  }\n  .order-md-4 {\n    -webkit-box-ordinal-group : 5;\n    -webkit-order : 4;\n       -moz-box-ordinal-group : 5;\n    -ms-flex-order : 4;\n            order : 4;\n  }\n  .order-md-5 {\n    -webkit-box-ordinal-group : 6;\n    -webkit-order : 5;\n       -moz-box-ordinal-group : 6;\n    -ms-flex-order : 5;\n            order : 5;\n  }\n  .order-md-6 {\n    -webkit-box-ordinal-group : 7;\n    -webkit-order : 6;\n       -moz-box-ordinal-group : 7;\n    -ms-flex-order : 6;\n            order : 6;\n  }\n  .order-md-7 {\n    -webkit-box-ordinal-group : 8;\n    -webkit-order : 7;\n       -moz-box-ordinal-group : 8;\n    -ms-flex-order : 7;\n            order : 7;\n  }\n  .order-md-8 {\n    -webkit-box-ordinal-group : 9;\n    -webkit-order : 8;\n       -moz-box-ordinal-group : 9;\n    -ms-flex-order : 8;\n            order : 8;\n  }\n  .order-md-9 {\n    -webkit-box-ordinal-group : 10;\n    -webkit-order : 9;\n       -moz-box-ordinal-group : 10;\n    -ms-flex-order : 9;\n            order : 9;\n  }\n  .order-md-10 {\n    -webkit-box-ordinal-group : 11;\n    -webkit-order : 10;\n       -moz-box-ordinal-group : 11;\n    -ms-flex-order : 10;\n            order : 10;\n  }\n  .order-md-11 {\n    -webkit-box-ordinal-group : 12;\n    -webkit-order : 11;\n       -moz-box-ordinal-group : 12;\n    -ms-flex-order : 11;\n            order : 11;\n  }\n  .order-md-12 {\n    -webkit-box-ordinal-group : 13;\n    -webkit-order : 12;\n       -moz-box-ordinal-group : 13;\n    -ms-flex-order : 12;\n            order : 12;\n  }\n  .offset-md-0 {\n    margin-left : 0;\n  }\n  .offset-md-1 {\n    margin-left : 8.33333%;\n  }\n  .offset-md-2 {\n    margin-left : 16.66667%;\n  }\n  .offset-md-3 {\n    margin-left : 25%;\n  }\n  .offset-md-4 {\n    margin-left : 33.33333%;\n  }\n  .offset-md-5 {\n    margin-left : 41.66667%;\n  }\n  .offset-md-6 {\n    margin-left : 50%;\n  }\n  .offset-md-7 {\n    margin-left : 58.33333%;\n  }\n  .offset-md-8 {\n    margin-left : 66.66667%;\n  }\n  .offset-md-9 {\n    margin-left : 75%;\n  }\n  .offset-md-10 {\n    margin-left : 83.33333%;\n  }\n  .offset-md-11 {\n    margin-left : 91.66667%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-lg {\n    -webkit-flex-basis : 0;\n    -ms-flex-preferred-size : 0;\n            flex-basis : 0;\n    -webkit-box-flex : 1;\n    -webkit-flex-grow : 1;\n       -moz-box-flex : 1;\n    -ms-flex-positive : 1;\n            flex-grow : 1;\n    max-width : 100%;\n  }\n  .col-lg-auto {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 auto;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 auto;\n            flex : 0 0 auto;\n    width : auto;\n    max-width : none;\n  }\n  .col-lg-1 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 8.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 8.33333%;\n            flex : 0 0 8.33333%;\n    max-width : 8.33333%;\n  }\n  .col-lg-2 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 16.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 16.66667%;\n            flex : 0 0 16.66667%;\n    max-width : 16.66667%;\n  }\n  .col-lg-3 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 25%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 25%;\n            flex : 0 0 25%;\n    max-width : 25%;\n  }\n  .col-lg-4 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 33.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 33.33333%;\n            flex : 0 0 33.33333%;\n    max-width : 33.33333%;\n  }\n  .col-lg-5 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 41.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 41.66667%;\n            flex : 0 0 41.66667%;\n    max-width : 41.66667%;\n  }\n  .col-lg-6 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 50%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 50%;\n            flex : 0 0 50%;\n    max-width : 50%;\n  }\n  .col-lg-7 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 58.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 58.33333%;\n            flex : 0 0 58.33333%;\n    max-width : 58.33333%;\n  }\n  .col-lg-8 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 66.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 66.66667%;\n            flex : 0 0 66.66667%;\n    max-width : 66.66667%;\n  }\n  .col-lg-9 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 75%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 75%;\n            flex : 0 0 75%;\n    max-width : 75%;\n  }\n  .col-lg-10 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 83.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 83.33333%;\n            flex : 0 0 83.33333%;\n    max-width : 83.33333%;\n  }\n  .col-lg-11 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 91.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 91.66667%;\n            flex : 0 0 91.66667%;\n    max-width : 91.66667%;\n  }\n  .col-lg-12 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 100%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 100%;\n            flex : 0 0 100%;\n    max-width : 100%;\n  }\n  .order-lg-first {\n    -webkit-box-ordinal-group : 0;\n    -webkit-order : -1;\n       -moz-box-ordinal-group : 0;\n    -ms-flex-order : -1;\n            order : -1;\n  }\n  .order-lg-last {\n    -webkit-box-ordinal-group : 14;\n    -webkit-order : 13;\n       -moz-box-ordinal-group : 14;\n    -ms-flex-order : 13;\n            order : 13;\n  }\n  .order-lg-0 {\n    -webkit-box-ordinal-group : 1;\n    -webkit-order : 0;\n       -moz-box-ordinal-group : 1;\n    -ms-flex-order : 0;\n            order : 0;\n  }\n  .order-lg-1 {\n    -webkit-box-ordinal-group : 2;\n    -webkit-order : 1;\n       -moz-box-ordinal-group : 2;\n    -ms-flex-order : 1;\n            order : 1;\n  }\n  .order-lg-2 {\n    -webkit-box-ordinal-group : 3;\n    -webkit-order : 2;\n       -moz-box-ordinal-group : 3;\n    -ms-flex-order : 2;\n            order : 2;\n  }\n  .order-lg-3 {\n    -webkit-box-ordinal-group : 4;\n    -webkit-order : 3;\n       -moz-box-ordinal-group : 4;\n    -ms-flex-order : 3;\n            order : 3;\n  }\n  .order-lg-4 {\n    -webkit-box-ordinal-group : 5;\n    -webkit-order : 4;\n       -moz-box-ordinal-group : 5;\n    -ms-flex-order : 4;\n            order : 4;\n  }\n  .order-lg-5 {\n    -webkit-box-ordinal-group : 6;\n    -webkit-order : 5;\n       -moz-box-ordinal-group : 6;\n    -ms-flex-order : 5;\n            order : 5;\n  }\n  .order-lg-6 {\n    -webkit-box-ordinal-group : 7;\n    -webkit-order : 6;\n       -moz-box-ordinal-group : 7;\n    -ms-flex-order : 6;\n            order : 6;\n  }\n  .order-lg-7 {\n    -webkit-box-ordinal-group : 8;\n    -webkit-order : 7;\n       -moz-box-ordinal-group : 8;\n    -ms-flex-order : 7;\n            order : 7;\n  }\n  .order-lg-8 {\n    -webkit-box-ordinal-group : 9;\n    -webkit-order : 8;\n       -moz-box-ordinal-group : 9;\n    -ms-flex-order : 8;\n            order : 8;\n  }\n  .order-lg-9 {\n    -webkit-box-ordinal-group : 10;\n    -webkit-order : 9;\n       -moz-box-ordinal-group : 10;\n    -ms-flex-order : 9;\n            order : 9;\n  }\n  .order-lg-10 {\n    -webkit-box-ordinal-group : 11;\n    -webkit-order : 10;\n       -moz-box-ordinal-group : 11;\n    -ms-flex-order : 10;\n            order : 10;\n  }\n  .order-lg-11 {\n    -webkit-box-ordinal-group : 12;\n    -webkit-order : 11;\n       -moz-box-ordinal-group : 12;\n    -ms-flex-order : 11;\n            order : 11;\n  }\n  .order-lg-12 {\n    -webkit-box-ordinal-group : 13;\n    -webkit-order : 12;\n       -moz-box-ordinal-group : 13;\n    -ms-flex-order : 12;\n            order : 12;\n  }\n  .offset-lg-0 {\n    margin-left : 0;\n  }\n  .offset-lg-1 {\n    margin-left : 8.33333%;\n  }\n  .offset-lg-2 {\n    margin-left : 16.66667%;\n  }\n  .offset-lg-3 {\n    margin-left : 25%;\n  }\n  .offset-lg-4 {\n    margin-left : 33.33333%;\n  }\n  .offset-lg-5 {\n    margin-left : 41.66667%;\n  }\n  .offset-lg-6 {\n    margin-left : 50%;\n  }\n  .offset-lg-7 {\n    margin-left : 58.33333%;\n  }\n  .offset-lg-8 {\n    margin-left : 66.66667%;\n  }\n  .offset-lg-9 {\n    margin-left : 75%;\n  }\n  .offset-lg-10 {\n    margin-left : 83.33333%;\n  }\n  .offset-lg-11 {\n    margin-left : 91.66667%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-xl {\n    -webkit-flex-basis : 0;\n    -ms-flex-preferred-size : 0;\n            flex-basis : 0;\n    -webkit-box-flex : 1;\n    -webkit-flex-grow : 1;\n       -moz-box-flex : 1;\n    -ms-flex-positive : 1;\n            flex-grow : 1;\n    max-width : 100%;\n  }\n  .col-xl-auto {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 auto;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 auto;\n            flex : 0 0 auto;\n    width : auto;\n    max-width : none;\n  }\n  .col-xl-1 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 8.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 8.33333%;\n            flex : 0 0 8.33333%;\n    max-width : 8.33333%;\n  }\n  .col-xl-2 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 16.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 16.66667%;\n            flex : 0 0 16.66667%;\n    max-width : 16.66667%;\n  }\n  .col-xl-3 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 25%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 25%;\n            flex : 0 0 25%;\n    max-width : 25%;\n  }\n  .col-xl-4 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 33.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 33.33333%;\n            flex : 0 0 33.33333%;\n    max-width : 33.33333%;\n  }\n  .col-xl-5 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 41.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 41.66667%;\n            flex : 0 0 41.66667%;\n    max-width : 41.66667%;\n  }\n  .col-xl-6 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 50%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 50%;\n            flex : 0 0 50%;\n    max-width : 50%;\n  }\n  .col-xl-7 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 58.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 58.33333%;\n            flex : 0 0 58.33333%;\n    max-width : 58.33333%;\n  }\n  .col-xl-8 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 66.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 66.66667%;\n            flex : 0 0 66.66667%;\n    max-width : 66.66667%;\n  }\n  .col-xl-9 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 75%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 75%;\n            flex : 0 0 75%;\n    max-width : 75%;\n  }\n  .col-xl-10 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 83.33333%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 83.33333%;\n            flex : 0 0 83.33333%;\n    max-width : 83.33333%;\n  }\n  .col-xl-11 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 91.66667%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 91.66667%;\n            flex : 0 0 91.66667%;\n    max-width : 91.66667%;\n  }\n  .col-xl-12 {\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 100%;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 100%;\n            flex : 0 0 100%;\n    max-width : 100%;\n  }\n  .order-xl-first {\n    -webkit-box-ordinal-group : 0;\n    -webkit-order : -1;\n       -moz-box-ordinal-group : 0;\n    -ms-flex-order : -1;\n            order : -1;\n  }\n  .order-xl-last {\n    -webkit-box-ordinal-group : 14;\n    -webkit-order : 13;\n       -moz-box-ordinal-group : 14;\n    -ms-flex-order : 13;\n            order : 13;\n  }\n  .order-xl-0 {\n    -webkit-box-ordinal-group : 1;\n    -webkit-order : 0;\n       -moz-box-ordinal-group : 1;\n    -ms-flex-order : 0;\n            order : 0;\n  }\n  .order-xl-1 {\n    -webkit-box-ordinal-group : 2;\n    -webkit-order : 1;\n       -moz-box-ordinal-group : 2;\n    -ms-flex-order : 1;\n            order : 1;\n  }\n  .order-xl-2 {\n    -webkit-box-ordinal-group : 3;\n    -webkit-order : 2;\n       -moz-box-ordinal-group : 3;\n    -ms-flex-order : 2;\n            order : 2;\n  }\n  .order-xl-3 {\n    -webkit-box-ordinal-group : 4;\n    -webkit-order : 3;\n       -moz-box-ordinal-group : 4;\n    -ms-flex-order : 3;\n            order : 3;\n  }\n  .order-xl-4 {\n    -webkit-box-ordinal-group : 5;\n    -webkit-order : 4;\n       -moz-box-ordinal-group : 5;\n    -ms-flex-order : 4;\n            order : 4;\n  }\n  .order-xl-5 {\n    -webkit-box-ordinal-group : 6;\n    -webkit-order : 5;\n       -moz-box-ordinal-group : 6;\n    -ms-flex-order : 5;\n            order : 5;\n  }\n  .order-xl-6 {\n    -webkit-box-ordinal-group : 7;\n    -webkit-order : 6;\n       -moz-box-ordinal-group : 7;\n    -ms-flex-order : 6;\n            order : 6;\n  }\n  .order-xl-7 {\n    -webkit-box-ordinal-group : 8;\n    -webkit-order : 7;\n       -moz-box-ordinal-group : 8;\n    -ms-flex-order : 7;\n            order : 7;\n  }\n  .order-xl-8 {\n    -webkit-box-ordinal-group : 9;\n    -webkit-order : 8;\n       -moz-box-ordinal-group : 9;\n    -ms-flex-order : 8;\n            order : 8;\n  }\n  .order-xl-9 {\n    -webkit-box-ordinal-group : 10;\n    -webkit-order : 9;\n       -moz-box-ordinal-group : 10;\n    -ms-flex-order : 9;\n            order : 9;\n  }\n  .order-xl-10 {\n    -webkit-box-ordinal-group : 11;\n    -webkit-order : 10;\n       -moz-box-ordinal-group : 11;\n    -ms-flex-order : 10;\n            order : 10;\n  }\n  .order-xl-11 {\n    -webkit-box-ordinal-group : 12;\n    -webkit-order : 11;\n       -moz-box-ordinal-group : 12;\n    -ms-flex-order : 11;\n            order : 11;\n  }\n  .order-xl-12 {\n    -webkit-box-ordinal-group : 13;\n    -webkit-order : 12;\n       -moz-box-ordinal-group : 13;\n    -ms-flex-order : 12;\n            order : 12;\n  }\n  .offset-xl-0 {\n    margin-left : 0;\n  }\n  .offset-xl-1 {\n    margin-left : 8.33333%;\n  }\n  .offset-xl-2 {\n    margin-left : 16.66667%;\n  }\n  .offset-xl-3 {\n    margin-left : 25%;\n  }\n  .offset-xl-4 {\n    margin-left : 33.33333%;\n  }\n  .offset-xl-5 {\n    margin-left : 41.66667%;\n  }\n  .offset-xl-6 {\n    margin-left : 50%;\n  }\n  .offset-xl-7 {\n    margin-left : 58.33333%;\n  }\n  .offset-xl-8 {\n    margin-left : 66.66667%;\n  }\n  .offset-xl-9 {\n    margin-left : 75%;\n  }\n  .offset-xl-10 {\n    margin-left : 83.33333%;\n  }\n  .offset-xl-11 {\n    margin-left : 91.66667%;\n  }\n}\n\n.table {\n  width : 100%;\n  max-width : 100%;\n  margin-bottom : 1rem;\n  background-color : transparent;\n}\n.table th, .table td {\n  padding : 0.75rem;\n  vertical-align : top;\n  border-top : 1px solid #DEE2E6;\n}\n.table thead th {\n  vertical-align : bottom;\n  border-bottom : 2px solid #DEE2E6;\n}\n.table tbody + tbody {\n  border-top : 2px solid #DEE2E6;\n}\n.table .table {\n  background-color : #FFFFFF;\n}\n\n.table-sm th, .table-sm td {\n  padding : 0.3rem;\n}\n\n.table-bordered {\n  border : 1px solid #DEE2E6;\n}\n.table-bordered th, .table-bordered td {\n  border : 1px solid #DEE2E6;\n}\n.table-bordered thead th, .table-bordered thead td {\n  border-bottom-width : 2px;\n}\n\n.table-borderless th, .table-borderless td, .table-borderless thead th, .table-borderless tbody + tbody {\n  border : 0;\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color : rgba(0, 0, 0, 0.05);\n}\n\n.table-hover tbody tr:hover {\n  background-color : rgba(0, 0, 0, 0.075);\n}\n\n.table-primary, .table-primary > th, .table-primary > td {\n  background-color : #B8DAFF;\n}\n\n.table-hover .table-primary:hover {\n  background-color : #9FCDFF;\n}\n.table-hover .table-primary:hover > td, .table-hover .table-primary:hover > th {\n  background-color : #9FCDFF;\n}\n\n.table-secondary, .table-secondary > th, .table-secondary > td {\n  background-color : #D6D8DB;\n}\n\n.table-hover .table-secondary:hover {\n  background-color : #C8CBCF;\n}\n.table-hover .table-secondary:hover > td, .table-hover .table-secondary:hover > th {\n  background-color : #C8CBCF;\n}\n\n.table-success, .table-success > th, .table-success > td {\n  background-color : #C3E6CB;\n}\n\n.table-hover .table-success:hover {\n  background-color : #B1DFBB;\n}\n.table-hover .table-success:hover > td, .table-hover .table-success:hover > th {\n  background-color : #B1DFBB;\n}\n\n.table-info, .table-info > th, .table-info > td {\n  background-color : #BEE5EB;\n}\n\n.table-hover .table-info:hover {\n  background-color : #ABDDE5;\n}\n.table-hover .table-info:hover > td, .table-hover .table-info:hover > th {\n  background-color : #ABDDE5;\n}\n\n.table-warning, .table-warning > th, .table-warning > td {\n  background-color : #FFEEBA;\n}\n\n.table-hover .table-warning:hover {\n  background-color : #FFE8A1;\n}\n.table-hover .table-warning:hover > td, .table-hover .table-warning:hover > th {\n  background-color : #FFE8A1;\n}\n\n.table-danger, .table-danger > th, .table-danger > td {\n  background-color : #F5C6CB;\n}\n\n.table-hover .table-danger:hover {\n  background-color : #F1B0B7;\n}\n.table-hover .table-danger:hover > td, .table-hover .table-danger:hover > th {\n  background-color : #F1B0B7;\n}\n\n.table-light, .table-light > th, .table-light > td {\n  background-color : #FDFDFE;\n}\n\n.table-hover .table-light:hover {\n  background-color : #ECECF6;\n}\n.table-hover .table-light:hover > td, .table-hover .table-light:hover > th {\n  background-color : #ECECF6;\n}\n\n.table-dark, .table-dark > th, .table-dark > td {\n  background-color : #C6C8CA;\n}\n\n.table-hover .table-dark:hover {\n  background-color : #B9BBBE;\n}\n.table-hover .table-dark:hover > td, .table-hover .table-dark:hover > th {\n  background-color : #B9BBBE;\n}\n\n.table-active, .table-active > th, .table-active > td {\n  background-color : rgba(0, 0, 0, 0.075);\n}\n\n.table-hover .table-active:hover {\n  background-color : rgba(0, 0, 0, 0.075);\n}\n.table-hover .table-active:hover > td, .table-hover .table-active:hover > th {\n  background-color : rgba(0, 0, 0, 0.075);\n}\n\n.table .thead-dark th {\n  color : #FFFFFF;\n  background-color : #212529;\n  border-color : #32383E;\n}\n\n.table .thead-light th {\n  color : #495057;\n  background-color : #E9ECEF;\n  border-color : #DEE2E6;\n}\n\n.table-dark {\n  color : #FFFFFF;\n  background-color : #212529;\n}\n.table-dark th, .table-dark td, .table-dark thead th {\n  border-color : #32383E;\n}\n.table-dark.table-bordered {\n  border : 0;\n}\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n  background-color : rgba(255, 255, 255, 0.05);\n}\n.table-dark.table-hover tbody tr:hover {\n  background-color : rgba(255, 255, 255, 0.075);\n}\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display : block;\n    width : 100%;\n    overflow-x : auto;\n    -webkit-overflow-scrolling : touch;\n    -ms-overflow-style : -ms-autohiding-scrollbar;\n  }\n  .table-responsive-sm > .table-bordered {\n    border : 0;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display : block;\n    width : 100%;\n    overflow-x : auto;\n    -webkit-overflow-scrolling : touch;\n    -ms-overflow-style : -ms-autohiding-scrollbar;\n  }\n  .table-responsive-md > .table-bordered {\n    border : 0;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display : block;\n    width : 100%;\n    overflow-x : auto;\n    -webkit-overflow-scrolling : touch;\n    -ms-overflow-style : -ms-autohiding-scrollbar;\n  }\n  .table-responsive-lg > .table-bordered {\n    border : 0;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display : block;\n    width : 100%;\n    overflow-x : auto;\n    -webkit-overflow-scrolling : touch;\n    -ms-overflow-style : -ms-autohiding-scrollbar;\n  }\n  .table-responsive-xl > .table-bordered {\n    border : 0;\n  }\n}\n\n.table-responsive {\n  display : block;\n  width : 100%;\n  overflow-x : auto;\n  -webkit-overflow-scrolling : touch;\n  -ms-overflow-style : -ms-autohiding-scrollbar;\n}\n.table-responsive > .table-bordered {\n  border : 0;\n}\n\n.form-control {\n  display : block;\n  width : 100%;\n  padding : 0.8rem 1.5rem;\n  font-size : 1rem;\n  line-height : 1.5;\n  color : #495057;\n  background-color : #FFFFFF;\n  -webkit-background-clip : padding-box;\n          background-clip : padding-box;\n  border : 1px solid #CED4DA;\n  border-radius : 0.25rem;\n  -webkit-transition : border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n          transition : border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n       -o-transition : border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n     -moz-transition : border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n          transition : border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n          transition : border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n  .form-control {\n    -webkit-transition : none;\n         -o-transition : none;\n       -moz-transition : none;\n            transition : none;\n  }\n}\n.form-control::-ms-expand {\n  background-color : transparent;\n  border : 0;\n}\n.form-control:focus {\n  color : #495057;\n  background-color : #FFFFFF;\n  border-color : #80BDFF;\n  outline : 0;\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-control::-webkit-input-placeholder {\n  color : #6C757D;\n  opacity : 1;\n}\n.form-control:-moz-placeholder {\n  color : #6C757D;\n  opacity : 1;\n}\n.form-control::-moz-placeholder {\n  color : #6C757D;\n  opacity : 1;\n}\n.form-control:-ms-input-placeholder {\n  color : #6C757D;\n  opacity : 1;\n}\n.form-control::placeholder {\n  color : #6C757D;\n  opacity : 1;\n}\n.form-control:disabled, .form-control[readonly] {\n  background-color : #E9ECEF;\n  opacity : 1;\n}\n\nselect.form-control:not([size]):not([multiple]) {\n  height : -webkit-calc(3.1rem + 2px);\n  height :    -moz-calc(3.1rem + 2px);\n  height :         calc(3.1rem + 2px);\n}\n\nselect.form-control:focus::-ms-value {\n  color : #495057;\n  background-color : #FFFFFF;\n}\n\n.form-control-file, .form-control-range {\n  display : block;\n  width : 100%;\n}\n\n.col-form-label {\n  padding-top : -webkit-calc(0.8rem + 1px);\n  padding-top :    -moz-calc(0.8rem + 1px);\n  padding-top :         calc(0.8rem + 1px);\n  padding-bottom : -webkit-calc(0.8rem + 1px);\n  padding-bottom :    -moz-calc(0.8rem + 1px);\n  padding-bottom :         calc(0.8rem + 1px);\n  margin-bottom : 0;\n  font-size : inherit;\n  line-height : 1.5;\n}\n\n.col-form-label-lg {\n  padding-top : -webkit-calc(1rem + 1px);\n  padding-top :    -moz-calc(1rem + 1px);\n  padding-top :         calc(1rem + 1px);\n  padding-bottom : -webkit-calc(1rem + 1px);\n  padding-bottom :    -moz-calc(1rem + 1px);\n  padding-bottom :         calc(1rem + 1px);\n  font-size : 1.125rem;\n  line-height : 1;\n}\n\n.col-form-label-sm {\n  padding-top : -webkit-calc(0.5rem + 1px);\n  padding-top :    -moz-calc(0.5rem + 1px);\n  padding-top :         calc(0.5rem + 1px);\n  padding-bottom : -webkit-calc(0.5rem + 1px);\n  padding-bottom :    -moz-calc(0.5rem + 1px);\n  padding-bottom :         calc(0.5rem + 1px);\n  font-size : 0.8rem;\n  line-height : 1.5;\n}\n\n.form-control-plaintext {\n  display : block;\n  width : 100%;\n  padding-top : 0.8rem;\n  padding-bottom : 0.8rem;\n  margin-bottom : 0;\n  line-height : 1.5;\n  color : #212529;\n  background-color : transparent;\n  border : solid transparent;\n  border-width : 1px 0;\n}\n.form-control-plaintext.form-control-sm, .input-group-sm > .form-control-plaintext.form-control, .input-group-sm > .input-group-prepend > .form-control-plaintext.input-group-text, .input-group-sm > .input-group-append > .form-control-plaintext.input-group-text, .input-group-sm > .input-group-prepend > .form-control-plaintext.btn, .input-group-sm > .input-group-append > .form-control-plaintext.btn, .form-control-plaintext.form-control-lg, .input-group-lg > .form-control-plaintext.form-control, .input-group-lg > .input-group-prepend > .form-control-plaintext.input-group-text, .input-group-lg > .input-group-append > .form-control-plaintext.input-group-text, .input-group-lg > .input-group-prepend > .form-control-plaintext.btn, .input-group-lg > .input-group-append > .form-control-plaintext.btn {\n  padding-right : 0;\n  padding-left : 0;\n}\n\n.form-control-sm, .input-group-sm > .form-control, .input-group-sm > .input-group-prepend > .input-group-text, .input-group-sm > .input-group-append > .input-group-text, .input-group-sm > .input-group-prepend > .btn, .input-group-sm > .input-group-append > .btn {\n  padding : 0.5rem 1.1rem;\n  font-size : 0.8rem;\n  line-height : 1.5;\n  border-radius : 0.2rem;\n}\n\nselect.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]), .input-group-sm > .input-group-prepend > select.input-group-text:not([size]):not([multiple]), .input-group-sm > .input-group-append > select.input-group-text:not([size]):not([multiple]), .input-group-sm > .input-group-prepend > select.btn:not([size]):not([multiple]), .input-group-sm > .input-group-append > select.btn:not([size]):not([multiple]) {\n  height : -webkit-calc(2.2rem + 2px);\n  height :    -moz-calc(2.2rem + 2px);\n  height :         calc(2.2rem + 2px);\n}\n\n.form-control-lg, .input-group-lg > .form-control, .input-group-lg > .input-group-prepend > .input-group-text, .input-group-lg > .input-group-append > .input-group-text, .input-group-lg > .input-group-prepend > .btn, .input-group-lg > .input-group-append > .btn {\n  padding : 1rem 3rem;\n  font-size : 1.125rem;\n  line-height : 1;\n  border-radius : 0.3rem;\n}\n\nselect.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]), .input-group-lg > .input-group-prepend > select.input-group-text:not([size]):not([multiple]), .input-group-lg > .input-group-append > select.input-group-text:not([size]):not([multiple]), .input-group-lg > .input-group-prepend > select.btn:not([size]):not([multiple]), .input-group-lg > .input-group-append > select.btn:not([size]):not([multiple]) {\n  height : -webkit-calc(3.125rem + 2px);\n  height :    -moz-calc(3.125rem + 2px);\n  height :         calc(3.125rem + 2px);\n}\n\n.form-group {\n  margin-bottom : 1rem;\n}\n\n.form-text {\n  display : block;\n  margin-top : 0.25rem;\n}\n\n.form-row {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-flex-wrap : wrap;\n      -ms-flex-wrap : wrap;\n          flex-wrap : wrap;\n  margin-right : -5px;\n  margin-left : -5px;\n}\n.form-row > .col, .form-row > [class*='col-'] {\n  padding-right : 5px;\n  padding-left : 5px;\n}\n\n.form-check {\n  position : relative;\n  display : block;\n  padding-left : 1.25rem;\n}\n\n.form-check-input {\n  position : absolute;\n  margin-top : 0.3rem;\n  margin-left : -1.25rem;\n}\n.form-check-input:disabled ~ .form-check-label {\n  color : #6C757D;\n}\n\n.form-check-label {\n  margin-bottom : 0;\n}\n\n.form-check-inline {\n  display : -webkit-inline-box;\n  display : -webkit-inline-flex;\n  display :    -moz-inline-box;\n  display : -ms-inline-flexbox;\n  display :         inline-flex;\n  -webkit-box-align : center;\n  -webkit-align-items : center;\n     -moz-box-align : center;\n  -ms-flex-align : center;\n          align-items : center;\n  padding-left : 0;\n  margin-right : 0.75rem;\n}\n.form-check-inline .form-check-input {\n  position : static;\n  margin-top : 0;\n  margin-right : 0.3125rem;\n  margin-left : 0;\n}\n\n.valid-feedback {\n  display : none;\n  width : 100%;\n  margin-top : 0.25rem;\n  font-size : 80%;\n  color : #28A745;\n}\n\n.valid-tooltip {\n  position : absolute;\n  top : 100%;\n  z-index : 5;\n  display : none;\n  max-width : 100%;\n  padding : 0.5rem;\n  margin-top : 0.1rem;\n  font-size : 0.875rem;\n  line-height : 1;\n  color : #FFFFFF;\n  background-color : rgba(40, 167, 69, 0.8);\n  border-radius : 0.2rem;\n}\n\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\n.custom-select:valid, .custom-select.is-valid {\n  border-color : #28A745;\n}\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n  .custom-select:valid:focus, .custom-select.is-valid:focus {\n  border-color : #28A745;\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow : 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.was-validated .form-control:valid ~ .valid-feedback, .was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback, .form-control.is-valid ~ .valid-tooltip, .was-validated\n  .custom-select:valid ~ .valid-feedback, .was-validated\n  .custom-select:valid ~ .valid-tooltip, .custom-select.is-valid ~ .valid-feedback, .custom-select.is-valid ~ .valid-tooltip {\n  display : block;\n}\n\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color : #28A745;\n}\n\n.was-validated .form-check-input:valid ~ .valid-feedback, .was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback, .form-check-input.is-valid ~ .valid-tooltip {\n  display : block;\n}\n\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color : #28A745;\n}\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n  background-color : #71DD8A;\n}\n\n.was-validated .custom-control-input:valid ~ .valid-feedback, .was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback, .custom-control-input.is-valid ~ .valid-tooltip {\n  display : block;\n}\n\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  background-color : #34CE57;\n}\n\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  -webkit-box-shadow : 0 0 0 1px #FFFFFF, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow : 0 0 0 1px #FFFFFF, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color : #28A745;\n}\n.was-validated .custom-file-input:valid ~ .custom-file-label::before, .custom-file-input.is-valid ~ .custom-file-label::before {\n  border-color : inherit;\n}\n\n.was-validated .custom-file-input:valid ~ .valid-feedback, .was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback, .custom-file-input.is-valid ~ .valid-tooltip {\n  display : block;\n}\n\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow : 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.invalid-feedback {\n  display : none;\n  width : 100%;\n  margin-top : 0.25rem;\n  font-size : 80%;\n  color : #DC3545;\n}\n\n.invalid-tooltip {\n  position : absolute;\n  top : 100%;\n  z-index : 5;\n  display : none;\n  max-width : 100%;\n  padding : 0.5rem;\n  margin-top : 0.1rem;\n  font-size : 0.875rem;\n  line-height : 1;\n  color : #FFFFFF;\n  background-color : rgba(220, 53, 69, 0.8);\n  border-radius : 0.2rem;\n}\n\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n.custom-select:invalid, .custom-select.is-invalid {\n  border-color : #DC3545;\n}\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n  .custom-select:invalid:focus, .custom-select.is-invalid:focus {\n  border-color : #DC3545;\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow : 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.was-validated .form-control:invalid ~ .invalid-feedback, .was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback, .form-control.is-invalid ~ .invalid-tooltip, .was-validated\n  .custom-select:invalid ~ .invalid-feedback, .was-validated\n  .custom-select:invalid ~ .invalid-tooltip, .custom-select.is-invalid ~ .invalid-feedback, .custom-select.is-invalid ~ .invalid-tooltip {\n  display : block;\n}\n\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color : #DC3545;\n}\n\n.was-validated .form-check-input:invalid ~ .invalid-feedback, .was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback, .form-check-input.is-invalid ~ .invalid-tooltip {\n  display : block;\n}\n\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color : #DC3545;\n}\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n  background-color : #EFA2A9;\n}\n\n.was-validated .custom-control-input:invalid ~ .invalid-feedback, .was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback, .custom-control-input.is-invalid ~ .invalid-tooltip {\n  display : block;\n}\n\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  background-color : #E4606D;\n}\n\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  -webkit-box-shadow : 0 0 0 1px #FFFFFF, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow : 0 0 0 1px #FFFFFF, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color : #DC3545;\n}\n.was-validated .custom-file-input:invalid ~ .custom-file-label::before, .custom-file-input.is-invalid ~ .custom-file-label::before {\n  border-color : inherit;\n}\n\n.was-validated .custom-file-input:invalid ~ .invalid-feedback, .was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback, .custom-file-input.is-invalid ~ .invalid-tooltip {\n  display : block;\n}\n\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow : 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.form-inline {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-orient : horizontal;\n  -webkit-box-direction : normal;\n  -webkit-flex-flow : row wrap;\n     -moz-box-orient : horizontal;\n     -moz-box-direction : normal;\n      -ms-flex-flow : row wrap;\n          flex-flow : row wrap;\n  -webkit-box-align : center;\n  -webkit-align-items : center;\n     -moz-box-align : center;\n  -ms-flex-align : center;\n          align-items : center;\n}\n.form-inline .form-check {\n  width : 100%;\n}\n@media (min-width: 576px) {\n  .form-inline label {\n    display : -webkit-box;\n    display : -webkit-flex;\n    display :    -moz-box;\n    display : -ms-flexbox;\n    display :         flex;\n    -webkit-box-align : center;\n    -webkit-align-items : center;\n       -moz-box-align : center;\n    -ms-flex-align : center;\n            align-items : center;\n    -webkit-box-pack : center;\n    -webkit-justify-content : center;\n       -moz-box-pack : center;\n    -ms-flex-pack : center;\n            justify-content : center;\n    margin-bottom : 0;\n  }\n  .form-inline .form-group {\n    display : -webkit-box;\n    display : -webkit-flex;\n    display :    -moz-box;\n    display : -ms-flexbox;\n    display :         flex;\n    -webkit-box-flex : 0;\n    -webkit-flex : 0 0 auto;\n       -moz-box-flex : 0;\n        -ms-flex : 0 0 auto;\n            flex : 0 0 auto;\n    -webkit-box-orient : horizontal;\n    -webkit-box-direction : normal;\n    -webkit-flex-flow : row wrap;\n       -moz-box-orient : horizontal;\n       -moz-box-direction : normal;\n        -ms-flex-flow : row wrap;\n            flex-flow : row wrap;\n    -webkit-box-align : center;\n    -webkit-align-items : center;\n       -moz-box-align : center;\n    -ms-flex-align : center;\n            align-items : center;\n    margin-bottom : 0;\n  }\n  .form-inline .form-control {\n    display : inline-block;\n    width : auto;\n    vertical-align : middle;\n  }\n  .form-inline .form-control-plaintext {\n    display : inline-block;\n  }\n  .form-inline .input-group, .form-inline .custom-select {\n    width : auto;\n  }\n  .form-inline .form-check {\n    display : -webkit-box;\n    display : -webkit-flex;\n    display :    -moz-box;\n    display : -ms-flexbox;\n    display :         flex;\n    -webkit-box-align : center;\n    -webkit-align-items : center;\n       -moz-box-align : center;\n    -ms-flex-align : center;\n            align-items : center;\n    -webkit-box-pack : center;\n    -webkit-justify-content : center;\n       -moz-box-pack : center;\n    -ms-flex-pack : center;\n            justify-content : center;\n    width : auto;\n    padding-left : 0;\n  }\n  .form-inline .form-check-input {\n    position : relative;\n    margin-top : 0;\n    margin-right : 0.25rem;\n    margin-left : 0;\n  }\n  .form-inline .custom-control {\n    -webkit-box-align : center;\n    -webkit-align-items : center;\n       -moz-box-align : center;\n    -ms-flex-align : center;\n            align-items : center;\n    -webkit-box-pack : center;\n    -webkit-justify-content : center;\n       -moz-box-pack : center;\n    -ms-flex-pack : center;\n            justify-content : center;\n  }\n  .form-inline .custom-control-label {\n    margin-bottom : 0;\n  }\n}\n\n.btn {\n  display : inline-block;\n  font-weight : 700;\n  text-align : center;\n  white-space : nowrap;\n  vertical-align : middle;\n  -webkit-user-select : none;\n     -moz-user-select : none;\n      -ms-user-select : none;\n          user-select : none;\n  border : 1px solid transparent;\n  padding : 0.8rem 1.5rem;\n  font-size : 1rem;\n  line-height : 1.5;\n  border-radius : 0.25rem;\n  -webkit-transition : color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n          transition : color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n       -o-transition : color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n     -moz-transition : color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n          transition : color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n          transition : color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n  .btn {\n    -webkit-transition : none;\n         -o-transition : none;\n       -moz-transition : none;\n            transition : none;\n  }\n}\n.btn:hover, .btn:focus {\n  text-decoration : none;\n}\n.btn:focus, .btn.focus {\n  outline : 0;\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.btn.disabled, .btn:disabled {\n  opacity : 0.65;\n}\n.btn:not(:disabled):not(.disabled) {\n  cursor : pointer;\n}\n.btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {\n  background-image : none;\n}\n\na.btn.disabled, fieldset:disabled a.btn {\n  pointer-events : none;\n}\n\n.btn-primary {\n  color : #FFFFFF;\n  background-color : #007BFF;\n  border-color : #007BFF;\n}\n.btn-primary:hover {\n  color : #FFFFFF;\n  background-color : #0069D9;\n  border-color : #0062CC;\n}\n.btn-primary:focus, .btn-primary.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-primary.disabled, .btn-primary:disabled {\n  color : #FFFFFF;\n  background-color : #007BFF;\n  border-color : #007BFF;\n}\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\n  color : #FFFFFF;\n  background-color : #0062CC;\n  border-color : #005CBF;\n}\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-secondary {\n  color : #FFFFFF;\n  background-color : #6C757D;\n  border-color : #6C757D;\n}\n.btn-secondary:hover {\n  color : #FFFFFF;\n  background-color : #5A6268;\n  border-color : #545B62;\n}\n.btn-secondary:focus, .btn-secondary.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n.btn-secondary.disabled, .btn-secondary:disabled {\n  color : #FFFFFF;\n  background-color : #6C757D;\n  border-color : #6C757D;\n}\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {\n  color : #FFFFFF;\n  background-color : #545B62;\n  border-color : #4E555B;\n}\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-success {\n  color : #FFFFFF;\n  background-color : #28A745;\n  border-color : #28A745;\n}\n.btn-success:hover {\n  color : #FFFFFF;\n  background-color : #218838;\n  border-color : #1E7E34;\n}\n.btn-success:focus, .btn-success.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-success.disabled, .btn-success:disabled {\n  color : #FFFFFF;\n  background-color : #28A745;\n  border-color : #28A745;\n}\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active, .show > .btn-success.dropdown-toggle {\n  color : #FFFFFF;\n  background-color : #1E7E34;\n  border-color : #1C7430;\n}\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus, .show > .btn-success.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-info {\n  color : #FFFFFF;\n  background-color : #17A2B8;\n  border-color : #17A2B8;\n}\n.btn-info:hover {\n  color : #FFFFFF;\n  background-color : #138496;\n  border-color : #117A8B;\n}\n.btn-info:focus, .btn-info.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-info.disabled, .btn-info:disabled {\n  color : #FFFFFF;\n  background-color : #17A2B8;\n  border-color : #17A2B8;\n}\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active, .show > .btn-info.dropdown-toggle {\n  color : #FFFFFF;\n  background-color : #117A8B;\n  border-color : #10707F;\n}\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus, .show > .btn-info.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-warning {\n  color : #212529;\n  background-color : #FFC107;\n  border-color : #FFC107;\n}\n.btn-warning:hover {\n  color : #212529;\n  background-color : #E0A800;\n  border-color : #D39E00;\n}\n.btn-warning:focus, .btn-warning.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-warning.disabled, .btn-warning:disabled {\n  color : #212529;\n  background-color : #FFC107;\n  border-color : #FFC107;\n}\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active, .show > .btn-warning.dropdown-toggle {\n  color : #212529;\n  background-color : #D39E00;\n  border-color : #C69500;\n}\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-warning.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-danger {\n  color : #FFFFFF;\n  background-color : #DC3545;\n  border-color : #DC3545;\n}\n.btn-danger:hover {\n  color : #FFFFFF;\n  background-color : #C82333;\n  border-color : #BD2130;\n}\n.btn-danger:focus, .btn-danger.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-danger.disabled, .btn-danger:disabled {\n  color : #FFFFFF;\n  background-color : #DC3545;\n  border-color : #DC3545;\n}\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active, .show > .btn-danger.dropdown-toggle {\n  color : #FFFFFF;\n  background-color : #BD2130;\n  border-color : #B21F2D;\n}\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-danger.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-light {\n  color : #212529;\n  background-color : #F8F9FA;\n  border-color : #F8F9FA;\n}\n.btn-light:hover {\n  color : #212529;\n  background-color : #E2E6EA;\n  border-color : #DAE0E5;\n}\n.btn-light:focus, .btn-light.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-light.disabled, .btn-light:disabled {\n  color : #212529;\n  background-color : #F8F9FA;\n  border-color : #F8F9FA;\n}\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active, .show > .btn-light.dropdown-toggle {\n  color : #212529;\n  background-color : #DAE0E5;\n  border-color : #D3D9DF;\n}\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus, .show > .btn-light.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-dark {\n  color : #FFFFFF;\n  background-color : #343A40;\n  border-color : #343A40;\n}\n.btn-dark:hover {\n  color : #FFFFFF;\n  background-color : #23272B;\n  border-color : #1D2124;\n}\n.btn-dark:focus, .btn-dark.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.btn-dark.disabled, .btn-dark:disabled {\n  color : #FFFFFF;\n  background-color : #343A40;\n  border-color : #343A40;\n}\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active, .show > .btn-dark.dropdown-toggle {\n  color : #FFFFFF;\n  background-color : #1D2124;\n  border-color : #171A1D;\n}\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-dark.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-outline-primary {\n  color : #007BFF;\n  background-color : transparent;\n  background-image : none;\n  border-color : #007BFF;\n}\n.btn-outline-primary:hover {\n  color : #FFFFFF;\n  background-color : #007BFF;\n  border-color : #007BFF;\n}\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n  color : #007BFF;\n  background-color : transparent;\n}\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle {\n  color : #FFFFFF;\n  background-color : #007BFF;\n  border-color : #007BFF;\n}\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n}\n\n.btn-outline-secondary {\n  color : #6C757D;\n  background-color : transparent;\n  background-image : none;\n  border-color : #6C757D;\n}\n.btn-outline-secondary:hover {\n  color : #FFFFFF;\n  background-color : #6C757D;\n  border-color : #6C757D;\n}\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n  color : #6C757D;\n  background-color : transparent;\n}\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .show > .btn-outline-secondary.dropdown-toggle {\n  color : #FFFFFF;\n  background-color : #6C757D;\n  border-color : #6C757D;\n}\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-secondary.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n}\n\n.btn-outline-success {\n  color : #28A745;\n  background-color : transparent;\n  background-image : none;\n  border-color : #28A745;\n}\n.btn-outline-success:hover {\n  color : #FFFFFF;\n  background-color : #28A745;\n  border-color : #28A745;\n}\n.btn-outline-success:focus, .btn-outline-success.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n  color : #28A745;\n  background-color : transparent;\n}\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .show > .btn-outline-success.dropdown-toggle {\n  color : #FFFFFF;\n  background-color : #28A745;\n  border-color : #28A745;\n}\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-success.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n}\n\n.btn-outline-info {\n  color : #17A2B8;\n  background-color : transparent;\n  background-image : none;\n  border-color : #17A2B8;\n}\n.btn-outline-info:hover {\n  color : #FFFFFF;\n  background-color : #17A2B8;\n  border-color : #17A2B8;\n}\n.btn-outline-info:focus, .btn-outline-info.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n  color : #17A2B8;\n  background-color : transparent;\n}\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .show > .btn-outline-info.dropdown-toggle {\n  color : #FFFFFF;\n  background-color : #17A2B8;\n  border-color : #17A2B8;\n}\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-info.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n\n.btn-outline-warning {\n  color : #FFC107;\n  background-color : transparent;\n  background-image : none;\n  border-color : #FFC107;\n}\n.btn-outline-warning:hover {\n  color : #212529;\n  background-color : #FFC107;\n  border-color : #FFC107;\n}\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n  color : #FFC107;\n  background-color : transparent;\n}\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .show > .btn-outline-warning.dropdown-toggle {\n  color : #212529;\n  background-color : #FFC107;\n  border-color : #FFC107;\n}\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-warning.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n}\n\n.btn-outline-danger {\n  color : #DC3545;\n  background-color : transparent;\n  background-image : none;\n  border-color : #DC3545;\n}\n.btn-outline-danger:hover {\n  color : #FFFFFF;\n  background-color : #DC3545;\n  border-color : #DC3545;\n}\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n  color : #DC3545;\n  background-color : transparent;\n}\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .show > .btn-outline-danger.dropdown-toggle {\n  color : #FFFFFF;\n  background-color : #DC3545;\n  border-color : #DC3545;\n}\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-danger.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n}\n\n.btn-outline-light {\n  color : #F8F9FA;\n  background-color : transparent;\n  background-image : none;\n  border-color : #F8F9FA;\n}\n.btn-outline-light:hover {\n  color : #212529;\n  background-color : #F8F9FA;\n  border-color : #F8F9FA;\n}\n.btn-outline-light:focus, .btn-outline-light.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n  color : #F8F9FA;\n  background-color : transparent;\n}\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active, .show > .btn-outline-light.dropdown-toggle {\n  color : #212529;\n  background-color : #F8F9FA;\n  border-color : #F8F9FA;\n}\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-light.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n}\n\n.btn-outline-dark {\n  color : #343A40;\n  background-color : transparent;\n  background-image : none;\n  border-color : #343A40;\n}\n.btn-outline-dark:hover {\n  color : #FFFFFF;\n  background-color : #343A40;\n  border-color : #343A40;\n}\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n  color : #343A40;\n  background-color : transparent;\n}\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .show > .btn-outline-dark.dropdown-toggle {\n  color : #FFFFFF;\n  background-color : #343A40;\n  border-color : #343A40;\n}\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-dark.dropdown-toggle:focus {\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n          box-shadow : 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n}\n\n.btn-link {\n  font-weight : 400;\n  color : #007BFF;\n  background-color : transparent;\n}\n.btn-link:hover {\n  color : #0056B3;\n  text-decoration : underline;\n  background-color : transparent;\n  border-color : transparent;\n}\n.btn-link:focus, .btn-link.focus {\n  text-decoration : underline;\n  border-color : transparent;\n  -webkit-box-shadow : none;\n          box-shadow : none;\n}\n.btn-link:disabled, .btn-link.disabled {\n  color : #6C757D;\n  pointer-events : none;\n}\n\n.btn-lg, .btn-group-lg > .btn {\n  padding : 1rem 3rem;\n  font-size : 1.125rem;\n  line-height : 1;\n  border-radius : 0.3rem;\n}\n\n.btn-sm, .btn-group-sm > .btn {\n  padding : 0.5rem 1.1rem;\n  font-size : 0.8rem;\n  line-height : 1.5;\n  border-radius : 0.2rem;\n}\n\n.btn-block {\n  display : block;\n  width : 100%;\n}\n.btn-block + .btn-block {\n  margin-top : 0.5rem;\n}\n\ninput[type='submit'].btn-block, input[type='reset'].btn-block, input[type='button'].btn-block {\n  width : 100%;\n}\n\n.fade {\n  -webkit-transition : opacity 0.15s linear;\n       -o-transition : opacity 0.15s linear;\n     -moz-transition : opacity 0.15s linear;\n          transition : opacity 0.15s linear;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n  .fade {\n    -webkit-transition : none;\n         -o-transition : none;\n       -moz-transition : none;\n            transition : none;\n  }\n}\n.fade:not(.show) {\n  opacity : 0;\n}\n\n.collapse:not(.show) {\n  display : none;\n}\n\n.collapsing {\n  position : relative;\n  height : 0;\n  overflow : hidden;\n  -webkit-transition : height 0.35s ease;\n       -o-transition : height 0.35s ease;\n     -moz-transition : height 0.35s ease;\n          transition : height 0.35s ease;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n  .collapsing {\n    -webkit-transition : none;\n         -o-transition : none;\n       -moz-transition : none;\n            transition : none;\n  }\n}\n\n.dropup, .dropright, .dropdown, .dropleft {\n  position : relative;\n}\n\n.dropdown-toggle::after {\n  display : inline-block;\n  width : 0;\n  height : 0;\n  margin-left : 0.255em;\n  vertical-align : 0.255em;\n  content : '';\n  border-top : 0.3em solid;\n  border-right : 0.3em solid transparent;\n  border-bottom : 0;\n  border-left : 0.3em solid transparent;\n}\n\n.dropdown-toggle:empty::after {\n  margin-left : 0;\n}\n\n.dropdown-menu {\n  position : absolute;\n  top : 100%;\n  left : 0;\n  z-index : 1000;\n  display : none;\n  float : left;\n  min-width : 10rem;\n  padding : 0.5rem 0;\n  margin : 0.125rem 0 0;\n  font-size : 1rem;\n  color : #212529;\n  text-align : left;\n  list-style : none;\n  background-color : #FFFFFF;\n  -webkit-background-clip : padding-box;\n          background-clip : padding-box;\n  border : 1px solid rgba(0, 0, 0, 0.15);\n  border-radius : 0.25rem;\n}\n\n.dropdown-menu-right {\n  right : 0;\n  left : auto;\n}\n\n.dropup .dropdown-menu {\n  top : auto;\n  bottom : 100%;\n  margin-top : 0;\n  margin-bottom : 0.125rem;\n}\n\n.dropup .dropdown-toggle::after {\n  display : inline-block;\n  width : 0;\n  height : 0;\n  margin-left : 0.255em;\n  vertical-align : 0.255em;\n  content : '';\n  border-top : 0;\n  border-right : 0.3em solid transparent;\n  border-bottom : 0.3em solid;\n  border-left : 0.3em solid transparent;\n}\n\n.dropup .dropdown-toggle:empty::after {\n  margin-left : 0;\n}\n\n.dropright .dropdown-menu {\n  top : 0;\n  right : auto;\n  left : 100%;\n  margin-top : 0;\n  margin-left : 0.125rem;\n}\n\n.dropright .dropdown-toggle::after {\n  display : inline-block;\n  width : 0;\n  height : 0;\n  margin-left : 0.255em;\n  vertical-align : 0.255em;\n  content : '';\n  border-top : 0.3em solid transparent;\n  border-right : 0;\n  border-bottom : 0.3em solid transparent;\n  border-left : 0.3em solid;\n}\n\n.dropright .dropdown-toggle:empty::after {\n  margin-left : 0;\n}\n\n.dropright .dropdown-toggle::after {\n  vertical-align : 0;\n}\n\n.dropleft .dropdown-menu {\n  top : 0;\n  right : 100%;\n  left : auto;\n  margin-top : 0;\n  margin-right : 0.125rem;\n}\n\n.dropleft .dropdown-toggle::after {\n  display : inline-block;\n  width : 0;\n  height : 0;\n  margin-left : 0.255em;\n  vertical-align : 0.255em;\n  content : '';\n}\n\n.dropleft .dropdown-toggle::after {\n  display : none;\n}\n\n.dropleft .dropdown-toggle::before {\n  display : inline-block;\n  width : 0;\n  height : 0;\n  margin-right : 0.255em;\n  vertical-align : 0.255em;\n  content : '';\n  border-top : 0.3em solid transparent;\n  border-right : 0.3em solid;\n  border-bottom : 0.3em solid transparent;\n}\n\n.dropleft .dropdown-toggle:empty::after {\n  margin-left : 0;\n}\n\n.dropleft .dropdown-toggle::before {\n  vertical-align : 0;\n}\n\n.dropdown-menu[x-placement^='top'], .dropdown-menu[x-placement^='right'], .dropdown-menu[x-placement^='bottom'], .dropdown-menu[x-placement^='left'] {\n  right : auto;\n  bottom : auto;\n}\n\n.dropdown-divider {\n  height : 0;\n  margin : 0.5rem 0;\n  overflow : hidden;\n  border-top : 1px solid #E9ECEF;\n}\n\n.dropdown-item {\n  display : block;\n  width : 100%;\n  padding : 0.25rem 1.5rem;\n  clear : both;\n  font-weight : 400;\n  color : #212529;\n  text-align : inherit;\n  white-space : nowrap;\n  background-color : transparent;\n  border : 0;\n}\n.dropdown-item:hover, .dropdown-item:focus {\n  color : #16181B;\n  text-decoration : none;\n  background-color : #F8F9FA;\n}\n.dropdown-item.active, .dropdown-item:active {\n  color : #FFFFFF;\n  text-decoration : none;\n  background-color : #007BFF;\n}\n.dropdown-item.disabled, .dropdown-item:disabled {\n  color : #6C757D;\n  background-color : transparent;\n}\n\n.dropdown-menu.show {\n  display : block;\n}\n\n.dropdown-header {\n  display : block;\n  padding : 0.5rem 1.5rem;\n  margin-bottom : 0;\n  font-size : 0.8rem;\n  color : #6C757D;\n  white-space : nowrap;\n}\n\n.dropdown-item-text {\n  display : block;\n  padding : 0.25rem 1.5rem;\n  color : #212529;\n}\n\n.btn-group, .btn-group-vertical {\n  position : relative;\n  display : -webkit-inline-box;\n  display : -webkit-inline-flex;\n  display :    -moz-inline-box;\n  display : -ms-inline-flexbox;\n  display :         inline-flex;\n  vertical-align : middle;\n}\n.btn-group > .btn, .btn-group-vertical > .btn {\n  position : relative;\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 1 auto;\n     -moz-box-flex : 0;\n      -ms-flex : 0 1 auto;\n          flex : 0 1 auto;\n}\n.btn-group > .btn:hover, .btn-group-vertical > .btn:hover {\n  z-index : 1;\n}\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active, .btn-group-vertical > .btn:focus, .btn-group-vertical > .btn:active, .btn-group-vertical > .btn.active {\n  z-index : 1;\n}\n.btn-group .btn + .btn, .btn-group .btn + .btn-group, .btn-group .btn-group + .btn, .btn-group .btn-group + .btn-group, .btn-group-vertical .btn + .btn, .btn-group-vertical .btn + .btn-group, .btn-group-vertical .btn-group + .btn, .btn-group-vertical .btn-group + .btn-group {\n  margin-left : -1px;\n}\n\n.btn-toolbar {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-flex-wrap : wrap;\n      -ms-flex-wrap : wrap;\n          flex-wrap : wrap;\n  -webkit-box-pack : start;\n  -webkit-justify-content : flex-start;\n     -moz-box-pack : start;\n  -ms-flex-pack : start;\n          justify-content : flex-start;\n}\n.btn-toolbar .input-group {\n  width : auto;\n}\n\n.btn-group > .btn:first-child {\n  margin-left : 0;\n}\n\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle), .btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius : 0;\n  border-bottom-right-radius : 0;\n}\n\n.btn-group > .btn:not(:first-child), .btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius : 0;\n  border-bottom-left-radius : 0;\n}\n\n.dropdown-toggle-split {\n  padding-right : 1.125rem;\n  padding-left : 1.125rem;\n}\n.dropdown-toggle-split::after, .dropup .dropdown-toggle-split::after, .dropright .dropdown-toggle-split::after {\n  margin-left : 0;\n}\n.dropleft .dropdown-toggle-split::before {\n  margin-right : 0;\n}\n\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right : 0.825rem;\n  padding-left : 0.825rem;\n}\n\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right : 2.25rem;\n  padding-left : 2.25rem;\n}\n\n.btn-group-vertical {\n  -webkit-box-orient : vertical;\n  -webkit-box-direction : normal;\n  -webkit-flex-direction : column;\n     -moz-box-orient : vertical;\n     -moz-box-direction : normal;\n      -ms-flex-direction : column;\n          flex-direction : column;\n  -webkit-box-align : start;\n  -webkit-align-items : flex-start;\n     -moz-box-align : start;\n  -ms-flex-align : start;\n          align-items : flex-start;\n  -webkit-box-pack : center;\n  -webkit-justify-content : center;\n     -moz-box-pack : center;\n  -ms-flex-pack : center;\n          justify-content : center;\n}\n.btn-group-vertical .btn, .btn-group-vertical .btn-group {\n  width : 100%;\n}\n.btn-group-vertical > .btn + .btn, .btn-group-vertical > .btn + .btn-group, .btn-group-vertical > .btn-group + .btn, .btn-group-vertical > .btn-group + .btn-group {\n  margin-top : -1px;\n  margin-left : 0;\n}\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle), .btn-group-vertical > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius : 0;\n  border-bottom-left-radius : 0;\n}\n.btn-group-vertical > .btn:not(:first-child), .btn-group-vertical > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius : 0;\n  border-top-right-radius : 0;\n}\n\n.btn-group-toggle > .btn, .btn-group-toggle > .btn-group > .btn {\n  margin-bottom : 0;\n}\n.btn-group-toggle > .btn input[type='radio'], .btn-group-toggle > .btn input[type='checkbox'], .btn-group-toggle > .btn-group > .btn input[type='radio'], .btn-group-toggle > .btn-group > .btn input[type='checkbox'] {\n  position : absolute;\n  clip : rect(0, 0, 0, 0);\n  pointer-events : none;\n}\n\n.input-group {\n  position : relative;\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-flex-wrap : wrap;\n      -ms-flex-wrap : wrap;\n          flex-wrap : wrap;\n  -webkit-box-align : stretch;\n  -webkit-align-items : stretch;\n     -moz-box-align : stretch;\n  -ms-flex-align : stretch;\n          align-items : stretch;\n  width : 100%;\n}\n.input-group > .form-control, .input-group > .custom-select, .input-group > .custom-file {\n  position : relative;\n  -webkit-box-flex : 1;\n  -webkit-flex : 1 1 auto;\n     -moz-box-flex : 1;\n      -ms-flex : 1 1 auto;\n          flex : 1 1 auto;\n  width : 1%;\n  margin-bottom : 0;\n}\n.input-group > .form-control:focus, .input-group > .custom-select:focus, .input-group > .custom-file:focus {\n  z-index : 3;\n}\n.input-group > .form-control + .form-control, .input-group > .form-control + .custom-select, .input-group > .form-control + .custom-file, .input-group > .custom-select + .form-control, .input-group > .custom-select + .custom-select, .input-group > .custom-select + .custom-file, .input-group > .custom-file + .form-control, .input-group > .custom-file + .custom-select, .input-group > .custom-file + .custom-file {\n  margin-left : -1px;\n}\n.input-group > .form-control:not(:last-child), .input-group > .custom-select:not(:last-child) {\n  border-top-right-radius : 0;\n  border-bottom-right-radius : 0;\n}\n.input-group > .form-control:not(:first-child), .input-group > .custom-select:not(:first-child) {\n  border-top-left-radius : 0;\n  border-bottom-left-radius : 0;\n}\n.input-group > .custom-file {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-align : center;\n  -webkit-align-items : center;\n     -moz-box-align : center;\n  -ms-flex-align : center;\n          align-items : center;\n}\n.input-group > .custom-file:not(:last-child) .custom-file-label, .input-group > .custom-file:not(:last-child) .custom-file-label::after {\n  border-top-right-radius : 0;\n  border-bottom-right-radius : 0;\n}\n.input-group > .custom-file:not(:first-child) .custom-file-label, .input-group > .custom-file:not(:first-child) .custom-file-label::after {\n  border-top-left-radius : 0;\n  border-bottom-left-radius : 0;\n}\n\n.input-group-prepend, .input-group-append {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n}\n.input-group-prepend .btn, .input-group-append .btn {\n  position : relative;\n  z-index : 2;\n}\n.input-group-prepend .btn + .btn, .input-group-prepend .btn + .input-group-text, .input-group-prepend .input-group-text + .input-group-text, .input-group-prepend .input-group-text + .btn, .input-group-append .btn + .btn, .input-group-append .btn + .input-group-text, .input-group-append .input-group-text + .input-group-text, .input-group-append .input-group-text + .btn {\n  margin-left : -1px;\n}\n\n.input-group-prepend {\n  margin-right : -1px;\n}\n\n.input-group-append {\n  margin-left : -1px;\n}\n\n.input-group-text {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-align : center;\n  -webkit-align-items : center;\n     -moz-box-align : center;\n  -ms-flex-align : center;\n          align-items : center;\n  padding : 0.8rem 1.5rem;\n  margin-bottom : 0;\n  font-size : 1rem;\n  font-weight : 400;\n  line-height : 1.5;\n  color : #495057;\n  text-align : center;\n  white-space : nowrap;\n  background-color : #E9ECEF;\n  border : 1px solid #CED4DA;\n  border-radius : 0.25rem;\n}\n.input-group-text input[type='radio'], .input-group-text input[type='checkbox'] {\n  margin-top : 0;\n}\n\n.input-group > .input-group-prepend > .btn, .input-group > .input-group-prepend > .input-group-text, .input-group > .input-group-append:not(:last-child) > .btn, .input-group > .input-group-append:not(:last-child) > .input-group-text, .input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle), .input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius : 0;\n  border-bottom-right-radius : 0;\n}\n\n.input-group > .input-group-append > .btn, .input-group > .input-group-append > .input-group-text, .input-group > .input-group-prepend:not(:first-child) > .btn, .input-group > .input-group-prepend:not(:first-child) > .input-group-text, .input-group > .input-group-prepend:first-child > .btn:not(:first-child), .input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius : 0;\n  border-bottom-left-radius : 0;\n}\n\n.custom-control {\n  position : relative;\n  display : block;\n  min-height : 1.5rem;\n  padding-left : 1.5rem;\n}\n\n.custom-control-inline {\n  display : -webkit-inline-box;\n  display : -webkit-inline-flex;\n  display :    -moz-inline-box;\n  display : -ms-inline-flexbox;\n  display :         inline-flex;\n  margin-right : 1rem;\n}\n\n.custom-control-input {\n  position : absolute;\n  z-index : -1;\n  opacity : 0;\n}\n.custom-control-input:checked ~ .custom-control-label::before {\n  color : #FFFFFF;\n  background-color : #007BFF;\n}\n.custom-control-input:focus ~ .custom-control-label::before {\n  -webkit-box-shadow : 0 0 0 1px #FFFFFF, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow : 0 0 0 1px #FFFFFF, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-control-input:active ~ .custom-control-label::before {\n  color : #FFFFFF;\n  background-color : #B3D7FF;\n}\n.custom-control-input:disabled ~ .custom-control-label {\n  color : #6C757D;\n}\n.custom-control-input:disabled ~ .custom-control-label::before {\n  background-color : #E9ECEF;\n}\n\n.custom-control-label {\n  margin-bottom : 0;\n}\n.custom-control-label::before {\n  position : absolute;\n  top : 0.25rem;\n  left : 0;\n  display : block;\n  width : 1rem;\n  height : 1rem;\n  pointer-events : none;\n  content : '';\n  -webkit-user-select : none;\n     -moz-user-select : none;\n      -ms-user-select : none;\n          user-select : none;\n  background-color : #DEE2E6;\n}\n.custom-control-label::after {\n  position : absolute;\n  top : 0.25rem;\n  left : 0;\n  display : block;\n  width : 1rem;\n  height : 1rem;\n  content : '';\n  background-repeat : no-repeat;\n  background-position : center center;\n  -webkit-background-size : 50% 50%;\n          background-size : 50% 50%;\n}\n\n.custom-checkbox .custom-control-label::before {\n  border-radius : 0.25rem;\n}\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color : #007BFF;\n}\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image : url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 8 8\\'%3E%3Cpath fill=\\'%23fff\\' d=\\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\\'/%3E%3C/svg%3E');\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  background-color : #007BFF;\n}\n\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image : url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 4 4\\'%3E%3Cpath stroke=\\'%23fff\\' d=\\'M0 2h4\\'/%3E%3C/svg%3E');\n}\n\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color : rgba(0, 123, 255, 0.5);\n}\n\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color : rgba(0, 123, 255, 0.5);\n}\n\n.custom-radio .custom-control-label::before {\n  border-radius : 50%;\n}\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::before {\n  background-color : #007BFF;\n}\n\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image : url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'-4 -4 8 8\\'%3E%3Ccircle r=\\'3\\' fill=\\'%23fff\\'/%3E%3C/svg%3E');\n}\n\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color : rgba(0, 123, 255, 0.5);\n}\n\n.custom-select {\n  display : inline-block;\n  width : 100%;\n  height : -webkit-calc(3.1rem + 2px);\n  height :    -moz-calc(3.1rem + 2px);\n  height :         calc(3.1rem + 2px);\n  padding : 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height : 1.5;\n  color : #495057;\n  vertical-align : middle;\n  background : #FFFFFF url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 4 5\\'%3E%3Cpath fill=\\'%23343a40\\' d=\\'M2 0L0 2h4zm0 5L0 3h4z\\'/%3E%3C/svg%3E') no-repeat right 0.75rem center;\n  -webkit-background-size : 8px 10px;\n          background-size : 8px 10px;\n  border : 1px solid #CED4DA;\n  border-radius : 0.25rem;\n  -webkit-appearance : none;\n     -moz-appearance : none;\n          appearance : none;\n}\n.custom-select:focus {\n  border-color : #80BDFF;\n  outline : 0;\n  -webkit-box-shadow : inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(128, 189, 255, 0.5);\n          box-shadow : inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(128, 189, 255, 0.5);\n}\n.custom-select:focus::-ms-value {\n  color : #495057;\n  background-color : #FFFFFF;\n}\n.custom-select[multiple], .custom-select[size]:not([size='1']) {\n  height : auto;\n  padding-right : 0.75rem;\n  background-image : none;\n}\n.custom-select:disabled {\n  color : #6C757D;\n  background-color : #E9ECEF;\n}\n.custom-select::-ms-expand {\n  opacity : 0;\n}\n\n.custom-select-sm {\n  height : -webkit-calc(2.2rem + 2px);\n  height :    -moz-calc(2.2rem + 2px);\n  height :         calc(2.2rem + 2px);\n  padding-top : 0.375rem;\n  padding-bottom : 0.375rem;\n  font-size : 75%;\n}\n\n.custom-select-lg {\n  height : -webkit-calc(3.125rem + 2px);\n  height :    -moz-calc(3.125rem + 2px);\n  height :         calc(3.125rem + 2px);\n  padding-top : 0.375rem;\n  padding-bottom : 0.375rem;\n  font-size : 125%;\n}\n\n.custom-file {\n  position : relative;\n  display : inline-block;\n  width : 100%;\n  height : -webkit-calc(3.1rem + 2px);\n  height :    -moz-calc(3.1rem + 2px);\n  height :         calc(3.1rem + 2px);\n  margin-bottom : 0;\n}\n\n.custom-file-input {\n  position : relative;\n  z-index : 2;\n  width : 100%;\n  height : -webkit-calc(3.1rem + 2px);\n  height :    -moz-calc(3.1rem + 2px);\n  height :         calc(3.1rem + 2px);\n  margin : 0;\n  opacity : 0;\n}\n.custom-file-input:focus ~ .custom-file-label {\n  border-color : #80BDFF;\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-file-input:focus ~ .custom-file-label::after {\n  border-color : #80BDFF;\n}\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n  content : 'Browse';\n}\n\n.custom-file-label {\n  position : absolute;\n  top : 0;\n  right : 0;\n  left : 0;\n  z-index : 1;\n  height : -webkit-calc(3.1rem + 2px);\n  height :    -moz-calc(3.1rem + 2px);\n  height :         calc(3.1rem + 2px);\n  padding : 0.8rem 1.5rem;\n  line-height : 1.5;\n  color : #495057;\n  background-color : #FFFFFF;\n  border : 1px solid #CED4DA;\n  border-radius : 0.25rem;\n}\n.custom-file-label::after {\n  position : absolute;\n  top : 0;\n  right : 0;\n  bottom : 0;\n  z-index : 3;\n  display : block;\n  height : -webkit-calc(-webkit-calc(3.1rem + 2px) - 1px * 2);\n  height :    -moz-calc(-moz-calc(3.1rem + 2px) - 1px * 2);\n  height :         calc(calc(3.1rem + 2px) - 1px * 2);\n  padding : 0.8rem 1.5rem;\n  line-height : 1.5;\n  color : #495057;\n  content : 'Browse';\n  background-color : #E9ECEF;\n  border-left : 1px solid #CED4DA;\n  border-radius : 0 0.25rem 0.25rem 0;\n}\n\n.custom-range {\n  width : 100%;\n  padding-left : 0;\n  background-color : transparent;\n  -webkit-appearance : none;\n     -moz-appearance : none;\n          appearance : none;\n}\n.custom-range:focus {\n  outline : none;\n}\n.custom-range::-moz-focus-outer {\n  border : 0;\n}\n.custom-range::-webkit-slider-thumb {\n  width : 1rem;\n  height : 1rem;\n  margin-top : -0.25rem;\n  background-color : #007BFF;\n  border : 0;\n  border-radius : 1rem;\n  -webkit-appearance : none;\n          appearance : none;\n}\n.custom-range::-webkit-slider-thumb:focus {\n  outline : none;\n  -webkit-box-shadow : 0 0 0 1px #FFFFFF, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow : 0 0 0 1px #FFFFFF, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-range::-webkit-slider-thumb:active {\n  background-color : #B3D7FF;\n}\n.custom-range::-webkit-slider-runnable-track {\n  width : 100%;\n  height : 0.5rem;\n  color : transparent;\n  cursor : pointer;\n  background-color : #DEE2E6;\n  border-color : transparent;\n  border-radius : 1rem;\n}\n.custom-range::-moz-range-thumb {\n  width : 1rem;\n  height : 1rem;\n  background-color : #007BFF;\n  border : 0;\n  border-radius : 1rem;\n  -moz-appearance : none;\n       appearance : none;\n}\n.custom-range::-moz-range-thumb:focus {\n  outline : none;\n  box-shadow : 0 0 0 1px #FFFFFF, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-range::-moz-range-thumb:active {\n  background-color : #B3D7FF;\n}\n.custom-range::-moz-range-track {\n  width : 100%;\n  height : 0.5rem;\n  color : transparent;\n  cursor : pointer;\n  background-color : #DEE2E6;\n  border-color : transparent;\n  border-radius : 1rem;\n}\n.custom-range::-ms-thumb {\n  width : 1rem;\n  height : 1rem;\n  background-color : #007BFF;\n  border : 0;\n  border-radius : 1rem;\n  appearance : none;\n}\n.custom-range::-ms-thumb:focus {\n  outline : none;\n  box-shadow : 0 0 0 1px #FFFFFF, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.custom-range::-ms-thumb:active {\n  background-color : #B3D7FF;\n}\n.custom-range::-ms-track {\n  width : 100%;\n  height : 0.5rem;\n  color : transparent;\n  cursor : pointer;\n  background-color : transparent;\n  border-color : transparent;\n  border-width : 0.5rem;\n}\n.custom-range::-ms-fill-lower {\n  background-color : #DEE2E6;\n  border-radius : 1rem;\n}\n.custom-range::-ms-fill-upper {\n  margin-right : 15px;\n  background-color : #DEE2E6;\n  border-radius : 1rem;\n}\n\n.nav {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-flex-wrap : wrap;\n      -ms-flex-wrap : wrap;\n          flex-wrap : wrap;\n  padding-left : 0;\n  margin-bottom : 0;\n  list-style : none;\n}\n\n.nav-link {\n  display : block;\n  padding : 0.5rem 1rem;\n}\n.nav-link:hover, .nav-link:focus {\n  text-decoration : none;\n}\n.nav-link.disabled {\n  color : #6C757D;\n}\n\n.nav-tabs {\n  border-bottom : 1px solid #DEE2E6;\n}\n.nav-tabs .nav-item {\n  margin-bottom : -1px;\n}\n.nav-tabs .nav-link {\n  border : 1px solid transparent;\n  border-top-left-radius : 0.25rem;\n  border-top-right-radius : 0.25rem;\n}\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n  border-color : #E9ECEF #E9ECEF #DEE2E6;\n}\n.nav-tabs .nav-link.disabled {\n  color : #6C757D;\n  background-color : transparent;\n  border-color : transparent;\n}\n.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {\n  color : #495057;\n  background-color : #FFFFFF;\n  border-color : #DEE2E6 #DEE2E6 #FFFFFF;\n}\n.nav-tabs .dropdown-menu {\n  margin-top : -1px;\n  border-top-left-radius : 0;\n  border-top-right-radius : 0;\n}\n\n.nav-pills .nav-link {\n  border-radius : 0.25rem;\n}\n\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n  color : #FFFFFF;\n  background-color : #007BFF;\n}\n\n.nav-fill .nav-item {\n  -webkit-box-flex : 1;\n  -webkit-flex : 1 1 auto;\n     -moz-box-flex : 1;\n      -ms-flex : 1 1 auto;\n          flex : 1 1 auto;\n  text-align : center;\n}\n\n.nav-justified .nav-item {\n  -webkit-flex-basis : 0;\n  -ms-flex-preferred-size : 0;\n          flex-basis : 0;\n  -webkit-box-flex : 1;\n  -webkit-flex-grow : 1;\n     -moz-box-flex : 1;\n  -ms-flex-positive : 1;\n          flex-grow : 1;\n  text-align : center;\n}\n\n.tab-content > .tab-pane {\n  display : none;\n}\n\n.tab-content > .active {\n  display : block;\n}\n\n.navbar {\n  position : relative;\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-flex-wrap : wrap;\n      -ms-flex-wrap : wrap;\n          flex-wrap : wrap;\n  -webkit-box-align : center;\n  -webkit-align-items : center;\n     -moz-box-align : center;\n  -ms-flex-align : center;\n          align-items : center;\n  -webkit-box-pack : justify;\n  -webkit-justify-content : space-between;\n     -moz-box-pack : justify;\n  -ms-flex-pack : justify;\n          justify-content : space-between;\n  padding : 0.5rem 1rem;\n}\n.navbar > .container, .navbar > .container-fluid {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-flex-wrap : wrap;\n      -ms-flex-wrap : wrap;\n          flex-wrap : wrap;\n  -webkit-box-align : center;\n  -webkit-align-items : center;\n     -moz-box-align : center;\n  -ms-flex-align : center;\n          align-items : center;\n  -webkit-box-pack : justify;\n  -webkit-justify-content : space-between;\n     -moz-box-pack : justify;\n  -ms-flex-pack : justify;\n          justify-content : space-between;\n}\n\n.navbar-brand {\n  display : inline-block;\n  padding-top : 0.40625rem;\n  padding-bottom : 0.40625rem;\n  margin-right : 1rem;\n  font-size : 1.125rem;\n  line-height : inherit;\n  white-space : nowrap;\n}\n.navbar-brand:hover, .navbar-brand:focus {\n  text-decoration : none;\n}\n\n.navbar-nav {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-orient : vertical;\n  -webkit-box-direction : normal;\n  -webkit-flex-direction : column;\n     -moz-box-orient : vertical;\n     -moz-box-direction : normal;\n      -ms-flex-direction : column;\n          flex-direction : column;\n  padding-left : 0;\n  margin-bottom : 0;\n  list-style : none;\n}\n.navbar-nav .nav-link {\n  padding-right : 0;\n  padding-left : 0;\n}\n.navbar-nav .dropdown-menu {\n  position : static;\n  float : none;\n}\n\n.navbar-text {\n  display : inline-block;\n  padding-top : 0.5rem;\n  padding-bottom : 0.5rem;\n}\n\n.navbar-collapse {\n  -webkit-flex-basis : 100%;\n  -ms-flex-preferred-size : 100%;\n          flex-basis : 100%;\n  -webkit-box-flex : 1;\n  -webkit-flex-grow : 1;\n     -moz-box-flex : 1;\n  -ms-flex-positive : 1;\n          flex-grow : 1;\n  -webkit-box-align : center;\n  -webkit-align-items : center;\n     -moz-box-align : center;\n  -ms-flex-align : center;\n          align-items : center;\n}\n\n.navbar-toggler {\n  padding : 0.25rem 0.75rem;\n  font-size : 1.125rem;\n  line-height : 1;\n  background-color : transparent;\n  border : 1px solid transparent;\n  border-radius : 0.25rem;\n}\n.navbar-toggler:hover, .navbar-toggler:focus {\n  text-decoration : none;\n}\n.navbar-toggler:not(:disabled):not(.disabled) {\n  cursor : pointer;\n}\n\n.navbar-toggler-icon {\n  display : inline-block;\n  width : 1.5em;\n  height : 1.5em;\n  vertical-align : middle;\n  content : '';\n  background : no-repeat center center;\n  -webkit-background-size : 100% 100%;\n          background-size : 100% 100%;\n}\n\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container, .navbar-expand-sm > .container-fluid {\n    padding-right : 0;\n    padding-left : 0;\n  }\n}\n\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -webkit-box-orient : horizontal;\n    -webkit-box-direction : normal;\n    -webkit-flex-flow : row nowrap;\n       -moz-box-orient : horizontal;\n       -moz-box-direction : normal;\n        -ms-flex-flow : row nowrap;\n            flex-flow : row nowrap;\n    -webkit-box-pack : start;\n    -webkit-justify-content : flex-start;\n       -moz-box-pack : start;\n    -ms-flex-pack : start;\n            justify-content : flex-start;\n  }\n  .navbar-expand-sm .navbar-nav {\n    -webkit-box-orient : horizontal;\n    -webkit-box-direction : normal;\n    -webkit-flex-direction : row;\n       -moz-box-orient : horizontal;\n       -moz-box-direction : normal;\n        -ms-flex-direction : row;\n            flex-direction : row;\n  }\n  .navbar-expand-sm .navbar-nav .dropdown-menu {\n    position : absolute;\n  }\n  .navbar-expand-sm .navbar-nav .nav-link {\n    padding-right : 0.5rem;\n    padding-left : 0.5rem;\n  }\n  .navbar-expand-sm > .container, .navbar-expand-sm > .container-fluid {\n    -webkit-flex-wrap : nowrap;\n        -ms-flex-wrap : nowrap;\n            flex-wrap : nowrap;\n  }\n  .navbar-expand-sm .navbar-collapse {\n    display : -webkit-box !important;\n    display : -webkit-flex !important;\n    display :    -moz-box !important;\n    display : -ms-flexbox !important;\n    display :         flex !important;\n    -webkit-flex-basis : auto;\n    -ms-flex-preferred-size : auto;\n            flex-basis : auto;\n  }\n  .navbar-expand-sm .navbar-toggler {\n    display : none;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container, .navbar-expand-md > .container-fluid {\n    padding-right : 0;\n    padding-left : 0;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -webkit-box-orient : horizontal;\n    -webkit-box-direction : normal;\n    -webkit-flex-flow : row nowrap;\n       -moz-box-orient : horizontal;\n       -moz-box-direction : normal;\n        -ms-flex-flow : row nowrap;\n            flex-flow : row nowrap;\n    -webkit-box-pack : start;\n    -webkit-justify-content : flex-start;\n       -moz-box-pack : start;\n    -ms-flex-pack : start;\n            justify-content : flex-start;\n  }\n  .navbar-expand-md .navbar-nav {\n    -webkit-box-orient : horizontal;\n    -webkit-box-direction : normal;\n    -webkit-flex-direction : row;\n       -moz-box-orient : horizontal;\n       -moz-box-direction : normal;\n        -ms-flex-direction : row;\n            flex-direction : row;\n  }\n  .navbar-expand-md .navbar-nav .dropdown-menu {\n    position : absolute;\n  }\n  .navbar-expand-md .navbar-nav .nav-link {\n    padding-right : 0.5rem;\n    padding-left : 0.5rem;\n  }\n  .navbar-expand-md > .container, .navbar-expand-md > .container-fluid {\n    -webkit-flex-wrap : nowrap;\n        -ms-flex-wrap : nowrap;\n            flex-wrap : nowrap;\n  }\n  .navbar-expand-md .navbar-collapse {\n    display : -webkit-box !important;\n    display : -webkit-flex !important;\n    display :    -moz-box !important;\n    display : -ms-flexbox !important;\n    display :         flex !important;\n    -webkit-flex-basis : auto;\n    -ms-flex-preferred-size : auto;\n            flex-basis : auto;\n  }\n  .navbar-expand-md .navbar-toggler {\n    display : none;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container, .navbar-expand-lg > .container-fluid {\n    padding-right : 0;\n    padding-left : 0;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -webkit-box-orient : horizontal;\n    -webkit-box-direction : normal;\n    -webkit-flex-flow : row nowrap;\n       -moz-box-orient : horizontal;\n       -moz-box-direction : normal;\n        -ms-flex-flow : row nowrap;\n            flex-flow : row nowrap;\n    -webkit-box-pack : start;\n    -webkit-justify-content : flex-start;\n       -moz-box-pack : start;\n    -ms-flex-pack : start;\n            justify-content : flex-start;\n  }\n  .navbar-expand-lg .navbar-nav {\n    -webkit-box-orient : horizontal;\n    -webkit-box-direction : normal;\n    -webkit-flex-direction : row;\n       -moz-box-orient : horizontal;\n       -moz-box-direction : normal;\n        -ms-flex-direction : row;\n            flex-direction : row;\n  }\n  .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position : absolute;\n  }\n  .navbar-expand-lg .navbar-nav .nav-link {\n    padding-right : 0.5rem;\n    padding-left : 0.5rem;\n  }\n  .navbar-expand-lg > .container, .navbar-expand-lg > .container-fluid {\n    -webkit-flex-wrap : nowrap;\n        -ms-flex-wrap : nowrap;\n            flex-wrap : nowrap;\n  }\n  .navbar-expand-lg .navbar-collapse {\n    display : -webkit-box !important;\n    display : -webkit-flex !important;\n    display :    -moz-box !important;\n    display : -ms-flexbox !important;\n    display :         flex !important;\n    -webkit-flex-basis : auto;\n    -ms-flex-preferred-size : auto;\n            flex-basis : auto;\n  }\n  .navbar-expand-lg .navbar-toggler {\n    display : none;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container, .navbar-expand-xl > .container-fluid {\n    padding-right : 0;\n    padding-left : 0;\n  }\n}\n\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -webkit-box-orient : horizontal;\n    -webkit-box-direction : normal;\n    -webkit-flex-flow : row nowrap;\n       -moz-box-orient : horizontal;\n       -moz-box-direction : normal;\n        -ms-flex-flow : row nowrap;\n            flex-flow : row nowrap;\n    -webkit-box-pack : start;\n    -webkit-justify-content : flex-start;\n       -moz-box-pack : start;\n    -ms-flex-pack : start;\n            justify-content : flex-start;\n  }\n  .navbar-expand-xl .navbar-nav {\n    -webkit-box-orient : horizontal;\n    -webkit-box-direction : normal;\n    -webkit-flex-direction : row;\n       -moz-box-orient : horizontal;\n       -moz-box-direction : normal;\n        -ms-flex-direction : row;\n            flex-direction : row;\n  }\n  .navbar-expand-xl .navbar-nav .dropdown-menu {\n    position : absolute;\n  }\n  .navbar-expand-xl .navbar-nav .nav-link {\n    padding-right : 0.5rem;\n    padding-left : 0.5rem;\n  }\n  .navbar-expand-xl > .container, .navbar-expand-xl > .container-fluid {\n    -webkit-flex-wrap : nowrap;\n        -ms-flex-wrap : nowrap;\n            flex-wrap : nowrap;\n  }\n  .navbar-expand-xl .navbar-collapse {\n    display : -webkit-box !important;\n    display : -webkit-flex !important;\n    display :    -moz-box !important;\n    display : -ms-flexbox !important;\n    display :         flex !important;\n    -webkit-flex-basis : auto;\n    -ms-flex-preferred-size : auto;\n            flex-basis : auto;\n  }\n  .navbar-expand-xl .navbar-toggler {\n    display : none;\n  }\n}\n\n.navbar-expand {\n  -webkit-box-orient : horizontal;\n  -webkit-box-direction : normal;\n  -webkit-flex-flow : row nowrap;\n     -moz-box-orient : horizontal;\n     -moz-box-direction : normal;\n      -ms-flex-flow : row nowrap;\n          flex-flow : row nowrap;\n  -webkit-box-pack : start;\n  -webkit-justify-content : flex-start;\n     -moz-box-pack : start;\n  -ms-flex-pack : start;\n          justify-content : flex-start;\n}\n.navbar-expand > .container, .navbar-expand > .container-fluid {\n  padding-right : 0;\n  padding-left : 0;\n}\n.navbar-expand .navbar-nav {\n  -webkit-box-orient : horizontal;\n  -webkit-box-direction : normal;\n  -webkit-flex-direction : row;\n     -moz-box-orient : horizontal;\n     -moz-box-direction : normal;\n      -ms-flex-direction : row;\n          flex-direction : row;\n}\n.navbar-expand .navbar-nav .dropdown-menu {\n  position : absolute;\n}\n.navbar-expand .navbar-nav .nav-link {\n  padding-right : 0.5rem;\n  padding-left : 0.5rem;\n}\n.navbar-expand > .container, .navbar-expand > .container-fluid {\n  -webkit-flex-wrap : nowrap;\n      -ms-flex-wrap : nowrap;\n          flex-wrap : nowrap;\n}\n.navbar-expand .navbar-collapse {\n  display : -webkit-box !important;\n  display : -webkit-flex !important;\n  display :    -moz-box !important;\n  display : -ms-flexbox !important;\n  display :         flex !important;\n  -webkit-flex-basis : auto;\n  -ms-flex-preferred-size : auto;\n          flex-basis : auto;\n}\n.navbar-expand .navbar-toggler {\n  display : none;\n}\n\n.navbar-light .navbar-brand {\n  color : rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n  color : rgba(0, 0, 0, 0.9);\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color : rgba(0, 0, 0, 0.5);\n}\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n  color : rgba(0, 0, 0, 0.7);\n}\n.navbar-light .navbar-nav .nav-link.disabled {\n  color : rgba(0, 0, 0, 0.3);\n}\n\n.navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active {\n  color : rgba(0, 0, 0, 0.9);\n}\n\n.navbar-light .navbar-toggler {\n  color : rgba(0, 0, 0, 0.5);\n  border-color : rgba(0, 0, 0, 0.1);\n}\n\n.navbar-light .navbar-toggler-icon {\n  background-image : url('data:image/svg+xml;charset=utf8,%3Csvg viewBox=\\'0 0 30 30\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath stroke=\\'rgba(0, 0, 0, 0.5)\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-miterlimit=\\'10\\' d=\\'M4 7h22M4 15h22M4 23h22\\'/%3E%3C/svg%3E');\n}\n\n.navbar-light .navbar-text {\n  color : rgba(0, 0, 0, 0.5);\n}\n.navbar-light .navbar-text a {\n  color : rgba(0, 0, 0, 0.9);\n}\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n  color : rgba(0, 0, 0, 0.9);\n}\n\n.navbar-dark .navbar-brand {\n  color : #FFFFFF;\n}\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n  color : #FFFFFF;\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color : rgba(255, 255, 255, 0.5);\n}\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n  color : rgba(255, 255, 255, 0.75);\n}\n.navbar-dark .navbar-nav .nav-link.disabled {\n  color : rgba(255, 255, 255, 0.25);\n}\n\n.navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .active > .nav-link, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .nav-link.active {\n  color : #FFFFFF;\n}\n\n.navbar-dark .navbar-toggler {\n  color : rgba(255, 255, 255, 0.5);\n  border-color : rgba(255, 255, 255, 0.1);\n}\n\n.navbar-dark .navbar-toggler-icon {\n  background-image : url('data:image/svg+xml;charset=utf8,%3Csvg viewBox=\\'0 0 30 30\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath stroke=\\'rgba(255, 255, 255, 0.5)\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-miterlimit=\\'10\\' d=\\'M4 7h22M4 15h22M4 23h22\\'/%3E%3C/svg%3E');\n}\n\n.navbar-dark .navbar-text {\n  color : rgba(255, 255, 255, 0.5);\n}\n.navbar-dark .navbar-text a {\n  color : #FFFFFF;\n}\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n  color : #FFFFFF;\n}\n\n.card {\n  position : relative;\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-orient : vertical;\n  -webkit-box-direction : normal;\n  -webkit-flex-direction : column;\n     -moz-box-orient : vertical;\n     -moz-box-direction : normal;\n      -ms-flex-direction : column;\n          flex-direction : column;\n  min-width : 0;\n  word-wrap : break-word;\n  background-color : #FFFFFF;\n  -webkit-background-clip : border-box;\n          background-clip : border-box;\n  border : 1px solid rgba(0, 0, 0, 0.125);\n  border-radius : 0.25rem;\n}\n.card > hr {\n  margin-right : 0;\n  margin-left : 0;\n}\n.card > .list-group:first-child .list-group-item:first-child {\n  border-top-left-radius : 0.25rem;\n  border-top-right-radius : 0.25rem;\n}\n.card > .list-group:last-child .list-group-item:last-child {\n  border-bottom-right-radius : 0.25rem;\n  border-bottom-left-radius : 0.25rem;\n}\n\n.card-body {\n  -webkit-box-flex : 1;\n  -webkit-flex : 1 1 auto;\n     -moz-box-flex : 1;\n      -ms-flex : 1 1 auto;\n          flex : 1 1 auto;\n  padding : 1.25rem;\n}\n\n.card-title {\n  margin-bottom : 0.75rem;\n}\n\n.card-subtitle {\n  margin-top : -0.375rem;\n  margin-bottom : 0;\n}\n\n.card-text:last-child {\n  margin-bottom : 0;\n}\n\n.card-link:hover {\n  text-decoration : none;\n}\n\n.card-link + .card-link {\n  margin-left : 1.25rem;\n}\n\n.card-header {\n  padding : 0.75rem 1.25rem;\n  margin-bottom : 0;\n  background-color : rgba(0, 0, 0, 0.03);\n  border-bottom : 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-header:first-child {\n  border-radius : -webkit-calc(0.25rem - 1px) -webkit-calc(0.25rem - 1px) 0 0;\n  border-radius :    -moz-calc(0.25rem - 1px) -moz-calc(0.25rem - 1px) 0 0;\n  border-radius :         calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n}\n.card-header + .list-group .list-group-item:first-child {\n  border-top : 0;\n}\n\n.card-footer {\n  padding : 0.75rem 1.25rem;\n  background-color : rgba(0, 0, 0, 0.03);\n  border-top : 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-footer:last-child {\n  border-radius : 0 0 -webkit-calc(0.25rem - 1px) -webkit-calc(0.25rem - 1px);\n  border-radius : 0 0 -moz-calc(0.25rem - 1px) -moz-calc(0.25rem - 1px);\n  border-radius : 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n\n.card-header-tabs {\n  margin-right : -0.625rem;\n  margin-bottom : -0.75rem;\n  margin-left : -0.625rem;\n  border-bottom : 0;\n}\n\n.card-header-pills {\n  margin-right : -0.625rem;\n  margin-left : -0.625rem;\n}\n\n.card-img-overlay {\n  position : absolute;\n  top : 0;\n  right : 0;\n  bottom : 0;\n  left : 0;\n  padding : 1.25rem;\n}\n\n.card-img {\n  width : 100%;\n  border-radius : -webkit-calc(0.25rem - 1px);\n  border-radius :    -moz-calc(0.25rem - 1px);\n  border-radius :         calc(0.25rem - 1px);\n}\n\n.card-img-top {\n  width : 100%;\n  border-top-left-radius : -webkit-calc(0.25rem - 1px);\n  border-top-left-radius :    -moz-calc(0.25rem - 1px);\n  border-top-left-radius :         calc(0.25rem - 1px);\n  border-top-right-radius : -webkit-calc(0.25rem - 1px);\n  border-top-right-radius :    -moz-calc(0.25rem - 1px);\n  border-top-right-radius :         calc(0.25rem - 1px);\n}\n\n.card-img-bottom {\n  width : 100%;\n  border-bottom-right-radius : -webkit-calc(0.25rem - 1px);\n  border-bottom-right-radius :    -moz-calc(0.25rem - 1px);\n  border-bottom-right-radius :         calc(0.25rem - 1px);\n  border-bottom-left-radius : -webkit-calc(0.25rem - 1px);\n  border-bottom-left-radius :    -moz-calc(0.25rem - 1px);\n  border-bottom-left-radius :         calc(0.25rem - 1px);\n}\n\n.card-deck {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-orient : vertical;\n  -webkit-box-direction : normal;\n  -webkit-flex-direction : column;\n     -moz-box-orient : vertical;\n     -moz-box-direction : normal;\n      -ms-flex-direction : column;\n          flex-direction : column;\n}\n.card-deck .card {\n  margin-bottom : 15px;\n}\n@media (min-width: 576px) {\n  .card-deck {\n    -webkit-box-orient : horizontal;\n    -webkit-box-direction : normal;\n    -webkit-flex-flow : row wrap;\n       -moz-box-orient : horizontal;\n       -moz-box-direction : normal;\n        -ms-flex-flow : row wrap;\n            flex-flow : row wrap;\n    margin-right : -15px;\n    margin-left : -15px;\n  }\n  .card-deck .card {\n    display : -webkit-box;\n    display : -webkit-flex;\n    display :    -moz-box;\n    display : -ms-flexbox;\n    display :         flex;\n    -webkit-box-flex : 1;\n    -webkit-flex : 1 0 0;\n       -moz-box-flex : 1;\n        -ms-flex : 1 0 0;\n            flex : 1 0 0;\n    -webkit-box-orient : vertical;\n    -webkit-box-direction : normal;\n    -webkit-flex-direction : column;\n       -moz-box-orient : vertical;\n       -moz-box-direction : normal;\n        -ms-flex-direction : column;\n            flex-direction : column;\n    margin-right : 15px;\n    margin-bottom : 0;\n    margin-left : 15px;\n  }\n}\n\n.card-group {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-orient : vertical;\n  -webkit-box-direction : normal;\n  -webkit-flex-direction : column;\n     -moz-box-orient : vertical;\n     -moz-box-direction : normal;\n      -ms-flex-direction : column;\n          flex-direction : column;\n}\n.card-group > .card {\n  margin-bottom : 15px;\n}\n@media (min-width: 576px) {\n  .card-group {\n    -webkit-box-orient : horizontal;\n    -webkit-box-direction : normal;\n    -webkit-flex-flow : row wrap;\n       -moz-box-orient : horizontal;\n       -moz-box-direction : normal;\n        -ms-flex-flow : row wrap;\n            flex-flow : row wrap;\n  }\n  .card-group > .card {\n    -webkit-box-flex : 1;\n    -webkit-flex : 1 0 0;\n       -moz-box-flex : 1;\n        -ms-flex : 1 0 0;\n            flex : 1 0 0;\n    margin-bottom : 0;\n  }\n  .card-group > .card + .card {\n    margin-left : 0;\n    border-left : 0;\n  }\n  .card-group > .card:first-child {\n    border-top-right-radius : 0;\n    border-bottom-right-radius : 0;\n  }\n  .card-group > .card:first-child .card-img-top, .card-group > .card:first-child .card-header {\n    border-top-right-radius : 0;\n  }\n  .card-group > .card:first-child .card-img-bottom, .card-group > .card:first-child .card-footer {\n    border-bottom-right-radius : 0;\n  }\n  .card-group > .card:last-child {\n    border-top-left-radius : 0;\n    border-bottom-left-radius : 0;\n  }\n  .card-group > .card:last-child .card-img-top, .card-group > .card:last-child .card-header {\n    border-top-left-radius : 0;\n  }\n  .card-group > .card:last-child .card-img-bottom, .card-group > .card:last-child .card-footer {\n    border-bottom-left-radius : 0;\n  }\n  .card-group > .card:only-child {\n    border-radius : 0.25rem;\n  }\n  .card-group > .card:only-child .card-img-top, .card-group > .card:only-child .card-header {\n    border-top-left-radius : 0.25rem;\n    border-top-right-radius : 0.25rem;\n  }\n  .card-group > .card:only-child .card-img-bottom, .card-group > .card:only-child .card-footer {\n    border-bottom-right-radius : 0.25rem;\n    border-bottom-left-radius : 0.25rem;\n  }\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\n    border-radius : 0;\n  }\n  .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top, .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom, .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header, .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {\n    border-radius : 0;\n  }\n}\n\n.card-columns .card {\n  margin-bottom : 0.75rem;\n}\n\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count : 3;\n       -moz-column-count : 3;\n            column-count : 3;\n    -webkit-column-gap : 1.25rem;\n       -moz-column-gap : 1.25rem;\n            column-gap : 1.25rem;\n    orphans : 1;\n    widows : 1;\n  }\n  .card-columns .card {\n    display : inline-block;\n    width : 100%;\n  }\n}\n\n.accordion .card:not(:first-of-type):not(:last-of-type) {\n  border-bottom : 0;\n  border-radius : 0;\n}\n\n.accordion .card:not(:first-of-type) .card-header:first-child {\n  border-radius : 0;\n}\n\n.accordion .card:first-of-type {\n  border-bottom : 0;\n  border-bottom-right-radius : 0;\n  border-bottom-left-radius : 0;\n}\n\n.accordion .card:last-of-type {\n  border-top-left-radius : 0;\n  border-top-right-radius : 0;\n}\n\n.breadcrumb {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-flex-wrap : wrap;\n      -ms-flex-wrap : wrap;\n          flex-wrap : wrap;\n  padding : 0.75rem 1rem;\n  margin-bottom : 1rem;\n  list-style : none;\n  background-color : #E9ECEF;\n  border-radius : 0.25rem;\n}\n\n.breadcrumb-item + .breadcrumb-item {\n  padding-left : 0.5rem;\n}\n.breadcrumb-item + .breadcrumb-item::before {\n  display : inline-block;\n  padding-right : 0.5rem;\n  color : #6C757D;\n  content : '/';\n}\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration : underline;\n}\n\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration : none;\n}\n\n.breadcrumb-item.active {\n  color : #6C757D;\n}\n\n.pagination {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  padding-left : 0;\n  list-style : none;\n  border-radius : 0.25rem;\n}\n\n.page-link {\n  position : relative;\n  display : block;\n  padding : 0.5rem 0.75rem;\n  margin-left : -1px;\n  line-height : 1.25;\n  color : #007BFF;\n  background-color : #FFFFFF;\n  border : 1px solid #DEE2E6;\n}\n.page-link:hover {\n  z-index : 2;\n  color : #0056B3;\n  text-decoration : none;\n  background-color : #E9ECEF;\n  border-color : #DEE2E6;\n}\n.page-link:focus {\n  z-index : 2;\n  outline : 0;\n  -webkit-box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow : 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.page-link:not(:disabled):not(.disabled) {\n  cursor : pointer;\n}\n\n.page-item:first-child .page-link {\n  margin-left : 0;\n  border-top-left-radius : 0.25rem;\n  border-bottom-left-radius : 0.25rem;\n}\n\n.page-item:last-child .page-link {\n  border-top-right-radius : 0.25rem;\n  border-bottom-right-radius : 0.25rem;\n}\n\n.page-item.active .page-link {\n  z-index : 1;\n  color : #FFFFFF;\n  background-color : #007BFF;\n  border-color : #007BFF;\n}\n\n.page-item.disabled .page-link {\n  color : #6C757D;\n  pointer-events : none;\n  cursor : auto;\n  background-color : #FFFFFF;\n  border-color : #DEE2E6;\n}\n\n.pagination-lg .page-link {\n  padding : 0.75rem 1.5rem;\n  font-size : 1.125rem;\n  line-height : 1;\n}\n\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius : 0.3rem;\n  border-bottom-left-radius : 0.3rem;\n}\n\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius : 0.3rem;\n  border-bottom-right-radius : 0.3rem;\n}\n\n.pagination-sm .page-link {\n  padding : 0.25rem 0.5rem;\n  font-size : 0.8rem;\n  line-height : 1.5;\n}\n\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius : 0.2rem;\n  border-bottom-left-radius : 0.2rem;\n}\n\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius : 0.2rem;\n  border-bottom-right-radius : 0.2rem;\n}\n\n.badge {\n  display : inline-block;\n  padding : 0.25em 0.4em;\n  font-size : 75%;\n  font-weight : 700;\n  line-height : 1;\n  text-align : center;\n  white-space : nowrap;\n  vertical-align : baseline;\n  border-radius : 0.25rem;\n}\n.badge:empty {\n  display : none;\n}\n\n.btn .badge {\n  position : relative;\n  top : -1px;\n}\n\n.badge-pill {\n  padding-right : 0.6em;\n  padding-left : 0.6em;\n  border-radius : 10rem;\n}\n\n.badge-primary {\n  color : #FFFFFF;\n  background-color : #007BFF;\n}\n.badge-primary[href]:hover, .badge-primary[href]:focus {\n  color : #FFFFFF;\n  text-decoration : none;\n  background-color : #0062CC;\n}\n\n.badge-secondary {\n  color : #FFFFFF;\n  background-color : #6C757D;\n}\n.badge-secondary[href]:hover, .badge-secondary[href]:focus {\n  color : #FFFFFF;\n  text-decoration : none;\n  background-color : #545B62;\n}\n\n.badge-success {\n  color : #FFFFFF;\n  background-color : #28A745;\n}\n.badge-success[href]:hover, .badge-success[href]:focus {\n  color : #FFFFFF;\n  text-decoration : none;\n  background-color : #1E7E34;\n}\n\n.badge-info {\n  color : #FFFFFF;\n  background-color : #17A2B8;\n}\n.badge-info[href]:hover, .badge-info[href]:focus {\n  color : #FFFFFF;\n  text-decoration : none;\n  background-color : #117A8B;\n}\n\n.badge-warning {\n  color : #212529;\n  background-color : #FFC107;\n}\n.badge-warning[href]:hover, .badge-warning[href]:focus {\n  color : #212529;\n  text-decoration : none;\n  background-color : #D39E00;\n}\n\n.badge-danger {\n  color : #FFFFFF;\n  background-color : #DC3545;\n}\n.badge-danger[href]:hover, .badge-danger[href]:focus {\n  color : #FFFFFF;\n  text-decoration : none;\n  background-color : #BD2130;\n}\n\n.badge-light {\n  color : #212529;\n  background-color : #F8F9FA;\n}\n.badge-light[href]:hover, .badge-light[href]:focus {\n  color : #212529;\n  text-decoration : none;\n  background-color : #DAE0E5;\n}\n\n.badge-dark {\n  color : #FFFFFF;\n  background-color : #343A40;\n}\n.badge-dark[href]:hover, .badge-dark[href]:focus {\n  color : #FFFFFF;\n  text-decoration : none;\n  background-color : #1D2124;\n}\n\n.jumbotron {\n  padding : 2rem 1rem;\n  margin-bottom : 2rem;\n  background-color : #E9ECEF;\n  border-radius : 0.3rem;\n}\n@media (min-width: 576px) {\n  .jumbotron {\n    padding : 4rem 2rem;\n  }\n}\n\n.jumbotron-fluid {\n  padding-right : 0;\n  padding-left : 0;\n  border-radius : 0;\n}\n\n.alert {\n  position : relative;\n  padding : 0.75rem 1.25rem;\n  margin-bottom : 1rem;\n  border : 1px solid transparent;\n  border-radius : 0.25rem;\n}\n\n.alert-heading {\n  color : inherit;\n}\n\n.alert-link {\n  font-weight : 700;\n}\n\n.alert-dismissible {\n  padding-right : 4rem;\n}\n.alert-dismissible .close {\n  position : absolute;\n  top : 0;\n  right : 0;\n  padding : 0.75rem 1.25rem;\n  color : inherit;\n}\n\n.alert-primary {\n  color : #004085;\n  background-color : #CCE5FF;\n  border-color : #B8DAFF;\n}\n.alert-primary hr {\n  border-top-color : #9FCDFF;\n}\n.alert-primary .alert-link {\n  color : #002752;\n}\n\n.alert-secondary {\n  color : #383D41;\n  background-color : #E2E3E5;\n  border-color : #D6D8DB;\n}\n.alert-secondary hr {\n  border-top-color : #C8CBCF;\n}\n.alert-secondary .alert-link {\n  color : #202326;\n}\n\n.alert-success {\n  color : #155724;\n  background-color : #D4EDDA;\n  border-color : #C3E6CB;\n}\n.alert-success hr {\n  border-top-color : #B1DFBB;\n}\n.alert-success .alert-link {\n  color : #0B2E13;\n}\n\n.alert-info {\n  color : #0C5460;\n  background-color : #D1ECF1;\n  border-color : #BEE5EB;\n}\n.alert-info hr {\n  border-top-color : #ABDDE5;\n}\n.alert-info .alert-link {\n  color : #062C33;\n}\n\n.alert-warning {\n  color : #856404;\n  background-color : #FFF3CD;\n  border-color : #FFEEBA;\n}\n.alert-warning hr {\n  border-top-color : #FFE8A1;\n}\n.alert-warning .alert-link {\n  color : #533F03;\n}\n\n.alert-danger {\n  color : #721C24;\n  background-color : #F8D7DA;\n  border-color : #F5C6CB;\n}\n.alert-danger hr {\n  border-top-color : #F1B0B7;\n}\n.alert-danger .alert-link {\n  color : #491217;\n}\n\n.alert-light {\n  color : #818182;\n  background-color : #FEFEFE;\n  border-color : #FDFDFE;\n}\n.alert-light hr {\n  border-top-color : #ECECF6;\n}\n.alert-light .alert-link {\n  color : #686868;\n}\n\n.alert-dark {\n  color : #1B1E21;\n  background-color : #D6D8D9;\n  border-color : #C6C8CA;\n}\n.alert-dark hr {\n  border-top-color : #B9BBBE;\n}\n.alert-dark .alert-link {\n  color : #040505;\n}\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position : 1rem 0;\n  }\n  to {\n    background-position : 0 0;\n  }\n}\n\n@-moz-keyframes progress-bar-stripes {\n  from {\n    background-position : 1rem 0;\n  }\n  to {\n    background-position : 0 0;\n  }\n}\n\n@-o-keyframes progress-bar-stripes {\n  from {\n    background-position : 1rem 0;\n  }\n  to {\n    background-position : 0 0;\n  }\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position : 1rem 0;\n  }\n  to {\n    background-position : 0 0;\n  }\n}\n\n.progress {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  height : 1rem;\n  overflow : hidden;\n  font-size : 0.75rem;\n  background-color : #E9ECEF;\n  border-radius : 0.25rem;\n}\n\n.progress-bar {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-orient : vertical;\n  -webkit-box-direction : normal;\n  -webkit-flex-direction : column;\n     -moz-box-orient : vertical;\n     -moz-box-direction : normal;\n      -ms-flex-direction : column;\n          flex-direction : column;\n  -webkit-box-pack : center;\n  -webkit-justify-content : center;\n     -moz-box-pack : center;\n  -ms-flex-pack : center;\n          justify-content : center;\n  color : #FFFFFF;\n  text-align : center;\n  white-space : nowrap;\n  background-color : #007BFF;\n  -webkit-transition : width 0.6s ease;\n       -o-transition : width 0.6s ease;\n     -moz-transition : width 0.6s ease;\n          transition : width 0.6s ease;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n  .progress-bar {\n    -webkit-transition : none;\n         -o-transition : none;\n       -moz-transition : none;\n            transition : none;\n  }\n}\n\n.progress-bar-striped {\n  background-image : -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image :    -moz-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image :      -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image :         linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  -webkit-background-size : 1rem 1rem;\n          background-size : 1rem 1rem;\n}\n\n.progress-bar-animated {\n  -webkit-animation : progress-bar-stripes 1s linear infinite;\n     -moz-animation : progress-bar-stripes 1s linear infinite;\n       -o-animation : progress-bar-stripes 1s linear infinite;\n          animation : progress-bar-stripes 1s linear infinite;\n}\n\n.media {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-align : start;\n  -webkit-align-items : flex-start;\n     -moz-box-align : start;\n  -ms-flex-align : start;\n          align-items : flex-start;\n}\n\n.media-body {\n  -webkit-box-flex : 1;\n  -webkit-flex : 1;\n     -moz-box-flex : 1;\n      -ms-flex : 1;\n          flex : 1;\n}\n\n.list-group {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-orient : vertical;\n  -webkit-box-direction : normal;\n  -webkit-flex-direction : column;\n     -moz-box-orient : vertical;\n     -moz-box-direction : normal;\n      -ms-flex-direction : column;\n          flex-direction : column;\n  padding-left : 0;\n  margin-bottom : 0;\n}\n\n.list-group-item-action {\n  width : 100%;\n  color : #495057;\n  text-align : inherit;\n}\n.list-group-item-action:hover, .list-group-item-action:focus {\n  color : #495057;\n  text-decoration : none;\n  background-color : #F8F9FA;\n}\n.list-group-item-action:active {\n  color : #212529;\n  background-color : #E9ECEF;\n}\n\n.list-group-item {\n  position : relative;\n  display : block;\n  padding : 0.75rem 1.25rem;\n  margin-bottom : -1px;\n  background-color : #FFFFFF;\n  border : 1px solid rgba(0, 0, 0, 0.125);\n}\n.list-group-item:first-child {\n  border-top-left-radius : 0.25rem;\n  border-top-right-radius : 0.25rem;\n}\n.list-group-item:last-child {\n  margin-bottom : 0;\n  border-bottom-right-radius : 0.25rem;\n  border-bottom-left-radius : 0.25rem;\n}\n.list-group-item:hover, .list-group-item:focus {\n  z-index : 1;\n  text-decoration : none;\n}\n.list-group-item.disabled, .list-group-item:disabled {\n  color : #6C757D;\n  background-color : #FFFFFF;\n}\n.list-group-item.active {\n  z-index : 2;\n  color : #FFFFFF;\n  background-color : #007BFF;\n  border-color : #007BFF;\n}\n\n.list-group-flush .list-group-item {\n  border-right : 0;\n  border-left : 0;\n  border-radius : 0;\n}\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top : 0;\n}\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom : 0;\n}\n\n.list-group-item-primary {\n  color : #004085;\n  background-color : #B8DAFF;\n}\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n  color : #004085;\n  background-color : #9FCDFF;\n}\n.list-group-item-primary.list-group-item-action.active {\n  color : #FFFFFF;\n  background-color : #004085;\n  border-color : #004085;\n}\n\n.list-group-item-secondary {\n  color : #383D41;\n  background-color : #D6D8DB;\n}\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n  color : #383D41;\n  background-color : #C8CBCF;\n}\n.list-group-item-secondary.list-group-item-action.active {\n  color : #FFFFFF;\n  background-color : #383D41;\n  border-color : #383D41;\n}\n\n.list-group-item-success {\n  color : #155724;\n  background-color : #C3E6CB;\n}\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n  color : #155724;\n  background-color : #B1DFBB;\n}\n.list-group-item-success.list-group-item-action.active {\n  color : #FFFFFF;\n  background-color : #155724;\n  border-color : #155724;\n}\n\n.list-group-item-info {\n  color : #0C5460;\n  background-color : #BEE5EB;\n}\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n  color : #0C5460;\n  background-color : #ABDDE5;\n}\n.list-group-item-info.list-group-item-action.active {\n  color : #FFFFFF;\n  background-color : #0C5460;\n  border-color : #0C5460;\n}\n\n.list-group-item-warning {\n  color : #856404;\n  background-color : #FFEEBA;\n}\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n  color : #856404;\n  background-color : #FFE8A1;\n}\n.list-group-item-warning.list-group-item-action.active {\n  color : #FFFFFF;\n  background-color : #856404;\n  border-color : #856404;\n}\n\n.list-group-item-danger {\n  color : #721C24;\n  background-color : #F5C6CB;\n}\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n  color : #721C24;\n  background-color : #F1B0B7;\n}\n.list-group-item-danger.list-group-item-action.active {\n  color : #FFFFFF;\n  background-color : #721C24;\n  border-color : #721C24;\n}\n\n.list-group-item-light {\n  color : #818182;\n  background-color : #FDFDFE;\n}\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n  color : #818182;\n  background-color : #ECECF6;\n}\n.list-group-item-light.list-group-item-action.active {\n  color : #FFFFFF;\n  background-color : #818182;\n  border-color : #818182;\n}\n\n.list-group-item-dark {\n  color : #1B1E21;\n  background-color : #C6C8CA;\n}\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n  color : #1B1E21;\n  background-color : #B9BBBE;\n}\n.list-group-item-dark.list-group-item-action.active {\n  color : #FFFFFF;\n  background-color : #1B1E21;\n  border-color : #1B1E21;\n}\n\n.close {\n  float : right;\n  font-size : 1.5rem;\n  font-weight : 700;\n  line-height : 1;\n  color : #000000;\n  text-shadow : 0 1px 0 #FFFFFF;\n  opacity : 0.5;\n}\n.close:hover, .close:focus {\n  color : #000000;\n  text-decoration : none;\n  opacity : 0.75;\n}\n.close:not(:disabled):not(.disabled) {\n  cursor : pointer;\n}\n\nbutton.close {\n  padding : 0;\n  background-color : transparent;\n  border : 0;\n  -webkit-appearance : none;\n}\n\n.modal-open {\n  overflow : hidden;\n}\n\n.modal {\n  position : fixed;\n  top : 0;\n  right : 0;\n  bottom : 0;\n  left : 0;\n  z-index : 1050;\n  display : none;\n  overflow : hidden;\n  outline : 0;\n}\n.modal-open .modal {\n  overflow-x : hidden;\n  overflow-y : auto;\n}\n\n.modal-dialog {\n  position : relative;\n  width : auto;\n  margin : 0.5rem;\n  pointer-events : none;\n}\n.modal.fade .modal-dialog {\n  -webkit-transition : -webkit-transform 0.3s ease-out;\n          transition : -webkit-transform 0.3s ease-out;\n       -o-transition :      -o-transform 0.3s ease-out;\n     -moz-transition :         transform 0.3s ease-out, -moz-transform 0.3s ease-out;\n          transition :         transform 0.3s ease-out;\n          transition :         transform 0.3s ease-out, -webkit-transform 0.3s ease-out, -moz-transform 0.3s ease-out, -o-transform 0.3s ease-out;\n  -webkit-transform : translate(0, -25%);\n     -moz-transform : translate(0, -25%);\n      -ms-transform : translate(0, -25%);\n       -o-transform : translate(0, -25%);\n          transform : translate(0, -25%);\n}\n@media screen and (prefers-reduced-motion: reduce) {\n  .modal.fade .modal-dialog {\n    -webkit-transition : none;\n         -o-transition : none;\n       -moz-transition : none;\n            transition : none;\n  }\n}\n.modal.show .modal-dialog {\n  -webkit-transform : translate(0, 0);\n     -moz-transform : translate(0, 0);\n      -ms-transform : translate(0, 0);\n       -o-transform : translate(0, 0);\n          transform : translate(0, 0);\n}\n\n.modal-dialog-centered {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-align : center;\n  -webkit-align-items : center;\n     -moz-box-align : center;\n  -ms-flex-align : center;\n          align-items : center;\n  min-height : -webkit-calc(100% - (0.5rem * 2));\n  min-height :    -moz-calc(100% - (0.5rem * 2));\n  min-height :         calc(100% - (0.5rem * 2));\n}\n\n.modal-content {\n  position : relative;\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-orient : vertical;\n  -webkit-box-direction : normal;\n  -webkit-flex-direction : column;\n     -moz-box-orient : vertical;\n     -moz-box-direction : normal;\n      -ms-flex-direction : column;\n          flex-direction : column;\n  width : 100%;\n  pointer-events : auto;\n  background-color : #FFFFFF;\n  -webkit-background-clip : padding-box;\n          background-clip : padding-box;\n  border : 1px solid rgba(0, 0, 0, 0.2);\n  border-radius : 0;\n  outline : 0;\n}\n\n.modal-backdrop {\n  position : fixed;\n  top : 0;\n  right : 0;\n  bottom : 0;\n  left : 0;\n  z-index : 1040;\n  background-color : #000000;\n}\n.modal-backdrop.fade {\n  opacity : 0;\n}\n.modal-backdrop.show {\n  opacity : 0.5;\n}\n\n.modal-header {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-align : start;\n  -webkit-align-items : flex-start;\n     -moz-box-align : start;\n  -ms-flex-align : start;\n          align-items : flex-start;\n  -webkit-box-pack : justify;\n  -webkit-justify-content : space-between;\n     -moz-box-pack : justify;\n  -ms-flex-pack : justify;\n          justify-content : space-between;\n  padding : 1rem;\n  border-bottom : 1px solid transparent;\n  border-top-left-radius : 0;\n  border-top-right-radius : 0;\n}\n.modal-header .close {\n  padding : 1rem;\n  margin : -1rem -1rem -1rem auto;\n}\n\n.modal-title {\n  margin-bottom : 0;\n  line-height : 1.5;\n}\n\n.modal-body {\n  position : relative;\n  -webkit-box-flex : 1;\n  -webkit-flex : 1 1 auto;\n     -moz-box-flex : 1;\n      -ms-flex : 1 1 auto;\n          flex : 1 1 auto;\n  padding : 1rem;\n}\n\n.modal-footer {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-align : center;\n  -webkit-align-items : center;\n     -moz-box-align : center;\n  -ms-flex-align : center;\n          align-items : center;\n  -webkit-box-pack : end;\n  -webkit-justify-content : flex-end;\n     -moz-box-pack : end;\n  -ms-flex-pack : end;\n          justify-content : flex-end;\n  padding : 1rem;\n  border-top : 1px solid transparent;\n}\n.modal-footer > :not(:first-child) {\n  margin-left : 0.25rem;\n}\n.modal-footer > :not(:last-child) {\n  margin-right : 0.25rem;\n}\n\n.modal-scrollbar-measure {\n  position : absolute;\n  top : -9999px;\n  width : 50px;\n  height : 50px;\n  overflow : scroll;\n}\n\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width : 500px;\n    margin : 1.75rem auto;\n  }\n  .modal-dialog-centered {\n    min-height : -webkit-calc(100% - (1.75rem * 2));\n    min-height :    -moz-calc(100% - (1.75rem * 2));\n    min-height :         calc(100% - (1.75rem * 2));\n  }\n  .modal-sm {\n    max-width : 300px;\n  }\n}\n\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width : 970px;\n  }\n}\n\n.tooltip {\n  position : absolute;\n  z-index : 1070;\n  display : block;\n  margin : 0;\n  font-family : 'Comfortaa', 'Roboto', 'Helvetica Neue', Arial, sans-serif;\n  font-style : normal;\n  font-weight : 400;\n  line-height : 1.5;\n  text-align : left;\n  text-align : start;\n  text-decoration : none;\n  text-shadow : none;\n  text-transform : none;\n  letter-spacing : normal;\n  word-break : normal;\n  word-spacing : normal;\n  white-space : normal;\n  line-break : auto;\n  font-size : 0.8rem;\n  word-wrap : break-word;\n  opacity : 0;\n}\n.tooltip.show {\n  opacity : 0.9;\n}\n.tooltip .arrow {\n  position : absolute;\n  display : block;\n  width : 0.8rem;\n  height : 0.4rem;\n}\n.tooltip .arrow::before {\n  position : absolute;\n  content : '';\n  border-color : transparent;\n  border-style : solid;\n}\n\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^='top'] {\n  padding : 0.4rem 0;\n}\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^='top'] .arrow {\n  bottom : 0;\n}\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^='top'] .arrow::before {\n  top : 0;\n  border-width : 0.4rem 0.4rem 0;\n  border-top-color : #000000;\n}\n\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^='right'] {\n  padding : 0 0.4rem;\n}\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^='right'] .arrow {\n  left : 0;\n  width : 0.4rem;\n  height : 0.8rem;\n}\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^='right'] .arrow::before {\n  right : 0;\n  border-width : 0.4rem 0.4rem 0.4rem 0;\n  border-right-color : #000000;\n}\n\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^='bottom'] {\n  padding : 0.4rem 0;\n}\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^='bottom'] .arrow {\n  top : 0;\n}\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^='bottom'] .arrow::before {\n  bottom : 0;\n  border-width : 0 0.4rem 0.4rem;\n  border-bottom-color : #000000;\n}\n\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^='left'] {\n  padding : 0 0.4rem;\n}\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^='left'] .arrow {\n  right : 0;\n  width : 0.4rem;\n  height : 0.8rem;\n}\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^='left'] .arrow::before {\n  left : 0;\n  border-width : 0.4rem 0 0.4rem 0.4rem;\n  border-left-color : #000000;\n}\n\n.tooltip-inner {\n  max-width : 200px;\n  padding : 0.25rem 0.5rem;\n  color : #FFFFFF;\n  text-align : center;\n  background-color : #000000;\n  border-radius : 0.25rem;\n}\n\n.popover {\n  position : absolute;\n  top : 0;\n  left : 0;\n  z-index : 1060;\n  display : block;\n  max-width : 276px;\n  font-family : 'Comfortaa', 'Roboto', 'Helvetica Neue', Arial, sans-serif;\n  font-style : normal;\n  font-weight : 400;\n  line-height : 1.5;\n  text-align : left;\n  text-align : start;\n  text-decoration : none;\n  text-shadow : none;\n  text-transform : none;\n  letter-spacing : normal;\n  word-break : normal;\n  word-spacing : normal;\n  white-space : normal;\n  line-break : auto;\n  font-size : 0.8rem;\n  word-wrap : break-word;\n  background-color : #FFFFFF;\n  -webkit-background-clip : padding-box;\n          background-clip : padding-box;\n  border : 1px solid rgba(0, 0, 0, 0.2);\n  border-radius : 0.3rem;\n}\n.popover .arrow {\n  position : absolute;\n  display : block;\n  width : 1rem;\n  height : 0.5rem;\n  margin : 0 0.3rem;\n}\n.popover .arrow::before, .popover .arrow::after {\n  position : absolute;\n  display : block;\n  content : '';\n  border-color : transparent;\n  border-style : solid;\n}\n\n.bs-popover-top, .bs-popover-auto[x-placement^='top'] {\n  margin-bottom : 0.5rem;\n}\n.bs-popover-top .arrow, .bs-popover-auto[x-placement^='top'] .arrow {\n  bottom : -webkit-calc((0.5rem + 1px) * -1);\n  bottom :    -moz-calc((0.5rem + 1px) * -1);\n  bottom :         calc((0.5rem + 1px) * -1);\n}\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^='top'] .arrow::before, .bs-popover-top .arrow::after, .bs-popover-auto[x-placement^='top'] .arrow::after {\n  border-width : 0.5rem 0.5rem 0;\n}\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^='top'] .arrow::before {\n  bottom : 0;\n  border-top-color : rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-top .arrow::after, .bs-popover-auto[x-placement^='top'] .arrow::after {\n  bottom : 1px;\n  border-top-color : #FFFFFF;\n}\n\n.bs-popover-right, .bs-popover-auto[x-placement^='right'] {\n  margin-left : 0.5rem;\n}\n.bs-popover-right .arrow, .bs-popover-auto[x-placement^='right'] .arrow {\n  left : -webkit-calc((0.5rem + 1px) * -1);\n  left :    -moz-calc((0.5rem + 1px) * -1);\n  left :         calc((0.5rem + 1px) * -1);\n  width : 0.5rem;\n  height : 1rem;\n  margin : 0.3rem 0;\n}\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^='right'] .arrow::before, .bs-popover-right .arrow::after, .bs-popover-auto[x-placement^='right'] .arrow::after {\n  border-width : 0.5rem 0.5rem 0.5rem 0;\n}\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^='right'] .arrow::before {\n  left : 0;\n  border-right-color : rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-right .arrow::after, .bs-popover-auto[x-placement^='right'] .arrow::after {\n  left : 1px;\n  border-right-color : #FFFFFF;\n}\n\n.bs-popover-bottom, .bs-popover-auto[x-placement^='bottom'] {\n  margin-top : 0.5rem;\n}\n.bs-popover-bottom .arrow, .bs-popover-auto[x-placement^='bottom'] .arrow {\n  top : -webkit-calc((0.5rem + 1px) * -1);\n  top :    -moz-calc((0.5rem + 1px) * -1);\n  top :         calc((0.5rem + 1px) * -1);\n}\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^='bottom'] .arrow::before, .bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^='bottom'] .arrow::after {\n  border-width : 0 0.5rem 0.5rem 0.5rem;\n}\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^='bottom'] .arrow::before {\n  top : 0;\n  border-bottom-color : rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^='bottom'] .arrow::after {\n  top : 1px;\n  border-bottom-color : #FFFFFF;\n}\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^='bottom'] .popover-header::before {\n  position : absolute;\n  top : 0;\n  left : 50%;\n  display : block;\n  width : 1rem;\n  margin-left : -0.5rem;\n  content : '';\n  border-bottom : 1px solid #F7F7F7;\n}\n\n.bs-popover-left, .bs-popover-auto[x-placement^='left'] {\n  margin-right : 0.5rem;\n}\n.bs-popover-left .arrow, .bs-popover-auto[x-placement^='left'] .arrow {\n  right : -webkit-calc((0.5rem + 1px) * -1);\n  right :    -moz-calc((0.5rem + 1px) * -1);\n  right :         calc((0.5rem + 1px) * -1);\n  width : 0.5rem;\n  height : 1rem;\n  margin : 0.3rem 0;\n}\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^='left'] .arrow::before, .bs-popover-left .arrow::after, .bs-popover-auto[x-placement^='left'] .arrow::after {\n  border-width : 0.5rem 0 0.5rem 0.5rem;\n}\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^='left'] .arrow::before {\n  right : 0;\n  border-left-color : rgba(0, 0, 0, 0.25);\n}\n\n.bs-popover-left .arrow::after, .bs-popover-auto[x-placement^='left'] .arrow::after {\n  right : 1px;\n  border-left-color : #FFFFFF;\n}\n\n.popover-header {\n  padding : 0.5rem 0.75rem;\n  margin-bottom : 0;\n  font-size : 1rem;\n  color : inherit;\n  background-color : #F7F7F7;\n  border-bottom : 1px solid #EBEBEB;\n  border-top-left-radius : -webkit-calc(0.3rem - 1px);\n  border-top-left-radius :    -moz-calc(0.3rem - 1px);\n  border-top-left-radius :         calc(0.3rem - 1px);\n  border-top-right-radius : -webkit-calc(0.3rem - 1px);\n  border-top-right-radius :    -moz-calc(0.3rem - 1px);\n  border-top-right-radius :         calc(0.3rem - 1px);\n}\n.popover-header:empty {\n  display : none;\n}\n\n.popover-body {\n  padding : 0.5rem 0.75rem;\n  color : #212529;\n}\n\n.carousel {\n  position : relative;\n}\n\n.carousel-inner {\n  position : relative;\n  width : 100%;\n  overflow : hidden;\n}\n\n.carousel-item {\n  position : relative;\n  display : none;\n  -webkit-box-align : center;\n  -webkit-align-items : center;\n     -moz-box-align : center;\n  -ms-flex-align : center;\n          align-items : center;\n  width : 100%;\n  -webkit-transition : -webkit-transform 0.6s ease;\n          transition : -webkit-transform 0.6s ease;\n       -o-transition :      -o-transform 0.6s ease;\n     -moz-transition :         transform 0.6s ease, -moz-transform 0.6s ease;\n          transition :         transform 0.6s ease;\n          transition :         transform 0.6s ease, -webkit-transform 0.6s ease, -moz-transform 0.6s ease, -o-transform 0.6s ease;\n  -webkit-backface-visibility : hidden;\n     -moz-backface-visibility : hidden;\n          backface-visibility : hidden;\n  -webkit-perspective : 1000px;\n     -moz-perspective : 1000px;\n          perspective : 1000px;\n}\n@media screen and (prefers-reduced-motion: reduce) {\n  .carousel-item {\n    -webkit-transition : none;\n         -o-transition : none;\n       -moz-transition : none;\n            transition : none;\n  }\n}\n\n.carousel-item.active, .carousel-item-next, .carousel-item-prev {\n  display : block;\n}\n\n.carousel-item-next, .carousel-item-prev {\n  position : absolute;\n  top : 0;\n}\n\n.carousel-item-next.carousel-item-left, .carousel-item-prev.carousel-item-right {\n  -webkit-transform : translateX(0);\n     -moz-transform : translateX(0);\n      -ms-transform : translateX(0);\n       -o-transform : translateX(0);\n          transform : translateX(0);\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n  .carousel-item-next.carousel-item-left, .carousel-item-prev.carousel-item-right {\n    -webkit-transform : translate3d(0, 0, 0);\n       -moz-transform : translate3d(0, 0, 0);\n            transform : translate3d(0, 0, 0);\n  }\n}\n\n.carousel-item-next, .active.carousel-item-right {\n  -webkit-transform : translateX(100%);\n     -moz-transform : translateX(100%);\n      -ms-transform : translateX(100%);\n       -o-transform : translateX(100%);\n          transform : translateX(100%);\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n  .carousel-item-next, .active.carousel-item-right {\n    -webkit-transform : translate3d(100%, 0, 0);\n       -moz-transform : translate3d(100%, 0, 0);\n            transform : translate3d(100%, 0, 0);\n  }\n}\n\n.carousel-item-prev, .active.carousel-item-left {\n  -webkit-transform : translateX(-100%);\n     -moz-transform : translateX(-100%);\n      -ms-transform : translateX(-100%);\n       -o-transform : translateX(-100%);\n          transform : translateX(-100%);\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n  .carousel-item-prev, .active.carousel-item-left {\n    -webkit-transform : translate3d(-100%, 0, 0);\n       -moz-transform : translate3d(-100%, 0, 0);\n            transform : translate3d(-100%, 0, 0);\n  }\n}\n\n.carousel-fade .carousel-item {\n  opacity : 0;\n  -webkit-transition-duration : 0.6s;\n     -moz-transition-duration : 0.6s;\n       -o-transition-duration : 0.6s;\n          transition-duration : 0.6s;\n  -webkit-transition-property : opacity;\n       -o-transition-property : opacity;\n     -moz-transition-property : opacity;\n          transition-property : opacity;\n}\n\n.carousel-fade .carousel-item.active, .carousel-fade .carousel-item-next.carousel-item-left, .carousel-fade .carousel-item-prev.carousel-item-right {\n  opacity : 1;\n}\n\n.carousel-fade .active.carousel-item-left, .carousel-fade .active.carousel-item-right {\n  opacity : 0;\n}\n\n.carousel-fade .carousel-item-next, .carousel-fade .carousel-item-prev, .carousel-fade .carousel-item.active, .carousel-fade .active.carousel-item-left, .carousel-fade .active.carousel-item-prev {\n  -webkit-transform : translateX(0);\n     -moz-transform : translateX(0);\n      -ms-transform : translateX(0);\n       -o-transform : translateX(0);\n          transform : translateX(0);\n}\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n  .carousel-fade .carousel-item-next, .carousel-fade .carousel-item-prev, .carousel-fade .carousel-item.active, .carousel-fade .active.carousel-item-left, .carousel-fade .active.carousel-item-prev {\n    -webkit-transform : translate3d(0, 0, 0);\n       -moz-transform : translate3d(0, 0, 0);\n            transform : translate3d(0, 0, 0);\n  }\n}\n\n.carousel-control-prev, .carousel-control-next {\n  position : absolute;\n  top : 0;\n  bottom : 0;\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-align : center;\n  -webkit-align-items : center;\n     -moz-box-align : center;\n  -ms-flex-align : center;\n          align-items : center;\n  -webkit-box-pack : center;\n  -webkit-justify-content : center;\n     -moz-box-pack : center;\n  -ms-flex-pack : center;\n          justify-content : center;\n  width : 15%;\n  color : #FFFFFF;\n  text-align : center;\n  opacity : 0.5;\n}\n.carousel-control-prev:hover, .carousel-control-prev:focus, .carousel-control-next:hover, .carousel-control-next:focus {\n  color : #FFFFFF;\n  text-decoration : none;\n  outline : 0;\n  opacity : 0.9;\n}\n\n.carousel-control-prev {\n  left : 0;\n}\n\n.carousel-control-next {\n  right : 0;\n}\n\n.carousel-control-prev-icon, .carousel-control-next-icon {\n  display : inline-block;\n  width : 20px;\n  height : 20px;\n  background : transparent no-repeat center center;\n  -webkit-background-size : 100% 100%;\n          background-size : 100% 100%;\n}\n\n.carousel-control-prev-icon {\n  background-image : url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'%23fff\\' viewBox=\\'0 0 8 8\\'%3E%3Cpath d=\\'M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z\\'/%3E%3C/svg%3E');\n}\n\n.carousel-control-next-icon {\n  background-image : url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'%23fff\\' viewBox=\\'0 0 8 8\\'%3E%3Cpath d=\\'M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z\\'/%3E%3C/svg%3E');\n}\n\n.carousel-indicators {\n  position : absolute;\n  right : 0;\n  bottom : 10px;\n  left : 0;\n  z-index : 15;\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-pack : center;\n  -webkit-justify-content : center;\n     -moz-box-pack : center;\n  -ms-flex-pack : center;\n          justify-content : center;\n  padding-left : 0;\n  margin-right : 15%;\n  margin-left : 15%;\n  list-style : none;\n}\n.carousel-indicators li {\n  position : relative;\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 1 auto;\n     -moz-box-flex : 0;\n      -ms-flex : 0 1 auto;\n          flex : 0 1 auto;\n  width : 30px;\n  height : 3px;\n  margin-right : 3px;\n  margin-left : 3px;\n  text-indent : -999px;\n  background-color : rgba(255, 255, 255, 0.5);\n}\n.carousel-indicators li::before {\n  position : absolute;\n  top : -10px;\n  left : 0;\n  display : inline-block;\n  width : 100%;\n  height : 10px;\n  content : '';\n}\n.carousel-indicators li::after {\n  position : absolute;\n  bottom : -10px;\n  left : 0;\n  display : inline-block;\n  width : 100%;\n  height : 10px;\n  content : '';\n}\n.carousel-indicators .active {\n  background-color : #FFFFFF;\n}\n\n.carousel-caption {\n  position : absolute;\n  right : 15%;\n  bottom : 20px;\n  left : 15%;\n  z-index : 10;\n  padding-top : 20px;\n  padding-bottom : 20px;\n  color : #FFFFFF;\n  text-align : center;\n}\n\n.align-baseline {\n  vertical-align : baseline !important;\n}\n\n.align-top {\n  vertical-align : top !important;\n}\n\n.align-middle {\n  vertical-align : middle !important;\n}\n\n.align-bottom {\n  vertical-align : bottom !important;\n}\n\n.align-text-bottom {\n  vertical-align : text-bottom !important;\n}\n\n.align-text-top {\n  vertical-align : text-top !important;\n}\n\n.bg-primary {\n  background-color : #007BFF !important;\n}\n\na.bg-primary:hover, a.bg-primary:focus, button.bg-primary:hover, button.bg-primary:focus {\n  background-color : #0062CC !important;\n}\n\n.bg-secondary {\n  background-color : #6C757D !important;\n}\n\na.bg-secondary:hover, a.bg-secondary:focus, button.bg-secondary:hover, button.bg-secondary:focus {\n  background-color : #545B62 !important;\n}\n\n.bg-success {\n  background-color : #28A745 !important;\n}\n\na.bg-success:hover, a.bg-success:focus, button.bg-success:hover, button.bg-success:focus {\n  background-color : #1E7E34 !important;\n}\n\n.bg-info {\n  background-color : #17A2B8 !important;\n}\n\na.bg-info:hover, a.bg-info:focus, button.bg-info:hover, button.bg-info:focus {\n  background-color : #117A8B !important;\n}\n\n.bg-warning {\n  background-color : #FFC107 !important;\n}\n\na.bg-warning:hover, a.bg-warning:focus, button.bg-warning:hover, button.bg-warning:focus {\n  background-color : #D39E00 !important;\n}\n\n.bg-danger {\n  background-color : #DC3545 !important;\n}\n\na.bg-danger:hover, a.bg-danger:focus, button.bg-danger:hover, button.bg-danger:focus {\n  background-color : #BD2130 !important;\n}\n\n.bg-light {\n  background-color : #F8F9FA !important;\n}\n\na.bg-light:hover, a.bg-light:focus, button.bg-light:hover, button.bg-light:focus {\n  background-color : #DAE0E5 !important;\n}\n\n.bg-dark {\n  background-color : #343A40 !important;\n}\n\na.bg-dark:hover, a.bg-dark:focus, button.bg-dark:hover, button.bg-dark:focus {\n  background-color : #1D2124 !important;\n}\n\n.bg-white {\n  background-color : #FFFFFF !important;\n}\n\n.bg-transparent {\n  background-color : transparent !important;\n}\n\n.border {\n  border : 1px solid #DEE2E6 !important;\n}\n\n.border-top {\n  border-top : 1px solid #DEE2E6 !important;\n}\n\n.border-right {\n  border-right : 1px solid #DEE2E6 !important;\n}\n\n.border-bottom {\n  border-bottom : 1px solid #DEE2E6 !important;\n}\n\n.border-left {\n  border-left : 1px solid #DEE2E6 !important;\n}\n\n.border-0 {\n  border : 0 !important;\n}\n\n.border-top-0 {\n  border-top : 0 !important;\n}\n\n.border-right-0 {\n  border-right : 0 !important;\n}\n\n.border-bottom-0 {\n  border-bottom : 0 !important;\n}\n\n.border-left-0 {\n  border-left : 0 !important;\n}\n\n.border-primary {\n  border-color : #007BFF !important;\n}\n\n.border-secondary {\n  border-color : #6C757D !important;\n}\n\n.border-success {\n  border-color : #28A745 !important;\n}\n\n.border-info {\n  border-color : #17A2B8 !important;\n}\n\n.border-warning {\n  border-color : #FFC107 !important;\n}\n\n.border-danger {\n  border-color : #DC3545 !important;\n}\n\n.border-light {\n  border-color : #F8F9FA !important;\n}\n\n.border-dark {\n  border-color : #343A40 !important;\n}\n\n.border-white {\n  border-color : #FFFFFF !important;\n}\n\n.rounded {\n  border-radius : 0.25rem !important;\n}\n\n.rounded-top {\n  border-top-left-radius : 0.25rem !important;\n  border-top-right-radius : 0.25rem !important;\n}\n\n.rounded-right {\n  border-top-right-radius : 0.25rem !important;\n  border-bottom-right-radius : 0.25rem !important;\n}\n\n.rounded-bottom {\n  border-bottom-right-radius : 0.25rem !important;\n  border-bottom-left-radius : 0.25rem !important;\n}\n\n.rounded-left {\n  border-top-left-radius : 0.25rem !important;\n  border-bottom-left-radius : 0.25rem !important;\n}\n\n.rounded-circle {\n  border-radius : 50% !important;\n}\n\n.rounded-0 {\n  border-radius : 0 !important;\n}\n\n.clearfix::after {\n  display : block;\n  clear : both;\n  content : '';\n}\n\n.d-none {\n  display : none !important;\n}\n\n.d-inline {\n  display : inline !important;\n}\n\n.d-inline-block {\n  display : inline-block !important;\n}\n\n.d-block {\n  display : block !important;\n}\n\n.d-table {\n  display : table !important;\n}\n\n.d-table-row {\n  display : table-row !important;\n}\n\n.d-table-cell {\n  display : table-cell !important;\n}\n\n.d-flex {\n  display : -webkit-box !important;\n  display : -webkit-flex !important;\n  display :    -moz-box !important;\n  display : -ms-flexbox !important;\n  display :         flex !important;\n}\n\n.d-inline-flex {\n  display : -webkit-inline-box !important;\n  display : -webkit-inline-flex !important;\n  display :    -moz-inline-box !important;\n  display : -ms-inline-flexbox !important;\n  display :         inline-flex !important;\n}\n\n@media (min-width: 576px) {\n  .d-sm-none {\n    display : none !important;\n  }\n  .d-sm-inline {\n    display : inline !important;\n  }\n  .d-sm-inline-block {\n    display : inline-block !important;\n  }\n  .d-sm-block {\n    display : block !important;\n  }\n  .d-sm-table {\n    display : table !important;\n  }\n  .d-sm-table-row {\n    display : table-row !important;\n  }\n  .d-sm-table-cell {\n    display : table-cell !important;\n  }\n  .d-sm-flex {\n    display : -webkit-box !important;\n    display : -webkit-flex !important;\n    display :    -moz-box !important;\n    display : -ms-flexbox !important;\n    display :         flex !important;\n  }\n  .d-sm-inline-flex {\n    display : -webkit-inline-box !important;\n    display : -webkit-inline-flex !important;\n    display :    -moz-inline-box !important;\n    display : -ms-inline-flexbox !important;\n    display :         inline-flex !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .d-md-none {\n    display : none !important;\n  }\n  .d-md-inline {\n    display : inline !important;\n  }\n  .d-md-inline-block {\n    display : inline-block !important;\n  }\n  .d-md-block {\n    display : block !important;\n  }\n  .d-md-table {\n    display : table !important;\n  }\n  .d-md-table-row {\n    display : table-row !important;\n  }\n  .d-md-table-cell {\n    display : table-cell !important;\n  }\n  .d-md-flex {\n    display : -webkit-box !important;\n    display : -webkit-flex !important;\n    display :    -moz-box !important;\n    display : -ms-flexbox !important;\n    display :         flex !important;\n  }\n  .d-md-inline-flex {\n    display : -webkit-inline-box !important;\n    display : -webkit-inline-flex !important;\n    display :    -moz-inline-box !important;\n    display : -ms-inline-flexbox !important;\n    display :         inline-flex !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .d-lg-none {\n    display : none !important;\n  }\n  .d-lg-inline {\n    display : inline !important;\n  }\n  .d-lg-inline-block {\n    display : inline-block !important;\n  }\n  .d-lg-block {\n    display : block !important;\n  }\n  .d-lg-table {\n    display : table !important;\n  }\n  .d-lg-table-row {\n    display : table-row !important;\n  }\n  .d-lg-table-cell {\n    display : table-cell !important;\n  }\n  .d-lg-flex {\n    display : -webkit-box !important;\n    display : -webkit-flex !important;\n    display :    -moz-box !important;\n    display : -ms-flexbox !important;\n    display :         flex !important;\n  }\n  .d-lg-inline-flex {\n    display : -webkit-inline-box !important;\n    display : -webkit-inline-flex !important;\n    display :    -moz-inline-box !important;\n    display : -ms-inline-flexbox !important;\n    display :         inline-flex !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display : none !important;\n  }\n  .d-xl-inline {\n    display : inline !important;\n  }\n  .d-xl-inline-block {\n    display : inline-block !important;\n  }\n  .d-xl-block {\n    display : block !important;\n  }\n  .d-xl-table {\n    display : table !important;\n  }\n  .d-xl-table-row {\n    display : table-row !important;\n  }\n  .d-xl-table-cell {\n    display : table-cell !important;\n  }\n  .d-xl-flex {\n    display : -webkit-box !important;\n    display : -webkit-flex !important;\n    display :    -moz-box !important;\n    display : -ms-flexbox !important;\n    display :         flex !important;\n  }\n  .d-xl-inline-flex {\n    display : -webkit-inline-box !important;\n    display : -webkit-inline-flex !important;\n    display :    -moz-inline-box !important;\n    display : -ms-inline-flexbox !important;\n    display :         inline-flex !important;\n  }\n}\n\n@media print {\n  .d-print-none {\n    display : none !important;\n  }\n  .d-print-inline {\n    display : inline !important;\n  }\n  .d-print-inline-block {\n    display : inline-block !important;\n  }\n  .d-print-block {\n    display : block !important;\n  }\n  .d-print-table {\n    display : table !important;\n  }\n  .d-print-table-row {\n    display : table-row !important;\n  }\n  .d-print-table-cell {\n    display : table-cell !important;\n  }\n  .d-print-flex {\n    display : -webkit-box !important;\n    display : -webkit-flex !important;\n    display :    -moz-box !important;\n    display : -ms-flexbox !important;\n    display :         flex !important;\n  }\n  .d-print-inline-flex {\n    display : -webkit-inline-box !important;\n    display : -webkit-inline-flex !important;\n    display :    -moz-inline-box !important;\n    display : -ms-inline-flexbox !important;\n    display :         inline-flex !important;\n  }\n}\n\n.embed-responsive {\n  position : relative;\n  display : block;\n  width : 100%;\n  padding : 0;\n  overflow : hidden;\n}\n.embed-responsive::before {\n  display : block;\n  content : '';\n}\n.embed-responsive .embed-responsive-item, .embed-responsive iframe, .embed-responsive embed, .embed-responsive object, .embed-responsive video {\n  position : absolute;\n  top : 0;\n  bottom : 0;\n  left : 0;\n  width : 100%;\n  height : 100%;\n  border : 0;\n}\n\n.embed-responsive-21by9::before {\n  padding-top : 42.85714%;\n}\n\n.embed-responsive-16by9::before {\n  padding-top : 56.25%;\n}\n\n.embed-responsive-4by3::before {\n  padding-top : 75%;\n}\n\n.embed-responsive-1by1::before {\n  padding-top : 100%;\n}\n\n.flex-row {\n  -webkit-box-orient : horizontal !important;\n  -webkit-box-direction : normal !important;\n  -webkit-flex-direction : row !important;\n     -moz-box-orient : horizontal !important;\n     -moz-box-direction : normal !important;\n      -ms-flex-direction : row !important;\n          flex-direction : row !important;\n}\n\n.flex-column {\n  -webkit-box-orient : vertical !important;\n  -webkit-box-direction : normal !important;\n  -webkit-flex-direction : column !important;\n     -moz-box-orient : vertical !important;\n     -moz-box-direction : normal !important;\n      -ms-flex-direction : column !important;\n          flex-direction : column !important;\n}\n\n.flex-row-reverse {\n  -webkit-box-orient : horizontal !important;\n  -webkit-box-direction : reverse !important;\n  -webkit-flex-direction : row-reverse !important;\n     -moz-box-orient : horizontal !important;\n     -moz-box-direction : reverse !important;\n      -ms-flex-direction : row-reverse !important;\n          flex-direction : row-reverse !important;\n}\n\n.flex-column-reverse {\n  -webkit-box-orient : vertical !important;\n  -webkit-box-direction : reverse !important;\n  -webkit-flex-direction : column-reverse !important;\n     -moz-box-orient : vertical !important;\n     -moz-box-direction : reverse !important;\n      -ms-flex-direction : column-reverse !important;\n          flex-direction : column-reverse !important;\n}\n\n.flex-wrap {\n  -webkit-flex-wrap : wrap !important;\n      -ms-flex-wrap : wrap !important;\n          flex-wrap : wrap !important;\n}\n\n.flex-nowrap {\n  -webkit-flex-wrap : nowrap !important;\n      -ms-flex-wrap : nowrap !important;\n          flex-wrap : nowrap !important;\n}\n\n.flex-wrap-reverse {\n  -webkit-flex-wrap : wrap-reverse !important;\n      -ms-flex-wrap : wrap-reverse !important;\n          flex-wrap : wrap-reverse !important;\n}\n\n.flex-fill {\n  -webkit-box-flex : 1 !important;\n  -webkit-flex : 1 1 auto !important;\n     -moz-box-flex : 1 !important;\n      -ms-flex : 1 1 auto !important;\n          flex : 1 1 auto !important;\n}\n\n.flex-grow-0 {\n  -webkit-box-flex : 0 !important;\n  -webkit-flex-grow : 0 !important;\n     -moz-box-flex : 0 !important;\n  -ms-flex-positive : 0 !important;\n          flex-grow : 0 !important;\n}\n\n.flex-grow-1 {\n  -webkit-box-flex : 1 !important;\n  -webkit-flex-grow : 1 !important;\n     -moz-box-flex : 1 !important;\n  -ms-flex-positive : 1 !important;\n          flex-grow : 1 !important;\n}\n\n.flex-shrink-0 {\n  -webkit-flex-shrink : 0 !important;\n  -ms-flex-negative : 0 !important;\n          flex-shrink : 0 !important;\n}\n\n.flex-shrink-1 {\n  -webkit-flex-shrink : 1 !important;\n  -ms-flex-negative : 1 !important;\n          flex-shrink : 1 !important;\n}\n\n.justify-content-start {\n  -webkit-box-pack : start !important;\n  -webkit-justify-content : flex-start !important;\n     -moz-box-pack : start !important;\n  -ms-flex-pack : start !important;\n          justify-content : flex-start !important;\n}\n\n.justify-content-end {\n  -webkit-box-pack : end !important;\n  -webkit-justify-content : flex-end !important;\n     -moz-box-pack : end !important;\n  -ms-flex-pack : end !important;\n          justify-content : flex-end !important;\n}\n\n.justify-content-center {\n  -webkit-box-pack : center !important;\n  -webkit-justify-content : center !important;\n     -moz-box-pack : center !important;\n  -ms-flex-pack : center !important;\n          justify-content : center !important;\n}\n\n.justify-content-between {\n  -webkit-box-pack : justify !important;\n  -webkit-justify-content : space-between !important;\n     -moz-box-pack : justify !important;\n  -ms-flex-pack : justify !important;\n          justify-content : space-between !important;\n}\n\n.justify-content-around {\n  -webkit-justify-content : space-around !important;\n  -ms-flex-pack : distribute !important;\n          justify-content : space-around !important;\n}\n\n.align-items-start {\n  -webkit-box-align : start !important;\n  -webkit-align-items : flex-start !important;\n     -moz-box-align : start !important;\n  -ms-flex-align : start !important;\n          align-items : flex-start !important;\n}\n\n.align-items-end {\n  -webkit-box-align : end !important;\n  -webkit-align-items : flex-end !important;\n     -moz-box-align : end !important;\n  -ms-flex-align : end !important;\n          align-items : flex-end !important;\n}\n\n.align-items-center {\n  -webkit-box-align : center !important;\n  -webkit-align-items : center !important;\n     -moz-box-align : center !important;\n  -ms-flex-align : center !important;\n          align-items : center !important;\n}\n\n.align-items-baseline {\n  -webkit-box-align : baseline !important;\n  -webkit-align-items : baseline !important;\n     -moz-box-align : baseline !important;\n  -ms-flex-align : baseline !important;\n          align-items : baseline !important;\n}\n\n.align-items-stretch {\n  -webkit-box-align : stretch !important;\n  -webkit-align-items : stretch !important;\n     -moz-box-align : stretch !important;\n  -ms-flex-align : stretch !important;\n          align-items : stretch !important;\n}\n\n.align-content-start {\n  -webkit-align-content : flex-start !important;\n  -ms-flex-line-pack : start !important;\n          align-content : flex-start !important;\n}\n\n.align-content-end {\n  -webkit-align-content : flex-end !important;\n  -ms-flex-line-pack : end !important;\n          align-content : flex-end !important;\n}\n\n.align-content-center {\n  -webkit-align-content : center !important;\n  -ms-flex-line-pack : center !important;\n          align-content : center !important;\n}\n\n.align-content-between {\n  -webkit-align-content : space-between !important;\n  -ms-flex-line-pack : justify !important;\n          align-content : space-between !important;\n}\n\n.align-content-around {\n  -webkit-align-content : space-around !important;\n  -ms-flex-line-pack : distribute !important;\n          align-content : space-around !important;\n}\n\n.align-content-stretch {\n  -webkit-align-content : stretch !important;\n  -ms-flex-line-pack : stretch !important;\n          align-content : stretch !important;\n}\n\n.align-self-auto {\n  -webkit-align-self : auto !important;\n  -ms-flex-item-align : auto !important;\n          align-self : auto !important;\n}\n\n.align-self-start {\n  -webkit-align-self : flex-start !important;\n  -ms-flex-item-align : start !important;\n          align-self : flex-start !important;\n}\n\n.align-self-end {\n  -webkit-align-self : flex-end !important;\n  -ms-flex-item-align : end !important;\n          align-self : flex-end !important;\n}\n\n.align-self-center {\n  -webkit-align-self : center !important;\n  -ms-flex-item-align : center !important;\n          align-self : center !important;\n}\n\n.align-self-baseline {\n  -webkit-align-self : baseline !important;\n  -ms-flex-item-align : baseline !important;\n          align-self : baseline !important;\n}\n\n.align-self-stretch {\n  -webkit-align-self : stretch !important;\n  -ms-flex-item-align : stretch !important;\n          align-self : stretch !important;\n}\n\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -webkit-box-orient : horizontal !important;\n    -webkit-box-direction : normal !important;\n    -webkit-flex-direction : row !important;\n       -moz-box-orient : horizontal !important;\n       -moz-box-direction : normal !important;\n        -ms-flex-direction : row !important;\n            flex-direction : row !important;\n  }\n  .flex-sm-column {\n    -webkit-box-orient : vertical !important;\n    -webkit-box-direction : normal !important;\n    -webkit-flex-direction : column !important;\n       -moz-box-orient : vertical !important;\n       -moz-box-direction : normal !important;\n        -ms-flex-direction : column !important;\n            flex-direction : column !important;\n  }\n  .flex-sm-row-reverse {\n    -webkit-box-orient : horizontal !important;\n    -webkit-box-direction : reverse !important;\n    -webkit-flex-direction : row-reverse !important;\n       -moz-box-orient : horizontal !important;\n       -moz-box-direction : reverse !important;\n        -ms-flex-direction : row-reverse !important;\n            flex-direction : row-reverse !important;\n  }\n  .flex-sm-column-reverse {\n    -webkit-box-orient : vertical !important;\n    -webkit-box-direction : reverse !important;\n    -webkit-flex-direction : column-reverse !important;\n       -moz-box-orient : vertical !important;\n       -moz-box-direction : reverse !important;\n        -ms-flex-direction : column-reverse !important;\n            flex-direction : column-reverse !important;\n  }\n  .flex-sm-wrap {\n    -webkit-flex-wrap : wrap !important;\n        -ms-flex-wrap : wrap !important;\n            flex-wrap : wrap !important;\n  }\n  .flex-sm-nowrap {\n    -webkit-flex-wrap : nowrap !important;\n        -ms-flex-wrap : nowrap !important;\n            flex-wrap : nowrap !important;\n  }\n  .flex-sm-wrap-reverse {\n    -webkit-flex-wrap : wrap-reverse !important;\n        -ms-flex-wrap : wrap-reverse !important;\n            flex-wrap : wrap-reverse !important;\n  }\n  .flex-sm-fill {\n    -webkit-box-flex : 1 !important;\n    -webkit-flex : 1 1 auto !important;\n       -moz-box-flex : 1 !important;\n        -ms-flex : 1 1 auto !important;\n            flex : 1 1 auto !important;\n  }\n  .flex-sm-grow-0 {\n    -webkit-box-flex : 0 !important;\n    -webkit-flex-grow : 0 !important;\n       -moz-box-flex : 0 !important;\n    -ms-flex-positive : 0 !important;\n            flex-grow : 0 !important;\n  }\n  .flex-sm-grow-1 {\n    -webkit-box-flex : 1 !important;\n    -webkit-flex-grow : 1 !important;\n       -moz-box-flex : 1 !important;\n    -ms-flex-positive : 1 !important;\n            flex-grow : 1 !important;\n  }\n  .flex-sm-shrink-0 {\n    -webkit-flex-shrink : 0 !important;\n    -ms-flex-negative : 0 !important;\n            flex-shrink : 0 !important;\n  }\n  .flex-sm-shrink-1 {\n    -webkit-flex-shrink : 1 !important;\n    -ms-flex-negative : 1 !important;\n            flex-shrink : 1 !important;\n  }\n  .justify-content-sm-start {\n    -webkit-box-pack : start !important;\n    -webkit-justify-content : flex-start !important;\n       -moz-box-pack : start !important;\n    -ms-flex-pack : start !important;\n            justify-content : flex-start !important;\n  }\n  .justify-content-sm-end {\n    -webkit-box-pack : end !important;\n    -webkit-justify-content : flex-end !important;\n       -moz-box-pack : end !important;\n    -ms-flex-pack : end !important;\n            justify-content : flex-end !important;\n  }\n  .justify-content-sm-center {\n    -webkit-box-pack : center !important;\n    -webkit-justify-content : center !important;\n       -moz-box-pack : center !important;\n    -ms-flex-pack : center !important;\n            justify-content : center !important;\n  }\n  .justify-content-sm-between {\n    -webkit-box-pack : justify !important;\n    -webkit-justify-content : space-between !important;\n       -moz-box-pack : justify !important;\n    -ms-flex-pack : justify !important;\n            justify-content : space-between !important;\n  }\n  .justify-content-sm-around {\n    -webkit-justify-content : space-around !important;\n    -ms-flex-pack : distribute !important;\n            justify-content : space-around !important;\n  }\n  .align-items-sm-start {\n    -webkit-box-align : start !important;\n    -webkit-align-items : flex-start !important;\n       -moz-box-align : start !important;\n    -ms-flex-align : start !important;\n            align-items : flex-start !important;\n  }\n  .align-items-sm-end {\n    -webkit-box-align : end !important;\n    -webkit-align-items : flex-end !important;\n       -moz-box-align : end !important;\n    -ms-flex-align : end !important;\n            align-items : flex-end !important;\n  }\n  .align-items-sm-center {\n    -webkit-box-align : center !important;\n    -webkit-align-items : center !important;\n       -moz-box-align : center !important;\n    -ms-flex-align : center !important;\n            align-items : center !important;\n  }\n  .align-items-sm-baseline {\n    -webkit-box-align : baseline !important;\n    -webkit-align-items : baseline !important;\n       -moz-box-align : baseline !important;\n    -ms-flex-align : baseline !important;\n            align-items : baseline !important;\n  }\n  .align-items-sm-stretch {\n    -webkit-box-align : stretch !important;\n    -webkit-align-items : stretch !important;\n       -moz-box-align : stretch !important;\n    -ms-flex-align : stretch !important;\n            align-items : stretch !important;\n  }\n  .align-content-sm-start {\n    -webkit-align-content : flex-start !important;\n    -ms-flex-line-pack : start !important;\n            align-content : flex-start !important;\n  }\n  .align-content-sm-end {\n    -webkit-align-content : flex-end !important;\n    -ms-flex-line-pack : end !important;\n            align-content : flex-end !important;\n  }\n  .align-content-sm-center {\n    -webkit-align-content : center !important;\n    -ms-flex-line-pack : center !important;\n            align-content : center !important;\n  }\n  .align-content-sm-between {\n    -webkit-align-content : space-between !important;\n    -ms-flex-line-pack : justify !important;\n            align-content : space-between !important;\n  }\n  .align-content-sm-around {\n    -webkit-align-content : space-around !important;\n    -ms-flex-line-pack : distribute !important;\n            align-content : space-around !important;\n  }\n  .align-content-sm-stretch {\n    -webkit-align-content : stretch !important;\n    -ms-flex-line-pack : stretch !important;\n            align-content : stretch !important;\n  }\n  .align-self-sm-auto {\n    -webkit-align-self : auto !important;\n    -ms-flex-item-align : auto !important;\n            align-self : auto !important;\n  }\n  .align-self-sm-start {\n    -webkit-align-self : flex-start !important;\n    -ms-flex-item-align : start !important;\n            align-self : flex-start !important;\n  }\n  .align-self-sm-end {\n    -webkit-align-self : flex-end !important;\n    -ms-flex-item-align : end !important;\n            align-self : flex-end !important;\n  }\n  .align-self-sm-center {\n    -webkit-align-self : center !important;\n    -ms-flex-item-align : center !important;\n            align-self : center !important;\n  }\n  .align-self-sm-baseline {\n    -webkit-align-self : baseline !important;\n    -ms-flex-item-align : baseline !important;\n            align-self : baseline !important;\n  }\n  .align-self-sm-stretch {\n    -webkit-align-self : stretch !important;\n    -ms-flex-item-align : stretch !important;\n            align-self : stretch !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .flex-md-row {\n    -webkit-box-orient : horizontal !important;\n    -webkit-box-direction : normal !important;\n    -webkit-flex-direction : row !important;\n       -moz-box-orient : horizontal !important;\n       -moz-box-direction : normal !important;\n        -ms-flex-direction : row !important;\n            flex-direction : row !important;\n  }\n  .flex-md-column {\n    -webkit-box-orient : vertical !important;\n    -webkit-box-direction : normal !important;\n    -webkit-flex-direction : column !important;\n       -moz-box-orient : vertical !important;\n       -moz-box-direction : normal !important;\n        -ms-flex-direction : column !important;\n            flex-direction : column !important;\n  }\n  .flex-md-row-reverse {\n    -webkit-box-orient : horizontal !important;\n    -webkit-box-direction : reverse !important;\n    -webkit-flex-direction : row-reverse !important;\n       -moz-box-orient : horizontal !important;\n       -moz-box-direction : reverse !important;\n        -ms-flex-direction : row-reverse !important;\n            flex-direction : row-reverse !important;\n  }\n  .flex-md-column-reverse {\n    -webkit-box-orient : vertical !important;\n    -webkit-box-direction : reverse !important;\n    -webkit-flex-direction : column-reverse !important;\n       -moz-box-orient : vertical !important;\n       -moz-box-direction : reverse !important;\n        -ms-flex-direction : column-reverse !important;\n            flex-direction : column-reverse !important;\n  }\n  .flex-md-wrap {\n    -webkit-flex-wrap : wrap !important;\n        -ms-flex-wrap : wrap !important;\n            flex-wrap : wrap !important;\n  }\n  .flex-md-nowrap {\n    -webkit-flex-wrap : nowrap !important;\n        -ms-flex-wrap : nowrap !important;\n            flex-wrap : nowrap !important;\n  }\n  .flex-md-wrap-reverse {\n    -webkit-flex-wrap : wrap-reverse !important;\n        -ms-flex-wrap : wrap-reverse !important;\n            flex-wrap : wrap-reverse !important;\n  }\n  .flex-md-fill {\n    -webkit-box-flex : 1 !important;\n    -webkit-flex : 1 1 auto !important;\n       -moz-box-flex : 1 !important;\n        -ms-flex : 1 1 auto !important;\n            flex : 1 1 auto !important;\n  }\n  .flex-md-grow-0 {\n    -webkit-box-flex : 0 !important;\n    -webkit-flex-grow : 0 !important;\n       -moz-box-flex : 0 !important;\n    -ms-flex-positive : 0 !important;\n            flex-grow : 0 !important;\n  }\n  .flex-md-grow-1 {\n    -webkit-box-flex : 1 !important;\n    -webkit-flex-grow : 1 !important;\n       -moz-box-flex : 1 !important;\n    -ms-flex-positive : 1 !important;\n            flex-grow : 1 !important;\n  }\n  .flex-md-shrink-0 {\n    -webkit-flex-shrink : 0 !important;\n    -ms-flex-negative : 0 !important;\n            flex-shrink : 0 !important;\n  }\n  .flex-md-shrink-1 {\n    -webkit-flex-shrink : 1 !important;\n    -ms-flex-negative : 1 !important;\n            flex-shrink : 1 !important;\n  }\n  .justify-content-md-start {\n    -webkit-box-pack : start !important;\n    -webkit-justify-content : flex-start !important;\n       -moz-box-pack : start !important;\n    -ms-flex-pack : start !important;\n            justify-content : flex-start !important;\n  }\n  .justify-content-md-end {\n    -webkit-box-pack : end !important;\n    -webkit-justify-content : flex-end !important;\n       -moz-box-pack : end !important;\n    -ms-flex-pack : end !important;\n            justify-content : flex-end !important;\n  }\n  .justify-content-md-center {\n    -webkit-box-pack : center !important;\n    -webkit-justify-content : center !important;\n       -moz-box-pack : center !important;\n    -ms-flex-pack : center !important;\n            justify-content : center !important;\n  }\n  .justify-content-md-between {\n    -webkit-box-pack : justify !important;\n    -webkit-justify-content : space-between !important;\n       -moz-box-pack : justify !important;\n    -ms-flex-pack : justify !important;\n            justify-content : space-between !important;\n  }\n  .justify-content-md-around {\n    -webkit-justify-content : space-around !important;\n    -ms-flex-pack : distribute !important;\n            justify-content : space-around !important;\n  }\n  .align-items-md-start {\n    -webkit-box-align : start !important;\n    -webkit-align-items : flex-start !important;\n       -moz-box-align : start !important;\n    -ms-flex-align : start !important;\n            align-items : flex-start !important;\n  }\n  .align-items-md-end {\n    -webkit-box-align : end !important;\n    -webkit-align-items : flex-end !important;\n       -moz-box-align : end !important;\n    -ms-flex-align : end !important;\n            align-items : flex-end !important;\n  }\n  .align-items-md-center {\n    -webkit-box-align : center !important;\n    -webkit-align-items : center !important;\n       -moz-box-align : center !important;\n    -ms-flex-align : center !important;\n            align-items : center !important;\n  }\n  .align-items-md-baseline {\n    -webkit-box-align : baseline !important;\n    -webkit-align-items : baseline !important;\n       -moz-box-align : baseline !important;\n    -ms-flex-align : baseline !important;\n            align-items : baseline !important;\n  }\n  .align-items-md-stretch {\n    -webkit-box-align : stretch !important;\n    -webkit-align-items : stretch !important;\n       -moz-box-align : stretch !important;\n    -ms-flex-align : stretch !important;\n            align-items : stretch !important;\n  }\n  .align-content-md-start {\n    -webkit-align-content : flex-start !important;\n    -ms-flex-line-pack : start !important;\n            align-content : flex-start !important;\n  }\n  .align-content-md-end {\n    -webkit-align-content : flex-end !important;\n    -ms-flex-line-pack : end !important;\n            align-content : flex-end !important;\n  }\n  .align-content-md-center {\n    -webkit-align-content : center !important;\n    -ms-flex-line-pack : center !important;\n            align-content : center !important;\n  }\n  .align-content-md-between {\n    -webkit-align-content : space-between !important;\n    -ms-flex-line-pack : justify !important;\n            align-content : space-between !important;\n  }\n  .align-content-md-around {\n    -webkit-align-content : space-around !important;\n    -ms-flex-line-pack : distribute !important;\n            align-content : space-around !important;\n  }\n  .align-content-md-stretch {\n    -webkit-align-content : stretch !important;\n    -ms-flex-line-pack : stretch !important;\n            align-content : stretch !important;\n  }\n  .align-self-md-auto {\n    -webkit-align-self : auto !important;\n    -ms-flex-item-align : auto !important;\n            align-self : auto !important;\n  }\n  .align-self-md-start {\n    -webkit-align-self : flex-start !important;\n    -ms-flex-item-align : start !important;\n            align-self : flex-start !important;\n  }\n  .align-self-md-end {\n    -webkit-align-self : flex-end !important;\n    -ms-flex-item-align : end !important;\n            align-self : flex-end !important;\n  }\n  .align-self-md-center {\n    -webkit-align-self : center !important;\n    -ms-flex-item-align : center !important;\n            align-self : center !important;\n  }\n  .align-self-md-baseline {\n    -webkit-align-self : baseline !important;\n    -ms-flex-item-align : baseline !important;\n            align-self : baseline !important;\n  }\n  .align-self-md-stretch {\n    -webkit-align-self : stretch !important;\n    -ms-flex-item-align : stretch !important;\n            align-self : stretch !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -webkit-box-orient : horizontal !important;\n    -webkit-box-direction : normal !important;\n    -webkit-flex-direction : row !important;\n       -moz-box-orient : horizontal !important;\n       -moz-box-direction : normal !important;\n        -ms-flex-direction : row !important;\n            flex-direction : row !important;\n  }\n  .flex-lg-column {\n    -webkit-box-orient : vertical !important;\n    -webkit-box-direction : normal !important;\n    -webkit-flex-direction : column !important;\n       -moz-box-orient : vertical !important;\n       -moz-box-direction : normal !important;\n        -ms-flex-direction : column !important;\n            flex-direction : column !important;\n  }\n  .flex-lg-row-reverse {\n    -webkit-box-orient : horizontal !important;\n    -webkit-box-direction : reverse !important;\n    -webkit-flex-direction : row-reverse !important;\n       -moz-box-orient : horizontal !important;\n       -moz-box-direction : reverse !important;\n        -ms-flex-direction : row-reverse !important;\n            flex-direction : row-reverse !important;\n  }\n  .flex-lg-column-reverse {\n    -webkit-box-orient : vertical !important;\n    -webkit-box-direction : reverse !important;\n    -webkit-flex-direction : column-reverse !important;\n       -moz-box-orient : vertical !important;\n       -moz-box-direction : reverse !important;\n        -ms-flex-direction : column-reverse !important;\n            flex-direction : column-reverse !important;\n  }\n  .flex-lg-wrap {\n    -webkit-flex-wrap : wrap !important;\n        -ms-flex-wrap : wrap !important;\n            flex-wrap : wrap !important;\n  }\n  .flex-lg-nowrap {\n    -webkit-flex-wrap : nowrap !important;\n        -ms-flex-wrap : nowrap !important;\n            flex-wrap : nowrap !important;\n  }\n  .flex-lg-wrap-reverse {\n    -webkit-flex-wrap : wrap-reverse !important;\n        -ms-flex-wrap : wrap-reverse !important;\n            flex-wrap : wrap-reverse !important;\n  }\n  .flex-lg-fill {\n    -webkit-box-flex : 1 !important;\n    -webkit-flex : 1 1 auto !important;\n       -moz-box-flex : 1 !important;\n        -ms-flex : 1 1 auto !important;\n            flex : 1 1 auto !important;\n  }\n  .flex-lg-grow-0 {\n    -webkit-box-flex : 0 !important;\n    -webkit-flex-grow : 0 !important;\n       -moz-box-flex : 0 !important;\n    -ms-flex-positive : 0 !important;\n            flex-grow : 0 !important;\n  }\n  .flex-lg-grow-1 {\n    -webkit-box-flex : 1 !important;\n    -webkit-flex-grow : 1 !important;\n       -moz-box-flex : 1 !important;\n    -ms-flex-positive : 1 !important;\n            flex-grow : 1 !important;\n  }\n  .flex-lg-shrink-0 {\n    -webkit-flex-shrink : 0 !important;\n    -ms-flex-negative : 0 !important;\n            flex-shrink : 0 !important;\n  }\n  .flex-lg-shrink-1 {\n    -webkit-flex-shrink : 1 !important;\n    -ms-flex-negative : 1 !important;\n            flex-shrink : 1 !important;\n  }\n  .justify-content-lg-start {\n    -webkit-box-pack : start !important;\n    -webkit-justify-content : flex-start !important;\n       -moz-box-pack : start !important;\n    -ms-flex-pack : start !important;\n            justify-content : flex-start !important;\n  }\n  .justify-content-lg-end {\n    -webkit-box-pack : end !important;\n    -webkit-justify-content : flex-end !important;\n       -moz-box-pack : end !important;\n    -ms-flex-pack : end !important;\n            justify-content : flex-end !important;\n  }\n  .justify-content-lg-center {\n    -webkit-box-pack : center !important;\n    -webkit-justify-content : center !important;\n       -moz-box-pack : center !important;\n    -ms-flex-pack : center !important;\n            justify-content : center !important;\n  }\n  .justify-content-lg-between {\n    -webkit-box-pack : justify !important;\n    -webkit-justify-content : space-between !important;\n       -moz-box-pack : justify !important;\n    -ms-flex-pack : justify !important;\n            justify-content : space-between !important;\n  }\n  .justify-content-lg-around {\n    -webkit-justify-content : space-around !important;\n    -ms-flex-pack : distribute !important;\n            justify-content : space-around !important;\n  }\n  .align-items-lg-start {\n    -webkit-box-align : start !important;\n    -webkit-align-items : flex-start !important;\n       -moz-box-align : start !important;\n    -ms-flex-align : start !important;\n            align-items : flex-start !important;\n  }\n  .align-items-lg-end {\n    -webkit-box-align : end !important;\n    -webkit-align-items : flex-end !important;\n       -moz-box-align : end !important;\n    -ms-flex-align : end !important;\n            align-items : flex-end !important;\n  }\n  .align-items-lg-center {\n    -webkit-box-align : center !important;\n    -webkit-align-items : center !important;\n       -moz-box-align : center !important;\n    -ms-flex-align : center !important;\n            align-items : center !important;\n  }\n  .align-items-lg-baseline {\n    -webkit-box-align : baseline !important;\n    -webkit-align-items : baseline !important;\n       -moz-box-align : baseline !important;\n    -ms-flex-align : baseline !important;\n            align-items : baseline !important;\n  }\n  .align-items-lg-stretch {\n    -webkit-box-align : stretch !important;\n    -webkit-align-items : stretch !important;\n       -moz-box-align : stretch !important;\n    -ms-flex-align : stretch !important;\n            align-items : stretch !important;\n  }\n  .align-content-lg-start {\n    -webkit-align-content : flex-start !important;\n    -ms-flex-line-pack : start !important;\n            align-content : flex-start !important;\n  }\n  .align-content-lg-end {\n    -webkit-align-content : flex-end !important;\n    -ms-flex-line-pack : end !important;\n            align-content : flex-end !important;\n  }\n  .align-content-lg-center {\n    -webkit-align-content : center !important;\n    -ms-flex-line-pack : center !important;\n            align-content : center !important;\n  }\n  .align-content-lg-between {\n    -webkit-align-content : space-between !important;\n    -ms-flex-line-pack : justify !important;\n            align-content : space-between !important;\n  }\n  .align-content-lg-around {\n    -webkit-align-content : space-around !important;\n    -ms-flex-line-pack : distribute !important;\n            align-content : space-around !important;\n  }\n  .align-content-lg-stretch {\n    -webkit-align-content : stretch !important;\n    -ms-flex-line-pack : stretch !important;\n            align-content : stretch !important;\n  }\n  .align-self-lg-auto {\n    -webkit-align-self : auto !important;\n    -ms-flex-item-align : auto !important;\n            align-self : auto !important;\n  }\n  .align-self-lg-start {\n    -webkit-align-self : flex-start !important;\n    -ms-flex-item-align : start !important;\n            align-self : flex-start !important;\n  }\n  .align-self-lg-end {\n    -webkit-align-self : flex-end !important;\n    -ms-flex-item-align : end !important;\n            align-self : flex-end !important;\n  }\n  .align-self-lg-center {\n    -webkit-align-self : center !important;\n    -ms-flex-item-align : center !important;\n            align-self : center !important;\n  }\n  .align-self-lg-baseline {\n    -webkit-align-self : baseline !important;\n    -ms-flex-item-align : baseline !important;\n            align-self : baseline !important;\n  }\n  .align-self-lg-stretch {\n    -webkit-align-self : stretch !important;\n    -ms-flex-item-align : stretch !important;\n            align-self : stretch !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -webkit-box-orient : horizontal !important;\n    -webkit-box-direction : normal !important;\n    -webkit-flex-direction : row !important;\n       -moz-box-orient : horizontal !important;\n       -moz-box-direction : normal !important;\n        -ms-flex-direction : row !important;\n            flex-direction : row !important;\n  }\n  .flex-xl-column {\n    -webkit-box-orient : vertical !important;\n    -webkit-box-direction : normal !important;\n    -webkit-flex-direction : column !important;\n       -moz-box-orient : vertical !important;\n       -moz-box-direction : normal !important;\n        -ms-flex-direction : column !important;\n            flex-direction : column !important;\n  }\n  .flex-xl-row-reverse {\n    -webkit-box-orient : horizontal !important;\n    -webkit-box-direction : reverse !important;\n    -webkit-flex-direction : row-reverse !important;\n       -moz-box-orient : horizontal !important;\n       -moz-box-direction : reverse !important;\n        -ms-flex-direction : row-reverse !important;\n            flex-direction : row-reverse !important;\n  }\n  .flex-xl-column-reverse {\n    -webkit-box-orient : vertical !important;\n    -webkit-box-direction : reverse !important;\n    -webkit-flex-direction : column-reverse !important;\n       -moz-box-orient : vertical !important;\n       -moz-box-direction : reverse !important;\n        -ms-flex-direction : column-reverse !important;\n            flex-direction : column-reverse !important;\n  }\n  .flex-xl-wrap {\n    -webkit-flex-wrap : wrap !important;\n        -ms-flex-wrap : wrap !important;\n            flex-wrap : wrap !important;\n  }\n  .flex-xl-nowrap {\n    -webkit-flex-wrap : nowrap !important;\n        -ms-flex-wrap : nowrap !important;\n            flex-wrap : nowrap !important;\n  }\n  .flex-xl-wrap-reverse {\n    -webkit-flex-wrap : wrap-reverse !important;\n        -ms-flex-wrap : wrap-reverse !important;\n            flex-wrap : wrap-reverse !important;\n  }\n  .flex-xl-fill {\n    -webkit-box-flex : 1 !important;\n    -webkit-flex : 1 1 auto !important;\n       -moz-box-flex : 1 !important;\n        -ms-flex : 1 1 auto !important;\n            flex : 1 1 auto !important;\n  }\n  .flex-xl-grow-0 {\n    -webkit-box-flex : 0 !important;\n    -webkit-flex-grow : 0 !important;\n       -moz-box-flex : 0 !important;\n    -ms-flex-positive : 0 !important;\n            flex-grow : 0 !important;\n  }\n  .flex-xl-grow-1 {\n    -webkit-box-flex : 1 !important;\n    -webkit-flex-grow : 1 !important;\n       -moz-box-flex : 1 !important;\n    -ms-flex-positive : 1 !important;\n            flex-grow : 1 !important;\n  }\n  .flex-xl-shrink-0 {\n    -webkit-flex-shrink : 0 !important;\n    -ms-flex-negative : 0 !important;\n            flex-shrink : 0 !important;\n  }\n  .flex-xl-shrink-1 {\n    -webkit-flex-shrink : 1 !important;\n    -ms-flex-negative : 1 !important;\n            flex-shrink : 1 !important;\n  }\n  .justify-content-xl-start {\n    -webkit-box-pack : start !important;\n    -webkit-justify-content : flex-start !important;\n       -moz-box-pack : start !important;\n    -ms-flex-pack : start !important;\n            justify-content : flex-start !important;\n  }\n  .justify-content-xl-end {\n    -webkit-box-pack : end !important;\n    -webkit-justify-content : flex-end !important;\n       -moz-box-pack : end !important;\n    -ms-flex-pack : end !important;\n            justify-content : flex-end !important;\n  }\n  .justify-content-xl-center {\n    -webkit-box-pack : center !important;\n    -webkit-justify-content : center !important;\n       -moz-box-pack : center !important;\n    -ms-flex-pack : center !important;\n            justify-content : center !important;\n  }\n  .justify-content-xl-between {\n    -webkit-box-pack : justify !important;\n    -webkit-justify-content : space-between !important;\n       -moz-box-pack : justify !important;\n    -ms-flex-pack : justify !important;\n            justify-content : space-between !important;\n  }\n  .justify-content-xl-around {\n    -webkit-justify-content : space-around !important;\n    -ms-flex-pack : distribute !important;\n            justify-content : space-around !important;\n  }\n  .align-items-xl-start {\n    -webkit-box-align : start !important;\n    -webkit-align-items : flex-start !important;\n       -moz-box-align : start !important;\n    -ms-flex-align : start !important;\n            align-items : flex-start !important;\n  }\n  .align-items-xl-end {\n    -webkit-box-align : end !important;\n    -webkit-align-items : flex-end !important;\n       -moz-box-align : end !important;\n    -ms-flex-align : end !important;\n            align-items : flex-end !important;\n  }\n  .align-items-xl-center {\n    -webkit-box-align : center !important;\n    -webkit-align-items : center !important;\n       -moz-box-align : center !important;\n    -ms-flex-align : center !important;\n            align-items : center !important;\n  }\n  .align-items-xl-baseline {\n    -webkit-box-align : baseline !important;\n    -webkit-align-items : baseline !important;\n       -moz-box-align : baseline !important;\n    -ms-flex-align : baseline !important;\n            align-items : baseline !important;\n  }\n  .align-items-xl-stretch {\n    -webkit-box-align : stretch !important;\n    -webkit-align-items : stretch !important;\n       -moz-box-align : stretch !important;\n    -ms-flex-align : stretch !important;\n            align-items : stretch !important;\n  }\n  .align-content-xl-start {\n    -webkit-align-content : flex-start !important;\n    -ms-flex-line-pack : start !important;\n            align-content : flex-start !important;\n  }\n  .align-content-xl-end {\n    -webkit-align-content : flex-end !important;\n    -ms-flex-line-pack : end !important;\n            align-content : flex-end !important;\n  }\n  .align-content-xl-center {\n    -webkit-align-content : center !important;\n    -ms-flex-line-pack : center !important;\n            align-content : center !important;\n  }\n  .align-content-xl-between {\n    -webkit-align-content : space-between !important;\n    -ms-flex-line-pack : justify !important;\n            align-content : space-between !important;\n  }\n  .align-content-xl-around {\n    -webkit-align-content : space-around !important;\n    -ms-flex-line-pack : distribute !important;\n            align-content : space-around !important;\n  }\n  .align-content-xl-stretch {\n    -webkit-align-content : stretch !important;\n    -ms-flex-line-pack : stretch !important;\n            align-content : stretch !important;\n  }\n  .align-self-xl-auto {\n    -webkit-align-self : auto !important;\n    -ms-flex-item-align : auto !important;\n            align-self : auto !important;\n  }\n  .align-self-xl-start {\n    -webkit-align-self : flex-start !important;\n    -ms-flex-item-align : start !important;\n            align-self : flex-start !important;\n  }\n  .align-self-xl-end {\n    -webkit-align-self : flex-end !important;\n    -ms-flex-item-align : end !important;\n            align-self : flex-end !important;\n  }\n  .align-self-xl-center {\n    -webkit-align-self : center !important;\n    -ms-flex-item-align : center !important;\n            align-self : center !important;\n  }\n  .align-self-xl-baseline {\n    -webkit-align-self : baseline !important;\n    -ms-flex-item-align : baseline !important;\n            align-self : baseline !important;\n  }\n  .align-self-xl-stretch {\n    -webkit-align-self : stretch !important;\n    -ms-flex-item-align : stretch !important;\n            align-self : stretch !important;\n  }\n}\n\n.float-left {\n  float : left !important;\n}\n\n.float-right {\n  float : right !important;\n}\n\n.float-none {\n  float : none !important;\n}\n\n@media (min-width: 576px) {\n  .float-sm-left {\n    float : left !important;\n  }\n  .float-sm-right {\n    float : right !important;\n  }\n  .float-sm-none {\n    float : none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .float-md-left {\n    float : left !important;\n  }\n  .float-md-right {\n    float : right !important;\n  }\n  .float-md-none {\n    float : none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .float-lg-left {\n    float : left !important;\n  }\n  .float-lg-right {\n    float : right !important;\n  }\n  .float-lg-none {\n    float : none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float : left !important;\n  }\n  .float-xl-right {\n    float : right !important;\n  }\n  .float-xl-none {\n    float : none !important;\n  }\n}\n\n.position-static {\n  position : static !important;\n}\n\n.position-relative {\n  position : relative !important;\n}\n\n.position-absolute {\n  position : absolute !important;\n}\n\n.position-fixed {\n  position : fixed !important;\n}\n\n.position-sticky {\n  position : -webkit-sticky !important;\n  position :         sticky !important;\n}\n\n.fixed-top {\n  position : fixed;\n  top : 0;\n  right : 0;\n  left : 0;\n  z-index : 1030;\n}\n\n.fixed-bottom {\n  position : fixed;\n  right : 0;\n  bottom : 0;\n  left : 0;\n  z-index : 1030;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position : -webkit-sticky;\n    position :         sticky;\n    top : 0;\n    z-index : 1020;\n  }\n}\n\n.sr-only {\n  position : absolute;\n  width : 1px;\n  height : 1px;\n  padding : 0;\n  overflow : hidden;\n  clip : rect(0, 0, 0, 0);\n  white-space : nowrap;\n  border : 0;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position : static;\n  width : auto;\n  height : auto;\n  overflow : visible;\n  clip : auto;\n  white-space : normal;\n}\n\n.shadow-sm {\n  -webkit-box-shadow : 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n          box-shadow : 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\n}\n\n.shadow {\n  -webkit-box-shadow : 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n          box-shadow : 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;\n}\n\n.shadow-lg {\n  -webkit-box-shadow : 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n          box-shadow : 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}\n\n.shadow-none {\n  -webkit-box-shadow : none !important;\n          box-shadow : none !important;\n}\n\n.w-25 {\n  width : 25% !important;\n}\n\n.w-50 {\n  width : 50% !important;\n}\n\n.w-75 {\n  width : 75% !important;\n}\n\n.w-100 {\n  width : 100% !important;\n}\n\n.w-auto {\n  width : auto !important;\n}\n\n.h-25 {\n  height : 25% !important;\n}\n\n.h-50 {\n  height : 50% !important;\n}\n\n.h-75 {\n  height : 75% !important;\n}\n\n.h-100 {\n  height : 100% !important;\n}\n\n.h-auto {\n  height : auto !important;\n}\n\n.mw-100 {\n  max-width : 100% !important;\n}\n\n.mh-100 {\n  max-height : 100% !important;\n}\n\n.m-0 {\n  margin : 0 !important;\n}\n\n.mt-0, .my-0 {\n  margin-top : 0 !important;\n}\n\n.mr-0, .mx-0 {\n  margin-right : 0 !important;\n}\n\n.mb-0, .my-0 {\n  margin-bottom : 0 !important;\n}\n\n.ml-0, .mx-0 {\n  margin-left : 0 !important;\n}\n\n.m-1 {\n  margin : 0.25rem !important;\n}\n\n.mt-1, .my-1 {\n  margin-top : 0.25rem !important;\n}\n\n.mr-1, .mx-1 {\n  margin-right : 0.25rem !important;\n}\n\n.mb-1, .my-1 {\n  margin-bottom : 0.25rem !important;\n}\n\n.ml-1, .mx-1 {\n  margin-left : 0.25rem !important;\n}\n\n.m-2 {\n  margin : 0.5rem !important;\n}\n\n.mt-2, .my-2 {\n  margin-top : 0.5rem !important;\n}\n\n.mr-2, .mx-2 {\n  margin-right : 0.5rem !important;\n}\n\n.mb-2, .my-2 {\n  margin-bottom : 0.5rem !important;\n}\n\n.ml-2, .mx-2 {\n  margin-left : 0.5rem !important;\n}\n\n.m-3 {\n  margin : 1rem !important;\n}\n\n.mt-3, .my-3 {\n  margin-top : 1rem !important;\n}\n\n.mr-3, .mx-3 {\n  margin-right : 1rem !important;\n}\n\n.mb-3, .my-3 {\n  margin-bottom : 1rem !important;\n}\n\n.ml-3, .mx-3 {\n  margin-left : 1rem !important;\n}\n\n.m-4 {\n  margin : 1.5rem !important;\n}\n\n.mt-4, .my-4 {\n  margin-top : 1.5rem !important;\n}\n\n.mr-4, .mx-4 {\n  margin-right : 1.5rem !important;\n}\n\n.mb-4, .my-4 {\n  margin-bottom : 1.5rem !important;\n}\n\n.ml-4, .mx-4 {\n  margin-left : 1.5rem !important;\n}\n\n.m-5 {\n  margin : 3rem !important;\n}\n\n.mt-5, .my-5 {\n  margin-top : 3rem !important;\n}\n\n.mr-5, .mx-5 {\n  margin-right : 3rem !important;\n}\n\n.mb-5, .my-5 {\n  margin-bottom : 3rem !important;\n}\n\n.ml-5, .mx-5 {\n  margin-left : 3rem !important;\n}\n\n.p-0 {\n  padding : 0 !important;\n}\n\n.pt-0, .py-0 {\n  padding-top : 0 !important;\n}\n\n.pr-0, .px-0 {\n  padding-right : 0 !important;\n}\n\n.pb-0, .py-0 {\n  padding-bottom : 0 !important;\n}\n\n.pl-0, .px-0 {\n  padding-left : 0 !important;\n}\n\n.p-1 {\n  padding : 0.25rem !important;\n}\n\n.pt-1, .py-1 {\n  padding-top : 0.25rem !important;\n}\n\n.pr-1, .px-1 {\n  padding-right : 0.25rem !important;\n}\n\n.pb-1, .py-1 {\n  padding-bottom : 0.25rem !important;\n}\n\n.pl-1, .px-1 {\n  padding-left : 0.25rem !important;\n}\n\n.p-2 {\n  padding : 0.5rem !important;\n}\n\n.pt-2, .py-2 {\n  padding-top : 0.5rem !important;\n}\n\n.pr-2, .px-2 {\n  padding-right : 0.5rem !important;\n}\n\n.pb-2, .py-2 {\n  padding-bottom : 0.5rem !important;\n}\n\n.pl-2, .px-2 {\n  padding-left : 0.5rem !important;\n}\n\n.p-3 {\n  padding : 1rem !important;\n}\n\n.pt-3, .py-3 {\n  padding-top : 1rem !important;\n}\n\n.pr-3, .px-3 {\n  padding-right : 1rem !important;\n}\n\n.pb-3, .py-3 {\n  padding-bottom : 1rem !important;\n}\n\n.pl-3, .px-3 {\n  padding-left : 1rem !important;\n}\n\n.p-4 {\n  padding : 1.5rem !important;\n}\n\n.pt-4, .py-4 {\n  padding-top : 1.5rem !important;\n}\n\n.pr-4, .px-4 {\n  padding-right : 1.5rem !important;\n}\n\n.pb-4, .py-4 {\n  padding-bottom : 1.5rem !important;\n}\n\n.pl-4, .px-4 {\n  padding-left : 1.5rem !important;\n}\n\n.p-5 {\n  padding : 3rem !important;\n}\n\n.pt-5, .py-5 {\n  padding-top : 3rem !important;\n}\n\n.pr-5, .px-5 {\n  padding-right : 3rem !important;\n}\n\n.pb-5, .py-5 {\n  padding-bottom : 3rem !important;\n}\n\n.pl-5, .px-5 {\n  padding-left : 3rem !important;\n}\n\n.m-auto {\n  margin : auto !important;\n}\n\n.mt-auto, .my-auto {\n  margin-top : auto !important;\n}\n\n.mr-auto, .mx-auto {\n  margin-right : auto !important;\n}\n\n.mb-auto, .my-auto {\n  margin-bottom : auto !important;\n}\n\n.ml-auto, .mx-auto {\n  margin-left : auto !important;\n}\n\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin : 0 !important;\n  }\n  .mt-sm-0, .my-sm-0 {\n    margin-top : 0 !important;\n  }\n  .mr-sm-0, .mx-sm-0 {\n    margin-right : 0 !important;\n  }\n  .mb-sm-0, .my-sm-0 {\n    margin-bottom : 0 !important;\n  }\n  .ml-sm-0, .mx-sm-0 {\n    margin-left : 0 !important;\n  }\n  .m-sm-1 {\n    margin : 0.25rem !important;\n  }\n  .mt-sm-1, .my-sm-1 {\n    margin-top : 0.25rem !important;\n  }\n  .mr-sm-1, .mx-sm-1 {\n    margin-right : 0.25rem !important;\n  }\n  .mb-sm-1, .my-sm-1 {\n    margin-bottom : 0.25rem !important;\n  }\n  .ml-sm-1, .mx-sm-1 {\n    margin-left : 0.25rem !important;\n  }\n  .m-sm-2 {\n    margin : 0.5rem !important;\n  }\n  .mt-sm-2, .my-sm-2 {\n    margin-top : 0.5rem !important;\n  }\n  .mr-sm-2, .mx-sm-2 {\n    margin-right : 0.5rem !important;\n  }\n  .mb-sm-2, .my-sm-2 {\n    margin-bottom : 0.5rem !important;\n  }\n  .ml-sm-2, .mx-sm-2 {\n    margin-left : 0.5rem !important;\n  }\n  .m-sm-3 {\n    margin : 1rem !important;\n  }\n  .mt-sm-3, .my-sm-3 {\n    margin-top : 1rem !important;\n  }\n  .mr-sm-3, .mx-sm-3 {\n    margin-right : 1rem !important;\n  }\n  .mb-sm-3, .my-sm-3 {\n    margin-bottom : 1rem !important;\n  }\n  .ml-sm-3, .mx-sm-3 {\n    margin-left : 1rem !important;\n  }\n  .m-sm-4 {\n    margin : 1.5rem !important;\n  }\n  .mt-sm-4, .my-sm-4 {\n    margin-top : 1.5rem !important;\n  }\n  .mr-sm-4, .mx-sm-4 {\n    margin-right : 1.5rem !important;\n  }\n  .mb-sm-4, .my-sm-4 {\n    margin-bottom : 1.5rem !important;\n  }\n  .ml-sm-4, .mx-sm-4 {\n    margin-left : 1.5rem !important;\n  }\n  .m-sm-5 {\n    margin : 3rem !important;\n  }\n  .mt-sm-5, .my-sm-5 {\n    margin-top : 3rem !important;\n  }\n  .mr-sm-5, .mx-sm-5 {\n    margin-right : 3rem !important;\n  }\n  .mb-sm-5, .my-sm-5 {\n    margin-bottom : 3rem !important;\n  }\n  .ml-sm-5, .mx-sm-5 {\n    margin-left : 3rem !important;\n  }\n  .p-sm-0 {\n    padding : 0 !important;\n  }\n  .pt-sm-0, .py-sm-0 {\n    padding-top : 0 !important;\n  }\n  .pr-sm-0, .px-sm-0 {\n    padding-right : 0 !important;\n  }\n  .pb-sm-0, .py-sm-0 {\n    padding-bottom : 0 !important;\n  }\n  .pl-sm-0, .px-sm-0 {\n    padding-left : 0 !important;\n  }\n  .p-sm-1 {\n    padding : 0.25rem !important;\n  }\n  .pt-sm-1, .py-sm-1 {\n    padding-top : 0.25rem !important;\n  }\n  .pr-sm-1, .px-sm-1 {\n    padding-right : 0.25rem !important;\n  }\n  .pb-sm-1, .py-sm-1 {\n    padding-bottom : 0.25rem !important;\n  }\n  .pl-sm-1, .px-sm-1 {\n    padding-left : 0.25rem !important;\n  }\n  .p-sm-2 {\n    padding : 0.5rem !important;\n  }\n  .pt-sm-2, .py-sm-2 {\n    padding-top : 0.5rem !important;\n  }\n  .pr-sm-2, .px-sm-2 {\n    padding-right : 0.5rem !important;\n  }\n  .pb-sm-2, .py-sm-2 {\n    padding-bottom : 0.5rem !important;\n  }\n  .pl-sm-2, .px-sm-2 {\n    padding-left : 0.5rem !important;\n  }\n  .p-sm-3 {\n    padding : 1rem !important;\n  }\n  .pt-sm-3, .py-sm-3 {\n    padding-top : 1rem !important;\n  }\n  .pr-sm-3, .px-sm-3 {\n    padding-right : 1rem !important;\n  }\n  .pb-sm-3, .py-sm-3 {\n    padding-bottom : 1rem !important;\n  }\n  .pl-sm-3, .px-sm-3 {\n    padding-left : 1rem !important;\n  }\n  .p-sm-4 {\n    padding : 1.5rem !important;\n  }\n  .pt-sm-4, .py-sm-4 {\n    padding-top : 1.5rem !important;\n  }\n  .pr-sm-4, .px-sm-4 {\n    padding-right : 1.5rem !important;\n  }\n  .pb-sm-4, .py-sm-4 {\n    padding-bottom : 1.5rem !important;\n  }\n  .pl-sm-4, .px-sm-4 {\n    padding-left : 1.5rem !important;\n  }\n  .p-sm-5 {\n    padding : 3rem !important;\n  }\n  .pt-sm-5, .py-sm-5 {\n    padding-top : 3rem !important;\n  }\n  .pr-sm-5, .px-sm-5 {\n    padding-right : 3rem !important;\n  }\n  .pb-sm-5, .py-sm-5 {\n    padding-bottom : 3rem !important;\n  }\n  .pl-sm-5, .px-sm-5 {\n    padding-left : 3rem !important;\n  }\n  .m-sm-auto {\n    margin : auto !important;\n  }\n  .mt-sm-auto, .my-sm-auto {\n    margin-top : auto !important;\n  }\n  .mr-sm-auto, .mx-sm-auto {\n    margin-right : auto !important;\n  }\n  .mb-sm-auto, .my-sm-auto {\n    margin-bottom : auto !important;\n  }\n  .ml-sm-auto, .mx-sm-auto {\n    margin-left : auto !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin : 0 !important;\n  }\n  .mt-md-0, .my-md-0 {\n    margin-top : 0 !important;\n  }\n  .mr-md-0, .mx-md-0 {\n    margin-right : 0 !important;\n  }\n  .mb-md-0, .my-md-0 {\n    margin-bottom : 0 !important;\n  }\n  .ml-md-0, .mx-md-0 {\n    margin-left : 0 !important;\n  }\n  .m-md-1 {\n    margin : 0.25rem !important;\n  }\n  .mt-md-1, .my-md-1 {\n    margin-top : 0.25rem !important;\n  }\n  .mr-md-1, .mx-md-1 {\n    margin-right : 0.25rem !important;\n  }\n  .mb-md-1, .my-md-1 {\n    margin-bottom : 0.25rem !important;\n  }\n  .ml-md-1, .mx-md-1 {\n    margin-left : 0.25rem !important;\n  }\n  .m-md-2 {\n    margin : 0.5rem !important;\n  }\n  .mt-md-2, .my-md-2 {\n    margin-top : 0.5rem !important;\n  }\n  .mr-md-2, .mx-md-2 {\n    margin-right : 0.5rem !important;\n  }\n  .mb-md-2, .my-md-2 {\n    margin-bottom : 0.5rem !important;\n  }\n  .ml-md-2, .mx-md-2 {\n    margin-left : 0.5rem !important;\n  }\n  .m-md-3 {\n    margin : 1rem !important;\n  }\n  .mt-md-3, .my-md-3 {\n    margin-top : 1rem !important;\n  }\n  .mr-md-3, .mx-md-3 {\n    margin-right : 1rem !important;\n  }\n  .mb-md-3, .my-md-3 {\n    margin-bottom : 1rem !important;\n  }\n  .ml-md-3, .mx-md-3 {\n    margin-left : 1rem !important;\n  }\n  .m-md-4 {\n    margin : 1.5rem !important;\n  }\n  .mt-md-4, .my-md-4 {\n    margin-top : 1.5rem !important;\n  }\n  .mr-md-4, .mx-md-4 {\n    margin-right : 1.5rem !important;\n  }\n  .mb-md-4, .my-md-4 {\n    margin-bottom : 1.5rem !important;\n  }\n  .ml-md-4, .mx-md-4 {\n    margin-left : 1.5rem !important;\n  }\n  .m-md-5 {\n    margin : 3rem !important;\n  }\n  .mt-md-5, .my-md-5 {\n    margin-top : 3rem !important;\n  }\n  .mr-md-5, .mx-md-5 {\n    margin-right : 3rem !important;\n  }\n  .mb-md-5, .my-md-5 {\n    margin-bottom : 3rem !important;\n  }\n  .ml-md-5, .mx-md-5 {\n    margin-left : 3rem !important;\n  }\n  .p-md-0 {\n    padding : 0 !important;\n  }\n  .pt-md-0, .py-md-0 {\n    padding-top : 0 !important;\n  }\n  .pr-md-0, .px-md-0 {\n    padding-right : 0 !important;\n  }\n  .pb-md-0, .py-md-0 {\n    padding-bottom : 0 !important;\n  }\n  .pl-md-0, .px-md-0 {\n    padding-left : 0 !important;\n  }\n  .p-md-1 {\n    padding : 0.25rem !important;\n  }\n  .pt-md-1, .py-md-1 {\n    padding-top : 0.25rem !important;\n  }\n  .pr-md-1, .px-md-1 {\n    padding-right : 0.25rem !important;\n  }\n  .pb-md-1, .py-md-1 {\n    padding-bottom : 0.25rem !important;\n  }\n  .pl-md-1, .px-md-1 {\n    padding-left : 0.25rem !important;\n  }\n  .p-md-2 {\n    padding : 0.5rem !important;\n  }\n  .pt-md-2, .py-md-2 {\n    padding-top : 0.5rem !important;\n  }\n  .pr-md-2, .px-md-2 {\n    padding-right : 0.5rem !important;\n  }\n  .pb-md-2, .py-md-2 {\n    padding-bottom : 0.5rem !important;\n  }\n  .pl-md-2, .px-md-2 {\n    padding-left : 0.5rem !important;\n  }\n  .p-md-3 {\n    padding : 1rem !important;\n  }\n  .pt-md-3, .py-md-3 {\n    padding-top : 1rem !important;\n  }\n  .pr-md-3, .px-md-3 {\n    padding-right : 1rem !important;\n  }\n  .pb-md-3, .py-md-3 {\n    padding-bottom : 1rem !important;\n  }\n  .pl-md-3, .px-md-3 {\n    padding-left : 1rem !important;\n  }\n  .p-md-4 {\n    padding : 1.5rem !important;\n  }\n  .pt-md-4, .py-md-4 {\n    padding-top : 1.5rem !important;\n  }\n  .pr-md-4, .px-md-4 {\n    padding-right : 1.5rem !important;\n  }\n  .pb-md-4, .py-md-4 {\n    padding-bottom : 1.5rem !important;\n  }\n  .pl-md-4, .px-md-4 {\n    padding-left : 1.5rem !important;\n  }\n  .p-md-5 {\n    padding : 3rem !important;\n  }\n  .pt-md-5, .py-md-5 {\n    padding-top : 3rem !important;\n  }\n  .pr-md-5, .px-md-5 {\n    padding-right : 3rem !important;\n  }\n  .pb-md-5, .py-md-5 {\n    padding-bottom : 3rem !important;\n  }\n  .pl-md-5, .px-md-5 {\n    padding-left : 3rem !important;\n  }\n  .m-md-auto {\n    margin : auto !important;\n  }\n  .mt-md-auto, .my-md-auto {\n    margin-top : auto !important;\n  }\n  .mr-md-auto, .mx-md-auto {\n    margin-right : auto !important;\n  }\n  .mb-md-auto, .my-md-auto {\n    margin-bottom : auto !important;\n  }\n  .ml-md-auto, .mx-md-auto {\n    margin-left : auto !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin : 0 !important;\n  }\n  .mt-lg-0, .my-lg-0 {\n    margin-top : 0 !important;\n  }\n  .mr-lg-0, .mx-lg-0 {\n    margin-right : 0 !important;\n  }\n  .mb-lg-0, .my-lg-0 {\n    margin-bottom : 0 !important;\n  }\n  .ml-lg-0, .mx-lg-0 {\n    margin-left : 0 !important;\n  }\n  .m-lg-1 {\n    margin : 0.25rem !important;\n  }\n  .mt-lg-1, .my-lg-1 {\n    margin-top : 0.25rem !important;\n  }\n  .mr-lg-1, .mx-lg-1 {\n    margin-right : 0.25rem !important;\n  }\n  .mb-lg-1, .my-lg-1 {\n    margin-bottom : 0.25rem !important;\n  }\n  .ml-lg-1, .mx-lg-1 {\n    margin-left : 0.25rem !important;\n  }\n  .m-lg-2 {\n    margin : 0.5rem !important;\n  }\n  .mt-lg-2, .my-lg-2 {\n    margin-top : 0.5rem !important;\n  }\n  .mr-lg-2, .mx-lg-2 {\n    margin-right : 0.5rem !important;\n  }\n  .mb-lg-2, .my-lg-2 {\n    margin-bottom : 0.5rem !important;\n  }\n  .ml-lg-2, .mx-lg-2 {\n    margin-left : 0.5rem !important;\n  }\n  .m-lg-3 {\n    margin : 1rem !important;\n  }\n  .mt-lg-3, .my-lg-3 {\n    margin-top : 1rem !important;\n  }\n  .mr-lg-3, .mx-lg-3 {\n    margin-right : 1rem !important;\n  }\n  .mb-lg-3, .my-lg-3 {\n    margin-bottom : 1rem !important;\n  }\n  .ml-lg-3, .mx-lg-3 {\n    margin-left : 1rem !important;\n  }\n  .m-lg-4 {\n    margin : 1.5rem !important;\n  }\n  .mt-lg-4, .my-lg-4 {\n    margin-top : 1.5rem !important;\n  }\n  .mr-lg-4, .mx-lg-4 {\n    margin-right : 1.5rem !important;\n  }\n  .mb-lg-4, .my-lg-4 {\n    margin-bottom : 1.5rem !important;\n  }\n  .ml-lg-4, .mx-lg-4 {\n    margin-left : 1.5rem !important;\n  }\n  .m-lg-5 {\n    margin : 3rem !important;\n  }\n  .mt-lg-5, .my-lg-5 {\n    margin-top : 3rem !important;\n  }\n  .mr-lg-5, .mx-lg-5 {\n    margin-right : 3rem !important;\n  }\n  .mb-lg-5, .my-lg-5 {\n    margin-bottom : 3rem !important;\n  }\n  .ml-lg-5, .mx-lg-5 {\n    margin-left : 3rem !important;\n  }\n  .p-lg-0 {\n    padding : 0 !important;\n  }\n  .pt-lg-0, .py-lg-0 {\n    padding-top : 0 !important;\n  }\n  .pr-lg-0, .px-lg-0 {\n    padding-right : 0 !important;\n  }\n  .pb-lg-0, .py-lg-0 {\n    padding-bottom : 0 !important;\n  }\n  .pl-lg-0, .px-lg-0 {\n    padding-left : 0 !important;\n  }\n  .p-lg-1 {\n    padding : 0.25rem !important;\n  }\n  .pt-lg-1, .py-lg-1 {\n    padding-top : 0.25rem !important;\n  }\n  .pr-lg-1, .px-lg-1 {\n    padding-right : 0.25rem !important;\n  }\n  .pb-lg-1, .py-lg-1 {\n    padding-bottom : 0.25rem !important;\n  }\n  .pl-lg-1, .px-lg-1 {\n    padding-left : 0.25rem !important;\n  }\n  .p-lg-2 {\n    padding : 0.5rem !important;\n  }\n  .pt-lg-2, .py-lg-2 {\n    padding-top : 0.5rem !important;\n  }\n  .pr-lg-2, .px-lg-2 {\n    padding-right : 0.5rem !important;\n  }\n  .pb-lg-2, .py-lg-2 {\n    padding-bottom : 0.5rem !important;\n  }\n  .pl-lg-2, .px-lg-2 {\n    padding-left : 0.5rem !important;\n  }\n  .p-lg-3 {\n    padding : 1rem !important;\n  }\n  .pt-lg-3, .py-lg-3 {\n    padding-top : 1rem !important;\n  }\n  .pr-lg-3, .px-lg-3 {\n    padding-right : 1rem !important;\n  }\n  .pb-lg-3, .py-lg-3 {\n    padding-bottom : 1rem !important;\n  }\n  .pl-lg-3, .px-lg-3 {\n    padding-left : 1rem !important;\n  }\n  .p-lg-4 {\n    padding : 1.5rem !important;\n  }\n  .pt-lg-4, .py-lg-4 {\n    padding-top : 1.5rem !important;\n  }\n  .pr-lg-4, .px-lg-4 {\n    padding-right : 1.5rem !important;\n  }\n  .pb-lg-4, .py-lg-4 {\n    padding-bottom : 1.5rem !important;\n  }\n  .pl-lg-4, .px-lg-4 {\n    padding-left : 1.5rem !important;\n  }\n  .p-lg-5 {\n    padding : 3rem !important;\n  }\n  .pt-lg-5, .py-lg-5 {\n    padding-top : 3rem !important;\n  }\n  .pr-lg-5, .px-lg-5 {\n    padding-right : 3rem !important;\n  }\n  .pb-lg-5, .py-lg-5 {\n    padding-bottom : 3rem !important;\n  }\n  .pl-lg-5, .px-lg-5 {\n    padding-left : 3rem !important;\n  }\n  .m-lg-auto {\n    margin : auto !important;\n  }\n  .mt-lg-auto, .my-lg-auto {\n    margin-top : auto !important;\n  }\n  .mr-lg-auto, .mx-lg-auto {\n    margin-right : auto !important;\n  }\n  .mb-lg-auto, .my-lg-auto {\n    margin-bottom : auto !important;\n  }\n  .ml-lg-auto, .mx-lg-auto {\n    margin-left : auto !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin : 0 !important;\n  }\n  .mt-xl-0, .my-xl-0 {\n    margin-top : 0 !important;\n  }\n  .mr-xl-0, .mx-xl-0 {\n    margin-right : 0 !important;\n  }\n  .mb-xl-0, .my-xl-0 {\n    margin-bottom : 0 !important;\n  }\n  .ml-xl-0, .mx-xl-0 {\n    margin-left : 0 !important;\n  }\n  .m-xl-1 {\n    margin : 0.25rem !important;\n  }\n  .mt-xl-1, .my-xl-1 {\n    margin-top : 0.25rem !important;\n  }\n  .mr-xl-1, .mx-xl-1 {\n    margin-right : 0.25rem !important;\n  }\n  .mb-xl-1, .my-xl-1 {\n    margin-bottom : 0.25rem !important;\n  }\n  .ml-xl-1, .mx-xl-1 {\n    margin-left : 0.25rem !important;\n  }\n  .m-xl-2 {\n    margin : 0.5rem !important;\n  }\n  .mt-xl-2, .my-xl-2 {\n    margin-top : 0.5rem !important;\n  }\n  .mr-xl-2, .mx-xl-2 {\n    margin-right : 0.5rem !important;\n  }\n  .mb-xl-2, .my-xl-2 {\n    margin-bottom : 0.5rem !important;\n  }\n  .ml-xl-2, .mx-xl-2 {\n    margin-left : 0.5rem !important;\n  }\n  .m-xl-3 {\n    margin : 1rem !important;\n  }\n  .mt-xl-3, .my-xl-3 {\n    margin-top : 1rem !important;\n  }\n  .mr-xl-3, .mx-xl-3 {\n    margin-right : 1rem !important;\n  }\n  .mb-xl-3, .my-xl-3 {\n    margin-bottom : 1rem !important;\n  }\n  .ml-xl-3, .mx-xl-3 {\n    margin-left : 1rem !important;\n  }\n  .m-xl-4 {\n    margin : 1.5rem !important;\n  }\n  .mt-xl-4, .my-xl-4 {\n    margin-top : 1.5rem !important;\n  }\n  .mr-xl-4, .mx-xl-4 {\n    margin-right : 1.5rem !important;\n  }\n  .mb-xl-4, .my-xl-4 {\n    margin-bottom : 1.5rem !important;\n  }\n  .ml-xl-4, .mx-xl-4 {\n    margin-left : 1.5rem !important;\n  }\n  .m-xl-5 {\n    margin : 3rem !important;\n  }\n  .mt-xl-5, .my-xl-5 {\n    margin-top : 3rem !important;\n  }\n  .mr-xl-5, .mx-xl-5 {\n    margin-right : 3rem !important;\n  }\n  .mb-xl-5, .my-xl-5 {\n    margin-bottom : 3rem !important;\n  }\n  .ml-xl-5, .mx-xl-5 {\n    margin-left : 3rem !important;\n  }\n  .p-xl-0 {\n    padding : 0 !important;\n  }\n  .pt-xl-0, .py-xl-0 {\n    padding-top : 0 !important;\n  }\n  .pr-xl-0, .px-xl-0 {\n    padding-right : 0 !important;\n  }\n  .pb-xl-0, .py-xl-0 {\n    padding-bottom : 0 !important;\n  }\n  .pl-xl-0, .px-xl-0 {\n    padding-left : 0 !important;\n  }\n  .p-xl-1 {\n    padding : 0.25rem !important;\n  }\n  .pt-xl-1, .py-xl-1 {\n    padding-top : 0.25rem !important;\n  }\n  .pr-xl-1, .px-xl-1 {\n    padding-right : 0.25rem !important;\n  }\n  .pb-xl-1, .py-xl-1 {\n    padding-bottom : 0.25rem !important;\n  }\n  .pl-xl-1, .px-xl-1 {\n    padding-left : 0.25rem !important;\n  }\n  .p-xl-2 {\n    padding : 0.5rem !important;\n  }\n  .pt-xl-2, .py-xl-2 {\n    padding-top : 0.5rem !important;\n  }\n  .pr-xl-2, .px-xl-2 {\n    padding-right : 0.5rem !important;\n  }\n  .pb-xl-2, .py-xl-2 {\n    padding-bottom : 0.5rem !important;\n  }\n  .pl-xl-2, .px-xl-2 {\n    padding-left : 0.5rem !important;\n  }\n  .p-xl-3 {\n    padding : 1rem !important;\n  }\n  .pt-xl-3, .py-xl-3 {\n    padding-top : 1rem !important;\n  }\n  .pr-xl-3, .px-xl-3 {\n    padding-right : 1rem !important;\n  }\n  .pb-xl-3, .py-xl-3 {\n    padding-bottom : 1rem !important;\n  }\n  .pl-xl-3, .px-xl-3 {\n    padding-left : 1rem !important;\n  }\n  .p-xl-4 {\n    padding : 1.5rem !important;\n  }\n  .pt-xl-4, .py-xl-4 {\n    padding-top : 1.5rem !important;\n  }\n  .pr-xl-4, .px-xl-4 {\n    padding-right : 1.5rem !important;\n  }\n  .pb-xl-4, .py-xl-4 {\n    padding-bottom : 1.5rem !important;\n  }\n  .pl-xl-4, .px-xl-4 {\n    padding-left : 1.5rem !important;\n  }\n  .p-xl-5 {\n    padding : 3rem !important;\n  }\n  .pt-xl-5, .py-xl-5 {\n    padding-top : 3rem !important;\n  }\n  .pr-xl-5, .px-xl-5 {\n    padding-right : 3rem !important;\n  }\n  .pb-xl-5, .py-xl-5 {\n    padding-bottom : 3rem !important;\n  }\n  .pl-xl-5, .px-xl-5 {\n    padding-left : 3rem !important;\n  }\n  .m-xl-auto {\n    margin : auto !important;\n  }\n  .mt-xl-auto, .my-xl-auto {\n    margin-top : auto !important;\n  }\n  .mr-xl-auto, .mx-xl-auto {\n    margin-right : auto !important;\n  }\n  .mb-xl-auto, .my-xl-auto {\n    margin-bottom : auto !important;\n  }\n  .ml-xl-auto, .mx-xl-auto {\n    margin-left : auto !important;\n  }\n}\n\n.text-monospace {\n  font-family : SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;\n}\n\n.text-justify {\n  text-align : justify !important;\n}\n\n.text-nowrap {\n  white-space : nowrap !important;\n}\n\n.text-truncate {\n  overflow : hidden;\n  text-overflow : ellipsis;\n  white-space : nowrap;\n}\n\n.text-left {\n  text-align : left !important;\n}\n\n.text-right {\n  text-align : right !important;\n}\n\n.text-center {\n  text-align : center !important;\n}\n\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align : left !important;\n  }\n  .text-sm-right {\n    text-align : right !important;\n  }\n  .text-sm-center {\n    text-align : center !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align : left !important;\n  }\n  .text-md-right {\n    text-align : right !important;\n  }\n  .text-md-center {\n    text-align : center !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align : left !important;\n  }\n  .text-lg-right {\n    text-align : right !important;\n  }\n  .text-lg-center {\n    text-align : center !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align : left !important;\n  }\n  .text-xl-right {\n    text-align : right !important;\n  }\n  .text-xl-center {\n    text-align : center !important;\n  }\n}\n\n.text-lowercase {\n  text-transform : lowercase !important;\n}\n\n.text-uppercase {\n  text-transform : uppercase !important;\n}\n\n.text-capitalize {\n  text-transform : capitalize !important;\n}\n\n.font-weight-light {\n  font-weight : 300 !important;\n}\n\n.font-weight-normal {\n  font-weight : 400 !important;\n}\n\n.font-weight-bold {\n  font-weight : 700 !important;\n}\n\n.font-italic {\n  font-style : italic !important;\n}\n\n.text-white {\n  color : #FFFFFF !important;\n}\n\n.text-primary {\n  color : #007BFF !important;\n}\n\na.text-primary:hover, a.text-primary:focus {\n  color : #0062CC !important;\n}\n\n.text-secondary {\n  color : #6C757D !important;\n}\n\na.text-secondary:hover, a.text-secondary:focus {\n  color : #545B62 !important;\n}\n\n.text-success {\n  color : #28A745 !important;\n}\n\na.text-success:hover, a.text-success:focus {\n  color : #1E7E34 !important;\n}\n\n.text-info {\n  color : #17A2B8 !important;\n}\n\na.text-info:hover, a.text-info:focus {\n  color : #117A8B !important;\n}\n\n.text-warning {\n  color : #FFC107 !important;\n}\n\na.text-warning:hover, a.text-warning:focus {\n  color : #D39E00 !important;\n}\n\n.text-danger {\n  color : #DC3545 !important;\n}\n\na.text-danger:hover, a.text-danger:focus {\n  color : #BD2130 !important;\n}\n\n.text-light {\n  color : #F8F9FA !important;\n}\n\na.text-light:hover, a.text-light:focus {\n  color : #DAE0E5 !important;\n}\n\n.text-dark {\n  color : #343A40 !important;\n}\n\na.text-dark:hover, a.text-dark:focus {\n  color : #1D2124 !important;\n}\n\n.text-body {\n  color : #212529 !important;\n}\n\n.text-muted {\n  color : #6C757D !important;\n}\n\n.text-black-50 {\n  color : rgba(0, 0, 0, 0.5) !important;\n}\n\n.text-white-50 {\n  color : rgba(255, 255, 255, 0.5) !important;\n}\n\n.text-hide {\n  font : 0/0 a;\n  color : transparent;\n  text-shadow : none;\n  background-color : transparent;\n  border : 0;\n}\n\n.visible {\n  visibility : visible !important;\n}\n\n.invisible {\n  visibility : hidden !important;\n}\n\n@media print {\n  *, *::before, *::after {\n    text-shadow : none !important;\n    -webkit-box-shadow : none !important;\n            box-shadow : none !important;\n  }\n  a:not(.btn) {\n    text-decoration : underline;\n  }\n  abbr[title]::after {\n    content : ' (' attr(title) ')';\n  }\n  pre {\n    white-space : pre-wrap !important;\n  }\n  pre, blockquote {\n    border : 1px solid #ADB5BD;\n    page-break-inside : avoid;\n  }\n  thead {\n    display : table-header-group;\n  }\n  tr, img {\n    page-break-inside : avoid;\n  }\n  p, h2, h3 {\n    orphans : 3;\n    widows : 3;\n  }\n  h2, h3 {\n    page-break-after : avoid;\n  }\n  @page {\n    size : a3;\n  }\n  body {\n    min-width : 992px !important;\n  }\n  .container {\n    min-width : 992px !important;\n  }\n  .navbar {\n    display : none;\n  }\n  .badge {\n    border : 1px solid #000000;\n  }\n  .table {\n    border-collapse : collapse !important;\n  }\n  .table td, .table th {\n    background-color : #FFFFFF !important;\n  }\n  .table-bordered th, .table-bordered td {\n    border : 1px solid #DEE2E6 !important;\n  }\n}\n";
n(css$3,{});

var css$2 = "\n.flip-clock-wrapper * {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    -o-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    -ms-backface-visibility: hidden;\n    -o-backface-visibility: hidden;\n    backface-visibility: hidden;\n}\n\n.flip-clock-wrapper a {\n  cursor: pointer;\n  text-decoration: none;\n  color: #ccc; }\n\n.flip-clock-wrapper a:hover {\n  color: #fff; }\n\n.flip-clock-wrapper ul {\n  list-style: none; }\n\n.flip-clock-wrapper.clearfix:before,\n.flip-clock-wrapper.clearfix:after {\n  content: \" \";\n  display: table; }\n\n.flip-clock-wrapper.clearfix:after {\n  clear: both; }\n\n.flip-clock-wrapper.clearfix {\n  *zoom: 1; }\n\n/* Main */\n.flip-clock-wrapper {\n  font: normal 11px \"Helvetica Neue\", Helvetica, sans-serif;\n  -webkit-user-select: none; }\n\n.flip-clock-meridium {\n  background: none !important;\n  box-shadow: 0 0 0 !important;\n  font-size: 36px !important; }\n\n.flip-clock-meridium a { color: #313333; }\n\n.flip-clock-wrapper {\n  text-align: center;\n  position: relative;\n  width: 100%;\n  margin: 1em;\n}\n\n.flip-clock-wrapper:before,\n.flip-clock-wrapper:after {\n    content: \" \"; /* 1 */\n    display: table; /* 2 */\n}\n.flip-clock-wrapper:after {\n    clear: both;\n}\n\n/* Skeleton */\n.flip-clock-wrapper ul {\n  position: relative;\n  float: left;\n  margin: 5px;\n  width: 60px;\n  height: 90px;\n  font-size: 80px;\n  font-weight: bold;\n  line-height: 87px;\n  border-radius: 6px;\n  background: #000;\n}\n\n.flip-clock-wrapper ul li {\n  z-index: 1;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  line-height: 87px;\n  text-decoration: none !important;\n}\n\n.flip-clock-wrapper ul li:first-child {\n  z-index: 2; }\n\n.flip-clock-wrapper ul li a {\n  display: block;\n  height: 100%;\n  -webkit-perspective: 200px;\n  -moz-perspective: 200px;\n  perspective: 200px;\n  margin: 0 !important;\n  overflow: visible !important;\n  cursor: default !important; }\n\n.flip-clock-wrapper ul li a div {\n  z-index: 1;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  font-size: 80px;\n  overflow: hidden;\n  outline: 1px solid transparent; }\n\n.flip-clock-wrapper ul li a div .shadow {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 2; }\n\n.flip-clock-wrapper ul li a div.up {\n  -webkit-transform-origin: 50% 100%;\n  -moz-transform-origin: 50% 100%;\n  -ms-transform-origin: 50% 100%;\n  -o-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n  top: 0; }\n\n.flip-clock-wrapper ul li a div.up:after {\n  content: \"\";\n  position: absolute;\n  top: 44px;\n  left: 0;\n  z-index: 5;\n  width: 100%;\n  height: 3px;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.flip-clock-wrapper ul li a div.down {\n  -webkit-transform-origin: 50% 0;\n  -moz-transform-origin: 50% 0;\n  -ms-transform-origin: 50% 0;\n  -o-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n  bottom: 0;\n  border-bottom-left-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n\n.flip-clock-wrapper ul li a div div.inn {\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 200%;\n  color: #ccc;\n  text-shadow: 0 1px 2px #000;\n  text-align: center;\n  background-color: #333;\n  border-radius: 6px;\n  font-size: 70px; }\n\n.flip-clock-wrapper ul li a div.up div.inn {\n  top: 0; }\n\n.flip-clock-wrapper ul li a div.down div.inn {\n  bottom: 0; }\n\n/* PLAY */\n.flip-clock-wrapper ul.play li.flip-clock-before {\n  z-index: 3; }\n\n.flip-clock-wrapper .flip {   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7); }\n\n.flip-clock-wrapper ul.play li.flip-clock-active {\n  -webkit-animation: asd 0.5s 0.5s linear both;\n  -moz-animation: asd 0.5s 0.5s linear both;\n  animation: asd 0.5s 0.5s linear both;\n  z-index: 5; }\n\n.flip-clock-divider {\n  float: left;\n  display: inline-block;\n  position: relative;\n  width: 20px;\n  height: 100px; }\n\n.flip-clock-divider:first-child {\n  width: 0; }\n\n.flip-clock-dot {\n  display: block;\n  background: #323434;\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  border-radius: 50%;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n  left: 5px; }\n\n.flip-clock-divider .flip-clock-label {\n  position: absolute;\n  top: -1.5em;\n  right: -86px;\n  color: black;\n  text-shadow: none; }\n\n.flip-clock-divider.minutes .flip-clock-label {\n  right: -88px; }\n\n.flip-clock-divider.seconds .flip-clock-label {\n  right: -91px; }\n\n.flip-clock-dot.top {\n  top: 30px; }\n\n.flip-clock-dot.bottom {\n  bottom: 30px; }\n\n@-webkit-keyframes asd {\n  0% {\n    z-index: 2; }\n\n  20% {\n    z-index: 4; }\n\n  100% {\n    z-index: 4; } }\n\n@-moz-keyframes asd {\n  0% {\n    z-index: 2; }\n\n  20% {\n    z-index: 4; }\n\n  100% {\n    z-index: 4; } }\n\n@-o-keyframes asd {\n  0% {\n    z-index: 2; }\n\n  20% {\n    z-index: 4; }\n\n  100% {\n    z-index: 4; } }\n\n@keyframes asd {\n  0% {\n    z-index: 2; }\n\n  20% {\n    z-index: 4; }\n\n  100% {\n    z-index: 4; } }\n\n.flip-clock-wrapper ul.play li.flip-clock-active .down {\n  z-index: 2;\n  -webkit-animation: turn 0.5s 0.5s linear both;\n  -moz-animation: turn 0.5s 0.5s linear both;\n  animation: turn 0.5s 0.5s linear both; }\n\n@-webkit-keyframes turn {\n  0% {\n    -webkit-transform: rotateX(90deg); }\n\n  100% {\n    -webkit-transform: rotateX(0deg); } }\n\n@-moz-keyframes turn {\n  0% {\n    -moz-transform: rotateX(90deg); }\n\n  100% {\n    -moz-transform: rotateX(0deg); } }\n\n@-o-keyframes turn {\n  0% {\n    -o-transform: rotateX(90deg); }\n\n  100% {\n    -o-transform: rotateX(0deg); } }\n\n@keyframes turn {\n  0% {\n    transform: rotateX(90deg); }\n\n  100% {\n    transform: rotateX(0deg); } }\n\n.flip-clock-wrapper ul.play li.flip-clock-before .up {\n  z-index: 2;\n  -webkit-animation: turn2 0.5s linear both;\n  -moz-animation: turn2 0.5s linear both;\n  animation: turn2 0.5s linear both; }\n\n@-webkit-keyframes turn2 {\n  0% {\n    -webkit-transform: rotateX(0deg); }\n\n  100% {\n    -webkit-transform: rotateX(-90deg); } }\n\n@-moz-keyframes turn2 {\n  0% {\n    -moz-transform: rotateX(0deg); }\n\n  100% {\n    -moz-transform: rotateX(-90deg); } }\n\n@-o-keyframes turn2 {\n  0% {\n    -o-transform: rotateX(0deg); }\n\n  100% {\n    -o-transform: rotateX(-90deg); } }\n\n@keyframes turn2 {\n  0% {\n    transform: rotateX(0deg); }\n\n  100% {\n    transform: rotateX(-90deg); } }\n\n.flip-clock-wrapper ul li.flip-clock-active {\n  z-index: 3; }\n\n/* SHADOW */\n.flip-clock-wrapper ul.play li.flip-clock-before .up .shadow {\n  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0.1)), color-stop(100%, black));\n  background: linear, top, rgba(0, 0, 0, 0.1) 0%, black 100%;\n  background: -o-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);\n  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);\n  background: linear, to bottom, rgba(0, 0, 0, 0.1) 0%, black 100%;\n  -webkit-animation: show 0.5s linear both;\n  -moz-animation: show 0.5s linear both;\n  animation: show 0.5s linear both; }\n\n.flip-clock-wrapper ul.play li.flip-clock-active .up .shadow {\n  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0.1)), color-stop(100%, black));\n  background: linear, top, rgba(0, 0, 0, 0.1) 0%, black 100%;\n  background: -o-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);\n  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);\n  background: linear, to bottom, rgba(0, 0, 0, 0.1) 0%, black 100%;\n  -webkit-animation: hide 0.5s 0.3s linear both;\n  -moz-animation: hide 0.5s 0.3s linear both;\n  animation: hide 0.5s 0.3s linear both; }\n\n/*DOWN*/\n.flip-clock-wrapper ul.play li.flip-clock-before .down .shadow {\n  background: -moz-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, black), color-stop(100%, rgba(0, 0, 0, 0.1)));\n  background: linear, top, black 0%, rgba(0, 0, 0, 0.1) 100%;\n  background: -o-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);\n  background: -ms-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);\n  background: linear, to bottom, black 0%, rgba(0, 0, 0, 0.1) 100%;\n  -webkit-animation: show 0.5s linear both;\n  -moz-animation: show 0.5s linear both;\n  animation: show 0.5s linear both; }\n\n.flip-clock-wrapper ul.play li.flip-clock-active .down .shadow {\n  background: -moz-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, black), color-stop(100%, rgba(0, 0, 0, 0.1)));\n  background: linear, top, black 0%, rgba(0, 0, 0, 0.1) 100%;\n  background: -o-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);\n  background: -ms-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);\n  background: linear, to bottom, black 0%, rgba(0, 0, 0, 0.1) 100%;\n  -webkit-animation: hide 0.5s 0.3s linear both;\n  -moz-animation: hide 0.5s 0.3s linear both;\n  animation: hide 0.5s 0.2s linear both; }\n\n@-webkit-keyframes show {\n  0% {\n    opacity: 0; }\n\n  100% {\n    opacity: 1; } }\n\n@-moz-keyframes show {\n  0% {\n    opacity: 0; }\n\n  100% {\n    opacity: 1; } }\n\n@-o-keyframes show {\n  0% {\n    opacity: 0; }\n\n  100% {\n    opacity: 1; } }\n\n@keyframes show {\n  0% {\n    opacity: 0; }\n\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes hide {\n  0% {\n    opacity: 1; }\n\n  100% {\n    opacity: 0; } }\n\n@-moz-keyframes hide {\n  0% {\n    opacity: 1; }\n\n  100% {\n    opacity: 0; } }\n\n@-o-keyframes hide {\n  0% {\n    opacity: 1; }\n\n  100% {\n    opacity: 0; } }\n\n@keyframes hide {\n  0% {\n    opacity: 1; }\n\n  100% {\n    opacity: 0; } }\n";
n(css$2,{});

/*
	Base.js, version 1.1a
	Copyright 2006-2010, Dean Edwards
	License: http://www.opensource.org/licenses/mit-license.php
*/

var Base = function() {
	// dummy
};

Base.extend = function(_instance, _static) { // subclass
	
	var extend = Base.prototype.extend;
	
	// build the prototype
	Base._prototyping = true;
	
	var proto = new this();
	
	extend.call(proto, _instance);
	
	proto.base = function() {
	// call this method from any other method to invoke that method's ancestor
	};

	delete Base._prototyping;
	
	// create the wrapper for the constructor function
	//var constructor = proto.constructor.valueOf(); //-dean
	var constructor = proto.constructor;
	var klass = proto.constructor = function() {
		if (!Base._prototyping) {
			if (this._constructing || this.constructor == klass) { // instantiation
				this._constructing = true;
				constructor.apply(this, arguments);
				delete this._constructing;
			} else if (arguments[0] !== null) { // casting
				return (arguments[0].extend || extend).call(arguments[0], proto);
			}
		}
	};
	
	// build the class interface
	klass.ancestor = this;
	klass.extend = this.extend;
	klass.forEach = this.forEach;
	klass.implement = this.implement;
	klass.prototype = proto;
	klass.toString = this.toString;
	klass.valueOf = function(type) {
		//return (type == "object") ? klass : constructor; //-dean
		return (type == "object") ? klass : constructor.valueOf();
	};
	extend.call(klass, _static);
	// class initialisation
	if (typeof klass.init == "function") klass.init();
	return klass;
};

Base.prototype = {	
	extend: function(source, value) {
		if (arguments.length > 1) { // extending with a name/value pair
			var ancestor = this[source];
			if (ancestor && (typeof value == "function") && // overriding a method?
				// the valueOf() comparison is to avoid circular references
				(!ancestor.valueOf || ancestor.valueOf() != value.valueOf()) &&
				/\bbase\b/.test(value)) {
				// get the underlying method
				var method = value.valueOf();
				// override
				value = function() {
					var previous = this.base || Base.prototype.base;
					this.base = ancestor;
					var returnValue = method.apply(this, arguments);
					this.base = previous;
					return returnValue;
				};
				// point to the underlying method
				value.valueOf = function(type) {
					return (type == "object") ? value : method;
				};
				value.toString = Base.toString;
			}
			this[source] = value;
		} else if (source) { // extending with an object literal
			var extend = Base.prototype.extend;
			// if this object has a customised extend method then use it
			if (!Base._prototyping && typeof this != "function") {
				extend = this.extend || extend;
			}
			var proto = {toSource: null};
			// do the "toString" and other methods manually
			var hidden = ["constructor", "toString", "valueOf"];
			// if we are prototyping then include the constructor
			var i = Base._prototyping ? 0 : 1;
			while (key = hidden[i++]) {
				if (source[key] != proto[key]) {
					extend.call(this, key, source[key]);

				}
			}
			// copy each of the source object's properties to this object
			for (var key in source) {
				if (!proto[key]) extend.call(this, key, source[key]);
			}
		}
		return this;
	}
};

// initialise
Base = Base.extend({
	constructor: function() {
		this.extend(arguments[0]);
	}
}, {
	ancestor: Object,
	version: "1.1",
	
	forEach: function(object, block, context) {
		for (var key in object) {
			if (this.prototype[key] === undefined) {
				block.call(context, object[key], key, object);
			}
		}
	},
		
	implement: function() {
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == "function") {
				// if it's a function, call it
				arguments[i](this.prototype);
			} else {
				// add the interface using the extend method
				this.prototype.extend(arguments[i]);
			}
		}
		return this;
	},
	
	toString: function() {
		return String(this.valueOf());
	}
});
/*jshint smarttabs:true */

var FlipClock;
	
/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	/**
	 * FlipFlock Helper
	 *
	 * @param  object  A jQuery object or CSS select
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock = function(obj, digit, options) {
		if(digit instanceof Object && digit instanceof Date === false) {
			options = digit;
			digit = 0;
		}

		return new FlipClock.Factory(obj, digit, options);
	};

	/**
	 * The global FlipClock.Lang object
	 */

	FlipClock.Lang = {};
	
	/**
	 * The Base FlipClock class is used to extend all other FlipFlock
	 * classes. It handles the callbacks and the basic setters/getters
	 *	
	 * @param 	object  An object of the default properties
	 * @param 	object  An object of properties to override the default	
	 */

	FlipClock.Base = Base.extend({
		
		/**
		 * Build Date
		 */
		 
		buildDate: '2014-12-12',
		
		/**
		 * Version
		 */
		 
		version: '0.7.7',
		
		/**
		 * Sets the default options
		 *
		 * @param	object 	The default options
		 * @param	object 	The override options
		 */
		 
		constructor: function(_default, options) {
			if(typeof _default !== "object") {
				_default = {};
			}
			if(typeof options !== "object") {
				options = {};
			}
			this.setOptions($.extend(true, {}, _default, options));
		},
		
		/**
		 * Delegates the callback to the defined method
		 *
		 * @param	object 	The default options
		 * @param	object 	The override options
		 */
		 
		callback: function(method) {
		 	if(typeof method === "function") {
				var args = [];
								
				for(var x = 1; x <= arguments.length; x++) {
					if(arguments[x]) {
						args.push(arguments[x]);
					}
				}
				
				method.apply(this, args);
			}
		},
		 
		/**
		 * Log a string into the console if it exists
		 *
		 * @param 	string 	The name of the option
		 * @return	mixed
		 */		
		 
		log: function(str) {
			if(window.console && console.log) {
				console.log(str);
			}
		},
		 
		/**
		 * Get an single option value. Returns false if option does not exist
		 *
		 * @param 	string 	The name of the option
		 * @return	mixed
		 */		
		 
		getOption: function(index) {
			if(this[index]) {
				return this[index];
			}
			return false;
		},
		
		/**
		 * Get all options
		 *
		 * @return	bool
		 */		
		 
		getOptions: function() {
			return this;
		},
		
		/**
		 * Set a single option value
		 *
		 * @param 	string 	The name of the option
		 * @param 	mixed 	The value of the option
		 */		
		 
		setOption: function(index, value) {
			this[index] = value;
		},
		
		/**
		 * Set a multiple options by passing a JSON object
		 *
		 * @param 	object 	The object with the options
		 * @param 	mixed 	The value of the option
		 */		
		
		setOptions: function(options) {
			for(var key in options) {
	  			if(typeof options[key] !== "undefined") {
		  			this.setOption(key, options[key]);
		  		}
		  	}
		}
		
	});
	
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	/**
	 * The FlipClock Face class is the base class in which to extend
	 * all other FlockClock.Face classes.
	 *
	 * @param 	object  The parent FlipClock.Factory object
	 * @param 	object  An object of properties to override the default	
	 */
	 
	FlipClock.Face = FlipClock.Base.extend({
		
		/**
		 * Sets whether or not the clock should start upon instantiation
		 */
		 
		autoStart: true,

		/**
		 * An array of jQuery objects used for the dividers (the colons)
		 */
		 
		dividers: [],

		/**
		 * An array of FlipClock.List objects
		 */		
		 
		factory: false,
		
		/**
		 * An array of FlipClock.List objects
		 */		
		 
		lists: [],

		/**
		 * Constructor
		 *
		 * @param 	object  The parent FlipClock.Factory object
		 * @param 	object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			this.dividers = [];
			this.lists = [];
			this.base(options);
			this.factory = factory;
		},
		
		/**
		 * Build the clock face
		 */
		 
		build: function() {
			if(this.autoStart) {
				this.start();
			}
		},
		
		/**
		 * Creates a jQuery object used for the digit divider
		 *
		 * @param	mixed 	The divider label text
		 * @param	mixed	Set true to exclude the dots in the divider. 
		 *					If not set, is false.
		 */
		 
		createDivider: function(label, css, excludeDots) {
			if(typeof css == "boolean" || !css) {
				excludeDots = css;
				css = label;
			}

			var dots = [
				'<span class="'+this.factory.classes.dot+' top"></span>',
				'<span class="'+this.factory.classes.dot+' bottom"></span>'
			].join('');

			if(excludeDots) {
				dots = '';	
			}

			label = this.factory.localize(label);

			var html = [
				'<span class="'+this.factory.classes.divider+' '+(css ? css : '').toLowerCase()+'">',
					'<span class="'+this.factory.classes.label+'">'+(label ? label : '')+'</span>',
					dots,
				'</span>'
			];	
			
			var $html = $(html.join(''));

			this.dividers.push($html);

			return $html;
		},
		
		/**
		 * Creates a FlipClock.List object and appends it to the DOM
		 *
		 * @param	mixed 	The digit to select in the list
		 * @param	object  An object to override the default properties
		 */
		 
		createList: function(digit, options) {
			if(typeof digit === "object") {
				options = digit;
				digit = 0;
			}

			var obj = new FlipClock.List(this.factory, digit, options);
		
			this.lists.push(obj);

			return obj;
		},
		
		/**
		 * Triggers when the clock is reset
		 */

		reset: function() {
			this.factory.time = new FlipClock.Time(
				this.factory, 
				this.factory.original ? Math.round(this.factory.original) : 0,
				{
					minimumDigits: this.factory.minimumDigits
				}
			);

			this.flip(this.factory.original, false);
		},

		/**
		 * Append a newly created list to the clock
		 */

		appendDigitToClock: function(obj) {
			obj.$el.append(false);
		},

		/**
		 * Add a digit to the clock face
		 */
		 
		addDigit: function(digit) {
			var obj = this.createList(digit, {
				classes: {
					active: this.factory.classes.active,
					before: this.factory.classes.before,
					flip: this.factory.classes.flip
				}
			});

			this.appendDigitToClock(obj);
		},
		
		/**
		 * Triggers when the clock is started
		 */
		 
		start: function() {},
		
		/**
		 * Triggers when the time on the clock stops
		 */
		 
		stop: function() {},
		
		/**
		 * Auto increments/decrements the value of the clock face
		 */
		 
		autoIncrement: function() {
			if(!this.factory.countdown) {
				this.increment();
			}
			else {
				this.decrement();
			}
		},

		/**
		 * Increments the value of the clock face
		 */
		 
		increment: function() {
			this.factory.time.addSecond();
		},

		/**
		 * Decrements the value of the clock face
		 */

		decrement: function() {
			if(this.factory.time.getTimeSeconds() == 0) {
	        	this.factory.stop();
			}
			else {
				this.factory.time.subSecond();
			}
		},
			
		/**
		 * Triggers when the numbers on the clock flip
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			var t = this;

			$.each(time, function(i, digit) {
				var list = t.lists[i];

				if(list) {
					if(!doNotAddPlayClass && digit != list.digit) {
						list.play();	
					}

					list.select(digit);
				}	
				else {
					t.addDigit(digit);
				}
			});
		}
					
	});
	
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	/**
	 * The FlipClock Factory class is used to build the clock and manage
	 * all the public methods.
	 *
	 * @param 	object  A jQuery object or CSS selector used to fetch
	 				    the wrapping DOM nodes
	 * @param 	mixed   This is the digit used to set the clock. If an 
	 				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */
	 	
	FlipClock.Factory = FlipClock.Base.extend({
		
		/**
		 * The clock's animation rate.
		 * 
		 * Note, currently this property doesn't do anything.
		 * This property is here to be used in the future to
		 * programmaticaly set the clock's animation speed
		 */		

		animationRate: 1000,

		/**
		 * Auto start the clock on page load (True|False)
		 */	
		 
		autoStart: true,
		
		/**
		 * The callback methods
		 */		
		 
		callbacks: {
			destroy: false,
			create: false,
			init: false,
			interval: false,
			start: false,
			stop: false,
			reset: false
		},
		
		/**
		 * The CSS classes
		 */		
		 
		classes: {
			active: 'flip-clock-active',
			before: 'flip-clock-before',
			divider: 'flip-clock-divider',
			dot: 'flip-clock-dot',
			label: 'flip-clock-label',
			flip: 'flip',
			play: 'play',
			wrapper: 'flip-clock-wrapper'
		},
		
		/**
		 * The name of the clock face class in use
		 */	
		 
		clockFace: 'HourlyCounter',
		 
		/**
		 * The name of the clock face class in use
		 */	
		 
		countdown: false,
		 
		/**
		 * The name of the default clock face class to use if the defined
		 * clockFace variable is not a valid FlipClock.Face object
		 */	
		 
		defaultClockFace: 'HourlyCounter',
		 
		/**
		 * The default language
		 */	
		 
		defaultLanguage: 'english',
		 
		/**
		 * The jQuery object
		 */		
		 
		$el: false,

		/**
		 * The FlipClock.Face object
		 */	
		 
		face: true,
		 
		/**
		 * The language object after it has been loaded
		 */	
		 
		lang: false,
		 
		/**
		 * The language being used to display labels (string)
		 */	
		 
		language: 'english',
		 
		/**
		 * The minimum digits the clock must have
		 */		

		minimumDigits: 0,

		/**
		 * The original starting value of the clock. Used for the reset method.
		 */		
		 
		original: false,
		
		/**
		 * Is the clock running? (True|False)
		 */		
		 
		running: false,
		
		/**
		 * The FlipClock.Time object
		 */		
		 
		time: false,
		
		/**
		 * The FlipClock.Timer object
		 */		
		 
		timer: false,
		
		/**
		 * The jQuery object (depcrecated)
		 */		
		 
		$wrapper: false,
		
		/**
		 * Constructor
		 *
		 * @param   object  The wrapping jQuery object
		 * @param	object  Number of seconds used to start the clock
		 * @param	object 	An object override options
		 */
		 
		constructor: function(obj, digit, options) {

			if(!options) {
				options = {};
			}

			this.lists = [];
			this.running = false;
			this.base(options);	

			this.$el = $(obj).addClass(this.classes.wrapper);

			// Depcrated support of the $wrapper property.
			this.$wrapper = this.$el;

			this.original = (digit instanceof Date) ? digit : (digit ? Math.round(digit) : 0);

			this.time = new FlipClock.Time(this, this.original, {
				minimumDigits: this.minimumDigits,
				animationRate: this.animationRate 
			});

			this.timer = new FlipClock.Timer(this, options);

			this.loadLanguage(this.language);
			
			this.loadClockFace(this.clockFace, options);

			if(this.autoStart) {
				this.start();
			}

		},
		
		/**
		 * Load the FlipClock.Face object
		 *
		 * @param	object  The name of the FlickClock.Face class
		 * @param	object 	An object override options
		 */
		 
		loadClockFace: function(name, options) {	
			var face, suffix = 'Face', hasStopped = false;
			
			name = name.ucfirst()+suffix;

			if(this.face.stop) {
				this.stop();
				hasStopped = true;
			}

			this.$el.html('');

			this.time.minimumDigits = this.minimumDigits;
			
			if(FlipClock[name]) {
				face = new FlipClock[name](this, options);
			}
			else {
				face = new FlipClock[this.defaultClockFace+suffix](this, options);
			}
			
			face.build();

			this.face = face;

			if(hasStopped) {
				this.start();
			}
			
			return this.face;
		},
				
		/**
		 * Load the FlipClock.Lang object
		 *
		 * @param	object  The name of the language to load
		 */
		 
		loadLanguage: function(name) {	
			var lang;
			
			if(FlipClock.Lang[name.ucfirst()]) {
				lang = FlipClock.Lang[name.ucfirst()];
			}
			else if(FlipClock.Lang[name]) {
				lang = FlipClock.Lang[name];
			}
			else {
				lang = FlipClock.Lang[this.defaultLanguage];
			}
			
			return this.lang = lang;
		},
					
		/**
		 * Localize strings into various languages
		 *
		 * @param	string  The index of the localized string
		 * @param	object  Optionally pass a lang object
		 */

		localize: function(index, obj) {
			var lang = this.lang;

			if(!index) {
				return null;
			}

			var lindex = index.toLowerCase();

			if(typeof obj == "object") {
				lang = obj;
			}

			if(lang && lang[lindex]) {
				return lang[lindex];
			}

			return index;
		},
		 

		/**
		 * Starts the clock
		 */
		 
		start: function(callback) {
			var t = this;

			if(!t.running && (!t.countdown || t.countdown && t.time.time > 0)) {
				t.face.start(t.time);
				t.timer.start(function() {
					t.flip();
					
					if(typeof callback === "function") {
						callback();
					}	
				});
			}
			else {
				t.log('Trying to start timer when countdown already at 0');
			}
		},
		
		/**
		 * Stops the clock
		 */
		 
		stop: function(callback) {
			this.face.stop();
			this.timer.stop(callback);
			
			for(var x in this.lists) {
				if (this.lists.hasOwnProperty(x)) {
					this.lists[x].stop();
				}
			}	
		},
		
		/**
		 * Reset the clock
		 */
		 
		reset: function(callback) {
			this.timer.reset(callback);
			this.face.reset();
		},
		
		/**
		 * Sets the clock time
		 */
		 
		setTime: function(time) {
			this.time.time = time;
			this.flip(true);		
		},
		
		/**
		 * Get the clock time
		 *
		 * @return  object  Returns a FlipClock.Time object
		 */
		 
		getTime: function(time) {
			return this.time;		
		},
		
		/**
		 * Changes the increment of time to up or down (add/sub)
		 */
		 
		setCountdown: function(value) {
			var running = this.running;
			
			this.countdown = value ? true : false;
				
			if(running) {
				this.stop();
				this.start();
			}
		},
		
		/**
		 * Flip the digits on the clock
		 *
		 * @param  array  An array of digits	 
		 */
		flip: function(doNotAddPlayClass) {	
			this.face.flip(false, doNotAddPlayClass);
		}
		
	});
		
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	/**
	 * The FlipClock List class is used to build the list used to create 
	 * the card flip effect. This object fascilates selecting the correct
	 * node by passing a specific digit.
	 *
	 * @param 	object  A FlipClock.Factory object
	 * @param 	mixed   This is the digit used to set the clock. If an 
	 *				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */
	 	
	FlipClock.List = FlipClock.Base.extend({
		
		/**
		 * The digit (0-9)
		 */		
		 
		digit: 0,
		
		/**
		 * The CSS classes
		 */		
		 
		classes: {
			active: 'flip-clock-active',
			before: 'flip-clock-before',
			flip: 'flip'	
		},
				
		/**
		 * The parent FlipClock.Factory object
		 */		
		 
		factory: false,
		
		/**
		 * The jQuery object
		 */		
		 
		$el: false,

		/**
		 * The jQuery object (deprecated)
		 */		
		 
		$obj: false,
		
		/**
		 * The items in the list
		 */		
		 
		items: [],
		
		/**
		 * The last digit
		 */		
		 
		lastDigit: 0,
			
		/**
		 * Constructor
		 *
		 * @param  object  A FlipClock.Factory object
		 * @param  int     An integer use to select the correct digit
		 * @param  object  An object to override the default properties	 
		 */
		 
		constructor: function(factory, digit, options) {
			this.factory = factory;
			this.digit = digit;
			this.lastDigit = digit;
			this.$el = this.createList();
			
			// Depcrated support of the $obj property.
			this.$obj = this.$el;

			if(digit > 0) {
				this.select(digit);
			}

			this.factory.$el.append(this.$el);
		},
		
		/**
		 * Select the digit in the list
		 *
		 * @param  int  A digit 0-9	 
		 */
		 
		select: function(digit) {
			if(typeof digit === "undefined") {
				digit = this.digit;
			}
			else {
				this.digit = digit;
			}

			if(this.digit != this.lastDigit) {
				var $delete = this.$el.find('.'+this.classes.before).removeClass(this.classes.before);

				this.$el.find('.'+this.classes.active).removeClass(this.classes.active)
													  .addClass(this.classes.before);

				this.appendListItem(this.classes.active, this.digit);

				$delete.remove();

				this.lastDigit = this.digit;
			}	
		},
		
		/**
		 * Adds the play class to the DOM object
		 */
		 		
		play: function() {
			this.$el.addClass(this.factory.classes.play);
		},
		
		/**
		 * Removes the play class to the DOM object 
		 */
		 
		stop: function() {
			var t = this;

			setTimeout(function() {
				t.$el.removeClass(t.factory.classes.play);
			}, this.factory.timer.interval);
		},
		
		/**
		 * Creates the list item HTML and returns as a string 
		 */
		 
		createListItem: function(css, value) {
			return [
				'<li class="'+(css ? css : '')+'">',
					'<a href="#">',
						'<div class="up">',
							'<div class="shadow"></div>',
							'<div class="inn">'+(value ? value : '')+'</div>',
						'</div>',
						'<div class="down">',
							'<div class="shadow"></div>',
							'<div class="inn">'+(value ? value : '')+'</div>',
						'</div>',
					'</a>',
				'</li>'
			].join('');
		},

		/**
		 * Append the list item to the parent DOM node 
		 */

		appendListItem: function(css, value) {
			var html = this.createListItem(css, value);

			this.$el.append(html);
		},

		/**
		 * Create the list of digits and appends it to the DOM object 
		 */
		 
		createList: function() {

			var lastDigit = this.getPrevDigit() ? this.getPrevDigit() : this.digit;

			var html = $([
				'<ul class="'+this.classes.flip+' '+(this.factory.running ? this.factory.classes.play : '')+'">',
					this.createListItem(this.classes.before, lastDigit),
					this.createListItem(this.classes.active, this.digit),
				'</ul>'
			].join(''));
					
			return html;
		},

		getNextDigit: function() {
			return this.digit == 9 ? 0 : this.digit + 1;
		},

		getPrevDigit: function() {
			return this.digit == 0 ? 9 : this.digit - 1;
		}

	});
	
	
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	/**
	 * Capitalize the first letter in a string
	 *
	 * @return string
	 */
	 
	String.prototype.ucfirst = function() {
		return this.substr(0, 1).toUpperCase() + this.substr(1);
	};
	
	/**
	 * jQuery helper method
	 *
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default	
	 */
	 
	$.fn.FlipClock = function(digit, options) {	
		return new FlipClock($(this), digit, options);
	};
	
	/**
	 * jQuery helper method
	 *
	 * @param  int     An integer used to start the clock (no. seconds)
	 * @param  object  An object of properties to override the default	
	 */
	 
	$.fn.flipClock = function(digit, options) {
		return $.fn.FlipClock(digit, options);
	};
	
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
			
	/**
	 * The FlipClock Time class is used to manage all the time 
	 * calculations.
	 *
	 * @param 	object  A FlipClock.Factory object
	 * @param 	mixed   This is the digit used to set the clock. If an 
	 *				    object is passed, 0 will be used.	
	 * @param 	object  An object of properties to override the default	
	 */
	 	
	FlipClock.Time = FlipClock.Base.extend({
		
		/**
		 * The time (in seconds) or a date object
		 */		
		 
		time: 0,
		
		/**
		 * The parent FlipClock.Factory object
		 */		
		 
		factory: false,
		
		/**
		 * The minimum number of digits the clock face must have
		 */		
		 
		minimumDigits: 0,

		/**
		 * Constructor
		 *
		 * @param  object  A FlipClock.Factory object
		 * @param  int     An integer use to select the correct digit
		 * @param  object  An object to override the default properties	 
		 */
		 
		constructor: function(factory, time, options) {
			if(typeof options != "object") {
				options = {};
			}

			if(!options.minimumDigits) {
				options.minimumDigits = factory.minimumDigits;
			}

			this.base(options);
			this.factory = factory;

			if(time) {
				this.time = time;
			}
		},

		/**
		 * Convert a string or integer to an array of digits
		 *
		 * @param   mixed  String or Integer of digits	 
		 * @return  array  An array of digits 
		 */
		 
		convertDigitsToArray: function(str) {
			var data = [];
			
			str = str.toString();
			
			for(var x = 0;x < str.length; x++) {
				if(str[x].match(/^\d*$/g)) {
					data.push(str[x]);	
				}
			}
			
			return data;
		},
		
		/**
		 * Get a specific digit from the time integer
		 *
		 * @param   int    The specific digit to select from the time	 
		 * @return  mixed  Returns FALSE if no digit is found, otherwise
		 *				   the method returns the defined digit	 
		 */
		 
		digit: function(i) {
			var timeStr = this.toString();
			var length  = timeStr.length;
			
			if(timeStr[length - i])	 {
				return timeStr[length - i];
			}
			
			return false;
		},

		/**
		 * Formats any array of digits into a valid array of digits
		 *
		 * @param   mixed  An array of digits	 
		 * @return  array  An array of digits 
		 */
		 
		digitize: function(obj) {
			var data = [];

			$.each(obj, function(i, value) {
				value = value.toString();
				
				if(value.length == 1) {
					value = '0'+value;
				}
				
				for(var x = 0; x < value.length; x++) {
					data.push(value.charAt(x));
				}				
			});

			if(data.length > this.minimumDigits) {
				this.minimumDigits = data.length;
			}
			
			if(this.minimumDigits > data.length) {
				for(var x = data.length; x < this.minimumDigits; x++) {
					data.unshift('0');
				}
			}

			return data;
		},
		
		/**
		 * Gets a new Date object for the current time
		 *
		 * @return  array  Returns a Date object
		 */

		getDateObject: function() {
			if(this.time instanceof Date) {
				return this.time;
			}

			return new Date((new Date()).getTime() + this.getTimeSeconds() * 1000);
		},
		
		/**
		 * Gets a digitized daily counter
		 *
		 * @return  object  Returns a digitized object
		 */

		getDayCounter: function(includeSeconds) {
			var digits = [
				this.getDays(),
				this.getHours(true),
				this.getMinutes(true)
			];

			if(includeSeconds) {
				digits.push(this.getSeconds(true));
			}

			return this.digitize(digits);
		},

		/**
		 * Gets number of days
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */
		 
		getDays: function(mod) {
			var days = this.getTimeSeconds() / 60 / 60 / 24;
			
			if(mod) {
				days = days % 7;
			}
			
			return Math.floor(days);
		},
		
		/**
		 * Gets an hourly breakdown
		 *
		 * @return  object  Returns a digitized object
		 */
		 
		getHourCounter: function() {
			var obj = this.digitize([
				this.getHours(),
				this.getMinutes(true),
				this.getSeconds(true)
			]);
			
			return obj;
		},
		
		/**
		 * Gets an hourly breakdown
		 *
		 * @return  object  Returns a digitized object
		 */
		 
		getHourly: function() {
			return this.getHourCounter();
		},
		
		/**
		 * Gets number of hours
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */
		 
		getHours: function(mod) {
			var hours = this.getTimeSeconds() / 60 / 60;
			
			if(mod) {
				hours = hours % 24;	
			}
			
			return Math.floor(hours);
		},
		
		/**
		 * Gets the twenty-four hour time
		 *
		 * @return  object  returns a digitized object
		 */
		 
		getMilitaryTime: function(date, showSeconds) {
			if(typeof showSeconds === "undefined") {
				showSeconds = true;
			}

			if(!date) {
				date = this.getDateObject();
			}

			var data  = [
				date.getHours(),
				date.getMinutes()			
			];

			if(showSeconds === true) {
				data.push(date.getSeconds());
			}

			return this.digitize(data);
		},
				
		/**
		 * Gets number of minutes
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */
		 
		getMinutes: function(mod) {
			var minutes = this.getTimeSeconds() / 60;
			
			if(mod) {
				minutes = minutes % 60;
			}
			
			return Math.floor(minutes);
		},
		
		/**
		 * Gets a minute breakdown
		 */
		 
		getMinuteCounter: function() {
			var obj = this.digitize([
				this.getMinutes(),
				this.getSeconds(true)
			]);

			return obj;
		},
		
		/**
		 * Gets time count in seconds regardless of if targetting date or not.
		 *
		 * @return  int   Returns a floored integer
		 */
		 
		getTimeSeconds: function(date) {
			if(!date) {
				date = new Date();
			}

			if (this.time instanceof Date) {
				if (this.factory.countdown) {
					return Math.max(this.time.getTime()/1000 - date.getTime()/1000,0);
				} else {
					return date.getTime()/1000 - this.time.getTime()/1000 ;
				}
			} else {
				return this.time;
			}
		},
		
		/**
		 * Gets the current twelve hour time
		 *
		 * @return  object  Returns a digitized object
		 */
		 
		getTime: function(date, showSeconds) {
			if(typeof showSeconds === "undefined") {
				showSeconds = true;
			}

			if(!date) {
				date = this.getDateObject();
			}

			console.log(date);

			
			var hours = date.getHours();
			var data   = [
				hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours),
				date.getMinutes()			
			];

			if(showSeconds === true) {
				data.push(date.getSeconds());
			}

			return this.digitize(data);
		},
		
		/**
		 * Gets number of seconds
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a ceiled integer
		 */
		 
		getSeconds: function(mod) {
			var seconds = this.getTimeSeconds();
			
			if(mod) {
				if(seconds == 60) {
					seconds = 0;
				}
				else {
					seconds = seconds % 60;
				}
			}
			
			return Math.ceil(seconds);
		},

		/**
		 * Gets number of weeks
		 *
		 * @param   bool  Should perform a modulus? If not sent, then no.
		 * @return  int   Retuns a floored integer
		 */
		 
		getWeeks: function(mod) {
			var weeks = this.getTimeSeconds() / 60 / 60 / 24 / 7;
			
			if(mod) {
				weeks = weeks % 52;
			}
			
			return Math.floor(weeks);
		},
		
		/**
		 * Removes a specific number of leading zeros from the array.
		 * This method prevents you from removing too many digits, even
		 * if you try.
		 *
		 * @param   int    Total number of digits to remove 
		 * @return  array  An array of digits 
		 */
		 
		removeLeadingZeros: function(totalDigits, digits) {
			var total    = 0;
			var newArray = [];
			
			$.each(digits, function(i, digit) {
				if(i < totalDigits) {
					total += parseInt(digits[i], 10);
				}
				else {
					newArray.push(digits[i]);
				}
			});
			
			if(total === 0) {
				return newArray;
			}
			
			return digits;
		},

		/**
		 * Adds X second to the current time
		 */

		addSeconds: function(x) {
			if(this.time instanceof Date) {
				this.time.setSeconds(this.time.getSeconds() + x);
			}
			else {
				this.time += x;
			}
		},

		/**
		 * Adds 1 second to the current time
		 */

		addSecond: function() {
			this.addSeconds(1);
		},

		/**
		 * Substracts X seconds from the current time
		 */

		subSeconds: function(x) {
			if(this.time instanceof Date) {
				this.time.setSeconds(this.time.getSeconds() - x);
			}
			else {
				this.time -= x;
			}
		},

		/**
		 * Substracts 1 second from the current time
		 */

		subSecond: function() {
			this.subSeconds(1);
		},
		
		/**
		 * Converts the object to a human readable string
		 */
		 
		toString: function() {
			return this.getTimeSeconds().toString();
		}
		
		/*
		getYears: function() {
			return Math.floor(this.time / 60 / 60 / 24 / 7 / 52);
		},
		
		getDecades: function() {
			return Math.floor(this.getWeeks() / 10);
		}*/
	});
	
}(jQuery));

/*jshint smarttabs:true */

/**
 * FlipClock.js
 *
 * @author     Justin Kimbrell
 * @copyright  2013 - Objective HTML, LLC
 * @licesnse   http://www.opensource.org/licenses/mit-license.php
 */
	
(function($) {
	
	/**
	 * The FlipClock.Timer object managers the JS timers
	 *
	 * @param	object  The parent FlipClock.Factory object
	 * @param	object  Override the default options
	 */
	
	FlipClock.Timer = FlipClock.Base.extend({
		
		/**
		 * Callbacks
		 */		
		 
		callbacks: {
			destroy: false,
			create: false,
			init: false,
			interval: false,
			start: false,
			stop: false,
			reset: false
		},
		
		/**
		 * FlipClock timer count (how many intervals have passed)
		 */		
		 
		count: 0,
		
		/**
		 * The parent FlipClock.Factory object
		 */		
		 
		factory: false,
		
		/**
		 * Timer interval (1 second by default)
		 */		
		 
		interval: 1000,

		/**
		 * The rate of the animation in milliseconds (not currently in use)
		 */		
		 
		animationRate: 1000,
				
		/**
		 * Constructor
		 *
		 * @return	void
		 */		
		 
		constructor: function(factory, options) {
			this.base(options);
			this.factory = factory;
			this.callback(this.callbacks.init);	
			this.callback(this.callbacks.create);
		},
		
		/**
		 * This method gets the elapsed the time as an interger
		 *
		 * @return	void
		 */		
		 
		getElapsed: function() {
			return this.count * this.interval;
		},
		
		/**
		 * This method gets the elapsed the time as a Date object
		 *
		 * @return	void
		 */		
		 
		getElapsedTime: function() {
			return new Date(this.time + this.getElapsed());
		},
		
		/**
		 * This method is resets the timer
		 *
		 * @param 	callback  This method resets the timer back to 0
		 * @return	void
		 */		
		 
		reset: function(callback) {
			clearInterval(this.timer);
			this.count = 0;
			this._setInterval(callback);			
			this.callback(this.callbacks.reset);
		},
		
		/**
		 * This method is starts the timer
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		start: function(callback) {		
			this.factory.running = true;
			this._createTimer(callback);
			this.callback(this.callbacks.start);
		},
		
		/**
		 * This method is stops the timer
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		stop: function(callback) {
			this.factory.running = false;
			this._clearInterval(callback);
			this.callback(this.callbacks.stop);
			this.callback(callback);
		},
		
		/**
		 * Clear the timer interval
		 *
		 * @return	void
		 */		
		 
		_clearInterval: function() {
			clearInterval(this.timer);
		},
		
		/**
		 * Create the timer object
		 *
		 * @param 	callback  A function that is called once the timer is created
		 * @return	void
		 */		
		 
		_createTimer: function(callback) {
			this._setInterval(callback);		
		},
		
		/**
		 * Destroy the timer object
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 	
		_destroyTimer: function(callback) {
			this._clearInterval();			
			this.timer = false;
			this.callback(callback);
			this.callback(this.callbacks.destroy);
		},
		
		/**
		 * This method is called each time the timer interval is ran
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		_interval: function(callback) {
			this.callback(this.callbacks.interval);
			this.callback(callback);
			this.count++;
		},
		
		/**
		 * This sets the timer interval
		 *
		 * @param 	callback  A function that is called once the timer is destroyed
		 * @return	void
		 */		
		 
		_setInterval: function(callback) {
			var t = this;
	
			t._interval(callback);

			t.timer = setInterval(function() {		
				t._interval(callback);
			}, this.interval);
		}
			
	});
	
}(jQuery));

(function($) {
	
	/**
	 * Twenty-Four Hour Clock Face
	 *
	 * This class will generate a twenty-four our clock for FlipClock.js
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			this.base(factory, options);
		},

		/**
		 * Build the clock face
		 *
		 * @param  object  Pass the time that should be used to display on the clock.	
		 */
		 
		build: function(time) {
			var t        = this;
			var children = this.factory.$el.find('ul');

			if(!this.factory.time.time) {
				this.factory.original = new Date();

				this.factory.time = new FlipClock.Time(this.factory, this.factory.original);
			}

			var time = time ? time : this.factory.time.getMilitaryTime(false, this.showSeconds);

			if(time.length > children.length) {
				$.each(time, function(i, digit) {
					t.createList(digit);
				});
			}
			
			this.createDivider();
			this.createDivider();

			$(this.dividers[0]).insertBefore(this.lists[this.lists.length - 2].$el);
			$(this.dividers[1]).insertBefore(this.lists[this.lists.length - 4].$el);
			
			this.base();
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			this.autoIncrement();
			
			time = time ? time : this.factory.time.getMilitaryTime(false, this.showSeconds);
			
			this.base(time, doNotAddPlayClass);	
		}
				
	});
	
}(jQuery));
(function($) {
		
	/**
	 * Counter Clock Face
	 *
	 * This class will generate a generice flip counter. The timer has been
	 * disabled. clock.increment() and clock.decrement() have been added.
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.CounterFace = FlipClock.Face.extend({
		
		/**
		 * Tells the counter clock face if it should auto-increment
		 */

		shouldAutoIncrement: false,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {

			if(typeof options != "object") {
				options = {};
			}

			factory.autoStart = options.autoStart ? true : false;

			if(options.autoStart) {
				this.shouldAutoIncrement = true;
			}

			factory.increment = function() {
				factory.countdown = false;
				factory.setTime(factory.getTime().getTimeSeconds() + 1);
			};

			factory.decrement = function() {
				factory.countdown = true;
				var time = factory.getTime().getTimeSeconds();
				if(time > 0) {
					factory.setTime(time - 1);
				}
			};

			factory.setValue = function(digits) {
				factory.setTime(digits);
			};

			factory.setCounter = function(digits) {
				factory.setTime(digits);
			};

			this.base(factory, options);
		},

		/**
		 * Build the clock face	
		 */
		 
		build: function() {
			var t        = this;
			var children = this.factory.$el.find('ul');
			var time 	 = this.factory.getTime().digitize([this.factory.getTime().time]);

			if(time.length > children.length) {
				$.each(time, function(i, digit) {
					var list = t.createList(digit);

					list.select(digit);
				});
			
			}

			$.each(this.lists, function(i, list) {
				list.play();
			});

			this.base();
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {			
			if(this.shouldAutoIncrement) {
				this.autoIncrement();
			}

			if(!time) {		
				time = this.factory.getTime().digitize([this.factory.getTime().time]);
			}

			this.base(time, doNotAddPlayClass);
		},

		/**
		 * Reset the clock face
		 */

		reset: function() {
			this.factory.time = new FlipClock.Time(
				this.factory, 
				this.factory.original ? Math.round(this.factory.original) : 0
			);

			this.flip();
		}
	});
	
}(jQuery));
(function($) {

	/**
	 * Daily Counter Clock Face
	 *
	 * This class will generate a daily counter for FlipClock.js. A
	 * daily counter will track days, hours, minutes, and seconds. If
	 * the number of available digits is exceeded in the count, a new
	 * digit will be created.
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default
	 */

	FlipClock.DailyCounterFace = FlipClock.Face.extend({

		showSeconds: true,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default
		 */

		constructor: function(factory, options) {
			this.base(factory, options);
		},

		/**
		 * Build the clock face
		 */

		build: function(time) {
			var t = this;
			var children = this.factory.$el.find('ul');
			var offset = 0;

			time = time ? time : this.factory.time.getDayCounter(this.showSeconds);

			if(time.length > children.length) {
				$.each(time, function(i, digit) {
					t.createList(digit);
				});
			}

			if(this.showSeconds) {
				$(this.createDivider('Seconds')).insertBefore(this.lists[this.lists.length - 2].$el);
			}
			else
			{
				offset = 2;
			}

			$(this.createDivider('Minutes')).insertBefore(this.lists[this.lists.length - 4 + offset].$el);
			$(this.createDivider('Hours')).insertBefore(this.lists[this.lists.length - 6 + offset].$el);
			$(this.createDivider('Days', true)).insertBefore(this.lists[0].$el);

			this.base();
		},

		/**
		 * Flip the clock face
		 */

		flip: function(time, doNotAddPlayClass) {
			if(!time) {
				time = this.factory.time.getDayCounter(this.showSeconds);
			}

			this.autoIncrement();

			this.base(time, doNotAddPlayClass);
		}

	});

}(jQuery));
(function($) {
			
	/**
	 * Hourly Counter Clock Face
	 *
	 * This class will generate an hourly counter for FlipClock.js. An
	 * hour counter will track hours, minutes, and seconds. If number of
	 * available digits is exceeded in the count, a new digit will be 
	 * created.
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.HourlyCounterFace = FlipClock.Face.extend({
			
		// clearExcessDigits: true,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			this.base(factory, options);
		},
		
		/**
		 * Build the clock face
		 */
		
		build: function(excludeHours, time) {
			var t = this;
			var children = this.factory.$el.find('ul');
			
			time = time ? time : this.factory.time.getHourCounter();
			
			if(time.length > children.length) {
				$.each(time, function(i, digit) {
					t.createList(digit);
				});
			}
			
			$(this.createDivider('Seconds')).insertBefore(this.lists[this.lists.length - 2].$el);
			$(this.createDivider('Minutes')).insertBefore(this.lists[this.lists.length - 4].$el);
			
			if(!excludeHours) {
				$(this.createDivider('Hours', true)).insertBefore(this.lists[0].$el);
			}
			
			this.base();
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			if(!time) {
				time = this.factory.time.getHourCounter();
			}	

			this.autoIncrement();
		
			this.base(time, doNotAddPlayClass);
		},

		/**
		 * Append a newly created list to the clock
		 */

		appendDigitToClock: function(obj) {
			this.base(obj);

			this.dividers[0].insertAfter(this.dividers[0].next());
		}
		
	});
	
}(jQuery));
(function($) {
		
	/**
	 * Minute Counter Clock Face
	 *
	 * This class will generate a minute counter for FlipClock.js. A
	 * minute counter will track minutes and seconds. If an hour is 
	 * reached, the counter will reset back to 0. (4 digits max)
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({

		clearExcessDigits: false,

		/**
		 * Constructor
		 *
		 * @param  object  The parent FlipClock.Factory object
		 * @param  object  An object of properties to override the default	
		 */
		 
		constructor: function(factory, options) {
			this.base(factory, options);
		},
		
		/**
		 * Build the clock face	
		 */
		 
		build: function() {
			this.base(true, this.factory.time.getMinuteCounter());
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {
			if(!time) {
				time = this.factory.time.getMinuteCounter();
			}

			this.base(time, doNotAddPlayClass);
		}

	});
	
}(jQuery));
(function($) {
		
	/**
	 * Twelve Hour Clock Face
	 *
	 * This class will generate a twelve hour clock for FlipClock.js
	 *
	 * @param  object  The parent FlipClock.Factory object
	 * @param  object  An object of properties to override the default	
	 */
	 
	FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({
		
		/**
		 * The meridium jQuery DOM object
		 */
		 
		meridium: false,
		
		/**
		 * The meridium text as string for easy access
		 */
		 
		meridiumText: 'AM',
					
		/**
		 * Build the clock face
		 *
		 * @param  object  Pass the time that should be used to display on the clock.	
		 */
		 
		build: function() {

			var time = this.factory.time.getTime(false, this.showSeconds);

			this.base(time);			
			this.meridiumText = this.getMeridium();			
			this.meridium = $([
				'<ul class="flip-clock-meridium">',
					'<li>',
						'<a href="#">'+this.meridiumText+'</a>',
					'</li>',
				'</ul>'
			].join(''));
						
			this.meridium.insertAfter(this.lists[this.lists.length-1].$el);
		},
		
		/**
		 * Flip the clock face
		 */
		 
		flip: function(time, doNotAddPlayClass) {			
			if(this.meridiumText != this.getMeridium()) {
				this.meridiumText = this.getMeridium();
				this.meridium.find('a').html(this.meridiumText);	
			}
			this.base(this.factory.time.getTime(false, this.showSeconds), doNotAddPlayClass);	
		},
		
		/**
		 * Get the current meridium
		 *
		 * @return  string  Returns the meridium (AM|PM)
		 */
		 
		getMeridium: function() {
			return new Date().getHours() >= 12 ? 'PM' : 'AM';
		},
		
		/**
		 * Is it currently in the post-medirium?
		 *
		 * @return  bool  Returns true or false
		 */
		 
		isPM: function() {
			return this.getMeridium() == 'PM' ? true : false;
		},

		/**
		 * Is it currently before the post-medirium?
		 *
		 * @return  bool  Returns true or false
		 */
		 
		isAM: function() {
			return this.getMeridium() == 'AM' ? true : false;
		}
				
	});
	
}(jQuery));
(function($) {

    /**
     * FlipClock Arabic Language Pack
     *
     * This class will be used to translate tokens into the Arabic language.
     *
     */

    FlipClock.Lang.Arabic = {

      'years'   : 'سنوات',
      'months'  : 'شهور',
      'days'    : 'أيام',
      'hours'   : 'ساعات',
      'minutes' : 'دقائق',
      'seconds' : 'ثواني'

    };

    /* Create various aliases for convenience */

    FlipClock.Lang['ar']      = FlipClock.Lang.Arabic;
    FlipClock.Lang['ar-ar']   = FlipClock.Lang.Arabic;
    FlipClock.Lang['arabic']  = FlipClock.Lang.Arabic;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock Danish Language Pack
	 *
	 * This class will used to translate tokens into the Danish language.
	 *	
	 */
	 
	FlipClock.Lang.Danish = {
		
		'years'   : 'År',
		'months'  : 'Måneder',
		'days'    : 'Dage',
		'hours'   : 'Timer',
		'minutes' : 'Minutter',
		'seconds' : 'Sekunder'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['da']     = FlipClock.Lang.Danish;
	FlipClock.Lang['da-dk']  = FlipClock.Lang.Danish;
	FlipClock.Lang['danish'] = FlipClock.Lang.Danish;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock German Language Pack
	 *
	 * This class will used to translate tokens into the German language.
	 *	
	 */
	 
	FlipClock.Lang.German = {
		
		'years'   : 'Jahre',
		'months'  : 'Monate',
		'days'    : 'Tage',
		'hours'   : 'Stunden',
		'minutes' : 'Minuten',
		'seconds' : 'Sekunden'	
 
	};
	
	/* Create various aliases for convenience */
 
	FlipClock.Lang['de']     = FlipClock.Lang.German;
	FlipClock.Lang['de-de']  = FlipClock.Lang.German;
	FlipClock.Lang['german'] = FlipClock.Lang.German;
 
}(jQuery));
(function($) {
		
	/**
	 * FlipClock English Language Pack
	 *
	 * This class will used to translate tokens into the English language.
	 *	
	 */
	 
	FlipClock.Lang.English = {
		
		'years'   : 'Years',
		'months'  : 'Months',
		'days'    : 'Days',
		'hours'   : 'Hours',
		'minutes' : 'Minutes',
		'seconds' : 'Seconds'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['en']      = FlipClock.Lang.English;
	FlipClock.Lang['en-us']   = FlipClock.Lang.English;
	FlipClock.Lang['english'] = FlipClock.Lang.English;

}(jQuery));
(function($) {

	/**
	 * FlipClock Spanish Language Pack
	 *
	 * This class will used to translate tokens into the Spanish language.
	 *
	 */

	FlipClock.Lang.Spanish = {

		'years'   : 'Años',
		'months'  : 'Meses',
		'days'    : 'Días',
		'hours'   : 'Horas',
		'minutes' : 'Minutos',
		'seconds' : 'Segundos'

	};

	/* Create various aliases for convenience */

	FlipClock.Lang['es']      = FlipClock.Lang.Spanish;
	FlipClock.Lang['es-es']   = FlipClock.Lang.Spanish;
	FlipClock.Lang['spanish'] = FlipClock.Lang.Spanish;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock Finnish Language Pack
	 *
	 * This class will used to translate tokens into the Finnish language.
	 *	
	 */
	 
	FlipClock.Lang.Finnish = {
		
		'years'   : 'Vuotta',
		'months'  : 'Kuukautta',
		'days'    : 'Päivää',
		'hours'   : 'Tuntia',
		'minutes' : 'Minuuttia',
		'seconds' : 'Sekuntia'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['fi']      = FlipClock.Lang.Finnish;
	FlipClock.Lang['fi-fi']   = FlipClock.Lang.Finnish;
	FlipClock.Lang['finnish'] = FlipClock.Lang.Finnish;

}(jQuery));

(function($) {

  /**
   * FlipClock Canadian French Language Pack
   *
   * This class will used to translate tokens into the Canadian French language.
   *
   */

  FlipClock.Lang.French = {

    'years'   : 'Ans',
    'months'  : 'Mois',
    'days'    : 'Jours',
    'hours'   : 'Heures',
    'minutes' : 'Minutes',
    'seconds' : 'Secondes'

  };

  /* Create various aliases for convenience */

  FlipClock.Lang['fr']      = FlipClock.Lang.French;
  FlipClock.Lang['fr-ca']   = FlipClock.Lang.French;
  FlipClock.Lang['french']  = FlipClock.Lang.French;

}(jQuery));

(function($) {
		
	/**
	 * FlipClock Italian Language Pack
	 *
	 * This class will used to translate tokens into the Italian language.
	 *	
	 */
	 
	FlipClock.Lang.Italian = {
		
		'years'   : 'Anni',
		'months'  : 'Mesi',
		'days'    : 'Giorni',
		'hours'   : 'Ore',
		'minutes' : 'Minuti',
		'seconds' : 'Secondi'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['it']      = FlipClock.Lang.Italian;
	FlipClock.Lang['it-it']   = FlipClock.Lang.Italian;
	FlipClock.Lang['italian'] = FlipClock.Lang.Italian;
	
}(jQuery));

(function($) {

  /**
   * FlipClock Latvian Language Pack
   *
   * This class will used to translate tokens into the Latvian language.
   *
   */

  FlipClock.Lang.Latvian = {

    'years'   : 'Gadi',
    'months'  : 'Mēneši',
    'days'    : 'Dienas',
    'hours'   : 'Stundas',
    'minutes' : 'Minūtes',
    'seconds' : 'Sekundes'

  };

  /* Create various aliases for convenience */

  FlipClock.Lang['lv']      = FlipClock.Lang.Latvian;
  FlipClock.Lang['lv-lv']   = FlipClock.Lang.Latvian;
  FlipClock.Lang['latvian'] = FlipClock.Lang.Latvian;

}(jQuery));
(function($) {

    /**
     * FlipClock Dutch Language Pack
     *
     * This class will used to translate tokens into the Dutch language.
     */

    FlipClock.Lang.Dutch = {

        'years'   : 'Jaren',
        'months'  : 'Maanden',
        'days'    : 'Dagen',
        'hours'   : 'Uren',
        'minutes' : 'Minuten',
        'seconds' : 'Seconden'

    };

    /* Create various aliases for convenience */

    FlipClock.Lang['nl']      = FlipClock.Lang.Dutch;
    FlipClock.Lang['nl-be']   = FlipClock.Lang.Dutch;
    FlipClock.Lang['dutch']   = FlipClock.Lang.Dutch;

}(jQuery));

(function($) {

	/**
	 * FlipClock Norwegian-Bokmål Language Pack
	 *
	 * This class will used to translate tokens into the Norwegian language.
	 *	
	 */

	FlipClock.Lang.Norwegian = {

		'years'   : 'År',
		'months'  : 'Måneder',
		'days'    : 'Dager',
		'hours'   : 'Timer',
		'minutes' : 'Minutter',
		'seconds' : 'Sekunder'	

	};

	/* Create various aliases for convenience */

	FlipClock.Lang['no']      = FlipClock.Lang.Norwegian;
	FlipClock.Lang['nb']      = FlipClock.Lang.Norwegian;
	FlipClock.Lang['no-nb']   = FlipClock.Lang.Norwegian;
	FlipClock.Lang['norwegian'] = FlipClock.Lang.Norwegian;

}(jQuery));

(function($) {

	/**
	 * FlipClock Portuguese Language Pack
	 *
	 * This class will used to translate tokens into the Portuguese language.
	 *
	 */

	FlipClock.Lang.Portuguese = {

		'years'   : 'Anos',
		'months'  : 'Meses',
		'days'    : 'Dias',
		'hours'   : 'Horas',
		'minutes' : 'Minutos',
		'seconds' : 'Segundos'

	};

	/* Create various aliases for convenience */

	FlipClock.Lang['pt']         = FlipClock.Lang.Portuguese;
	FlipClock.Lang['pt-br']      = FlipClock.Lang.Portuguese;
	FlipClock.Lang['portuguese'] = FlipClock.Lang.Portuguese;

}(jQuery));
(function($) {

  /**
   * FlipClock Russian Language Pack
   *
   * This class will used to translate tokens into the Russian language.
   *
   */

  FlipClock.Lang.Russian = {

    'years'   : 'лет',
    'months'  : 'месяцев',
    'days'    : 'дней',
    'hours'   : 'часов',
    'minutes' : 'минут',
    'seconds' : 'секунд'

  };

  /* Create various aliases for convenience */

  FlipClock.Lang['ru']      = FlipClock.Lang.Russian;
  FlipClock.Lang['ru-ru']   = FlipClock.Lang.Russian;
  FlipClock.Lang['russian']  = FlipClock.Lang.Russian;

}(jQuery));
(function($) {
		
	/**
	 * FlipClock Swedish Language Pack
	 *
	 * This class will used to translate tokens into the Swedish language.
	 *	
	 */
	 
	FlipClock.Lang.Swedish = {
		
		'years'   : 'År',
		'months'  : 'Månader',
		'days'    : 'Dagar',
		'hours'   : 'Timmar',
		'minutes' : 'Minuter',
		'seconds' : 'Sekunder'	

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['sv']      = FlipClock.Lang.Swedish;
	FlipClock.Lang['sv-se']   = FlipClock.Lang.Swedish;
	FlipClock.Lang['swedish'] = FlipClock.Lang.Swedish;

}(jQuery));

(function($) {
		
	/**
	 * FlipClock Chinese Language Pack
	 *
	 * This class will used to translate tokens into the Chinese language.
	 *	
	 */
	 
	FlipClock.Lang.Chinese = {
		
		'years'   : '年',
		'months'  : '月',
		'days'    : '日',
		'hours'   : '时',
		'minutes' : '分',
		'seconds' : '秒'

	};
	
	/* Create various aliases for convenience */

	FlipClock.Lang['zh']      = FlipClock.Lang.Chinese;
	FlipClock.Lang['zh-cn']   = FlipClock.Lang.Chinese;
	FlipClock.Lang['chinese'] = FlipClock.Lang.Chinese;

}(jQuery));

var css$1 = "#finishContainer{\n    display: none;\n}\n#buyContainer{\n\n}\n\n.big-input {\n    width: 250px;\n    padding-right: 5em;\n    padding-left: 1em;\n    border: 0px;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    font-size: 1.125rem;\n    line-height: 1;\n    border-radius: .3rem;\n}\n\n.clock-counter{\n    display: flex;\n    justify-content: center;\n\n}\n\n.clock-counter .flip-clock-wrapper{\n    width: unset;\n}\nsection.head-area .head-content{\n    padding-top: 2.125rem;\n}\n\nh1.h1-roboto{\n    font-family: \"Roboto\", sans-serif;\n    font-size: 4rem !important;\n}\n.buy-container{\n    display: flex;\n}\n.buy-container input.big-input{\n    margin-right: 1em;\n}\n.big-input-container{\n    display: flex;\n}\n.navbar-brand .logo{\n    width: 40px;\n    height: 40px;\n    //box-shadow: #efefef 3px 3px;\n}\n\n.i-container {\n    position: relative;\n}\n.i-container .info {\n    width: 4.5em;\n    position: absolute;\n    background: #9e9e9e;\n    right: 21px;\n    height: 2em;\n    display: flex;\n    align-items: center;\n    top: 11px;\n    justify-content: center;\n    border-radius: 5px\n}\n.i-container .info img {\n    width: 24px;\n    height: 24px;\n}\n.i-container .info span{\n    line-height: 4px;\n    font-size: 14px;\n    margin-left: 2px;\n}\n\n.whitepaper-img{\n    position: relative;\n}\n.whitepaper-img .title, .whitepaper-img .desc{\n    position: absolute;\n    font-family: Comfortaa,Roboto,'Helvetica Neue',Arial,sans-serif;\n\n    color: white;\n}\n\n.whitepaper-img .title{\n    font-weight: 500;\n\n    font-size: 19px;\n    top: 39px;\n    left: 110px;\n}\n.whitepaper-img .desc{\n    font-weight: 400;\n    font-size: 14px;\n    bottom: 50px;\n    left: 24px;\n    width: 300px;\n}\n.content-wrapper{\n    height : 100vh;\n    color : #FFFFFF;\n    z-index : 6;\n    width:100%;\n    font-family: Comfortaa,Roboto,'Helvetica Neue',Arial,sans-serif;\n}\n.content-wrapper::before {\n    content : '';\n    background-image: url('/images/counter/banner-shape.png');\n    background-repeat: no-repeat;\n    background-position: top 172px right 0px;\n    background-size: 60%;\n    height : 436px;\n    width : 899px;\n    position : fixed;\n    right : 0;\n    top : 30%;\n}\n\n.advantages-list {\n    font-family: \"Roboto\", sans-serif;\n}\n.advantages-list .h3-advantages-list {\n    font-size: 1.5rem;\n    font-weight: 600;\n}\n.advantages-list ul {\n    list-style-type: \"✓\"\n}\n.advantages-list li {\n    margin-top: 1rem;\n    font-weight: 600;\n}\n\n.advantages-list li span.points{\n    position: relative;\n    left: 10px;\n}\n.advantages-list li sup {\n    font-size: 0.7rem;\n}\n\n.advantages-list li a.read-more {\n    text-decoration: underline;\n}\n.advantages-list li span.soon {\n    color: darkorange;\n    font-size: 0.8rem;\n}\n\n\nsection#about {\n    background-color: #ffffffdb;\n}\n\n@media screen and (max-width: 575.98px){\n    .buy-container{\n        flex-direction: column;\n        height: 100px;\n        align-items: center;\n        justify-content: center;\n    }\n    .countdown{\n        display: none;\n    }\n    .clock-counter{\n        margin-bottom: 0.5rem;\n        justify-content: center;\n    }\n    section.head-area .head-content{\n        padding-top: 5.125rem;\n    }\n\n\n    .head-area .buy-container input.big-input.btn-lg{\n        width: 140px;\n        padding-right: 4em;\n        padding-left: 0.3em;\n        font-size: 1.2em;\n        padding-top: 0.5em;\n        padding-bottom: 0.5em;\n    }\n    .buy-container  button{\n        margin-top: 1em;\n        width: 140px;\n    }\n    .i-container .info span{\n        line-height: 4px;\n        font-size: 12px;\n        margin-left: 2px;\n    }\n    .i-container .info {\n        width: 4.5em;\n        right: 22px;\n        height: 2em;\n        top: 4px;\n    }\n    .row{\n        margin-right: 0px;\n        margin-left: 0px;\n    }\n    .head-area .head-content {\n         height: 100vh !important;\n    }\n\n    .head-area .head-content .logo-wrapper .crypto-logo{\n        width: 7.87rem;\n        height: 7.87rem;\n    }\n    .head-area .head-content .logo-wrapper{\n        width: 9.35rem;\n        height: 9.35rem;\n    }\n}\n";
n(css$1,{});

var css = "/* \t----------------------------------------------------------------------------------------------\n*\tFile Name: template-counter.scss\n* \tDescription: Counter Template Specific CSS\n* \t----------------------------------------------------------------------------------------------\n* \tItem Name: Crypto ICO - Cryptocurrency Website Landing Page HTML + Dashboard Template\n* \tVersion: 1.0\n* \tAuthor: PIXINVENT\n* \tAuthor URL: http://www.themeforest.net/user/pixinvent\n* \t----------------------------------------------------------------------------------------------*/\n/*  Basic reboot css\n    -------------------------------------------------------------------------------------------*/\nbody {\n  overflow-x : hidden;\n}\n\np {\n  font-size : 0.938rem;\n}\n\na:hover {\n  text-decoration : none;\n}\n\n/*  Theme type css\n    -------------------------------------------------------------------------------------------*/\nbody {\n  line-height : 1.6;\n  letter-spacing : 0.25px;\n}\n\nul {\n  font-size : 0.938rem;\n  list-style : none;\n}\n\n/*  Pre-loader Component css\n    -------------------------------------------------------------------------------------------*/\n/* Loader wrapper */\n#loader-wrapper {\n  position : fixed;\n  top : 0;\n  left : 0;\n  width : 100%;\n  height : 100%;\n  z-index : 100000;\n}\n\n#loader-wrapper .logo-wrapper{\n    position: relative;\n    width: 100%;\n    height: 50%;\n    display: flex;\n    align-items: center;\n    margin-top: 20%;\n}\n\n#loader-wrapper .loader-section {\n  position : fixed;\n  top : 0;\n  width : 51%;\n  height : 100%;\n  background : #FFFFFF;\n  z-index : 99;\n  -webkit-transform : translateX(0);\n     -moz-transform : translateX(0);\n      -ms-transform : translateX(0);\n       -o-transform : translateX(0);\n          transform : translateX(0);\n}\n#loader-wrapper .loader-section.section-left {\n  left : 0;\n}\n#loader-wrapper .loader-section.section-right {\n  right : 0;\n}\n\n/* Revel screen after page load */\n.loaded #loader-wrapper {\n  visibility : hidden;\n  -webkit-transform : translateY(-100%);\n     -moz-transform : translateY(-100%);\n      -ms-transform : translateY(-100%);\n       -o-transform : translateY(-100%);\n          transform : translateY(-100%);\n  -webkit-transition : all 0.3s 1s ease-out;\n       -o-transition : all 0.3s 1s ease-out;\n     -moz-transition : all 0.3s 1s ease-out;\n          transition : all 0.3s 1s ease-out;\n}\n.loaded #loader-wrapper .loader-section.section-left {\n  -webkit-transform : translateX(-100%);\n     -moz-transform : translateX(-100%);\n      -ms-transform : translateX(-100%);\n       -o-transform : translateX(-100%);\n          transform : translateX(-100%);\n  -webkit-transition : all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n       -o-transition : all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n     -moz-transition : all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          transition : all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.loaded #loader-wrapper .loader-section.section-right {\n  -webkit-transform : translateX(100%);\n     -moz-transform : translateX(100%);\n      -ms-transform : translateX(100%);\n       -o-transform : translateX(100%);\n          transform : translateX(100%);\n  -webkit-transition : all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n       -o-transition : all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n     -moz-transition : all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          transition : all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n\n.loaded #loader {\n  opacity : 0;\n  -webkit-transition : all 0.5s ease-out;\n       -o-transition : all 0.5s ease-out;\n     -moz-transition : all 0.5s ease-out;\n          transition : all 0.5s ease-out;\n}\n\n/* SVG loader animation  */\nsvg#loader {\n  display : block;\n  position : absolute;\n  top : 0;\n  right : 0;\n  left : 0;\n  bottom : 0;\n  margin : 0 auto;\n  height : 100%;\n  width : 25%;\n  z-index : 999;\n  background : #FFFFFF;\n}\nsvg#loader g {\n  -webkit-animation : spin 15s linear infinite;\n     -moz-animation : spin 15s linear infinite;\n       -o-animation : spin 15s linear infinite;\n          animation : spin 15s linear infinite;\n  -webkit-transform-origin : 50% 50%;\n     -moz-transform-origin : 50% 50%;\n      -ms-transform-origin : 50% 50%;\n       -o-transform-origin : 50% 50%;\n          transform-origin : 50% 50%;\n}\nsvg#loader g circle {\n  fill : none;\n  stroke-width : 2px;\n  stroke-linecap : round;\n  color : #EEECF4;\n  stroke-dasharray : 260, 0, 1, 0, 1, 0, 1, 0, 10, 1, 10, 1, 10, 1, 10, 1, 10, 10, 1, 10, 1, 10, 1, 10, 10, 1;\n  -webkit-animation : dostuff 18s ease infinite;\n     -moz-animation : dostuff 18s ease infinite;\n       -o-animation : dostuff 18s ease infinite;\n          animation : dostuff 18s ease infinite;\n}\nsvg#loader g:nth-child(even) {\n  animation-direction : reverse;\n}\nsvg#loader g:nth-child(1n) {\n  -webkit-animation-delay : -1s;\n     -moz-animation-delay : -1s;\n       -o-animation-delay : -1s;\n          animation-delay : -1s;\n}\nsvg#loader g:nth-child(2n) {\n  -webkit-animation-delay : -2s;\n     -moz-animation-delay : -2s;\n       -o-animation-delay : -2s;\n          animation-delay : -2s;\n}\nsvg#loader g:nth-child(3n) {\n  -webkit-animation-delay : -3s;\n     -moz-animation-delay : -3s;\n       -o-animation-delay : -3s;\n          animation-delay : -3s;\n}\nsvg#loader g:nth-child(4n) {\n  -webkit-animation-delay : -4s;\n     -moz-animation-delay : -4s;\n       -o-animation-delay : -4s;\n          animation-delay : -4s;\n}\nsvg#loader g:nth-child(5n) {\n  -webkit-animation-delay : -5s;\n     -moz-animation-delay : -5s;\n       -o-animation-delay : -5s;\n          animation-delay : -5s;\n}\nsvg#loader g:nth-child(6n) {\n  -webkit-animation-delay : -6s;\n     -moz-animation-delay : -6s;\n       -o-animation-delay : -6s;\n          animation-delay : -6s;\n}\nsvg#loader g:nth-child(7n) {\n  -webkit-animation-delay : -7s;\n     -moz-animation-delay : -7s;\n       -o-animation-delay : -7s;\n          animation-delay : -7s;\n}\nsvg#loader g:nth-child(1n) circle {\n  -webkit-animation-delay : -1.5s;\n     -moz-animation-delay : -1.5s;\n       -o-animation-delay : -1.5s;\n          animation-delay : -1.5s;\n}\nsvg#loader g:nth-child(2n) circle {\n  -webkit-animation-delay : -2.5s;\n     -moz-animation-delay : -2.5s;\n       -o-animation-delay : -2.5s;\n          animation-delay : -2.5s;\n}\nsvg#loader g:nth-child(3n) circle {\n  -webkit-animation-delay : -3.5s;\n     -moz-animation-delay : -3.5s;\n       -o-animation-delay : -3.5s;\n          animation-delay : -3.5s;\n}\nsvg#loader g:nth-child(4n) circle, svg#loader g:nth-child(5n) circle {\n  -webkit-animation-delay : -4.5s;\n     -moz-animation-delay : -4.5s;\n       -o-animation-delay : -4.5s;\n          animation-delay : -4.5s;\n}\nsvg#loader g:nth-child(6n) circle {\n  -webkit-animation-delay : -5.5s;\n     -moz-animation-delay : -5.5s;\n       -o-animation-delay : -5.5s;\n          animation-delay : -5.5s;\n}\nsvg#loader g:nth-child(7n) circle {\n  -webkit-animation-delay : -6.5s;\n     -moz-animation-delay : -6.5s;\n       -o-animation-delay : -6.5s;\n          animation-delay : -6.5s;\n}\nsvg#loader g:nth-child(8n) circle {\n  -webkit-animation-delay : -7.5s;\n     -moz-animation-delay : -7.5s;\n       -o-animation-delay : -7.5s;\n          animation-delay : -7.5s;\n}\nsvg#loader g:nth-child(9n) circle {\n  -webkit-animation-delay : -8.5s;\n     -moz-animation-delay : -8.5s;\n       -o-animation-delay : -8.5s;\n          animation-delay : -8.5s;\n}\nsvg#loader g:nth-child(10n) circle {\n  -webkit-animation-delay : -9.5s;\n     -moz-animation-delay : -9.5s;\n       -o-animation-delay : -9.5s;\n          animation-delay : -9.5s;\n}\nsvg#loader g:last-child circle {\n  fill : #CCCCCC;\n  stroke : none;\n}\n\n@-webkit-keyframes dostuff {\n  50% {\n    stroke-dasharray : 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 10, 10, 1, 20, 120, 1, 30, 1, 30, 1, 10, 30, 1;\n  }\n}\n\n@-moz-keyframes dostuff {\n  50% {\n    stroke-dasharray : 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 10, 10, 1, 20, 120, 1, 30, 1, 30, 1, 10, 30, 1;\n  }\n}\n\n@-o-keyframes dostuff {\n  50% {\n    stroke-dasharray : 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 10, 10, 1, 20, 120, 1, 30, 1, 30, 1, 10, 30, 1;\n  }\n}\n\n@keyframes dostuff {\n  50% {\n    stroke-dasharray : 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 10, 10, 1, 20, 120, 1, 30, 1, 30, 1, 10, 30, 1;\n  }\n}\n\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform : rotate(360deg);\n            transform : rotate(360deg);\n  }\n}\n\n@-moz-keyframes spin {\n  100% {\n    -moz-transform : rotate(360deg);\n         transform : rotate(360deg);\n  }\n}\n\n@-o-keyframes spin {\n  100% {\n    -o-transform : rotate(360deg);\n       transform : rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  100% {\n    -webkit-transform : rotate(360deg);\n       -moz-transform : rotate(360deg);\n         -o-transform : rotate(360deg);\n            transform : rotate(360deg);\n  }\n}\n\n/* JavaScript Turned Off */\n.no-js #loader-wrapper {\n  display : none;\n}\n\n/*  Button scss for button options and gradient classes\n    -------------------------------------------------------------------------------------------*/\n/* Button SCSS */\n.btn {\n  color : #FFFFFF;\n}\n.btn.btn-square {\n  border-radius : 0;\n}\n.btn.btn-round {\n  border-radius : 2rem;\n}\n.btn:focus, .btn.focus, .btn:active, .btn.active {\n  outline : none;\n  -webkit-box-shadow : none !important;\n          box-shadow : none !important;\n}\n\n/* Gradient Button */\n.btn-gradient-blue {\n  -webkit-transition : 0.5s;\n       -o-transition : 0.5s;\n     -moz-transition : 0.5s;\n          transition : 0.5s;\n  background-image : -webkit-linear-gradient(50deg, #28BCFD 20%, #1D78FF 51%, #28BCFD 90%);\n  background-image :    -moz-linear-gradient(50deg, #28BCFD 20%, #1D78FF 51%, #28BCFD 90%);\n  background-image :      -o-linear-gradient(50deg, #28BCFD 20%, #1D78FF 51%, #28BCFD 90%);\n  background-image :         linear-gradient(40deg, #28BCFD 20%, #1D78FF 51%, #28BCFD 90%);\n  background-position : left center;\n  -webkit-background-size : 200% auto;\n          background-size : 200% auto;\n  border : 0;\n  color : #FFFFFF;\n}\n.btn-gradient-blue:hover, .btn-gradient-blue:active {\n  background-position : right center;\n  text-decoration : none;\n  color : #FFFFFF;\n}\n.btn-gradient-blue:not(:disabled):not(.disabled):active {\n  background-image : -webkit-linear-gradient(50deg, #28BCFD 0%, #1D78FF 51%, #28BCFD 90%);\n  background-image :    -moz-linear-gradient(50deg, #28BCFD 0%, #1D78FF 51%, #28BCFD 90%);\n  background-image :      -o-linear-gradient(50deg, #28BCFD 0%, #1D78FF 51%, #28BCFD 90%);\n  background-image :         linear-gradient(40deg, #28BCFD 0%, #1D78FF 51%, #28BCFD 90%);\n}\n.btn-gradient-blue.btn-glow {\n  -webkit-box-shadow : 0 0 12px 0 #1F87FF;\n          box-shadow : 0 0 12px 0 #1F87FF;\n}\n\n.btn-gradient-orange {\n  -webkit-transition : 0.5s;\n       -o-transition : 0.5s;\n     -moz-transition : 0.5s;\n          transition : 0.5s;\n  background-image : -webkit-linear-gradient(50deg, #FF4137 20%, #FDC800 51%, #FF4137 90%);\n  background-image :    -moz-linear-gradient(50deg, #FF4137 20%, #FDC800 51%, #FF4137 90%);\n  background-image :      -o-linear-gradient(50deg, #FF4137 20%, #FDC800 51%, #FF4137 90%);\n  background-image :         linear-gradient(40deg, #FF4137 20%, #FDC800 51%, #FF4137 90%);\n  background-position : left center;\n  -webkit-background-size : 200% auto;\n          background-size : 200% auto;\n  border : 0;\n  color : #FFFFFF;\n}\n.btn-gradient-orange:hover, .btn-gradient-orange:active {\n  background-position : right center;\n  text-decoration : none;\n  color : #FFFFFF;\n}\n.btn-gradient-orange:not(:disabled):not(.disabled):active {\n  background-image : -webkit-linear-gradient(50deg, #FF4137 0%, #FDC800 51%, #FF4137 90%);\n  background-image :    -moz-linear-gradient(50deg, #FF4137 0%, #FDC800 51%, #FF4137 90%);\n  background-image :      -o-linear-gradient(50deg, #FF4137 0%, #FDC800 51%, #FF4137 90%);\n  background-image :         linear-gradient(40deg, #FF4137 0%, #FDC800 51%, #FF4137 90%);\n}\n.btn-gradient-orange.btn-glow {\n  -webkit-box-shadow : 0 0 12px 0 #FF5F2B;\n          box-shadow : 0 0 12px 0 #FF5F2B;\n}\n\n\n\n.btn-gradient-lightorange {\n    -webkit-transition : 0.5s;\n    -o-transition : 0.5s;\n    -moz-transition : 0.5s;\n    transition : 0.5s;\n    background-image : -webkit-linear-gradient(50deg, #fdbc35 20%, #ff7724 51%, #fda80f 90%);\n    background-image :    -moz-linear-gradient(50deg, #fdbc35 20%, #ff7724 51%, #fda80f 90%);\n    background-image :      -o-linear-gradient(50deg, #fdbc35 20%, #ff7724 51%, #fda80f 90%);\n    background-image :         linear-gradient(50deg, #fdbc35 20%, #ff7724 51%, #fda80f 90%);\n    background-position : left center;\n    -webkit-background-size : 200% auto;\n    background-size : 200% auto;\n    border : 0;\n    color : #FFFFFF;\n}\n.btn-gradient-lightorange:hover, .btn-gradient-lightorange:active {\n    background-position : right center;\n    text-decoration : none;\n    color : #FFFFFF;\n}\n.btn-gradient-lightorange:not(:disabled):not(.disabled):active {\n    background-image : -webkit-linear-gradient(50deg, #fdbc35 20%, #ff7724 51%, #fda80f 90%);\n    background-image :    -moz-linear-gradient(50deg, #fdbc35 20%, #ff7724 51%, #fda80f 90%);\n    background-image :      -o-linear-gradient(50deg, #fdbc35 20%, #ff7724 51%, #fda80f 90%);\n    background-image :         linear-gradient(40deg, #fdbc35 0%, #ff7724 51%, #fda80f 90%);\n}\n.btn-gradient-lightorange.btn-glow {\n    -webkit-box-shadow : 0 0 12px 0 #ff7724;\n    box-shadow : 0 0 12px 0 #ff7724;\n}\n\n.btn-gradient-purple {\n  -webkit-transition : 0.5s;\n       -o-transition : 0.5s;\n     -moz-transition : 0.5s;\n          transition : 0.5s;\n  background-image : -webkit-linear-gradient(50deg, #BF68E6 20%, #9E48CD 51%, #BF68E6 90%);\n  background-image :    -moz-linear-gradient(50deg, #BF68E6 20%, #9E48CD 51%, #BF68E6 90%);\n  background-image :      -o-linear-gradient(50deg, #BF68E6 20%, #9E48CD 51%, #BF68E6 90%);\n  background-image :         linear-gradient(40deg, #BF68E6 20%, #9E48CD 51%, #BF68E6 90%);\n  background-position : left center;\n  -webkit-background-size : 200% auto;\n          background-size : 200% auto;\n  border : 0;\n  color : #FFFFFF;\n}\n.btn-gradient-purple:hover, .btn-gradient-purple:active {\n  background-position : right center;\n  text-decoration : none;\n  color : #FFFFFF;\n}\n.btn-gradient-purple:not(:disabled):not(.disabled):active {\n  background-image : -webkit-linear-gradient(50deg, #BF68E6 0%, #9E48CD 51%, #BF68E6 90%);\n  background-image :    -moz-linear-gradient(50deg, #BF68E6 0%, #9E48CD 51%, #BF68E6 90%);\n  background-image :      -o-linear-gradient(50deg, #BF68E6 0%, #9E48CD 51%, #BF68E6 90%);\n  background-image :         linear-gradient(40deg, #BF68E6 0%, #9E48CD 51%, #BF68E6 90%);\n}\n.btn-gradient-purple.btn-glow {\n  -webkit-box-shadow : 0 0 12px 0 #9E48CD;\n          box-shadow : 0 0 12px 0 #9E48CD;\n}\n\n.btn-light {\n  color : #3F3F3F;\n}\n.btn-light.btn-glow {\n  -webkit-box-shadow : 0 0 12px 0 #FFFFFF;\n          box-shadow : 0 0 12px 0 #FFFFFF;\n}\n\n/*  Form Component css\n    -------------------------------------------------------------------------------------------*/\n.form-control {\n  border-radius : 0;\n  border : none;\n  border-bottom : 1px solid #EEECF4;\n  color : #7D7D7D;\n  font-size : 0.875rem;\n  padding : 1rem 0.5rem;\n  margin-bottom : 3.5rem;\n  background : none;\n}\n.form-control:focus {\n  -webkit-box-shadow : none !important;\n          box-shadow : none !important;\n  background : transparent;\n}\n\n/*  Gradient progress bar colors\n    -------------------------------------------------------------------------------------------*/\n.progress .progress-blue {\n  background : -webkit-gradient(linear, left top, right top, from(#28BCFD), to(#1D78FF));\n  background : -webkit-linear-gradient(left, #28BCFD, #1D78FF);\n  background :    -moz-linear-gradient(left, #28BCFD, #1D78FF);\n  background :      -o-linear-gradient(left, #28BCFD, #1D78FF);\n  background :         linear-gradient(to right, #28BCFD, #1D78FF);\n}\n\n.progress .progress-orange {\n  background : -webkit-gradient(linear, left top, right top, from(#FDC800), to(#FF4137));\n  background : -webkit-linear-gradient(left, #FDC800, #FF4137);\n  background :    -moz-linear-gradient(left, #FDC800, #FF4137);\n  background :      -o-linear-gradient(left, #FDC800, #FF4137);\n  background :         linear-gradient(to right, #FDC800, #FF4137);\n}\n\n.progress .progress-purple {\n  background : -webkit-gradient(linear, left top, right top, from(#BF68E6), to(#9E48CD));\n  background : -webkit-linear-gradient(left, #BF68E6, #9E48CD);\n  background :    -moz-linear-gradient(left, #BF68E6, #9E48CD);\n  background :      -o-linear-gradient(left, #BF68E6, #9E48CD);\n  background :         linear-gradient(to right, #BF68E6, #9E48CD);\n}\n\n/* Dropdown down arrow css\n    -------------------------------------------------------------------------------------------*/\n.dropdown-toggle::after {\n  font-family : 'themify';\n  content : '\\e64b';\n  border : none;\n  position : relative;\n  top : 1px;\n  right : 0;\n  padding : 0 2px 0 6px;\n  margin : 0 0.3em 0 0;\n  vertical-align : 0;\n  font-size : 0.6rem;\n  font-weight : 700;\n}\n\n.main-menu .dropdown-item {\n  padding-left : 0;\n}\n.main-menu .dropdown-item.active {\n  background : none;\n  padding-left : 20px !important;\n  -webkit-transition : all 0.5s ease;\n       -o-transition : all 0.5s ease;\n     -moz-transition : all 0.5s ease;\n          transition : all 0.5s ease;\n}\n\n/*  Multilevel Menu\n    -------------------------------------------------------------------------------------------*/\n.dropdown-submenu {\n  position : relative;\n}\n.dropdown-submenu > .dropdown-menu {\n  top : 0;\n  left : 100%;\n  border-radius : 6px;\n  margin-left : 0.15rem;\n  margin-top : 0.25rem !important;\n}\n.dropdown-submenu:hover > .dropdown-menu {\n  display : block;\n}\n.dropdown-submenu:hover > a:after {\n  border-left-color : #FFFFFF;\n}\n.dropdown-submenu > a:after {\n  display : block;\n  content : ' ';\n  float : right;\n  width : 0;\n  height : 0;\n  border-color : transparent;\n  border-style : solid;\n  border-width : 5px 0 5px 5px;\n  border-left-color : #CCCCCC;\n  margin-top : 5px;\n  margin-right : 0;\n}\n.dropdown-submenu.dropleft > .dropdown-menu {\n  left : auto;\n  margin-top : 0.25rem !important;\n  margin-left : 0;\n}\n\n/*  Theme Utilities css\n    -------------------------------------------------------------------------------------------*/\n:focus {\n  outline : none !important;\n}\n\n/* Font-size */\n.font-xlarge {\n  font-size : 2.75rem;\n}\n\n.font-large {\n  font-size : 2rem;\n  line-height : 2rem;\n}\n\n.font-medium {\n  font-size : 1.125rem;\n}\n\n.font-small {\n  font-size : 0.875rem;\n}\n\n.font-xsmall {\n  font-size : 0.75rem;\n}\n\n/*  Grey Color */\n.grey-accent1 {\n  color : #161616;\n}\n\n.grey-accent2 {\n  color : #3F3F3F;\n}\n\n.grey-accent3 {\n  color : #7D7D7D;\n}\n\n.white {\n  color : #FFFFFF;\n}\n\n.black {\n  color : #000000;\n}\n\n/* Box Shadow */\n.box-shadow-0 {\n  -webkit-box-shadow : none !important;\n          box-shadow : none !important;\n}\n\n.box-shadow-1 {\n  -webkit-box-shadow : 0 7px 12px 0 rgba(29, 120, 255, 0.16);\n          box-shadow : 0 7px 12px 0 rgba(29, 120, 255, 0.16);\n}\n\n.box-shadow-2 {\n  -webkit-box-shadow : 0 10px 18px 0 rgba(29, 120, 255, 0.2);\n          box-shadow : 0 10px 18px 0 rgba(29, 120, 255, 0.2);\n}\n\n.box-shadow-3 {\n  -webkit-box-shadow : 0 14px 24px 0 rgba(29, 120, 255, 0.26);\n          box-shadow : 0 14px 24px 0 rgba(29, 120, 255, 0.26);\n}\n\n.box-shadow-4 {\n  -webkit-box-shadow : 0 16px 28px 0 rgba(29, 120, 255, 0.3);\n          box-shadow : 0 16px 28px 0 rgba(29, 120, 255, 0.3);\n}\n\n.box-shadow-5 {\n  -webkit-box-shadow : 0 27px 24px 0 rgba(29, 120, 255, 0.36);\n          box-shadow : 0 27px 24px 0 rgba(29, 120, 255, 0.36);\n}\n\n/* Line height */\n.line-height-1 {\n  line-height : 0.5rem;\n}\n\n.line-height-2 {\n  line-height : 1rem;\n}\n\n.line-height-3 {\n  line-height : 1.5rem;\n}\n\n/* Extra small devices (portrait phones, less than 576px) */\n/* (max-width: 575.98px) */\n@media (max-width: 575.98px) {\n  /* Margin/padding for Extra small screen (<576) */\n  .ml-xs-0 {\n    margin-left : 0 !important;\n  }\n  .mr-xs-0 {\n    margin-right : 0 !important;\n  }\n  .mt-xs-3 {\n    margin-top : 1rem !important;\n  }\n  .mr-xs-3 {\n    margin-right : 1rem !important;\n  }\n  .ml-xs-3 {\n    margin-left : 1rem !important;\n  }\n  .mt-xs-5 {\n    margin-top : 3rem !important;\n  }\n  .mb-xs-5 {\n    margin-bottom : 3rem !important;\n  }\n  .pt-xs-3 {\n    padding-top : 1rem !important;\n  }\n  .pt-xs-5 {\n    padding-top : 3rem !important;\n  }\n  .pb-xs-5 {\n    padding-bottom : 3rem !important;\n  }\n}\n\n/* Mask Animation */\n.maskUp {\n  -webkit-animation-name : maskUp;\n     -moz-animation-name : maskUp;\n       -o-animation-name : maskUp;\n          animation-name : maskUp;\n}\n\n.maskRight {\n  -webkit-animation-name : maskRight;\n     -moz-animation-name : maskRight;\n       -o-animation-name : maskRight;\n          animation-name : maskRight;\n}\n\n.maskDown {\n  -webkit-animation-name : maskDown;\n     -moz-animation-name : maskDown;\n       -o-animation-name : maskDown;\n          animation-name : maskDown;\n}\n\n.maskLeft {\n  -webkit-animation-name : maskLeft;\n     -moz-animation-name : maskLeft;\n       -o-animation-name : maskLeft;\n          animation-name : maskLeft;\n}\n\n/* Mask Up */\n@-webkit-keyframes maskUp {\n  from {\n    -webkit-transform : translate(0, 100%);\n            transform : translate(0, 100%);\n  }\n  to {\n    -webkit-transform : translate(0, 0);\n            transform : translate(0, 0);\n  }\n}\n@-moz-keyframes maskUp {\n  from {\n    -moz-transform : translate(0, 100%);\n         transform : translate(0, 100%);\n  }\n  to {\n    -moz-transform : translate(0, 0);\n         transform : translate(0, 0);\n  }\n}\n@-o-keyframes maskUp {\n  from {\n    -o-transform : translate(0, 100%);\n       transform : translate(0, 100%);\n  }\n  to {\n    -o-transform : translate(0, 0);\n       transform : translate(0, 0);\n  }\n}\n@keyframes maskUp {\n  from {\n    -webkit-transform : translate(0, 100%);\n       -moz-transform : translate(0, 100%);\n         -o-transform : translate(0, 100%);\n            transform : translate(0, 100%);\n  }\n  to {\n    -webkit-transform : translate(0, 0);\n       -moz-transform : translate(0, 0);\n         -o-transform : translate(0, 0);\n            transform : translate(0, 0);\n  }\n}\n\n/* Mask Right */\n@-webkit-keyframes maskRight {\n  from {\n    -webkit-transform : translate(-100%, 0);\n            transform : translate(-100%, 0);\n  }\n  to {\n    -webkit-transform : translate(0, 0);\n            transform : translate(0, 0);\n  }\n}\n@-moz-keyframes maskRight {\n  from {\n    -moz-transform : translate(-100%, 0);\n         transform : translate(-100%, 0);\n  }\n  to {\n    -moz-transform : translate(0, 0);\n         transform : translate(0, 0);\n  }\n}\n@-o-keyframes maskRight {\n  from {\n    -o-transform : translate(-100%, 0);\n       transform : translate(-100%, 0);\n  }\n  to {\n    -o-transform : translate(0, 0);\n       transform : translate(0, 0);\n  }\n}\n@keyframes maskRight {\n  from {\n    -webkit-transform : translate(-100%, 0);\n       -moz-transform : translate(-100%, 0);\n         -o-transform : translate(-100%, 0);\n            transform : translate(-100%, 0);\n  }\n  to {\n    -webkit-transform : translate(0, 0);\n       -moz-transform : translate(0, 0);\n         -o-transform : translate(0, 0);\n            transform : translate(0, 0);\n  }\n}\n\n/* Mask Down */\n@-webkit-keyframes maskDown {\n  from {\n    -webkit-transform : translate(0, -100%);\n            transform : translate(0, -100%);\n  }\n  to {\n    -webkit-transform : translate(0, 0);\n            transform : translate(0, 0);\n  }\n}\n@-moz-keyframes maskDown {\n  from {\n    -moz-transform : translate(0, -100%);\n         transform : translate(0, -100%);\n  }\n  to {\n    -moz-transform : translate(0, 0);\n         transform : translate(0, 0);\n  }\n}\n@-o-keyframes maskDown {\n  from {\n    -o-transform : translate(0, -100%);\n       transform : translate(0, -100%);\n  }\n  to {\n    -o-transform : translate(0, 0);\n       transform : translate(0, 0);\n  }\n}\n@keyframes maskDown {\n  from {\n    -webkit-transform : translate(0, -100%);\n       -moz-transform : translate(0, -100%);\n         -o-transform : translate(0, -100%);\n            transform : translate(0, -100%);\n  }\n  to {\n    -webkit-transform : translate(0, 0);\n       -moz-transform : translate(0, 0);\n         -o-transform : translate(0, 0);\n            transform : translate(0, 0);\n  }\n}\n\n/* Mask Left */\n@-webkit-keyframes maskLeft {\n  from {\n    -webkit-transform : translate(100%, 0);\n            transform : translate(100%, 0);\n  }\n  to {\n    -webkit-transform : translate(0, 0);\n            transform : translate(0, 0);\n  }\n}\n@-moz-keyframes maskLeft {\n  from {\n    -moz-transform : translate(100%, 0);\n         transform : translate(100%, 0);\n  }\n  to {\n    -moz-transform : translate(0, 0);\n         transform : translate(0, 0);\n  }\n}\n@-o-keyframes maskLeft {\n  from {\n    -o-transform : translate(100%, 0);\n       transform : translate(100%, 0);\n  }\n  to {\n    -o-transform : translate(0, 0);\n       transform : translate(0, 0);\n  }\n}\n@keyframes maskLeft {\n  from {\n    -webkit-transform : translate(100%, 0);\n       -moz-transform : translate(100%, 0);\n         -o-transform : translate(100%, 0);\n            transform : translate(100%, 0);\n  }\n  to {\n    -webkit-transform : translate(0, 0);\n       -moz-transform : translate(0, 0);\n         -o-transform : translate(0, 0);\n            transform : translate(0, 0);\n  }\n}\n\n/* FedIn Shorter*/\n.fadeInUpShorter {\n  -webkit-animation-name : fadeInUpShorter;\n     -moz-animation-name : fadeInUpShorter;\n       -o-animation-name : fadeInUpShorter;\n          animation-name : fadeInUpShorter;\n}\n\n.fadeInUpShortest {\n  -webkit-animation-name : fadeInUpShortest;\n     -moz-animation-name : fadeInUpShortest;\n       -o-animation-name : fadeInUpShortest;\n          animation-name : fadeInUpShortest;\n}\n\n.fadeInLeftShorter {\n  -webkit-animation-name : fadeInLeftShorter;\n     -moz-animation-name : fadeInLeftShorter;\n       -o-animation-name : fadeInLeftShorter;\n          animation-name : fadeInLeftShorter;\n}\n\n.fadeInRightShorter {\n  -webkit-animation-name : fadeInRightShorter;\n     -moz-animation-name : fadeInRightShorter;\n       -o-animation-name : fadeInRightShorter;\n          animation-name : fadeInRightShorter;\n}\n\n.fadeInDownShorter {\n  -webkit-animation-name : fadeInDownShorter;\n     -moz-animation-name : fadeInDownShorter;\n       -o-animation-name : fadeInDownShorter;\n          animation-name : fadeInDownShorter;\n}\n\n.fadeInDownShorterAbsCenter {\n  -webkit-animation-name : fadeInDownShorterAbsCenter;\n     -moz-animation-name : fadeInDownShorterAbsCenter;\n       -o-animation-name : fadeInDownShorterAbsCenter;\n          animation-name : fadeInDownShorterAbsCenter;\n}\n\n/* Fade In Up Shorter */\n@-webkit-keyframes fadeInUpShorter {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(0, 50px);\n            transform : translate(0, 50px);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : none;\n            transform : none;\n  }\n}\n@-moz-keyframes fadeInUpShorter {\n  from {\n    opacity : 0;\n    -moz-transform : translate(0, 50px);\n         transform : translate(0, 50px);\n  }\n  to {\n    opacity : 1;\n    -moz-transform : none;\n         transform : none;\n  }\n}\n@-o-keyframes fadeInUpShorter {\n  from {\n    opacity : 0;\n    -o-transform : translate(0, 50px);\n       transform : translate(0, 50px);\n  }\n  to {\n    opacity : 1;\n    -o-transform : none;\n       transform : none;\n  }\n}\n@keyframes fadeInUpShorter {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(0, 50px);\n       -moz-transform : translate(0, 50px);\n         -o-transform : translate(0, 50px);\n            transform : translate(0, 50px);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : none;\n       -moz-transform : none;\n         -o-transform : none;\n            transform : none;\n  }\n}\n\n@-webkit-keyframes fadeInUpShortest {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(0, 25px);\n            transform : translate(0, 25px);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : none;\n            transform : none;\n  }\n}\n\n@-moz-keyframes fadeInUpShortest {\n  from {\n    opacity : 0;\n    -moz-transform : translate(0, 25px);\n         transform : translate(0, 25px);\n  }\n  to {\n    opacity : 1;\n    -moz-transform : none;\n         transform : none;\n  }\n}\n\n@-o-keyframes fadeInUpShortest {\n  from {\n    opacity : 0;\n    -o-transform : translate(0, 25px);\n       transform : translate(0, 25px);\n  }\n  to {\n    opacity : 1;\n    -o-transform : none;\n       transform : none;\n  }\n}\n\n@keyframes fadeInUpShortest {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(0, 25px);\n       -moz-transform : translate(0, 25px);\n         -o-transform : translate(0, 25px);\n            transform : translate(0, 25px);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : none;\n       -moz-transform : none;\n         -o-transform : none;\n            transform : none;\n  }\n}\n\n/* Fade In Left Shorter */\n@-webkit-keyframes fadeInLeftShorter {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(50px, 0);\n            transform : translate(50px, 0);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : translate(0, 0);\n            transform : translate(0, 0);\n  }\n}\n@-moz-keyframes fadeInLeftShorter {\n  from {\n    opacity : 0;\n    -moz-transform : translate(50px, 0);\n         transform : translate(50px, 0);\n  }\n  to {\n    opacity : 1;\n    -moz-transform : translate(0, 0);\n         transform : translate(0, 0);\n  }\n}\n@-o-keyframes fadeInLeftShorter {\n  from {\n    opacity : 0;\n    -o-transform : translate(50px, 0);\n       transform : translate(50px, 0);\n  }\n  to {\n    opacity : 1;\n    -o-transform : translate(0, 0);\n       transform : translate(0, 0);\n  }\n}\n@keyframes fadeInLeftShorter {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(50px, 0);\n       -moz-transform : translate(50px, 0);\n         -o-transform : translate(50px, 0);\n            transform : translate(50px, 0);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : translate(0, 0);\n       -moz-transform : translate(0, 0);\n         -o-transform : translate(0, 0);\n            transform : translate(0, 0);\n  }\n}\n\n/* Fade In Right Shorter */\n@-webkit-keyframes fadeInRightShorter {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-50px, 0);\n            transform : translate(-50px, 0);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : translate(0, 0);\n            transform : translate(0, 0);\n  }\n}\n@-moz-keyframes fadeInRightShorter {\n  from {\n    opacity : 0;\n    -moz-transform : translate(-50px, 0);\n         transform : translate(-50px, 0);\n  }\n  to {\n    opacity : 1;\n    -moz-transform : translate(0, 0);\n         transform : translate(0, 0);\n  }\n}\n@-o-keyframes fadeInRightShorter {\n  from {\n    opacity : 0;\n    -o-transform : translate(-50px, 0);\n       transform : translate(-50px, 0);\n  }\n  to {\n    opacity : 1;\n    -o-transform : translate(0, 0);\n       transform : translate(0, 0);\n  }\n}\n@keyframes fadeInRightShorter {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-50px, 0);\n       -moz-transform : translate(-50px, 0);\n         -o-transform : translate(-50px, 0);\n            transform : translate(-50px, 0);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : translate(0, 0);\n       -moz-transform : translate(0, 0);\n         -o-transform : translate(0, 0);\n            transform : translate(0, 0);\n  }\n}\n\n/* Fade In Down Shorter */\n@-webkit-keyframes fadeInDownShorter {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(0, -50px);\n            transform : translate(0, -50px);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : translate(0, 0);\n            transform : translate(0, 0);\n  }\n}\n@-moz-keyframes fadeInDownShorter {\n  from {\n    opacity : 0;\n    -moz-transform : translate(0, -50px);\n         transform : translate(0, -50px);\n  }\n  to {\n    opacity : 1;\n    -moz-transform : translate(0, 0);\n         transform : translate(0, 0);\n  }\n}\n@-o-keyframes fadeInDownShorter {\n  from {\n    opacity : 0;\n    -o-transform : translate(0, -50px);\n       transform : translate(0, -50px);\n  }\n  to {\n    opacity : 1;\n    -o-transform : translate(0, 0);\n       transform : translate(0, 0);\n  }\n}\n@keyframes fadeInDownShorter {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(0, -50px);\n       -moz-transform : translate(0, -50px);\n         -o-transform : translate(0, -50px);\n            transform : translate(0, -50px);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : translate(0, 0);\n       -moz-transform : translate(0, 0);\n         -o-transform : translate(0, 0);\n            transform : translate(0, 0);\n  }\n}\n\n/* Fade In Down Shorter - Absolute Center */\n@-webkit-keyframes fadeInDownShorterAbsCenter {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-50%, -50px);\n            transform : translate(-50%, -50px);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : translate(-50%, 0);\n            transform : translate(-50%, 0);\n  }\n}\n@-moz-keyframes fadeInDownShorterAbsCenter {\n  from {\n    opacity : 0;\n    -moz-transform : translate(-50%, -50px);\n         transform : translate(-50%, -50px);\n  }\n  to {\n    opacity : 1;\n    -moz-transform : translate(-50%, 0);\n         transform : translate(-50%, 0);\n  }\n}\n@-o-keyframes fadeInDownShorterAbsCenter {\n  from {\n    opacity : 0;\n    -o-transform : translate(-50%, -50px);\n       transform : translate(-50%, -50px);\n  }\n  to {\n    opacity : 1;\n    -o-transform : translate(-50%, 0);\n       transform : translate(-50%, 0);\n  }\n}\n@keyframes fadeInDownShorterAbsCenter {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-50%, -50px);\n       -moz-transform : translate(-50%, -50px);\n         -o-transform : translate(-50%, -50px);\n            transform : translate(-50%, -50px);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : translate(-50%, 0);\n       -moz-transform : translate(-50%, 0);\n         -o-transform : translate(-50%, 0);\n            transform : translate(-50%, 0);\n  }\n}\n\n.expandIn {\n  -webkit-animation-name : expandIn;\n     -moz-animation-name : expandIn;\n       -o-animation-name : expandIn;\n          animation-name : expandIn;\n}\n\n.blurIn {\n  -webkit-animation-name : blurIn;\n     -moz-animation-name : blurIn;\n       -o-animation-name : blurIn;\n          animation-name : blurIn;\n}\n\n/* Expand In */\n@-webkit-keyframes expandIn {\n  from {\n    opacity : 0;\n    -webkit-transform : scale(0.8);\n            transform : scale(0.8);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : scale(1);\n            transform : scale(1);\n  }\n}\n@-moz-keyframes expandIn {\n  from {\n    opacity : 0;\n    -moz-transform : scale(0.8);\n         transform : scale(0.8);\n  }\n  to {\n    opacity : 1;\n    -moz-transform : scale(1);\n         transform : scale(1);\n  }\n}\n@-o-keyframes expandIn {\n  from {\n    opacity : 0;\n    -o-transform : scale(0.8);\n       transform : scale(0.8);\n  }\n  to {\n    opacity : 1;\n    -o-transform : scale(1);\n       transform : scale(1);\n  }\n}\n@keyframes expandIn {\n  from {\n    opacity : 0;\n    -webkit-transform : scale(0.8);\n       -moz-transform : scale(0.8);\n         -o-transform : scale(0.8);\n            transform : scale(0.8);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : scale(1);\n       -moz-transform : scale(1);\n         -o-transform : scale(1);\n            transform : scale(1);\n  }\n}\n\n/* Blur In */\n@-webkit-keyframes blurIn {\n  from {\n    opacity : 0;\n    -webkit-filter : blur(20px);\n            filter : blur(20px);\n    -webkit-transform : scale(1.3);\n            transform : scale(1.3);\n  }\n  to {\n    opacity : 1;\n    -webkit-filter : blur(0);\n            filter : blur(0);\n    -webkit-transform : none;\n            transform : none;\n  }\n}\n@-moz-keyframes blurIn {\n  from {\n    opacity : 0;\n    filter : blur(20px);\n    -moz-transform : scale(1.3);\n         transform : scale(1.3);\n  }\n  to {\n    opacity : 1;\n    filter : blur(0);\n    -moz-transform : none;\n         transform : none;\n  }\n}\n@-o-keyframes blurIn {\n  from {\n    opacity : 0;\n    filter : blur(20px);\n    -o-transform : scale(1.3);\n       transform : scale(1.3);\n  }\n  to {\n    opacity : 1;\n    filter : blur(0);\n    -o-transform : none;\n       transform : none;\n  }\n}\n@keyframes blurIn {\n  from {\n    opacity : 0;\n    -webkit-filter : blur(20px);\n            filter : blur(20px);\n    -webkit-transform : scale(1.3);\n       -moz-transform : scale(1.3);\n         -o-transform : scale(1.3);\n            transform : scale(1.3);\n  }\n  to {\n    opacity : 1;\n    -webkit-filter : blur(0);\n            filter : blur(0);\n    -webkit-transform : none;\n       -moz-transform : none;\n         -o-transform : none;\n            transform : none;\n  }\n}\n\n.stepsFadeInUp {\n  -webkit-animation-name : stepsFadeInUp;\n     -moz-animation-name : stepsFadeInUp;\n       -o-animation-name : stepsFadeInUp;\n          animation-name : stepsFadeInUp;\n}\n\n.stepsFadeInLeft {\n  -webkit-animation-name : stepsFadeInLeft;\n     -moz-animation-name : stepsFadeInLeft;\n       -o-animation-name : stepsFadeInLeft;\n          animation-name : stepsFadeInLeft;\n}\n\n.stepsFadeInRight {\n  -webkit-animation-name : stepsFadeInRight;\n     -moz-animation-name : stepsFadeInRight;\n       -o-animation-name : stepsFadeInRight;\n          animation-name : stepsFadeInRight;\n}\n\n/* Steps Fade In Up */\n@-webkit-keyframes stepsFadeInUp {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-50%, 25%);\n            transform : translate(-50%, 25%);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : translate(-50%, -50%);\n            transform : translate(-50%, -50%);\n  }\n}\n@-moz-keyframes stepsFadeInUp {\n  from {\n    opacity : 0;\n    -moz-transform : translate(-50%, 25%);\n         transform : translate(-50%, 25%);\n  }\n  to {\n    opacity : 1;\n    -moz-transform : translate(-50%, -50%);\n         transform : translate(-50%, -50%);\n  }\n}\n@-o-keyframes stepsFadeInUp {\n  from {\n    opacity : 0;\n    -o-transform : translate(-50%, 25%);\n       transform : translate(-50%, 25%);\n  }\n  to {\n    opacity : 1;\n    -o-transform : translate(-50%, -50%);\n       transform : translate(-50%, -50%);\n  }\n}\n@keyframes stepsFadeInUp {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-50%, 25%);\n       -moz-transform : translate(-50%, 25%);\n         -o-transform : translate(-50%, 25%);\n            transform : translate(-50%, 25%);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : translate(-50%, -50%);\n       -moz-transform : translate(-50%, -50%);\n         -o-transform : translate(-50%, -50%);\n            transform : translate(-50%, -50%);\n  }\n}\n\n/* Steps Fade In Left */\n@-webkit-keyframes stepsFadeInLeft {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-75%, -50%);\n            transform : translate(-75%, -50%);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : translate(-50%, -50%);\n            transform : translate(-50%, -50%);\n  }\n}\n@-moz-keyframes stepsFadeInLeft {\n  from {\n    opacity : 0;\n    -moz-transform : translate(-75%, -50%);\n         transform : translate(-75%, -50%);\n  }\n  to {\n    opacity : 1;\n    -moz-transform : translate(-50%, -50%);\n         transform : translate(-50%, -50%);\n  }\n}\n@-o-keyframes stepsFadeInLeft {\n  from {\n    opacity : 0;\n    -o-transform : translate(-75%, -50%);\n       transform : translate(-75%, -50%);\n  }\n  to {\n    opacity : 1;\n    -o-transform : translate(-50%, -50%);\n       transform : translate(-50%, -50%);\n  }\n}\n@keyframes stepsFadeInLeft {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-75%, -50%);\n       -moz-transform : translate(-75%, -50%);\n         -o-transform : translate(-75%, -50%);\n            transform : translate(-75%, -50%);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : translate(-50%, -50%);\n       -moz-transform : translate(-50%, -50%);\n         -o-transform : translate(-50%, -50%);\n            transform : translate(-50%, -50%);\n  }\n}\n\n/* Steps Fade In Right */\n@-webkit-keyframes stepsFadeInRight {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-25%, -50%);\n            transform : translate(-25%, -50%);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : translate(-50%, -50%);\n            transform : translate(-50%, -50%);\n  }\n}\n@-moz-keyframes stepsFadeInRight {\n  from {\n    opacity : 0;\n    -moz-transform : translate(-25%, -50%);\n         transform : translate(-25%, -50%);\n  }\n  to {\n    opacity : 1;\n    -moz-transform : translate(-50%, -50%);\n         transform : translate(-50%, -50%);\n  }\n}\n@-o-keyframes stepsFadeInRight {\n  from {\n    opacity : 0;\n    -o-transform : translate(-25%, -50%);\n       transform : translate(-25%, -50%);\n  }\n  to {\n    opacity : 1;\n    -o-transform : translate(-50%, -50%);\n       transform : translate(-50%, -50%);\n  }\n}\n@keyframes stepsFadeInRight {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-25%, -50%);\n       -moz-transform : translate(-25%, -50%);\n         -o-transform : translate(-25%, -50%);\n            transform : translate(-25%, -50%);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : translate(-50%, -50%);\n       -moz-transform : translate(-50%, -50%);\n         -o-transform : translate(-50%, -50%);\n            transform : translate(-50%, -50%);\n  }\n}\n\n.textBgFadeInUp {\n  -webkit-animation-name : textBgFadeInUp;\n     -moz-animation-name : textBgFadeInUp;\n       -o-animation-name : textBgFadeInUp;\n          animation-name : textBgFadeInUp;\n}\n\n.textBgFadeInUpDark {\n  -webkit-animation-name : textBgFadeInUpDark;\n     -moz-animation-name : textBgFadeInUpDark;\n       -o-animation-name : textBgFadeInUpDark;\n          animation-name : textBgFadeInUpDark;\n}\n\n.textBgFadeInUp2 {\n  -webkit-animation-name : textBgFadeInUp2;\n     -moz-animation-name : textBgFadeInUp2;\n       -o-animation-name : textBgFadeInUp2;\n          animation-name : textBgFadeInUp2;\n}\n\n/* Text bg Fade In Up */\n@-webkit-keyframes textBgFadeInUp {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-50%, 200%);\n            transform : translate(-50%, 200%);\n  }\n  to {\n    opacity : 0.06;\n    -webkit-transform : translate(-50%, 0);\n            transform : translate(-50%, 0);\n  }\n}\n@-moz-keyframes textBgFadeInUp {\n  from {\n    opacity : 0;\n    -moz-transform : translate(-50%, 200%);\n         transform : translate(-50%, 200%);\n  }\n  to {\n    opacity : 0.06;\n    -moz-transform : translate(-50%, 0);\n         transform : translate(-50%, 0);\n  }\n}\n@-o-keyframes textBgFadeInUp {\n  from {\n    opacity : 0;\n    -o-transform : translate(-50%, 200%);\n       transform : translate(-50%, 200%);\n  }\n  to {\n    opacity : 0.06;\n    -o-transform : translate(-50%, 0);\n       transform : translate(-50%, 0);\n  }\n}\n@keyframes textBgFadeInUp {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-50%, 200%);\n       -moz-transform : translate(-50%, 200%);\n         -o-transform : translate(-50%, 200%);\n            transform : translate(-50%, 200%);\n  }\n  to {\n    opacity : 0.06;\n    -webkit-transform : translate(-50%, 0);\n       -moz-transform : translate(-50%, 0);\n         -o-transform : translate(-50%, 0);\n            transform : translate(-50%, 0);\n  }\n}\n\n/* Text bg Fade In Up Dark */\n@-webkit-keyframes textBgFadeInUpDark {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-50%, 200%);\n            transform : translate(-50%, 200%);\n  }\n  to {\n    opacity : 0.02;\n    -webkit-transform : translate(-50%, 0);\n            transform : translate(-50%, 0);\n  }\n}\n@-moz-keyframes textBgFadeInUpDark {\n  from {\n    opacity : 0;\n    -moz-transform : translate(-50%, 200%);\n         transform : translate(-50%, 200%);\n  }\n  to {\n    opacity : 0.02;\n    -moz-transform : translate(-50%, 0);\n         transform : translate(-50%, 0);\n  }\n}\n@-o-keyframes textBgFadeInUpDark {\n  from {\n    opacity : 0;\n    -o-transform : translate(-50%, 200%);\n       transform : translate(-50%, 200%);\n  }\n  to {\n    opacity : 0.02;\n    -o-transform : translate(-50%, 0);\n       transform : translate(-50%, 0);\n  }\n}\n@keyframes textBgFadeInUpDark {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-50%, 200%);\n       -moz-transform : translate(-50%, 200%);\n         -o-transform : translate(-50%, 200%);\n            transform : translate(-50%, 200%);\n  }\n  to {\n    opacity : 0.02;\n    -webkit-transform : translate(-50%, 0);\n       -moz-transform : translate(-50%, 0);\n         -o-transform : translate(-50%, 0);\n            transform : translate(-50%, 0);\n  }\n}\n\n/* Text bg Fade In Up 2 */\n@-webkit-keyframes textBgFadeInUp2 {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-50%, 200%);\n            transform : translate(-50%, 200%);\n  }\n  to {\n    opacity : 0.5;\n    -webkit-transform : translate(-50%, 0);\n            transform : translate(-50%, 0);\n  }\n}\n@-moz-keyframes textBgFadeInUp2 {\n  from {\n    opacity : 0;\n    -moz-transform : translate(-50%, 200%);\n         transform : translate(-50%, 200%);\n  }\n  to {\n    opacity : 0.5;\n    -moz-transform : translate(-50%, 0);\n         transform : translate(-50%, 0);\n  }\n}\n@-o-keyframes textBgFadeInUp2 {\n  from {\n    opacity : 0;\n    -o-transform : translate(-50%, 200%);\n       transform : translate(-50%, 200%);\n  }\n  to {\n    opacity : 0.5;\n    -o-transform : translate(-50%, 0);\n       transform : translate(-50%, 0);\n  }\n}\n@keyframes textBgFadeInUp2 {\n  from {\n    opacity : 0;\n    -webkit-transform : translate(-50%, 200%);\n       -moz-transform : translate(-50%, 200%);\n         -o-transform : translate(-50%, 200%);\n            transform : translate(-50%, 200%);\n  }\n  to {\n    opacity : 0.5;\n    -webkit-transform : translate(-50%, 0);\n       -moz-transform : translate(-50%, 0);\n         -o-transform : translate(-50%, 0);\n            transform : translate(-50%, 0);\n  }\n}\n\n.fadeInScale {\n  -webkit-animation-name : fadeInScale;\n     -moz-animation-name : fadeInScale;\n       -o-animation-name : fadeInScale;\n          animation-name : fadeInScale;\n}\n\n/* Fade In Scale */\n@-webkit-keyframes fadeInScale {\n  from {\n    opacity : 0;\n    -webkit-transform : scale(0.7);\n            transform : scale(0.7);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : scale(1);\n            transform : scale(1);\n  }\n}\n@-moz-keyframes fadeInScale {\n  from {\n    opacity : 0;\n    -moz-transform : scale(0.7);\n         transform : scale(0.7);\n  }\n  to {\n    opacity : 1;\n    -moz-transform : scale(1);\n         transform : scale(1);\n  }\n}\n@-o-keyframes fadeInScale {\n  from {\n    opacity : 0;\n    -o-transform : scale(0.7);\n       transform : scale(0.7);\n  }\n  to {\n    opacity : 1;\n    -o-transform : scale(1);\n       transform : scale(1);\n  }\n}\n@keyframes fadeInScale {\n  from {\n    opacity : 0;\n    -webkit-transform : scale(0.7);\n       -moz-transform : scale(0.7);\n         -o-transform : scale(0.7);\n            transform : scale(0.7);\n  }\n  to {\n    opacity : 1;\n    -webkit-transform : scale(1);\n       -moz-transform : scale(1);\n         -o-transform : scale(1);\n            transform : scale(1);\n  }\n}\n\n.scaleOut {\n  -webkit-animation-name : scaleOut;\n     -moz-animation-name : scaleOut;\n       -o-animation-name : scaleOut;\n          animation-name : scaleOut;\n}\n\n@-webkit-keyframes scaleOut {\n  from {\n    -webkit-transform : scale(1.1);\n            transform : scale(1.1);\n  }\n  to {\n    -webkit-transform : scale(1);\n            transform : scale(1);\n  }\n}\n\n@-moz-keyframes scaleOut {\n  from {\n    -moz-transform : scale(1.1);\n         transform : scale(1.1);\n  }\n  to {\n    -moz-transform : scale(1);\n         transform : scale(1);\n  }\n}\n\n@-o-keyframes scaleOut {\n  from {\n    -o-transform : scale(1.1);\n       transform : scale(1.1);\n  }\n  to {\n    -o-transform : scale(1);\n       transform : scale(1);\n  }\n}\n\n@keyframes scaleOut {\n  from {\n    -webkit-transform : scale(1.1);\n       -moz-transform : scale(1.1);\n         -o-transform : scale(1.1);\n            transform : scale(1.1);\n  }\n  to {\n    -webkit-transform : scale(1);\n       -moz-transform : scale(1);\n         -o-transform : scale(1);\n            transform : scale(1);\n  }\n}\n\n/*\tparticles position scss\n*   -------------------------------------------------------------------------------------------*/\n.particles-js-canvas-el {\n  position : absolute;\n  top : 0;\n  z-index : 1;\n  height : 100vh !important;\n}\n\n/*  Background ripple effect scss\n*   -------------------------------------------------------------------------------------------*/\n@-webkit-keyframes k1 {\n  0% {\n    -webkit-transform : scale(0.01);\n            transform : scale(0.01);\n    opacity : 0;\n  }\n  33% {\n    -webkit-transform : scale(0.4);\n            transform : scale(0.4);\n    opacity : 0.8;\n  }\n  100% {\n    -webkit-transform : scale(1);\n            transform : scale(1);\n    opacity : 0;\n  }\n}\n@-moz-keyframes k1 {\n  0% {\n    -moz-transform : scale(0.01);\n         transform : scale(0.01);\n    opacity : 0;\n  }\n  33% {\n    -moz-transform : scale(0.4);\n         transform : scale(0.4);\n    opacity : 0.8;\n  }\n  100% {\n    -moz-transform : scale(1);\n         transform : scale(1);\n    opacity : 0;\n  }\n}\n@-o-keyframes k1 {\n  0% {\n    -o-transform : scale(0.01);\n       transform : scale(0.01);\n    opacity : 0;\n  }\n  33% {\n    -o-transform : scale(0.4);\n       transform : scale(0.4);\n    opacity : 0.8;\n  }\n  100% {\n    -o-transform : scale(1);\n       transform : scale(1);\n    opacity : 0;\n  }\n}\n@keyframes k1 {\n  0% {\n    -webkit-transform : scale(0.01);\n       -moz-transform : scale(0.01);\n         -o-transform : scale(0.01);\n            transform : scale(0.01);\n    opacity : 0;\n  }\n  33% {\n    -webkit-transform : scale(0.4);\n       -moz-transform : scale(0.4);\n         -o-transform : scale(0.4);\n            transform : scale(0.4);\n    opacity : 0.8;\n  }\n  100% {\n    -webkit-transform : scale(1);\n       -moz-transform : scale(1);\n         -o-transform : scale(1);\n            transform : scale(1);\n    opacity : 0;\n  }\n}\n\n.bg-ripple-animation {\n  overflow : hidden;\n  position : absolute;\n  z-index : 1;\n  top : 0;\n  right : 0;\n  left : 0;\n  bottom : 0;\n}\n\n.left-bottom-ripples {\n  margin-bottom : -80vh;\n  margin-left : -80vh;\n  width : 160vh;\n  height : 160vh;\n  position : absolute;\n  left : 0;\n  bottom : 0;\n}\n\n.intro-video-bg-ripples {\n  margin-top : 21vh;\n  margin-left : -6vh;\n  width : 140vh;\n  height : 140vh;\n  position : absolute;\n  left : 0;\n}\n\n.top-right-ripples {\n  margin-top : -80vh;\n  margin-right : -80vh;\n  width : 160vh;\n  height : 160vh;\n  position : absolute;\n  top : 0;\n  right : 0;\n}\n\n.ripples {\n  width : 100%;\n  height : 100%;\n  text-align : center;\n}\n.ripples:before {\n  content : '';\n  position : absolute;\n  top : 0;\n  left : 0;\n  width : 100%;\n  height : 100%;\n  background : -webkit-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :    -moz-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :      -o-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :         radial-gradient(ellipse at center, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  border : 0.5px solid white;\n  border-radius : 50%;\n  opacity : 0;\n  -webkit-transform : scale(1);\n     -moz-transform : scale(1);\n      -ms-transform : scale(1);\n       -o-transform : scale(1);\n          transform : scale(1);\n  -webkit-animation-name : k1;\n     -moz-animation-name : k1;\n       -o-animation-name : k1;\n          animation-name : k1;\n  -webkit-animation-duration : 6s;\n     -moz-animation-duration : 6s;\n       -o-animation-duration : 6s;\n          animation-duration : 6s;\n  -webkit-animation-delay : 0s;\n     -moz-animation-delay : 0s;\n       -o-animation-delay : 0s;\n          animation-delay : 0s;\n  -webkit-animation-iteration-count : infinite;\n     -moz-animation-iteration-count : infinite;\n       -o-animation-iteration-count : infinite;\n          animation-iteration-count : infinite;\n  -webkit-animation-timing-function : linear;\n     -moz-animation-timing-function : linear;\n       -o-animation-timing-function : linear;\n          animation-timing-function : linear;\n}\n.ripples:after {\n  content : '';\n  position : absolute;\n  top : 0;\n  left : 0;\n  width : 100%;\n  height : 100%;\n  background : -webkit-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :    -moz-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :      -o-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :         radial-gradient(ellipse at center, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  border : 0.5px solid white;\n  border-radius : 50%;\n  opacity : 0;\n  -webkit-animation-name : k1;\n     -moz-animation-name : k1;\n       -o-animation-name : k1;\n          animation-name : k1;\n  -webkit-animation-duration : 6s;\n     -moz-animation-duration : 6s;\n       -o-animation-duration : 6s;\n          animation-duration : 6s;\n  -webkit-animation-delay : 3s;\n     -moz-animation-delay : 3s;\n       -o-animation-delay : 3s;\n          animation-delay : 3s;\n  -webkit-animation-iteration-count : infinite;\n     -moz-animation-iteration-count : infinite;\n       -o-animation-iteration-count : infinite;\n          animation-iteration-count : infinite;\n  -webkit-animation-timing-function : linear;\n     -moz-animation-timing-function : linear;\n       -o-animation-timing-function : linear;\n          animation-timing-function : linear;\n}\n\n/*\tModification of flipclock CSS\n* \t----------------------------------------------------------------------------------------------*/\n.clock-counter .flip-clock-divider {\n  width : 16px;\n}\n.clock-counter .flip-clock-divider:first-child {\n  width : 0;\n}\n.clock-counter .flip-clock-divider .flip-clock-label {\n  font-family : 'Comfortaa', 'Roboto', 'Helvetica Neue', Arial, sans-serif;\n  font-size : 0.875rem;\n  right : -70px;\n}\n.clock-counter .flip-clock-divider.minutes .flip-clock-label, .clock-counter .flip-clock-divider.seconds .flip-clock-label {\n  right : -80px;\n}\n\n.clock-counter .flip .inn {\n  font-family : 'Comfortaa', 'Roboto', 'Helvetica Neue', Arial, sans-serif;\n  font-size : 2rem;\n  font-weight : 600;\n}\n\n.clock-counter .flip-clock-wrapper ul {\n  width : 43px;\n  height : 65px;\n  background : #FFFFFF !important;\n}\n.clock-counter .flip-clock-wrapper ul li {\n  line-height : 4.5rem;\n}\n.clock-counter .flip-clock-wrapper ul li a {\n  color : #3F3F3F !important;\n}\n.clock-counter .flip-clock-wrapper ul li a div.up {\n  height : 52%;\n  top : -2px;\n}\n.clock-counter .flip-clock-wrapper ul li a div.up:after {\n  top : 32px;\n  height : 1px;\n  background-color : #000000 !important;\n  background-color : rgba(0, 0, 0, 0.4) !important;\n}\n.clock-counter .flip-clock-wrapper ul li a div.up div.inn {\n  text-shadow : 0 1px 2px #FFFFFF !important;\n  background-color : #FFFFFF !important;\n  color : #3F3F3F !important;\n}\n.clock-counter .flip-clock-wrapper ul li a div.down {\n  height : 51%;\n}\n.clock-counter .flip-clock-wrapper ul li a div.down div.inn {\n  text-shadow : 0 1px 2px #FFFFFF !important;\n  background-color : #FFFFFF !important;\n  color : #3F3F3F !important;\n}\n.clock-counter .flip-clock-wrapper ul.play li.flip-clock-before .up .shadow, .clock-counter .flip-clock-wrapper ul.play li.flip-clock-active .up .shadow {\n  background : transparent !important;\n  -webkit-animation : none !important;\n     -moz-animation : none !important;\n       -o-animation : none !important;\n          animation : none !important;\n}\n.clock-counter .flip-clock-wrapper ul.play li.flip-clock-before .down .shadow, .clock-counter .flip-clock-wrapper ul.play li.flip-clock-active .down .shadow {\n  background : transparent !important;\n  -webkit-animation : none !important;\n     -moz-animation : none !important;\n       -o-animation : none !important;\n          animation : none !important;\n}\n\n.clock-counter .flip-clock-wrapper .flip-clock-dot {\n  width : 7px;\n  height : 7px;\n}\n\n.clock-counter .flip-clock-wrapper .flip, .clock-counter .flip-clock-wrapper .flip-clock-dot {\n  background : #FFFFFF;\n  -webkit-box-shadow : 2px 1px 11px rgba(0, 0, 0, 0.37) !important;\n          box-shadow : 2px 1px 11px rgba(0, 0, 0, 0.37) !important;\n}\n.clock-counter .flip-clock-wrapper .flip.top, .clock-counter .flip-clock-wrapper .flip-clock-dot.top {\n  top : 24px;\n}\n.clock-counter .flip-clock-wrapper .flip.bottom, .clock-counter .flip-clock-wrapper .flip-clock-dot.bottom {\n  bottom : 48px;\n}\n\n.clock-counter .flip-clock-wrapper .flip-clock-meridium a {\n  color : #FFFFFF !important;\n}\n\n.clock-counter .flip-clock-wrapper .flip-clock-divider .flip-clock-label {\n  color : #FFFFFF !important;\n}\n\n/*  Sales Notification\n    -------------------------------------------------------------------------------------------*/\n.alert-minimalist {\n  background-color : white;\n  border-radius : 5px;\n  -webkit-box-shadow : 0 5px 40px rgba(14, 42, 76, 0.2);\n          box-shadow : 0 5px 40px rgba(14, 42, 76, 0.2);\n  padding : 10px;\n  width : 350px;\n  z-index : 2147483648 !important;\n}\n.alert-minimalist [data-notify='dismiss'] {\n  color : rgba(149, 149, 149, 0.7);\n}\n.alert-minimalist #image {\n  float : left;\n}\n.alert-minimalist #image [data-notify='icon'] {\n  height : 60px;\n  margin-right : 12px;\n}\n.alert-minimalist #text {\n  float : left;\n  margin-top : 2px;\n}\n.alert-minimalist #text [data-notify='title'] {\n  color : #333333;\n  line-height : 1rem;\n  display : block;\n  font-size : 85%;\n  font-weight : 700;\n}\n.alert-minimalist #text [data-notify='message'] {\n  font-size : 80%;\n}\n.alert-minimalist #text [data-notify='message'] span.blue {\n  color : #28BCFD;\n  font-weight : 700;\n}\n.alert-minimalist #text [data-notify='time'] {\n  display : block;\n  font-size : 70%;\n  color : rgba(149, 149, 149, 0.7);\n  margin-top : 4px;\n}\n\n/*  Vertical Social bar SCSS\n    -------------------------------------------------------------------------------------------*/\n.vertical-social {\n  z-index : 999;\n  top : 35% !important;\n  left : 2% !important;\n  width : 44px;\n  border-radius : 40px;\n  -webkit-box-shadow : 0 4px 13px 0 rgba(0, 0, 0, 0.4);\n          box-shadow : 0 4px 13px 0 rgba(0, 0, 0, 0.4);\n}\n.vertical-social .midnightHeader .midnightInner ul {\n  margin-bottom : 0;\n  padding : 14px 0 8px;\n}\n.vertical-social .midnightHeader .midnightInner ul li {\n  padding : 7px 0;\n  text-align : center;\n}\n.vertical-social .midnightHeader .midnightInner ul li a {\n  opacity : 0.6;\n  font-size : 22px;\n}\n.vertical-social .midnightHeader .midnightInner ul li a:hover {\n  text-decoration : none;\n  opacity : 1;\n}\n\n@media (max-width: 991.98px) {\n  .vertical-social {\n    display : none !important;\n  }\n}\n\n/*\tPage sections css\n* \t----------------------------------------------------------------------------------------------*/\n/* Navbar section : Navbar area css */\n.navbar {\n  padding : 0;\n}\n.navbar .navbar-brand {\n  font-size : 1.25rem;\n}\n.navbar .navbar-brand img {\n  margin-right : 0.65rem;\n}\n.navbar .navbar-brand .brand-text {\n  position : relative;\n  top : 2px;\n  font-weight : 300;\n  text-transform : uppercase;\n}\n.navbar.navbar-dark {\n  min-height : 65px;\n}\n.navbar.navbar-absolute {\n  position : absolute;\n  top : 0;\n  left : 0;\n  width : 100%;\n  z-index : 999;\n  background : transparent;\n  padding : 1.2rem 0;\n  -webkit-transition : all 0.5s ease;\n       -o-transition : all 0.5s ease;\n     -moz-transition : all 0.5s ease;\n          transition : all 0.5s ease;\n}\n.navbar ul.navbar-nav li .nav-link {\n  font-size : 0.8rem;\n  color : #FFFFFF;\n  font-weight : 700;\n  letter-spacing : 0.5px;\n  padding : 0.21rem 0.95rem;\n  text-decoration : none;\n}\n.navbar ul.navbar-nav li::last-child {\n  margin-right : 0.5rem;\n}\n.navbar .dropdown a {\n  font-size : 0.8rem;\n  color : #FFFFFF;\n  font-weight : 700;\n  text-decoration : none;\n  padding : 1.9rem 0.65rem;\n}\n.navbar .dropdown .dropdown-menu {\n  background-color : white;\n  margin-top : 1rem;\n  min-width : 200px;\n  border : none;\n}\n.navbar .dropdown .dropdown-menu a {\n  color : #3F3F3F;\n  padding : 0.5rem 0.75rem;\n}\n.navbar .dropdown .dropdown-menu a:before {\n  font-family : 'themify';\n  content : '\\e649';\n  padding-right : 0.5rem;\n  font-weight : 700;\n  font-size : 0.55rem;\n  -webkit-transition : all 0.5s ease;\n       -o-transition : all 0.5s ease;\n     -moz-transition : all 0.5s ease;\n          transition : all 0.5s ease;\n}\n.navbar .dropdown .dropdown-menu a.dropdown-item {\n  border : none;\n  -webkit-transition : all 0.5s ease;\n       -o-transition : all 0.5s ease;\n     -moz-transition : all 0.5s ease;\n          transition : all 0.5s ease;\n}\n.navbar .dropdown .dropdown-menu a.dropdown-item:hover, .navbar .dropdown .dropdown-menu a.dropdown-item:focus, .navbar .dropdown .dropdown-menu a.dropdown-item:active {\n  padding-left : 20px;\n  -webkit-transition : all 0.5s ease;\n       -o-transition : all 0.5s ease;\n     -moz-transition : all 0.5s ease;\n          transition : all 0.5s ease;\n  background-color : transparent;\n}\n.navbar .dropdown .dropdown-menu a.dropdown-item:hover:before, .navbar .dropdown .dropdown-menu a.dropdown-item:focus:before, .navbar .dropdown .dropdown-menu a.dropdown-item:active:before {\n  left : 10px;\n}\n.navbar .dropdown .dropdown-menu.show {\n  border : none;\n  -webkit-box-shadow : -1px 2px 25px 0 rgba(0, 0, 0, 0.09);\n          box-shadow : -1px 2px 25px 0 rgba(0, 0, 0, 0.09);\n}\n.navbar .dropdown .dropdown-menu.show:before {\n  float : right;\n  content : '';\n  border-bottom : 10px solid #FFFFFF;\n  border-left : 8px solid transparent;\n  border-right : 8px solid transparent;\n  position : absolute;\n  left : 13px;\n  top : -8px;\n}\n.navbar.navbar-light {\n  min-height : 65px;\n}\n.navbar.navbar-light a {\n  color : #3F3F3F;\n}\n.navbar.navbar-light a.btn {\n  color : #FFFFFF;\n}\n.navbar.navbar-light ul.navbar-nav li .nav-link {\n  color : #3F3F3F;\n}\n\n#navigation #slide-line {\n  position : absolute;\n  bottom : 0;\n  height : 4px;\n  -webkit-transition : all 0.3s ease;\n       -o-transition : all 0.3s ease;\n     -moz-transition : all 0.3s ease;\n          transition : all 0.3s ease;\n}\n\nheader .navbar.navbar-fixed {\n  background : -webkit-gradient(linear, left top, right top, from(#A34FFE), to(#5934FC));\n  background : -webkit-linear-gradient(left, #A34FFE, #5934FC);\n  background :    -moz-linear-gradient(left, #A34FFE, #5934FC);\n  background :      -o-linear-gradient(left, #A34FFE, #5934FC);\n  background :         linear-gradient(to right, #A34FFE, #5934FC);\n  padding : 0.75rem 0;\n}\n\nheader .navbar.navbar-shadow {\n  -webkit-box-shadow : 0 5px 40px rgba(14, 42, 76, 0.2);\n          box-shadow : 0 5px 40px rgba(14, 42, 76, 0.2);\n}\n\n/* Medium devices (tablets, 768px and up) */\n@media (max-width: 1199.98px) {\n  .navbar ul.navbar-nav li .nav-link {\n    padding-left : 0.55rem;\n    padding-right : 0.55rem;\n  }\n}\n\n/* Responsive navbar for medium and small screen */\n@media (max-width: 991.98px) {\n  .main-menu.navbar .dropdown-menu.show:before {\n    display : none;\n  }\n  .main-menu.navbar a.navbar-brand {\n    padding : 0.21rem 1rem;\n  }\n  .main-menu.navbar .navbar-toggler {\n    margin-right : 1rem;\n    border-color : rgba(255, 255, 255, 0.7);\n  }\n  .main-menu.navbar div.navbar-nav {\n    padding : 1rem 1.5rem;\n  }\n  .main-menu.navbar div.navbar-nav .dropdown {\n    padding : 0 !important;\n  }\n  .main-menu.navbar div.navbar-nav .nav-link {\n    padding : 0.40rem 0.65rem;\n  }\n}\n\n/* Counter header section : Head area css */\n.head-area {\n  position : relative;\n}\n.head-area .head-content {\n  height : 100vh;\n  color : #FFFFFF;\n  z-index : 6;\n  padding-top : 5.125rem;\n  /*background : -webkit-gradient(linear, left top, right top, from(#A34FFE), to(#5934FC));*/\n  /*background : -webkit-linear-gradient(left, #A34FFE, #5934FC);*/\n  /*background :    -moz-linear-gradient(left, #A34FFE, #5934FC);*/\n  /*background :      -o-linear-gradient(left, #A34FFE, #5934FC);*/\n  /*background :         linear-gradient(to right, #A34FFE, #5934FC);*/\n}\n/*.head-area .head-content::after {*/\n/*  content : '';*/\n/*  background : url('/images/counter/banner-shape.png') no-repeat center right;*/\n/*  height : 436px;*/\n/*  width : 899px;*/\n/*  position : absolute;*/\n/*  right : 0;*/\n/*  top : 30%;*/\n/*}*/\n.head-area .head-content .container {\n  z-index : 9;\n}\n.head-area .head-content h1 {\n  color : #FFFFFF;\n  font-size : 2.8125rem;\n  font-weight : 700;\n}\n.head-area .head-content h3 {\n  font-weight : 300;\n  color : #FFFFFF;\n  font-size : 2rem;\n}\n.head-area .head-content h3 strong {\n  font-weight : 700;\n}\n.head-area .head-content ul.crypto-links {\n  padding-top : 0.8rem;\n}\n.head-area .head-content ul.crypto-links li {\n  display : inline;\n  padding : 0 0.6rem;\n}\n.head-area .head-content .progress {\n  background : #FFFFFF;\n  border : 4px solid #FFFFFF;\n  border-radius : 1rem;\n  height : 1.875rem;\n  overflow : initial;\n}\n.head-area .head-content .progress-bar-custom {\n  background : #FFFFFF;\n  border-radius : 1rem;\n  height : 1.36rem;\n  background : -webkit-gradient(linear, left top, right top, from(#FF4137), to(#FDC800));\n  background : -webkit-linear-gradient(left, #FF4137, #FDC800);\n  background :    -moz-linear-gradient(left, #FF4137, #FDC800);\n  background :      -o-linear-gradient(left, #FF4137, #FDC800);\n  background :         linear-gradient(to right, #FF4137, #FDC800);\n  -webkit-box-shadow : 2px 0 7px 0 rgba(0, 0, 0, 0.35);\n          box-shadow : 2px 0 7px 0 rgba(0, 0, 0, 0.35);\n}\n.head-area .head-content .progress-top {\n  position : absolute;\n  top : 0.8rem;\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-align : stretch;\n  -webkit-align-items : stretch;\n     -moz-box-align : stretch;\n  -ms-flex-align : stretch;\n          align-items : stretch;\n  /* Default */\n  -webkit-box-pack : justify;\n  -webkit-justify-content : space-between;\n     -moz-box-pack : justify;\n  -ms-flex-pack : justify;\n          justify-content : space-between;\n  width : 100%;\n  color : #FFFFFF;\n  padding : 0 1rem;\n}\n.head-area .head-content .progress-top li {\n  display : block;\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 1 auto;\n     -moz-box-flex : 0;\n      -ms-flex : 0 1 auto;\n          flex : 0 1 auto;\n  /* Default */\n}\n.head-area .head-content .progress-top li.pre-sale {\n  position : relative;\n  left : 1rem;\n}\n.head-area .head-content .progress-top li.bonus {\n  position : relative;\n  right : 1rem;\n}\n.head-area .head-content .progress-bars {\n  position : absolute;\n  top : 1.9rem;\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-align : stretch;\n  -webkit-align-items : stretch;\n     -moz-box-align : stretch;\n  -ms-flex-align : stretch;\n          align-items : stretch;\n  /* Default */\n  -webkit-box-pack : justify;\n  -webkit-justify-content : space-between;\n     -moz-box-pack : justify;\n  -ms-flex-pack : justify;\n          justify-content : space-between;\n  width : 100%;\n  color : #FFFFFF;\n  padding : 0 1rem;\n}\n.head-area .head-content .progress-bars li {\n  display : block;\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 1 auto;\n     -moz-box-flex : 0;\n      -ms-flex : 0 1 auto;\n          flex : 0 1 auto;\n  /* Default */\n}\n.head-area .head-content .progress-bottom {\n  position : absolute;\n  bottom : 0.8rem;\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  color : #FFFFFF;\n  -webkit-box-align : stretch;\n  -webkit-align-items : stretch;\n     -moz-box-align : stretch;\n  -ms-flex-align : stretch;\n          align-items : stretch;\n  /* Default */\n  -webkit-box-pack : justify;\n  -webkit-justify-content : space-between;\n     -moz-box-pack : justify;\n  -ms-flex-pack : justify;\n          justify-content : space-between;\n  width : 100%;\n  padding : 0 1rem;\n}\n.head-area .head-content .progress-bottom .progress-info {\n  display : block;\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 1 auto;\n     -moz-box-flex : 0;\n      -ms-flex : 0 1 auto;\n          flex : 0 1 auto;\n}\n.head-area .logo-wrapper {\n  overflow : hidden;\n  width : 25.35rem;\n  height : 25.35rem;\n  background-color : #FFFFFF;\n  border-radius : 20rem;\n}\n.head-area .logo-wrapper .crypto-logo {\n  z-index : 1;\n  position : relative;\n  width : 22.87rem;\n  height : 22.87rem;\n  background : -webkit-radial-gradient(circle, #FDC800, #FF4137);\n  background :    -moz-radial-gradient(circle, #FDC800, #FF4137);\n  background :      -o-radial-gradient(circle, #FDC800, #FF4137);\n  background :         radial-gradient(circle, #FDC800, #FF4137);\n  top : 1.25rem;\n  left : -1.75rem;\n  border-radius : 20rem;\n  -webkit-box-shadow : -2px 3px 26px 0 #FF4137;\n          box-shadow : -2px 3px 26px 0 #FF4137;\n}\n.head-area .logo-wrapper .crypto-logo .crypto-logo-img {\n  position : absolute;\n  left : 9%;\n  top : 18%;\n}\n.head-area #ripple, .head-area #ripple2, .head-area #ripple3 {\n  border-radius : 9999px;\n  border : 1px solid rgba(255, 255, 255, 0.4);\n  -webkit-box-shadow : 0 0 20px rgba(255, 255, 255, 0.4);\n          box-shadow : 0 0 20px rgba(255, 255, 255, 0.4);\n  position : absolute;\n  bottom : 50%;\n  margin-bottom : -326px;\n  right : 50%;\n  margin-right : -326px;\n  -webkit-animation : shrink 5s linear infinite;\n     -moz-animation : shrink 5s linear infinite;\n       -o-animation : shrink 5s linear infinite;\n          animation : shrink 5s linear infinite;\n  z-index : 0;\n  background : rgba(255, 255, 255, 0.4);\n}\n.head-area #ripple {\n  -webkit-animation-delay : 1s;\n     -moz-animation-delay : 1s;\n       -o-animation-delay : 1s;\n          animation-delay : 1s;\n}\n.head-area #ripple2 {\n  -webkit-animation-delay : 1.5s;\n     -moz-animation-delay : 1.5s;\n       -o-animation-delay : 1.5s;\n          animation-delay : 1.5s;\n}\n.head-area #ripple3 {\n  -webkit-animation-delay : 2s;\n     -moz-animation-delay : 2s;\n       -o-animation-delay : 2s;\n          animation-delay : 2s;\n}\n\n@-webkit-keyframes shrink {\n  0% {\n    margin-bottom : 0;\n    margin-right : 0;\n    width : 0;\n    height : 0;\n    opacity : 0;\n  }\n  10% {\n    opacity : 0.5;\n  }\n  30% {\n    opacity : 0.3;\n  }\n  60% {\n    opacity : 0;\n  }\n  100% {\n    margin-bottom : -326px;\n    margin-right : -326px;\n    width : 650px;\n    height : 650px;\n    opacity : 0;\n  }\n}\n\n@-moz-keyframes shrink {\n  0% {\n    margin-bottom : 0;\n    margin-right : 0;\n    width : 0;\n    height : 0;\n    opacity : 0;\n  }\n  10% {\n    opacity : 0.5;\n  }\n  30% {\n    opacity : 0.3;\n  }\n  60% {\n    opacity : 0;\n  }\n  100% {\n    margin-bottom : -326px;\n    margin-right : -326px;\n    width : 650px;\n    height : 650px;\n    opacity : 0;\n  }\n}\n\n@-o-keyframes shrink {\n  0% {\n    margin-bottom : 0;\n    margin-right : 0;\n    width : 0;\n    height : 0;\n    opacity : 0;\n  }\n  10% {\n    opacity : 0.5;\n  }\n  30% {\n    opacity : 0.3;\n  }\n  60% {\n    opacity : 0;\n  }\n  100% {\n    margin-bottom : -326px;\n    margin-right : -326px;\n    width : 650px;\n    height : 650px;\n    opacity : 0;\n  }\n}\n\n@keyframes shrink {\n  0% {\n    margin-bottom : 0;\n    margin-right : 0;\n    width : 0;\n    height : 0;\n    opacity : 0;\n  }\n  10% {\n    opacity : 0.5;\n  }\n  30% {\n    opacity : 0.3;\n  }\n  60% {\n    opacity : 0;\n  }\n  100% {\n    margin-bottom : -326px;\n    margin-right : -326px;\n    width : 650px;\n    height : 650px;\n    opacity : 0;\n  }\n}\n.head-area .pulse2 {\n  -webkit-animation : pulse2 5s linear infinite;\n     -moz-animation : pulse2 5s linear infinite;\n       -o-animation : pulse2 5s linear infinite;\n          animation : pulse2 5s linear infinite;\n}\n\n@-webkit-keyframes pulse2 {\n  0% {\n    -webkit-transform : scale(0.8);\n            transform : scale(0.8);\n  }\n  20% {\n    -webkit-transform : scale(0.8);\n            transform : scale(0.8);\n  }\n  60% {\n    -webkit-transform : scale(1);\n            transform : scale(1);\n  }\n  80% {\n    -webkit-transform : scale(1);\n            transform : scale(1);\n  }\n  100% {\n    -webkit-transform : scale(0.8);\n            transform : scale(0.8);\n  }\n}\n\n@-moz-keyframes pulse2 {\n  0% {\n    -moz-transform : scale(0.8);\n         transform : scale(0.8);\n  }\n  20% {\n    -moz-transform : scale(0.8);\n         transform : scale(0.8);\n  }\n  60% {\n    -moz-transform : scale(1);\n         transform : scale(1);\n  }\n  80% {\n    -moz-transform : scale(1);\n         transform : scale(1);\n  }\n  100% {\n    -moz-transform : scale(0.8);\n         transform : scale(0.8);\n  }\n}\n\n@-o-keyframes pulse2 {\n  0% {\n    -o-transform : scale(0.8);\n       transform : scale(0.8);\n  }\n  20% {\n    -o-transform : scale(0.8);\n       transform : scale(0.8);\n  }\n  60% {\n    -o-transform : scale(1);\n       transform : scale(1);\n  }\n  80% {\n    -o-transform : scale(1);\n       transform : scale(1);\n  }\n  100% {\n    -o-transform : scale(0.8);\n       transform : scale(0.8);\n  }\n}\n\n@keyframes pulse2 {\n  0% {\n    -webkit-transform : scale(0.8);\n       -moz-transform : scale(0.8);\n         -o-transform : scale(0.8);\n            transform : scale(0.8);\n  }\n  20% {\n    -webkit-transform : scale(0.8);\n       -moz-transform : scale(0.8);\n         -o-transform : scale(0.8);\n            transform : scale(0.8);\n  }\n  60% {\n    -webkit-transform : scale(1);\n       -moz-transform : scale(1);\n         -o-transform : scale(1);\n            transform : scale(1);\n  }\n  80% {\n    -webkit-transform : scale(1);\n       -moz-transform : scale(1);\n         -o-transform : scale(1);\n            transform : scale(1);\n  }\n  100% {\n    -webkit-transform : scale(0.8);\n       -moz-transform : scale(0.8);\n         -o-transform : scale(0.8);\n            transform : scale(0.8);\n  }\n}\n\n/* \tAbout section : about content, image and play button css */\n.about .content-area h4 {\n  color : #3F3F3F;\n}\n\n.about .content-area h6 {\n  color : #3F3F3F;\n  font-size : 1.125rem;\n  line-height : 1.5rem;\n}\n\n.about .content-area .play-video {\n  position : absolute;\n  top : 78%;\n  left : 53%;\n  -webkit-transform : translate(-70%, -50%);\n     -moz-transform : translate(-70%, -50%);\n      -ms-transform : translate(-70%, -50%);\n       -o-transform : translate(-70%, -50%);\n          transform : translate(-70%, -50%);\n}\n.about .content-area .play-video .play {\n  padding : 1.125rem 1.1rem;\n  display : inline-block;\n  height : 72px;\n  width : 72px;\n}\n.about .content-area .play-video .play:hover {\n  text-decoration : none;\n}\n.about .content-area .play-video .play i {\n  font-size : 2rem;\n}\n.about .content-area .play-video span {\n  display : block;\n  color : #7D7D7D;\n  font-size : 0.875rem;\n}\n\n/* \tExchange Listing section : Listing title & content css */\n.exchange-listing .listing {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-align : stretch;\n  -webkit-align-items : stretch;\n     -moz-box-align : stretch;\n  -ms-flex-align : stretch;\n          align-items : stretch;\n}\n.exchange-listing .listing .col {\n  margin : 1.75rem 0 0.95rem;\n  font-weight : 600;\n  padding-top : 0.25rem;\n  text-align : center;\n}\n.exchange-listing .listing .col:before {\n  content : '';\n  border-left : 1px solid #C2C2C2;\n  height : 4rem;\n  float : left;\n  position : relative;\n  top : 5px;\n  left : -15px;\n}\n.exchange-listing .listing .col:first-child:before {\n  border-left : none;\n}\n.exchange-listing .listing .col h2 {\n  font-size : 2rem;\n  font-weight : 600;\n  color : #3F3F3F;\n}\n\n@media (max-width: 991.98px) {\n  .exchange-listing .listing .col:nth-child(2):before {\n    border-left : none;\n  }\n}\n\n@media (max-width: 575.98px) {\n  .exchange-listing .listing .col:nth-child(4):before {\n    border-left : none;\n  }\n}\n\n/* header section type 1 : All page section heading with title, sub-title and desc */\n/* Heading section for whole page */\n.section-padding {\n  padding-top : 6.5rem;\n  padding-bottom : 6.5rem;\n}\n\n.heading {\n  margin-bottom : 6rem;\n  /* Main Title */\n  /* Sub Title */\n  /* Section description */\n  /* Saperator of the section */\n}\n.heading .title {\n  color : #161616;\n  padding-top : 1rem;\n  margin-bottom : 0;\n}\n.heading .sub-title {\n  font-size : 1rem;\n  color : #161616;\n  font-weight : 700;\n}\n.heading .content-desc {\n  margin-top : 1.5rem;\n}\n.heading .separator span {\n  display : inline-block;\n  height : 7px;\n  border-radius : 1rem;\n  background-color : #EEECF4;\n}\n.heading .separator span.large {\n  width : 70px;\n}\n.heading .separator span.medium {\n  width : 30px;\n}\n.heading .separator span.small {\n  width : 7px;\n}\n\n/* Whitepaper section : Whitepaper language image and text */\n.whitepaper .content-title {\n  color : #3F3F3F;\n}\n\n.whitepaper .whitepaper-languages a:hover {\n  text-decoration : none;\n}\n\n.whitepaper .whitepaper-languages img {\n  border : 8px solid white;\n  border-radius : 50%;\n  -webkit-box-shadow : 0 0 20px 0 rgba(103, 103, 103, 0.5);\n          box-shadow : 0 0 20px 0 rgba(103, 103, 103, 0.5);\n}\n\n.whitepaper .whitepaper-languages .lang-text {\n  margin-top : 1rem;\n}\n.whitepaper .whitepaper-languages .lang-text .icon {\n  color : #5934FC;\n}\n.whitepaper .whitepaper-languages .lang-text .language {\n  font-size : 0.875rem;\n  color : #3F3F3F;\n}\n\n/* Roadmap section : Roadmap active area, buttons, and content */\n.roadmap .roadmap-container {\n  position : relative;\n}\n\n.roadmap .swiper-container {\n  width : 90%;\n  height : 100%;\n}\n\n.roadmap .swiper-slide {\n  text-align : center;\n  font-size : 18px;\n  width : 200px;\n  border-top : 4px solid #683AF4;\n}\n.roadmap .swiper-slide .roadmap-info {\n  margin-top : 47px;\n}\n.roadmap .swiper-slide.active .roadmap-info {\n  background : -webkit-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :    -moz-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :      -o-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :         linear-gradient(45deg, #A34FFE, #5934FC);\n  margin-top : 32px;\n  padding : 15px 0 0;\n  color : white;\n  border-radius : 6px;\n  -webkit-box-shadow : 0 10px 30px 0 rgba(62, 57, 107, 0.3);\n          box-shadow : 0 10px 30px 0 rgba(62, 57, 107, 0.3);\n}\n.roadmap .swiper-slide.active .roadmap-info:after {\n  content : '';\n  display : block;\n  position : absolute;\n  top : 12px;\n  left : 44%;\n  bottom : 100%;\n  width : 0;\n  height : 0;\n  border-bottom : 10px solid #5934FC;\n  border-top : 10px solid transparent;\n  border-left : 10px solid transparent;\n  border-right : 10px solid transparent;\n}\n.roadmap .swiper-slide.active .live {\n  display : block;\n  background : -webkit-linear-gradient(45deg, #FF4137, #FDC800);\n  background :    -moz-linear-gradient(45deg, #FF4137, #FDC800);\n  background :      -o-linear-gradient(45deg, #FF4137, #FDC800);\n  background :         linear-gradient(45deg, #FF4137, #FDC800);\n  padding : 8px 0;\n  border-radius : 0 0 6px 6px;\n  margin-top : 10px;\n}\n\n.roadmap .swiper.control {\n  position : absolute;\n}\n\n.roadmap .next-slide, .roadmap .prev-slide {\n  position : absolute;\n  top : 0;\n  display : inline-block;\n  cursor : pointer;\n  background : -webkit-linear-gradient(45deg, #FF4137, #FDC800);\n  background :    -moz-linear-gradient(45deg, #FF4137, #FDC800);\n  background :      -o-linear-gradient(45deg, #FF4137, #FDC800);\n  background :         linear-gradient(45deg, #FF4137, #FDC800);\n  color : #FFFFFF;\n  padding : 17px;\n  border-radius : 50%;\n  -webkit-box-shadow : 0 0 6px 0 rgba(255, 95, 43, 0.6);\n          box-shadow : 0 0 6px 0 rgba(255, 95, 43, 0.6);\n  z-index : 9;\n}\n.roadmap .next-slide:focus, .roadmap .prev-slide:focus {\n  outline : none;\n}\n\n.roadmap .next-slide {\n  right : 22px;\n}\n.roadmap .next-slide:before {\n  content : '\\e649';\n  font-family : themify;\n  position : absolute;\n  top : 5px;\n  left : 10px;\n}\n\n.roadmap .prev-slide {\n  left : 22px;\n}\n.roadmap .prev-slide:before {\n  content : '\\e64a';\n  font-family : themify;\n  position : absolute;\n  top : 5px;\n  left : 8px;\n}\n\n.roadmap .timeline {\n  margin : 1rem 0 2rem 0;\n  list-style-type : none;\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  padding : 0;\n  text-align : center;\n}\n\n.roadmap .timestamp {\n  margin-bottom : 10px;\n  color : #3F3F3F;\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-orient : vertical;\n  -webkit-box-direction : normal;\n  -webkit-flex-direction : column;\n     -moz-box-orient : vertical;\n     -moz-box-direction : normal;\n      -ms-flex-direction : column;\n          flex-direction : column;\n  -webkit-box-align : center;\n  -webkit-align-items : center;\n     -moz-box-align : center;\n  -ms-flex-align : center;\n          align-items : center;\n  font-weight : 100;\n}\n.roadmap .timestamp span {\n  font-weight : 700;\n  font-size : 0.875rem;\n  line-height : 1.5rem;\n}\n.roadmap .timestamp span:before {\n  content : '';\n  width : 25px;\n  height : 25px;\n  background-color : white;\n  border-radius : 25px;\n  background : -webkit-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :    -moz-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :      -o-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :         linear-gradient(45deg, #A34FFE, #5934FC);\n  border : none;\n  position : absolute;\n  top : -14px;\n  left : 42%;\n  -webkit-transition : all 200ms ease-in;\n       -o-transition : all 200ms ease-in;\n     -moz-transition : all 200ms ease-in;\n          transition : all 200ms ease-in;\n}\n.roadmap .timestamp span:after {\n  content : '';\n  width : 11px;\n  height : 11px;\n  background-color : white;\n  border-radius : 25px;\n  position : absolute;\n  top : -7px;\n  left : 45.4%;\n  -webkit-transition : all 200ms ease-in;\n       -o-transition : all 200ms ease-in;\n     -moz-transition : all 200ms ease-in;\n          transition : all 200ms ease-in;\n}\n.roadmap .timestamp.completed span:before {\n  content : '\\e64c';\n  font-family : themify;\n  color : white;\n  font-size : 0.75rem;\n  line-height : 25px;\n  background : -webkit-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :    -moz-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :      -o-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :         linear-gradient(45deg, #A34FFE, #5934FC);\n  border : none;\n  color : #FFFFFF;\n}\n.roadmap .timestamp.completed span:after {\n  content : '';\n  background-color : transparent;\n}\n.roadmap .timestamp.active span {\n  color : #FFFFFF;\n}\n.roadmap .timestamp.active span:before {\n  content : ' ';\n  background : -webkit-linear-gradient(45deg, #FF4137, #FDC800);\n  background :    -moz-linear-gradient(45deg, #FF4137, #FDC800);\n  background :      -o-linear-gradient(45deg, #FF4137, #FDC800);\n  background :         linear-gradient(45deg, #FF4137, #FDC800);\n  border : none;\n  -webkit-box-shadow : 0 0 10px 0 #FF4137;\n          box-shadow : 0 0 10px 0 #FF4137;\n}\n.roadmap .timestamp.active span:after {\n  content : '';\n  position : absolute;\n  top : -8px;\n  left : 45.1%;\n  background : #FFFFFF;\n  border : 6px solid #FFFFFF;\n  border-radius : 50%;\n}\n\n.roadmap .status {\n  position : relative;\n  -webkit-transition : all 200ms ease-in;\n       -o-transition : all 200ms ease-in;\n     -moz-transition : all 200ms ease-in;\n          transition : all 200ms ease-in;\n  line-height : 0;\n}\n.roadmap .status span {\n  font-size : 0.875rem;\n  line-height : 1.5rem;\n  color : #7D7D7D;\n}\n.roadmap .status.active span {\n  color : #FFFFFF;\n}\n\n/* Team section : Team & Advisor section with team image and description */\n.team .team-width span {\n  display : block;\n  font-size : 2rem;\n  font-weight : 700;\n  color : #3F3F3F;\n}\n\n.team .team-img {\n  padding : 7px;\n  border-radius : 50%;\n  cursor : pointer;\n  background : -webkit-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :    -moz-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :      -o-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :         linear-gradient(45deg, #A34FFE, #5934FC);\n  -webkit-box-shadow : 0 0 12px 0 #A34FFE;\n          box-shadow : 0 0 12px 0 #A34FFE;\n  position : relative;\n  z-index : 1;\n}\n.team .team-img:hover {\n  -webkit-box-shadow : 0 0 12px 0 #FF4137;\n          box-shadow : 0 0 12px 0 #FF4137;\n  background : -webkit-linear-gradient(45deg, #FF4137, #FDC800);\n  background :    -moz-linear-gradient(45deg, #FF4137, #FDC800);\n  background :      -o-linear-gradient(45deg, #FF4137, #FDC800);\n  background :         linear-gradient(45deg, #FF4137, #FDC800);\n}\n.team .team-img:hover:before {\n  border-image-source : linear-gradient(to top, #FF4137, #FDC800);\n  -webkit-transform : rotate(55deg);\n     -moz-transform : rotate(55deg);\n      -ms-transform : rotate(55deg);\n       -o-transform : rotate(55deg);\n          transform : rotate(55deg);\n}\n.team .team-img:hover ~ .team-icon {\n  background : -webkit-linear-gradient(45deg, #FF4137, #FDC800);\n  background :    -moz-linear-gradient(45deg, #FF4137, #FDC800);\n  background :      -o-linear-gradient(45deg, #FF4137, #FDC800);\n  background :         linear-gradient(45deg, #FF4137, #FDC800);\n}\n.team .team-img img {\n  border : 5px solid #FFFFFF;\n}\n.team .team-img:before {\n  content : '';\n  position : absolute;\n  height : 200px;\n  top : -28px;\n  left : 50%;\n  z-index : -1;\n  -webkit-transform : rotate(45deg);\n     -moz-transform : rotate(45deg);\n      -ms-transform : rotate(45deg);\n       -o-transform : rotate(45deg);\n          transform : rotate(45deg);\n  border-right : 3px solid #A34FFE;\n  border-image-source : linear-gradient(to top, #A34FFE, #5934FC);\n  border-image-slice : 0.5;\n  -webkit-transition-property : -webkit-transform;\n          transition-property : -webkit-transform;\n       -o-transition-property :      -o-transform;\n     -moz-transition-property :         transform, -moz-transform;\n          transition-property :         transform;\n          transition-property :         transform, -webkit-transform, -moz-transform, -o-transform;\n  -webkit-transition-duration : 0.5s;\n     -moz-transition-duration : 0.5s;\n       -o-transition-duration : 0.5s;\n          transition-duration : 0.5s;\n}\n\n.team .team-icon {\n  position : absolute;\n  left : 135px;\n  bottom : 25%;\n  z-index : 1;\n  border-radius : 50%;\n  background : -webkit-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :    -moz-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :      -o-linear-gradient(45deg, #A34FFE, #5934FC);\n  background :         linear-gradient(45deg, #A34FFE, #5934FC);\n  padding : 0.2rem 0.1rem 0.017rem 0.17rem;\n}\n.team .team-icon i {\n  background : #FFFFFF;\n  padding : 0.25rem 0.3rem;\n  border-radius : 50%;\n  font-size : 0.875rem;\n}\n\n.team .profile .name {\n  font-size : 1.125rem;\n  font-weight : 700;\n  color : #3F3F3F;\n}\n\n.team .profile .role {\n  font-size : 0.875rem;\n  color : #7D7D7D;\n}\n\n.team .profile img {\n  height : 40px;\n  left : -10px;\n  position : relative;\n}\n\n.team .profile .social-profile a {\n  text-decoration : none;\n  font-size : 1.125rem;\n  color : #3F3F3F;\n}\n\n/* Team modal popup scss */\n.team-modal {\n  background : -webkit-linear-gradient(45deg, rgba(163, 79, 254, 0.85), rgba(89, 52, 252, 0.85));\n  background :    -moz-linear-gradient(45deg, rgba(163, 79, 254, 0.85), rgba(89, 52, 252, 0.85));\n  background :      -o-linear-gradient(45deg, rgba(163, 79, 254, 0.85), rgba(89, 52, 252, 0.85));\n  background :         linear-gradient(45deg, rgba(163, 79, 254, 0.85), rgba(89, 52, 252, 0.85));\n}\n.team-modal .close {\n  position : absolute;\n  right : 1rem;\n  top : 1rem;\n  z-index : 9;\n}\n.team-modal .progress {\n  height : 6px;\n}\n\n/* FAQ section : FAQ navs with questions/answers accordion */\n.faq .nav.nav-underline {\n  border-bottom : 1px solid #EEECF4;\n}\n.faq .nav.nav-underline a {\n  color : #3F3F3F;\n  font-size : 1.125rem;\n  font-weight : 700;\n  background : transparent;\n  text-align : center;\n  -webkit-box-flex : 1;\n  -webkit-flex : 1;\n     -moz-box-flex : 1;\n      -ms-flex : 1;\n          flex : 1;\n}\n.faq .nav.nav-underline a.nav-item.nav-link.active {\n  color : #3F3F3F;\n  border : none;\n  background-color : transparent;\n  border-bottom : 4px solid #7240A5;\n  border-radius : 0;\n  margin-bottom : -2px;\n}\n\n.faq .tab-content .card {\n  margin-bottom : 0.75rem;\n  border : 1px solid #EEECF4;\n  border-radius : 0.5rem;\n}\n.faq .tab-content .card .card-header {\n  background-color : transparent;\n  border-bottom : none;\n  padding : 0.6rem;\n  text-decoration : none;\n}\n.faq .tab-content .card .card-header .btn-link {\n  font-weight : 700;\n  margin : 6px 2.25rem 0 2.9rem;\n  padding : 0.375rem 0.75rem;\n  text-align : left;\n  white-space : unset;\n  display : inline-block;\n  font-size : 1rem;\n  line-height : 1.5;\n  cursor : pointer;\n}\n.faq .tab-content .card .card-header .btn-link:hover, .faq .tab-content .card .card-header .btn-link:focus, .faq .tab-content .card .card-header .btn-link:active {\n  text-decoration : none;\n}\n.faq .tab-content .card .card-body {\n  color : #7D7D7D;\n  font-weight : 700;\n  font-size : 0.875rem;\n  padding-top : 0.75rem;\n}\n\n.faq .collapse-icon .card-header {\n  position : relative;\n}\n\n.faq .collapse-icon a[data-toggle='collapse']:after, .faq .collapse-icon a[data-toggle='collapse']:before {\n  position : absolute;\n  top : 40%;\n  right : 20px;\n  margin-top : -8px;\n  font-family : 'themify';\n  -webkit-transition : all 300ms linear 0s;\n       -o-transition : all 300ms linear 0s;\n     -moz-transition : all 300ms linear 0s;\n          transition : all 300ms linear 0s;\n  font-size : clac(0.65rem);\n  background-image : -webkit-gradient(linear, left top, right top, from(#FF4137), to(#FDC800));\n  background-image : -webkit-linear-gradient(left, #FF4137, #FDC800);\n  background-image :    -moz-linear-gradient(left, #FF4137, #FDC800);\n  background-image :      -o-linear-gradient(left, #FF4137, #FDC800);\n  background-image :         linear-gradient(90deg, #FF4137, #FDC800);\n  -webkit-background-clip : text;\n          background-clip : text;\n  text-fill-color : transparent;\n}\n\n.faq .collapse-icon a[data-toggle='collapse']:after {\n  content : '\\e648';\n}\n\n.faq .collapse-icon a[data-toggle='collapse']:before {\n  content : '\\e64b';\n}\n\n.faq .collapse-icon a[data-toggle='collapse'] .icon {\n  float : left;\n  margin-top : 1px;\n}\n.faq .collapse-icon a[data-toggle='collapse'] .icon:after, .faq .collapse-icon a[data-toggle='collapse'] .icon:before {\n  position : absolute;\n  top : 40%;\n  left : 20px;\n  margin-top : -8px;\n  font-family : 'themify';\n  font-size : 0.65rem;\n  -webkit-transition : all 300ms linear 0s;\n       -o-transition : all 300ms linear 0s;\n     -moz-transition : all 300ms linear 0s;\n          transition : all 300ms linear 0s;\n  background-image : -webkit-linear-gradient(45deg, #FF4137, #FDC800);\n  background-image :    -moz-linear-gradient(45deg, #FF4137, #FDC800);\n  background-image :      -o-linear-gradient(45deg, #FF4137, #FDC800);\n  background-image :         linear-gradient(45deg, #FF4137, #FDC800);\n  background-repeat : repeat-x;\n  border : 0;\n  color : #FFFFFF;\n  padding : 0.5rem 0.65rem;\n  border-radius : 1rem;\n  -webkit-box-shadow : 0 0 12px 0 #FF4137;\n          box-shadow : 0 0 12px 0 #FF4137;\n}\n.faq .collapse-icon a[data-toggle='collapse'] .icon:after {\n  content : '\\e622';\n}\n.faq .collapse-icon a[data-toggle='collapse'] .icon:before {\n  content : '\\e61a';\n}\n\n.faq .collapse-icon.left a {\n  padding-left : 28px;\n}\n.faq .collapse-icon.left a:before, .faq .collapse-icon.left a:after {\n  left : 20px;\n  right : auto;\n}\n\n.faq .collapse-icon a[aria-expanded='true']:before, .faq .collapse-icon a[aria-expanded='true'] .icon:before {\n  opacity : 0;\n}\n\n.faq .collapse-icon a[aria-expanded='false']:after, .faq .collapse-icon a[aria-expanded='false'] .icon:after {\n  opacity : 0;\n}\n\n.faq .collapse-icon.accordion-icon-rotate a[aria-expanded='true']:before, .faq .collapse-icon.accordion-icon-rotate a[aria-expanded='true'] .icon:before {\n  -webkit-transform : rotate(-180deg);\n     -moz-transform : rotate(-180deg);\n      -ms-transform : rotate(-180deg);\n       -o-transform : rotate(-180deg);\n          transform : rotate(-180deg);\n}\n\n.faq .collapse-icon.accordion-icon-rotate a[aria-expanded='false']:after, .faq .collapse-icon.accordion-icon-rotate a[aria-expanded='false'] .icon:after {\n  -webkit-transform : rotate(180deg);\n     -moz-transform : rotate(180deg);\n      -ms-transform : rotate(180deg);\n       -o-transform : rotate(180deg);\n          transform : rotate(180deg);\n}\n\n/* Blog Type 1 : Blog with left text and right image with button */\n.blog .blog-footer {\n  font-weight : 700;\n}\n\n.blog .border-dash {\n  border : 1px dashed #EEECF4;\n  border-radius : 1rem;\n  margin-bottom : 5rem;\n}\n.blog .border-dash:hover .card-body .blog-img.overlap, .blog .border-dash:focus .card-body .blog-img.overlap, .blog .border-dash:active .card-body .blog-img.overlap {\n  -webkit-transform : translate3d(0, -50px, 0);\n     -moz-transform : translate3d(0, -50px, 0);\n          transform : translate3d(0, -50px, 0);\n}\n.blog .border-dash .card-body {\n  z-index : 99;\n}\n.blog .border-dash .card-body .blog-content {\n  width : 60%;\n}\n.blog .border-dash .card-body .blog-content .card-title {\n  color : #3F3F3F;\n  font-size : 1.125rem;\n}\n.blog .border-dash .card-body .blog-content .card-text {\n  font-size : 0.875rem;\n}\n.blog .border-dash .card-body .blog-img.overlap {\n  margin-top : -40px;\n  border-radius : 1rem;\n  -webkit-box-shadow : -4px 6px 12px 0 rgba(0, 0, 0, 0.1);\n          box-shadow : -4px 6px 12px 0 rgba(0, 0, 0, 0.1);\n  -webkit-transform : translateZ(0);\n     -moz-transform : translateZ(0);\n          transform : translateZ(0);\n  -webkit-transition : all 0.5s cubic-bezier(0.34, 1.61, 0.7, 1);\n       -o-transition : all 0.5s cubic-bezier(0.34, 1.61, 0.7, 1);\n     -moz-transition : all 0.5s cubic-bezier(0.34, 1.61, 0.7, 1);\n          transition : all 0.5s cubic-bezier(0.34, 1.61, 0.7, 1);\n}\n.blog .border-dash .card-body .blog-img.overlap img {\n  border-radius : 0.25rem;\n}\n@media (min-width: 768px) {\n  .blog .border-dash .card-body .blog-img.overlap img {\n    position : absolute;\n  }\n  .blog .border-dash .card-body .blog-img.overlap img.left-img {\n    left : 0;\n  }\n  .blog .border-dash .card-body .blog-img.overlap img.right-img {\n    right : 0;\n  }\n}\n.blog .border-dash .card-footer {\n  background-color : #F3F2F7;\n  border : none;\n}\n.blog .border-dash .card-footer .blog-footer {\n  font-size : 0.875rem;\n  color : #3F3F3F;\n}\n.blog .border-dash .card-footer .read-more {\n  margin-left : 2rem;\n  z-index : 99;\n  position : relative;\n  display : inline-block;\n  vertical-align : middle;\n  font-size : 0.875rem;\n}\n\n/* contact page : Contact area info and icons */\n.contact {\n  position : relative;\n}\n.contact .contact-info {\n  display : -webkit-box;\n  display : -webkit-flex;\n  display :    -moz-box;\n  display : -ms-flexbox;\n  display :         flex;\n  -webkit-box-pack : justify;\n  -webkit-justify-content : space-between;\n     -moz-box-pack : justify;\n  -ms-flex-pack : justify;\n          justify-content : space-between;\n}\n.contact .contact-info li {\n  -webkit-box-flex : 0;\n  -webkit-flex : 0 1 auto;\n     -moz-box-flex : 0;\n      -ms-flex : 0 1 auto;\n          flex : 0 1 auto;\n}\n.contact .contact-info li i {\n  color : #FE801D;\n  font-size : 2rem;\n}\n.contact .contact-info li span {\n  vertical-align : top;\n  font-size : 1.125rem;\n  color : #7D7D7D;\n}\n\n/* Counter footer section : Footer area css */\n.footer {\n  padding-top : 6.5rem;\n  padding-bottom : 6.5rem;\n  position : relative;\n  background : -webkit-gradient(linear, left top, right top, from(#A34FFE), to(#5934FC));\n  background : -webkit-linear-gradient(left, #A34FFE, #5934FC);\n  background :    -moz-linear-gradient(left, #A34FFE, #5934FC);\n  background :      -o-linear-gradient(left, #A34FFE, #5934FC);\n  background :         linear-gradient(to right, #A34FFE, #5934FC);\n  z-index : 0;\n}\n.footer::after {\n  content : '';\n  background : url('/images/counter/footer-shape.png') no-repeat bottom right;\n  width : 323px;\n  position : absolute;\n  height : 293px;\n  bottom : 0;\n  right : 12%;\n  z-index : -1;\n}\n.footer.footer-dark {\n  color : #FFFFFF;\n}\n.footer.footer-dark p, .footer.footer-dark a {\n  color : #FFFFFF;\n}\n.footer.footer-light {\n  color : #000000;\n}\n.footer.footer-light a {\n  color : #000000;\n}\n.footer .footer-wrapper {\n  z-index : 1;\n}\n.footer .footer-wrapper .footer-title {\n  font-size : 2rem;\n}\n.footer .footer-wrapper .subscribe {\n  position : relative;\n  width : 564px;\n  margin : 0 auto;\n}\n.footer .footer-wrapper .subscribe .subscribe-text {\n  border-radius : 6rem;\n  -webkit-box-shadow : none;\n          box-shadow : none;\n  border : none;\n  padding : 1rem 2rem;\n  width : 100%;\n  font-weight : 600;\n  font-size : 0.875rem;\n}\n.footer .footer-wrapper .subscribe .subscribe-btn {\n  position : absolute;\n  right : 10px;\n  top : 7px;\n  height : 2.5rem;\n  width : 2.5rem;\n  padding-left : 0.75rem;\n}\n.footer .footer-wrapper .subscribe .subscribe-btn i {\n  position : absolute;\n  top : 30%;\n  left : 30%;\n}\n.footer .footer-wrapper ul.social-buttons li {\n  display : inline-block;\n}\n.footer .footer-wrapper ul.social-buttons li a {\n  padding : 0.41rem 0.69rem;\n  margin-right : 1rem;\n  font-size : 1.125rem;\n  border : 1px solid #F8F9FA;\n}\n.footer .footer-wrapper ul.social-buttons li a i {\n  vertical-align : middle;\n}\n.footer .footer-wrapper ul.social-buttons li a:hover {\n  background-image : -webkit-gradient(linear, left top, right top, from(#FDC800), to(#FF4137));\n  background-image : -webkit-linear-gradient(left, #FDC800 0%, #FF4137 100%);\n  background-image :    -moz-linear-gradient(left, #FDC800 0%, #FF4137 100%);\n  background-image :      -o-linear-gradient(left, #FDC800 0%, #FF4137 100%);\n  background-image :         linear-gradient(to right, #FDC800 0%, #FF4137 100%);\n  color : #FFFFFF;\n  -webkit-box-shadow : 0 0 10px 3px rgba(255, 65, 55, 0.26);\n          box-shadow : 0 0 10px 3px rgba(255, 65, 55, 0.26);\n  border : none;\n  padding : 0.472rem 0.752rem;\n}\n.footer .footer-wrapper .copyright {\n  font-size : 0.75rem;\n}\n\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .subscribe {\n    width : 400px !important;\n  }\n}\n\n@media (max-width: 575.98px) {\n  .subscribe {\n    width : 300px !important;\n  }\n}\n\n.blog-area {\n  position : relative;\n  background : #F5F4FB;\n}\n.blog-area a:hover {\n  text-decoration : none;\n}\n.blog-area p, .blog-area blockquote {\n  color : #7D7D7D;\n}\n.blog-area .blog-head {\n  background : -webkit-gradient(linear, left top, right top, from(#A34FFE), to(#5934FC));\n  background : -webkit-linear-gradient(left, #A34FFE, #5934FC);\n  background :    -moz-linear-gradient(left, #A34FFE, #5934FC);\n  background :      -o-linear-gradient(left, #A34FFE, #5934FC);\n  background :         linear-gradient(to right, #A34FFE, #5934FC);\n}\n.blog-area .blog-head-content img {\n  color : #FFFFFF;\n  z-index : 6;\n  height : 500px;\n  opacity : 0.25;\n  width : 100%;\n}\n.blog-area .blog-container {\n  margin-top : -170px;\n}\n.blog-area .blog-container .breadcrumb {\n  background : none;\n  color : #FFFFFF;\n  font-size : 1rem;\n  padding-left : 0;\n}\n.blog-area .blog-container .breadcrumb a {\n  color : #FFFFFF;\n  font-size : 1rem;\n  font-weight : 300;\n  padding-left : 5px;\n  padding-right : 5px;\n}\n.blog-area .blog-container .breadcrumb a:first-child {\n  padding-left : 0;\n}\n.blog-area .blog-container .breadcrumb a.current {\n  font-weight : 700;\n}\n.blog-area .blog-container .breadcrumb a:hover {\n  text-decoration : none;\n}\n.blog-area .blog-container .card {\n  border : none;\n}\n.blog-area .blog-container .card.square {\n  border-radius : 0;\n  margin-bottom : 5rem;\n}\n.blog-area .blog-container .card .content-area {\n  padding : 1.25rem 0.9rem;\n}\n.blog-area .blog-container .card .content-area .card-title {\n  color : #3F3F3F;\n  font-weight : 700;\n  margin-bottom : 1.5rem;\n}\n.blog-area .blog-container .card .content-area .subtitle {\n  text-transform : uppercase;\n  color : #3F3F3F;\n  font-size : 1.125rem;\n  margin-bottom : 1rem;\n}\n.blog-area .blog-container .card .content-area .subtitle .blue {\n  color : #28BCFD;\n  font-weight : 700;\n}\n.blog-area .blog-container .card .content-area .comment-section .commets-title {\n  font-weight : 700;\n}\n.blog-area .blog-container .card .content-area .comment-section .comment-area {\n  background : #F5F4FB;\n  padding : 1rem 2rem;\n  margin-bottom : 3rem;\n}\n.blog-area .blog-container .card .content-area .comment-section .comment-area .media {\n  position : relative;\n  margin-top : 2rem;\n  margin-bottom : 1rem;\n}\n.blog-area .blog-container .card .content-area .comment-section .comment-area .media .user-name {\n  color : #3F3F3F;\n  margin-bottom : 0;\n  font-weight : 700;\n  margin-top : 0.5rem;\n}\n.blog-area .blog-container .card .content-area .comment-section .comment-area .media .date-time {\n  color : #7D7D7D;\n  text-transform : uppercase;\n  font-size : 0.75rem;\n}\n.blog-area .blog-container .card .content-area .comment-section .comment-area .media .reply {\n  position : absolute;\n  right : 0;\n  top : 0;\n}\n.blog-area .blog-container .card .content-area .comment-section .comment-area .media .reply a {\n  color : #3F3F3F;\n  font-weight : 700;\n  font-size : 0.938rem;\n}\n.blog-area .blog-container .card .content-area .comment-section .comment-area .media .reply a i {\n  margin-right : 0.25rem;\n}\n.blog-area .blog-container .card .content-area .comment-section .comment-area .media .media {\n  padding-left : 3rem;\n  margin-left : -75px;\n}\n.blog-area .blog-container .card .content-area .comment-section .comment-area .media .comment-desc {\n  margin-top : 1.5rem;\n  margin-left : -80px;\n  margin-bottom : 0;\n}\n.blog-area .blog-container .card .content-area .comment-section .comment-area .media .comment-reply {\n  margin-top : 2rem;\n}\n.blog-area .blog-container .card .content-area .comment-section .comment-area .media .comment-reply .media {\n  border-left : 1px solid #7D7D7D;\n}\n.blog-area .blog-container .card .content-area .comment-section .leave-comment {\n  margin-bottom : 2rem;\n}\n.blog-area .blog-container .card .content-area .comment-section .leave-comment .form-control {\n  margin-bottom : 1.5rem;\n}\n.blog-area .blog-container .card .content-area hr {\n  margin-bottom : 3rem;\n}\n.blog-area .blog-container .post-listing .card {\n  -webkit-box-shadow : 0 0 12px 0 rgba(0, 0, 0, 0.1);\n          box-shadow : 0 0 12px 0 rgba(0, 0, 0, 0.1);\n}\n.blog-area .blog-container .post-listing .card.square {\n  margin-bottom : 2rem;\n}\n.blog-area .blog-container .post-listing .card .card-img-top {\n  border-radius : 0;\n}\n.blog-area .blog-container .post-listing .card .post-info {\n  font-size : 0.938rem;\n  color : #3F3F3F;\n  margin-bottom : 1.25rem;\n  font-weight : 700;\n  width : 100%;\n  display : inline-block;\n}\n.blog-area .blog-container .post-listing .card .post-info i {\n  font-weight : 700;\n}\n.blog-area .blog-container .post-listing .card .post-info .author {\n  float : left;\n}\n.blog-area .blog-container .post-listing .card .post-info .date-comments {\n  float : right;\n}\n.blog-area .blog-container .post-listing .card .post-info .date-comments .date {\n  margin-right : 0.25rem;\n}\n.blog-area .blog-container .post-listing .card .post-info a {\n  color : #3F3F3F;\n}\n.blog-area .blog-container .post-listing .card .post-title {\n  display : inline-block;\n  font-weight : 700;\n  margin-bottom : 1rem;\n}\n.blog-area .blog-container .post-listing .card .read-more {\n  font-size : 1.125rem;\n  font-weight : 700;\n  padding : 0.4rem 2.2rem;\n}\n\nblockquote {\n  border-left : 5px solid #BF68E6;\n  background : #F5F4FB;\n  padding : 15px 20px;\n  color : #7D7D7D;\n  font-style : italic;\n  font-size : 0.875rem;\n}\n\n.tags {\n  margin-bottom : 3rem;\n}\n.tags .tag-element {\n  color : #3F3F3F;\n  border : 2px solid #1D78FF;\n  border-radius : 5px;\n  padding : 0.45rem 1rem;\n  display : inline-block;\n  font-size : 0.875rem;\n  font-weight : 700;\n  margin-right : 0.35rem;\n  margin-bottom : 0.5rem;\n}\n\n.pagination {\n  display : -webkit-inline-box;\n  display : -webkit-inline-flex;\n  display :    -moz-inline-box;\n  display : -ms-inline-flexbox;\n  display :         inline-flex;\n  margin-bottom : 4.5rem;\n}\n.pagination .page-link {\n  margin-right : 4px;\n  border-radius : 3px;\n  border : none;\n  background : none;\n  font-size : 1rem;\n  font-weight : 700;\n  text-decoration : none;\n  color : #7D7D7D;\n}\n.pagination .page-link:hover {\n  background : -webkit-linear-gradient(50deg, #28BCFD, #1D78FF);\n  background :    -moz-linear-gradient(50deg, #28BCFD, #1D78FF);\n  background :      -o-linear-gradient(50deg, #28BCFD, #1D78FF);\n  background :         linear-gradient(40deg, #28BCFD, #1D78FF);\n  color : #FFFFFF;\n}\n.pagination .page-link.active {\n  border : none;\n  color : #FFFFFF;\n  background : -webkit-linear-gradient(50deg, #28BCFD, #1D78FF);\n  background :    -moz-linear-gradient(50deg, #28BCFD, #1D78FF);\n  background :      -o-linear-gradient(50deg, #28BCFD, #1D78FF);\n  background :         linear-gradient(40deg, #28BCFD, #1D78FF);\n}\n.pagination .page-link:focus {\n  text-shadow : none;\n}\n\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .blog-area .blog-container .sidebar .social-card .card-body ul.social-buttons li.social-text {\n    margin-right : 0;\n  }\n  .blog-area .blog-container .sidebar .social-card .card-body ul.social-buttons li a {\n    margin-right : 0rem;\n  }\n  .blog-area .blog-container .sidebar .latest-posts ul li .post-name {\n    margin-top : 0;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .blog-area .blog-container .card .content-area .comment-section .comment-area .media .reply {\n    right : -70px;\n  }\n  .blog-area .blog-container .card .content-area .comment-section .comment-area .media .reply a {\n    color : transparent;\n  }\n  .blog-area .blog-container .card .content-area .comment-section .comment-area .media .reply a i {\n    color : #3F3F3F;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .blog-area .blog-container .card.square {\n    margin-bottom : 0;\n  }\n  .blog-area .blog-container .sidebar .card.square {\n    margin-bottom : 5rem;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .blog-area .blog-container .sidebar .social-card .card-body ul.social-buttons li.social-text {\n    margin-right : 0;\n  }\n  .blog-area .blog-container .sidebar .social-card .card-body ul.social-buttons li a {\n    margin-right : 0rem;\n  }\n}\n\n.sidebar {\n  margin-top : 4.75rem;\n}\n.sidebar ul {\n  padding-left : 0;\n}\n.sidebar .social-card {\n  margin-bottom : 3rem;\n}\n.sidebar .social-card .card-body {\n  padding : 1rem;\n}\n.sidebar .social-card .card-body .sidebar-title {\n  font-weight : 700;\n  color : #3F3F3F;\n  margin : 1.75rem 0;\n}\n.sidebar .social-card .card-body ul {\n  margin-bottom : 0;\n}\n.sidebar .social-card .card-body ul.social-buttons li {\n  display : inline-block;\n}\n.sidebar .social-card .card-body ul.social-buttons li.social-text {\n  font-size : 0.875rem;\n  color : #3F3F3F;\n  margin-right : 1rem;\n}\n.sidebar .social-card .card-body ul.social-buttons li a {\n  padding : 0.34rem 0.6rem;\n  margin-right : 0.5rem;\n  font-size : 1rem;\n  border : 1px solid #6C757D;\n  color : #343A40;\n}\n.sidebar .social-card .card-body ul.social-buttons li a i {\n  vertical-align : middle;\n}\n.sidebar .social-card .card-body ul.social-buttons li a:hover {\n  background-image : -webkit-gradient(linear, left top, right top, from(#1D78FF), to(#28BCFD));\n  background-image : -webkit-linear-gradient(left, #1D78FF 0%, #28BCFD 100%);\n  background-image :    -moz-linear-gradient(left, #1D78FF 0%, #28BCFD 100%);\n  background-image :      -o-linear-gradient(left, #1D78FF 0%, #28BCFD 100%);\n  background-image :         linear-gradient(to right, #1D78FF 0%, #28BCFD 100%);\n  color : #FFFFFF;\n  -webkit-box-shadow : 0 0 10px 3px rgba(40, 188, 253, 0.26);\n          box-shadow : 0 0 10px 3px rgba(40, 188, 253, 0.26);\n  border : none;\n  padding : 0.4rem 0.66rem;\n}\n.sidebar .search {\n  position : relative;\n  margin-top : 1rem;\n  margin-bottom : 1.75rem;\n}\n.sidebar .search input {\n  font-family : 'Comfortaa';\n  color : #3F3F3F;\n}\n.sidebar .search input:placeholder {\n  color : #3F3F3F;\n  opacity : 1;\n}\n.sidebar .search .search-control {\n  background : #F5F4FB;\n  border : 1px solid #E7E6F1;\n  padding : 1rem;\n  width : 100%;\n}\n.sidebar .search .search-submit {\n  position : absolute;\n  right : 0.5rem;\n  top : 1rem;\n  background : none;\n  border : none;\n  color : #3F3F3F;\n  font-size : 1.125rem;\n}\n.sidebar hr {\n  margin : 2rem 0;\n}\n.sidebar .categories ul li {\n  display : inline-block;\n  width : 100%;\n}\n.sidebar .categories ul li .cat-name, .sidebar .categories ul li .cat-count {\n  color : #3F3F3F;\n  float : left;\n  font-size : 0.938rem;\n}\n.sidebar .categories ul li .cat-count {\n  float : right;\n}\n.sidebar .latest-posts ul li {\n  margin-bottom : 1rem;\n}\n.sidebar .latest-posts ul li a {\n  color : #3F3F3F;\n}\n.sidebar .latest-posts ul li a .post-name {\n  margin-bottom : 0.25rem;\n  margin-top : 0.65rem;\n}\n.sidebar .contact-us {\n  background : -webkit-gradient(linear, left top, right top, from(#A34FFE), to(#5934FC));\n  background : -webkit-linear-gradient(left, #A34FFE, #5934FC);\n  background :    -moz-linear-gradient(left, #A34FFE, #5934FC);\n  background :      -o-linear-gradient(left, #A34FFE, #5934FC);\n  background :         linear-gradient(to right, #A34FFE, #5934FC);\n  padding : 1.5rem 0 1.2rem;\n  border-radius : 7px;\n  text-align : center;\n  margin-bottom : 1rem;\n}\n.sidebar .contact-us a {\n  color : white;\n}\n.sidebar .contact-us .contact-title {\n  font-weight : 700;\n  margin-bottom : 1rem;\n}\n.sidebar .contact-us .contact-text {\n  font-size : 0.938rem;\n}\n.sidebar .contact-us .btn {\n  margin-top : 1rem;\n  padding : 0.65rem 2.25rem;\n}\n\nbody.inner-page {\n  background-image : none;\n  background-color : #F5F4FB;\n}\n\n.section-bg-inner {\n  background-color : #F5F4FB;\n}\n\n.page-title {\n  text-transform : uppercase;\n  color : white;\n  font-weight : 700;\n  line-height : 2.5rem;\n  margin-bottom : 0;\n}\n\n.sub-page .page-header {\n  background : -webkit-gradient(linear, left top, right top, from(#A34FFE), to(#5934FC));\n  background : -webkit-linear-gradient(left, #A34FFE, #5934FC);\n  background :    -moz-linear-gradient(left, #A34FFE, #5934FC);\n  background :      -o-linear-gradient(left, #A34FFE, #5934FC);\n  background :         linear-gradient(to right, #A34FFE, #5934FC);\n  height : 500px;\n  width : 100%;\n  position : relative;\n}\n.sub-page .page-header .img {\n  content : '';\n  background : url('/images/counter/blockchain.png');\n  opacity : 0.2;\n  width : 100%;\n  height : 500px;\n}\n.sub-page .page-header .head-content {\n  position : absolute;\n  top : 220px;\n  text-align : center;\n}\n\n.sub-page .breadcrumb {\n  background : none;\n  color : #FFFFFF;\n  font-size : 1rem;\n  display : inline-block;\n}\n.sub-page .breadcrumb a {\n  color : #FFFFFF;\n  font-size : 1rem;\n  font-weight : 300;\n  padding-left : 5px;\n  padding-right : 5px;\n}\n.sub-page .breadcrumb a:first-child {\n  padding-left : 0;\n}\n.sub-page .breadcrumb a.current {\n  font-weight : 700;\n}\n.sub-page .breadcrumb a:hover {\n  text-decoration : none;\n}\n\n.sub-page .section-padding {\n  padding-top : 4rem;\n  padding-bottom : 4rem;\n}\n\n.sub-page .page-desc-title {\n  font-weight : 700;\n  margin-bottom : 2rem;\n  color : #3F3F3F;\n}\n.sub-page .page-desc-title.title-border {\n  border-left : 5px solid #3F3F3F;\n  padding-left : 1.1rem;\n  padding-top : 4px;\n}\n\n.sub-page .features .page-desc-title {\n  margin-bottom : 0.25rem;\n  margin-top : 1.25rem;\n}\n\n.sub-page .features .feature-number {\n  font-size : 6rem;\n  line-height : 6rem;\n  font-weight : 700;\n  color : #1F86FF;\n}\n\n.sub-page .features .feature-name {\n  font-size : 1.3rem;\n  color : #3F3F3F;\n  font-weight : 700;\n  margin-bottom : 0.75rem;\n}\n\n.sub-page p {\n  color : #7D7D7D;\n}\n\n.inner-page-sidebar .sidebar {\n  margin-top : -7.3rem;\n}\n.inner-page-sidebar .sidebar .card {\n  border : none;\n}\n\n@media (max-width: 991.98px) {\n  .inner-page-sidebar .sidebar {\n    margin-top : 0;\n    margin-bottom : 4rem;\n  }\n}\n\n.search-page .blog-container {\n  margin-top : -210px;\n}\n\n.search-page .sidebar {\n  margin-top : 7.5rem;\n}\n\n.error404 {\n  background : -webkit-gradient(linear, left top, right top, from(#140E38), to(#194089));\n  background : -webkit-linear-gradient(left, #140E38, #194089);\n  background :    -moz-linear-gradient(left, #140E38, #194089);\n  background :      -o-linear-gradient(left, #140E38, #194089);\n  background :         linear-gradient(to right, #140E38, #194089);\n  position : relative;\n}\n.error404 .particles-js-canvas-el {\n  z-index : 0;\n}\n.error404 .error-img {\n  height : 100vh;\n  overflow : hidden;\n}\n.error404 .error-img img {\n  height : 100%;\n}\n.error404 .error-content {\n  position : absolute;\n  bottom : 18%;\n  left : 50%;\n  margin-left : -191px;\n}\n.error404 .error-content .error-info {\n  color : #FFFFFF;\n  font-weight : 700;\n  margin-bottom : 1.5rem;\n}\n.error404 .error-content .error-info .btn {\n  padding : 0.6rem 2rem;\n}\n\n@media (max-width: 991.98px) {\n  .error404 .error-img img {\n    height : auto;\n  }\n}\n\n@media (max-width: 399px) {\n  .error404 .error-content .error-info {\n    padding-left : 2rem;\n  }\n}\n\n/*\tTemplate level css needed for all counter pages\n* \t----------------------------------------------------------------------------------------------*/\np {\n  color : #7D7D7D;\n}\np.content-desc {\n  color : #3F3F3F;\n}\n\n.bg-color {\n  background-color : #FBFAFF;\n}\n\n.vertical-social .midnightHeader.default {\n  background : #A34FFE;\n}\n.vertical-social .midnightHeader.default ul li a {\n  color : #FFFFFF;\n  opacity : 1;\n}\n.vertical-social .midnightHeader.default ul li a:hover {\n  opacity : 0.75;\n}\n\n.vertical-social .midnightHeader.white {\n  background : #FFFFFF;\n}\n.vertical-social .midnightHeader.white ul li a {\n  color : #000000;\n}\n\n#navigation #slide-line {\n  background-color : #FDC800;\n}\n\n.problem-solution {\n  position : relative;\n}\n.problem-solution:before {\n  content : '';\n  background : url('/images/counter/solutions-shape-2.png') no-repeat;\n  height : 243px;\n  width : 297px;\n  position : absolute;\n  left : 0;\n  top : 63%;\n}\n.problem-solution:after {\n  content : '';\n  background : url('/images/counter/solutions-shape-1.png') no-repeat top right;\n  height : 277px;\n  width : 370px;\n  position : absolute;\n  top : 8%;\n  right : 0;\n}\n\n.contact:before {\n  content : '';\n  background : url('/images/counter/contact-shape-2.png') no-repeat;\n  height : 324px;\n  width : 395px;\n  position : absolute;\n  left : 0;\n  top : 63%;\n  z-index : 0;\n}\n\n.contact:after {\n  content : '';\n  background : url('/images/counter/contact-shape-1.png') no-repeat top right;\n  height : 595px;\n  width : 568px;\n  position : absolute;\n  top : 8%;\n  right : 0;\n  z-index : 0;\n}\n\n.ico-modal .close {\n  position : absolute;\n  right : 0;\n  top : -30px;\n  z-index : 999;\n  font-size : 2rem;\n  font-weight : normal;\n  color : #FFFFFF;\n  opacity : 1;\n}\n\n@media (min-width: 1200px) and (max-width: 1499.98px) {\n  .head-area .logo-wrapper {\n    margin-left : -2.5rem !important;\n  }\n  .head-area .head-content::after {\n    -webkit-background-size : 70% 70%;\n            background-size : 70%;\n  }\n  .head-area .head-content .banner-content h1 {\n    font-size : 2.25rem;\n  }\n  .head-area .head-content .banner-content h3 {\n    padding-top : 2rem !important;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .head-area .logo-wrapper {\n    margin : 1rem auto 0 auto !important;\n    width : 18.35rem;\n    height : 18.35rem;\n    border-radius : 10rem;\n  }\n  .head-area .logo-wrapper .crypto-logo {\n    width : 16.87rem;\n    height : 16.87rem;\n    border-radius : 10rem;\n    top : 0.75rem;\n    left : -2.25rem;\n  }\n  .head-area .logo-wrapper .crypto-logo .crypto-logo-img {\n    position : absolute;\n    left : 20%;\n    top : 28%;\n    width : 160px;\n  }\n  .head-area .head-content::after {\n    -webkit-background-size : 60% 60%;\n            background-size : 60%;\n  }\n  .head-area .head-content .banner-content {\n    padding-top : 5rem !important;\n  }\n  .head-area .head-content .banner-content h1, .head-area .head-content .banner-content h3 {\n    font-size : 2rem;\n  }\n  .head-area .head-content .banner-content h3 {\n    padding-top : 2rem !important;\n  }\n  .about .content-area .what-is-crypto-img img {\n    width : 450px;\n  }\n  .about .content-area .play-video {\n    left : 54%;\n  }\n  .blog .border-dash {\n    height : 42%;\n  }\n  .blog .border-dash .card-body .blog-content {\n    width : 50%;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .main-menu.navbar.navbar-absolute.open {\n    background : #552FFC;\n  }\n  .main-menu.navbar .dropdown-menu {\n    background : #6E4DFC;\n    -webkit-box-shadow : none;\n            box-shadow : none;\n  }\n  .main-menu.navbar .dropdown-menu a {\n    color : #FFFFFF;\n  }\n  .faq .nav.nav-underline a {\n    font-size : 1rem;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .banner-content {\n    padding-top : 1.5rem !important;\n    text-align : center;\n  }\n  .banner-content h1, .banner-content h3 {\n    font-size : 1.5rem;\n  }\n  .banner-content h3 {\n    padding-top : 1rem !important;\n  }\n  .banner-content .btn {\n    font-size : 0.8rem;\n    padding : 0.8rem;\n  }\n  .head-area .head-content:after {\n    content : none;\n  }\n  .head-area .head-content .logo-wrapper {\n    margin : 1rem auto 0 auto !important;\n    width : 15.35rem;\n    height : 15.35rem;\n    border-radius : 10rem;\n  }\n  .head-area .head-content .logo-wrapper .crypto-logo {\n    width : 13.87rem;\n    height : 13.87rem;\n    border-radius : 10rem;\n    top : 0.75rem;\n    left : -2.25rem;\n  }\n  .head-area .head-content .logo-wrapper .crypto-logo .crypto-logo-img {\n    width : 100px;\n  }\n  .head-area .head-content .loading-bar {\n    margin : 0 auto !important;\n  }\n  .head-area .head-content .progress {\n    height : 1.5rem;\n  }\n  .head-area .head-content .progress .progress-bar-custom {\n    height : 1rem;\n  }\n  .head-area .head-content .progress-bottom {\n    bottom : 0.3rem;\n  }\n  .head-area .head-content .progress-bottom .progress-info {\n    font-size : 1rem;\n  }\n  .head-area .head-content .clock-counter {\n    display : inline-block;\n  }\n  .about .content-area .what-is-crypto-img {\n    text-align : center;\n  }\n  .about .content-area .play-video {\n    left : 52%;\n  }\n  .problem-solution:before, .problem-solution:after {\n    background : none;\n    width : 0 !important;\n  }\n  .move-first {\n    -webkit-box-ordinal-group : 0;\n    -webkit-order : -1;\n       -moz-box-ordinal-group : 0;\n    -ms-flex-order : -1;\n            order : -1;\n  }\n  .whitepaper-img {\n    text-align : center;\n    margin-bottom : 3rem;\n  }\n  .token-distribution .token-img {\n    text-align : center;\n    margin-bottom : 3rem;\n  }\n  .contact:before, .contact:after {\n    background : none;\n    width : 0 !important;\n  }\n}\n\n@media (min-width: 576px) and (max-width: 767.98px) {\n  .head-area .head-content:after {\n    content : none !important;\n  }\n  .head-area .head-content .banner-content {\n    padding-top : 1.5rem !important;\n    text-align : center;\n  }\n  .head-area .head-content .banner-content h1, .head-area .head-content .banner-content h3 {\n    font-size : 1.5rem;\n  }\n  .head-area .head-content .banner-content h3 {\n    padding-top : 0.5rem !important;\n  }\n  .head-area .head-content .logo-wrapper {\n    margin : 1rem auto 0 auto !important;\n    width : 15.35rem;\n    height : 15.35rem;\n    border-radius : 10rem;\n  }\n  .head-area .head-content .logo-wrapper .crypto-logo {\n    width : 13.87rem;\n    height : 13.87rem;\n    border-radius : 10rem;\n    top : 0.75rem;\n    left : -2.25rem;\n  }\n  .head-area .head-content .logo-wrapper .crypto-logo .crypto-logo-img {\n    width : 100px;\n  }\n  .head-area .head-content .loading-bar {\n    margin : 0 auto !important;\n  }\n  .head-area .head-content .progress {\n    height : 1.5rem;\n  }\n  .head-area .head-content .progress .progress-bar-custom {\n    height : 1rem;\n  }\n  .head-area .head-content .progress-bottom {\n    bottom : 0.3rem;\n  }\n  .head-area .head-content .progress-bottom .progress-info {\n    font-size : 1rem;\n  }\n  .head-area .head-content .clock-counter {\n    display : inline-block;\n  }\n  .head-area .head-content .clock-counter .flip-clock-wrapper .flip {\n    width : 40px;\n    margin : 2px;\n    height : 24px;\n    padding : 23px 1px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-wrapper .flip li {\n    top : 6px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-wrapper .flip li a .up .inn {\n    font-size : 1.5rem;\n    top : -16px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-wrapper .flip li a .down .inn {\n    font-size : 1.5rem;\n    bottom : 16px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-wrapper .flip-clock-dot {\n    width : 4px;\n    height : 4px;\n    left : 2px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-wrapper .flip-clock-dot.top {\n    top : 16px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-wrapper .flip-clock-dot.bottom {\n    bottom : -40px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-divider {\n    height : 1px;\n    width : 10px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-divider.days .flip-clock-label {\n    left : -20px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-divider.hours .flip-clock-label {\n    left : -8px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-divider.minutes .flip-clock-label {\n    left : -7px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-divider.seconds .flip-clock-label {\n    left : 0;\n  }\n  .head-area .head-content .purchase-token-btn {\n    text-align : center;\n    margin-top : 1rem;\n  }\n  .head-area .head-content .crypto-links {\n    display : none;\n  }\n  .about .content-area .what-is-crypto-img {\n    text-align : center;\n  }\n  .about .content-area .play-video {\n    left : 52%;\n  }\n  .problem-solution:before, .problem-solution:after {\n    background : none;\n    width : 0 !important;\n  }\n  .move-first {\n    -webkit-box-ordinal-group : 0;\n    -webkit-order : -1;\n       -moz-box-ordinal-group : 0;\n    -ms-flex-order : -1;\n            order : -1;\n  }\n  .whitepaper-img {\n    text-align : center;\n    margin-bottom : 3rem;\n  }\n  .token-distribution .token-img {\n    margin-bottom : 3rem;\n  }\n  .team .team-member {\n    -webkit-box-pack : center;\n    -webkit-justify-content : center;\n       -moz-box-pack : center;\n    -ms-flex-pack : center;\n            justify-content : center;\n  }\n  .blog .border-dash {\n    height : 47%;\n  }\n  .blog .blog-content {\n    width : 50% !important;\n  }\n  .roadmap .timestamp.active span:after {\n    left : 44.6%;\n  }\n  .roadmap .timestamp span:after {\n    left : 44.6%;\n  }\n  .contact .contact-info {\n    display : block;\n  }\n  .contact .contact-info li {\n    margin : 1rem 0;\n  }\n  .contact:before, .contact:after {\n    background : none;\n    width : 0 !important;\n  }\n}\n\n@media (max-width: 575.98px) {\n  .head-area .head-content {\n    height : 105vh !important;\n  }\n  .head-area .head-content:after {\n    content : none !important;\n  }\n  .head-area .head-content .banner-content {\n    padding-top : 1rem !important;\n  }\n  .head-area .head-content .banner-content h1, .head-area .head-content .banner-content h3 {\n    font-size : 1.1rem;\n  }\n  .head-area .head-content .banner-content h3 {\n    padding-top : 0.5rem !important;\n  }\n  .head-area .head-content .banner-content .btn {\n    font-size : 0.8rem;\n    padding : 0.8rem;\n  }\n  .head-area .head-content .logo-wrapper {\n    margin : 1rem auto 0 auto !important;\n    width : 12.35rem;\n    height : 12.35rem;\n    border-radius : 10rem;\n  }\n  .head-area .head-content .logo-wrapper .crypto-logo {\n    width : 10.87rem;\n    height : 10.87rem;\n    border-radius : 10rem;\n    top : 0.75rem;\n    left : -2.25rem;\n  }\n  .head-area .head-content .logo-wrapper .crypto-logo .crypto-logo-img {\n    width: 123px;\n    left: 2%;\n    top: 12%;\n  }\n  .head-area .head-content .loading-bar {\n    margin : 0 auto !important;\n  }\n  .head-area .head-content .progress {\n    height : 1.3rem;\n  }\n  .head-area .head-content .progress .progress-bar-custom {\n    height : 0.8rem;\n  }\n  .head-area .head-content .progress-bottom {\n    bottom : 0.3rem;\n  }\n  .head-area .head-content .progress-bottom .progress-info {\n    font-size : 0.8rem;\n  }\n  .head-area .head-content .clock-counter .flip-clock-wrapper .flip {\n    width : 28px;\n    margin : 2px;\n    height : 24px;\n    padding : 23px 1px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-wrapper .flip li {\n    top : 6px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-wrapper .flip li a .up .inn {\n    font-size : 1.5rem;\n    top : -16px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-wrapper .flip li a .down .inn {\n    font-size : 1.5rem;\n    bottom : 16px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-wrapper .flip-clock-dot {\n    width : 4px;\n    height : 4px;\n    left : 2px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-wrapper .flip-clock-dot.top {\n    top : 16px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-wrapper .flip-clock-dot.bottom {\n    bottom : -40px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-divider {\n    height : 1px;\n    width : 5px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-divider.days .flip-clock-label {\n    left : -20px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-divider.hours .flip-clock-label {\n    left : -8px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-divider.minutes .flip-clock-label {\n    left : -7px;\n  }\n  .head-area .head-content .clock-counter .flip-clock-divider.seconds .flip-clock-label {\n    left : 0;\n  }\n  .head-area .head-content .purchase-token-btn {\n    text-align : center;\n    margin-top : 1rem;\n  }\n  .head-area .head-content .crypto-links {\n    display : none;\n  }\n  .dark-bg-heading .title, .heading .title {\n    font-size : 1.5rem !important;\n  }\n  .about .content-area .what-is-crypto-img {\n    text-align : center;\n  }\n  .about .content-area .what-is-crypto-img img {\n    width : 100%;\n  }\n  .about .content-area .play-video {\n    top : 75%;\n    left : 53%;\n  }\n  .about .content-area .play-video .play {\n    padding : 0.75rem;\n    height : 50px;\n    width : 50px;\n  }\n  .about .content-area .play-video .play i {\n    font-size : 1.5rem;\n  }\n  .problem-solution:before, .problem-solution:after {\n    background : none;\n    width : 0 !important;\n  }\n  .problem-solution .problems-img, .problem-solution .solutions-img {\n    width : 250px;\n  }\n  .whitepaper-img {\n    text-align : center;\n    margin-bottom : 3rem;\n  }\n  .whitepaper-img img {\n    width : 100%;\n  }\n  .token-distribution .token-img {\n    text-align : center;\n    margin-bottom : 3rem;\n  }\n  .token-distribution .token-img img {\n    width : 100%;\n  }\n  .roadmap .timestamp.active span:after {\n    left : 44.1%;\n  }\n  .roadmap .timestamp span:after {\n    left : 44.1%;\n  }\n  .blog .border-dash .card-body .blog-img {\n    text-align : center;\n  }\n  .blog .border-dash .card-body .blog-img.overlap {\n    -webkit-box-shadow : none !important;\n            box-shadow : none !important;\n  }\n  .blog .border-dash .card-body .blog-content {\n    width : auto;\n  }\n  .blog .border-dash .card-footer {\n    text-align : center !important;\n  }\n  .roadmap .timestamp.active span:after {\n    left : 44.1%;\n  }\n  .roadmap .timestamp span:after {\n    left : 44.1%;\n  }\n  .roadmap .next-slide {\n    right : -14px;\n  }\n  .roadmap .prev-slide {\n    left : -14px;\n  }\n  .contact .contact-info {\n    display : block;\n  }\n  .contact .contact-info li {\n    margin : 1rem 0;\n  }\n  .contact .contact-info li i {\n    font-size : 1.12rem;\n    line-height : 1.5rem;\n  }\n  .contact:before, .contact:after {\n    background : none;\n    width : 0 !important;\n  }\n  .move-first {\n    -webkit-box-ordinal-group : 0;\n    -webkit-order : -1;\n       -moz-box-ordinal-group : 0;\n    -ms-flex-order : -1;\n            order : -1;\n  }\n}\n";
n(css,{});

var Welcome = function (_a) {
    var props = __rest(_a, []);
    var date = 60000;
    useEffect(function () {
        /* FlipClock Counter */
        var clock;
        clock = window.$('.clock').FlipClock({
            clockFace: 'DailyCounter',
            autoStart: false,
            callbacks: {
                stop: function () {
                    window.$('.message').html('The clock has stopped!');
                }
            }
        });
        clock.setTime(date);
        clock.setCountdown(true);
        clock.start();
    });
    return (React.createElement("div", __assign({ className: "content-wrapper" }, props),
        React.createElement("div", { className: "content-body" },
            React.createElement("main", null,
                React.createElement("section", { className: "head-area", id: "head-area", "data-midnight": "white" },
                    React.createElement("div", { className: "bg-banner" }),
                    React.createElement("div", { className: "head-content container-fluid d-flex" },
                        React.createElement("div", { className: "container" },
                            React.createElement("div", { className: "banner-wrapper" },
                                React.createElement("div", { className: "row align-items-center justify-content-center" },
                                    React.createElement("div", { className: "banner-content" },
                                        React.createElement("h1", { className: "animated", id: "joinText", "data-animation": "fadeInUpShorter", "data-animation-delay": "1.5s" }, "Welcome to HAPPYSWAP")))),
                            React.createElement("div", { className: "clock-counter animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "2.1s" },
                                React.createElement("div", { className: "clock ml-0 mt-4" }),
                                React.createElement("div", { className: "message" })),
                            React.createElement("div", { className: "banner-wrapper" },
                                React.createElement("div", { className: "row align-items-center justify-content-center" },
                                    React.createElement("h1", { className: "animated h1-roboto", id: "OpenSoon", "data-animation": "fadeInUpShorter", "data-animation-delay": "1.7s" }, "We are opening soon!"))),
                            React.createElement("div", { className: "banner-wrapper" },
                                React.createElement("div", { className: "row align-items-center" },
                                    React.createElement("div", { className: "col-lg-8 col-md-12" },
                                        React.createElement("div", { className: "banner-content advantages-list" },
                                            React.createElement("div", { className: "h3-advantages-list" }, "Our Key Advantages"),
                                            React.createElement("ul", null,
                                                React.createElement("li", null,
                                                    React.createElement("span", { className: "points" }, "No deposit fees for most vaults")),
                                                React.createElement("li", null,
                                                    React.createElement("span", { className: "points" }, "Up to 100% fee reward for most token price")),
                                                React.createElement("li", null,
                                                    React.createElement("span", { className: "points" }, "Competitive yields")),
                                                React.createElement("li", null,
                                                    React.createElement("span", { className: "points" },
                                                        "CO",
                                                        React.createElement("sup", null, "2"),
                                                        " positive service ",
                                                        React.createElement("a", { href: "#CO-friendly", className: "read-more" }, "Read more"))),
                                                React.createElement("li", null,
                                                    React.createElement("span", { className: "points" },
                                                        "Improve yield by stacking NFTs ",
                                                        React.createElement("span", { className: "soon" }, "Coming soon")))))),
                                    React.createElement("div", { className: "col-lg-4 col-md-12 move-first animated", "data-animation": "zoomIn", "data-animation-delay": "2s" },
                                        React.createElement("div", { className: "logo-wrapper ml-5 pl-5 align-items-center" },
                                            React.createElement("div", { className: "crypto-logo" },
                                                React.createElement("div", { id: "ripple" }),
                                                React.createElement("div", { id: "ripple2" }),
                                                React.createElement("div", { id: "ripple3" }),
                                                React.createElement("img", { src: "/images/logo-big.png", className: "crypto-logo-img rounded mx-auto d-block pulse2", alt: "SWPY" })))))))),
                    React.createElement("div", { className: "bg-ripple-animation d-none d-md-block" },
                        React.createElement("div", { className: "left-bottom-ripples" }),
                        React.createElement("div", { className: "top-right-ripples" }))),
                React.createElement("section", { className: "about section-padding", id: "about" },
                    React.createElement("div", { className: "container-fluid" },
                        React.createElement("div", { className: "container" },
                            React.createElement("div", { className: "heading text-center" },
                                React.createElement("h6", { className: "sub-title animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.2s" }, "What is Crypto ICO"),
                                React.createElement("h2", { className: "title animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.3s" },
                                    "About ",
                                    React.createElement("strong", null, "Crypto ICO")),
                                React.createElement("div", { className: "separator animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.3s" },
                                    React.createElement("span", { className: "large" }),
                                    React.createElement("span", { className: "medium" }),
                                    React.createElement("span", { className: "small" })),
                                React.createElement("p", { className: "content-desc animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.4s" },
                                    "Crypto ICO aims to disrupt the cryptotrading industry by lowering the barrier",
                                    React.createElement("br", { className: "d-none d-xl-block" }),
                                    " to creating algorithmic trading models.")),
                            React.createElement("div", { className: "content-area" },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-md-12 col-lg-6 animated", "data-animation": "fadeInLeftShorter", "data-animation-delay": "0.5s" },
                                        React.createElement("h4", { className: "title" },
                                            "We built a platform for ",
                                            React.createElement("br", { className: "d-none d-xl-block" }),
                                            " The crypto trading Industry"),
                                        React.createElement("h6", { className: "pt-4 pb-2" }, "Cryptocurrency exchanges or digital currency exchanges (DCE) are businesses that allow customers to trade cryptocurrencies or digital currencies for other assets."),
                                        React.createElement("p", null, "Cryptocurrency exchanges or digital currency exchanges (DCE) are businesses that allow customers to trade cryptocurrencies or digital currencies for other assets"),
                                        React.createElement("p", null, "Creators of digital currencies are often independent of the DCEs that trade the currency.[6] In one type of system, digital currency providers (DCP), are businesses that keep and administer accounts.")),
                                    React.createElement("div", { className: "col-md-12 col-lg-6 animated", "data-animation": "fadeInRightShorter", "data-animation-delay": "0.5s" },
                                        React.createElement("div", { className: "position-relative what-is-crypto-img float-xl-right" },
                                            React.createElement("img", { className: "img-fluid", src: "theme-assets/images/what-is-crypto.png", alt: "What is Crypto?" }),
                                            React.createElement("div", { className: "play-video text-center" },
                                                React.createElement("a", { href: "#", className: "play rounded-circle btn-gradient-orange btn-glow video-btn", "data-toggle": "modal", "data-src": "https://www.youtube.com/embed/UXAJu3zS4bU", "data-target": "#ico-modal" },
                                                    React.createElement("i", { className: "ti-control-play" })),
                                                React.createElement("span", { className: "mt-2 d-none d-md-block" }, "How it works"))))))))),
                React.createElement("section", { id: "problem-solution", className: "problem-solution section-padding bg-color" },
                    React.createElement("div", { className: "container-fluid" },
                        React.createElement("div", { className: "container" },
                            React.createElement("div", { className: "heading text-center" },
                                React.createElement("h6", { className: "sub-title animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.2s" }, "Solutions"),
                                React.createElement("h2", { className: "title animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.3s" },
                                    "Problems & ",
                                    React.createElement("strong", null, "Solutions")),
                                React.createElement("div", { className: "separator animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.3s" },
                                    React.createElement("span", { className: "large" }),
                                    React.createElement("span", { className: "medium" }),
                                    React.createElement("span", { className: "small" })),
                                React.createElement("p", { className: "content-desc animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.4s" },
                                    "More than $40 million in assets were placed under restraint pending forfeiture, and more than 30 ",
                                    React.createElement("br", { className: "d-none d-xl-block" }),
                                    " Liberty Reserve exchanger domain names were seized.")),
                            React.createElement("div", { className: "problems" },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-md-12 col-lg-6" },
                                        React.createElement("div", { className: "heading mb-4" },
                                            React.createElement("h4", { className: "title animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.2s" }, "Problems"),
                                            React.createElement("div", { className: "separator animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.3s" },
                                                React.createElement("span", { className: "large" }),
                                                React.createElement("span", { className: "medium" }),
                                                React.createElement("span", { className: "small" }))),
                                        React.createElement("p", { className: "animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.5s" }, "Different pieces of the new Internet are born as building blocks, but there\u2019s no way for them to work together."),
                                        React.createElement("p", { className: "animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.7s" }, "Even interoperating new technologies with old centralised resources can prove useful in making the paradigm shift from Web 2 to Web 3 happen. Now we own our data, we can prove that we own what we have and have created it on different platforms, but how do we put it together into a whole new cohesive framework.")),
                                    React.createElement("div", { className: "col-md-12 col-lg-6 text-center" },
                                        React.createElement("img", { src: "theme-assets/images/problems-graphic.png", className: "problems-img animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.6s", alt: "problems-graphic" })))),
                            React.createElement("div", { className: "solutions mt-5" },
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-md-12 col-lg-6 text-center move-lg-first" },
                                        React.createElement("img", { src: "theme-assets/images/solutions-graphic.png", className: "solutions-img animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.6s", alt: "problems-graphic" })),
                                    React.createElement("div", { className: "col-md-12 col-lg-6 move-first" },
                                        React.createElement("div", { className: "heading mb-4" },
                                            React.createElement("h4", { className: "title animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.2s" }, "Solutions"),
                                            React.createElement("div", { className: "separator animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.3s" },
                                                React.createElement("span", { className: "large" }),
                                                React.createElement("span", { className: "medium" }),
                                                React.createElement("span", { className: "small" }))),
                                        React.createElement("p", { className: "animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.5s" }, "Decentralized cryptocurrency is produced by the entire cryptocurrency system collectively, at a rate which is defined when the system is created and which is publicly known."),
                                        React.createElement("p", { className: "animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.7s" }, "In centralized banking and economic systems such as the Federal Reserve System, corporate boards or governments control the supply of currency by printing units of fiat money or demanding additions to digital banking ledgers."))))))),
                React.createElement("section", { id: "whitepaper", className: "whitepaper section-padding" },
                    React.createElement("div", { className: "container-fluid" },
                        React.createElement("div", { className: "container" },
                            React.createElement("div", { className: "heading text-center" },
                                React.createElement("h6", { className: "sub-title animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.2s" }, "Whitepaper"),
                                React.createElement("h2", { className: "title animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.3s" },
                                    React.createElement("strong", null, "Documents,"),
                                    " Terms & Conditions"),
                                React.createElement("div", { className: "separator animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.3s" },
                                    React.createElement("span", { className: "large" }),
                                    React.createElement("span", { className: "medium" }),
                                    React.createElement("span", { className: "small" })),
                                React.createElement("p", { className: "content-desc animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.4s" },
                                    "Terms of service are rules by which one must agree to abide in order to use a service.",
                                    React.createElement("br", { className: "d-none d-xl-block" }),
                                    "Terms of service can also be merely a disclaimer, especially regarding the use of websites.")),
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-md-12 col-lg-5" },
                                    React.createElement("div", { className: "whitepaper-img" },
                                        React.createElement("a", { href: "/doc.html" },
                                            React.createElement("img", { className: "img-fluid animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.6s", src: "/images/whitepaper.png", alt: "whitepaper" }),
                                            React.createElement("div", { className: "title" }, " Some title text"),
                                            React.createElement("div", { className: "desc" }, " Description for ico and some more text an more ..")))),
                                React.createElement("div", { className: "col-md-12 col-lg-7" },
                                    React.createElement("div", { className: "content-area" },
                                        React.createElement("h4", { className: "animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.5s" }, "Whitepaper"),
                                        React.createElement("p", { className: "animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.6s" }, "A white paper is an authoritative report or guide that informs readers concisely about a complex issue and presents the issuing body's philosophy on the matter. It is meant to help readers understand an issue, solve a problem, or make a decision."),
                                        React.createElement("p", { className: "animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.7s" }, "The initial British term concerning a type of government-issued document has proliferated, taking a somewhat new meaning in business. In business, a white paper is closer to a form of marketing presentation, a tool meant to persuade customers and partners and promote a product or viewpoint, White papers may be considered grey literature."),
                                        React.createElement("p", { className: "animated", "data-animation": "fadeInUpShorter", "data-animation-delay": "0.8s" }, "Since the early 1990s, the term \"white paper\", or \"whitepaper\", has been applied to documents used as marketing or sales tools in business.")))))))))));
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var StyledModal = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled.div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled(Flex)(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React.createElement(StyledModal, null,
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$17, { color: "primary" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$U, { color: "primary" })))),
        React.createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$g, templateObject_2$6, templateObject_3$4;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$f;

var ModalWrapper = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$e;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React.createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M20.042 8.303L11.308.345a.641.641 0 00-.418-.16h-.044a.566.566 0 00-.418.16L1.65 8.303a.68.68 0 00-.22.53v11.131c0 1.587 1.233 2.875 2.75 2.875h4.488c.374 0 .66-.3.66-.69v-7.82h3.057v7.82c0 .39.287.69.66.69h4.488c1.518 0 2.75-1.288 2.75-2.875V8.832a.699.699 0 00-.24-.529zm-1.078 11.638c0 .828-.638 1.495-1.43 1.495h-3.828v-7.82c0-.39-.286-.69-.66-.69H8.668c-.374 0-.66.3-.66.69v7.82H4.18c-.792 0-1.43-.667-1.43-1.495V9.13l8.097-7.383 8.096 7.384V19.94z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fill: "#fff", d: "M21.274 12.836H22v-.46h-.88V6.465l-2.838-3.634-2.86 3.634v5.91h-1.166V6.42c-.087-.713-.66-1.241-1.342-1.241-.704 0-1.276.551-1.342 1.241v5.957H8.954v-1.794c.396-.092.682-.829.682-1.771 0-.99-.462-1.771-.747-1.771-.308 0-.748.805-.748 1.77 0 .875.264 1.587.616 1.749v1.817H6.534v-1.794c.396-.092.682-.829.682-1.771 0-.99-.462-1.771-.747-1.771-.308 0-.748.805-.748 1.77 0 .875.264 1.587.616 1.749v1.817H4.093v-1.794c.396-.092.682-.829.682-1.771 0-.99-.462-1.771-.748-1.771-.307 0-.747.805-.747 1.77 0 .875.264 1.587.616 1.749v1.817H1.673v-1.794c.396-.092.682-.829.682-1.771 0-.99-.462-1.771-.748-1.771-.307 0-.747.805-.747 1.77 0 .875.264 1.587.616 1.749v1.817H0v.46h1.233a5.021 5.021 0 00-1.233.46v.736c1.54-1.127 3.41-1.196 5.324-1.196-1.87.184-3.717.897-5.324 1.817v.736c1.717-1.265 3.85-2.323 6.007-2.53h.682-.396 1.32c-2.949.253-5.786 2.254-7.613 4.07v1.496c1.364-2.024 4.708-5.244 8.14-5.59h1.1c-3.563.391-6.93 4.301-7.853 6.234h1.826c.814-1.886 3.607-5.865 6.687-6.233h1.233c-2.816.39-5.566 4.3-6.293 6.233h1.826c.617-1.863 2.838-5.888 5.17-6.233h1.21c-2.046.39-4.158 4.3-4.686 6.233h1.826c.397-1.84 2.113-5.98 3.653-6.233h.968c-2.024.39-2.267 4.3-2.838 6.233h1.98c.44-1.84.044-5.98 1.716-6.233h1.1c-2.134.39-.176 4.3-.836 6.233h1.98c.506-1.84-2.068-5.98-.176-6.233h.792c-1.892.39 2.376 4.3 1.716 6.233h1.738V17.32c-1.21-1.955-3.85-4.301-2.465-4.485h.814c-.704.184.352 1.058 1.672 2.139v-.99c-.857-.62-1.276-1.08-.726-1.15zm-1.65-4.807l-.44-.667.44-.666zm-.132.184h-.902l.44-.666zm0-1.679l-.44.667-.44-.667zm-1.012.16l.44.667-.44.667zm-.814.667l.44-.666v1.31zm.33.852h-.902l.44-.666zm0-1.679l-.44.667-.44-.667zm-1.012.16l.44.667-.44.667zm0 5.682v-2.83h2.574v2.83z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

styled.text(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  font-size: 26.26px;\n  font-family: GoodTimingRg-Bold, Good Timing !important;\n  font-weight: 700;\n"], ["\n  font-size: 26.26px;\n  font-family: GoodTimingRg-Bold, Good Timing !important;\n  font-weight: 700;\n"])));
styled.tspan(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  font-size: 26.26px;\n  font-family: GoodTimingRg-Bold, Good Timing !important;\n  font-weight: 700;\n  letter-spacing: 0em;\n"], ["\n  font-size: 26.26px;\n  font-family: GoodTimingRg-Bold, Good Timing !important;\n  font-weight: 700;\n  letter-spacing: 0em;\n"])));
var Logo$3 = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    // const logoImg = isDark ? "/images/logo-dark.png" : "/images/logo.png";
    // const textColor = isDark ? "#FFFFFF" : "#432918";
    var width = props.width ? props.width : '46';
    var height = props.height ? props.height : '46';
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 50 50" },
        React.createElement("defs", null,
            React.createElement("radialGradient", { id: "b", cx: "141.476", cy: "110.241", r: "57.24", fx: "141.476", fy: "110.241", gradientTransform: "matrix(.38836 0 0 .39027 -29.962 -17.87)", gradientUnits: "userSpaceOnUse", xlinkHref: "#a" }),
            React.createElement("linearGradient", { id: "a" },
                React.createElement("stop", { offset: "0", stopColor: "#ffbe00" }),
                React.createElement("stop", { offset: "1", stopColor: "#ff7600" }))),
        React.createElement("g", { paintOrder: "stroke fill markers" },
            React.createElement("ellipse", { cx: "24.981", cy: "25.155", fill: "#fff", rx: "24.624", ry: "24.746" }),
            React.createElement("ellipse", { cx: "24.981", cy: "25.155", fill: "url(#b)", rx: "22.23", ry: "22.339" }),
            React.createElement("path", { fill: "#fff", d: "M12.035 16.965l3.731 3.731-4.611 4.611-3.732-3.73zM25 11.882l4.637 4.636-17.316 17.316-4.636-4.637zm0 0l8.765 8.764-4.6 4.6-8.764-8.765zm12.645 5.306l4.636 4.636L24.977 39.13l-4.637-4.637zm-16.81 8.578l8.752 8.752-4.611 4.612-8.752-8.752zm17.987-.062l3.732 3.731-4.6 4.6-3.73-3.732z" }))));
};
var templateObject_1$d, templateObject_2$5;

var Logo$2 = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    var width = props.width ? props.width : '24';
    var height = props.height ? props.height : '24';
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: width, height: height, viewBox: "0 0 50 50" },
        React.createElement("g", { paintOrder: "stroke fill markers" },
            React.createElement("ellipse", { cx: "24.981", cy: "25.155", fill: "#fff", rx: "24.624", ry: "24.746" }),
            React.createElement("ellipse", { cx: "24.981", cy: "25.155", fill: "#9850fe", rx: "22.23", ry: "22.339" }),
            React.createElement("path", { fill: "#fff", d: "M12.035 16.965l3.731 3.731-4.611 4.611-3.732-3.73zM25 11.882l4.637 4.636-17.316 17.316-4.636-4.637zm0 0l8.765 8.764-4.6 4.6-8.764-8.765zm12.645 5.306l4.636 4.636L24.977 39.13l-4.637-4.637zm-16.81 8.578l8.752 8.752-4.611 4.612-8.752-8.752zm17.987-.062l3.732 3.731-4.6 4.6-3.73-3.732z" }))));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.202.664L7.689 4.338l2.306.287-2.762.188-2.686 2.808 1.341.169-1.606.108-3.881 4.058.154.161a18.776 18.776 0 0111.198-3.723c3.196.007 6.336.827 9.117 2.377l-3.918-4.096-5.49-.181 5.049-.28-2.459-2.57-4.045-.196 3.59-.28zm1.696 8.857a14.692 14.692 0 00-10.551 4.47l1.916 2.004c2.591-3.304 6.59-5.24 10.83-5.244 2.27.006 4.505.567 6.5 1.634l.007-.005-.001-.001a14.734 14.734 0 00-8.701-2.858zm3.038 2.06c-2.087 0-4.129.6-5.875 1.726a10.623 10.623 0 00-3.96 4.609l4.229 4.42a8.247 8.247 0 01-.114-1.309c0-2.244.905-4.396 2.516-5.982a8.659 8.659 0 016.075-2.478c.764 0 1.525.102 2.263.3a10.879 10.879 0 00-5.134-1.286zm3.4 1.507c-1.788 0-3.503.7-4.767 1.944a6.588 6.588 0 00-1.975 4.693c.001.61.086 1.216.255 1.801l7.92-8.279a6.866 6.866 0 00-1.434-.16z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fill: "#fff", d: "M1.214 13.91c-.511.003-.946-.39-1.016-.92-.37-2.884.335-5.806 1.971-8.16C3.839 2.43 6.338.802 9.136.292c2.797-.51 5.675.14 8.024 1.808l.46-.665a.323.323 0 01.31-.14c.121.016.223.1.267.218l1.214 3.295v.001a.359.359 0 01-.046.32.324.324 0 01-.277.14l-3.373-.172a.329.329 0 01-.281-.196.357.357 0 01.03-.351l.455-.64a8.494 8.494 0 00-6.44-1.427c-2.242.414-4.244 1.72-5.585 3.644a9.19 9.19 0 00-.66 1.134h2.75c.072 0 .138.039.174.104a.216.216 0 01.002.209 1.698 1.698 0 00-.14 1.242c.142.41.453.73.847.874a2.49 2.49 0 002.153-.17l2.068-1.21a.14.14 0 01.18.035l4.323 5.52.534.674h.001a.948.948 0 01-.196 1.38.865.865 0 01-1.084-.14l-.072-.074h-.001c-.013-.01-.032 0-.03.018a.94.94 0 01-.38.939.873.873 0 01-1.115-.134l-.066-.067c-.013-.01-.031.001-.03.018a.939.939 0 01-.38.94.874.874 0 01-1.112-.13l-.066-.066c-.014-.01-.032.001-.031.018a.936.936 0 01-.39.934.85.85 0 01-.974-.014l.083-.154a1.717 1.717 0 00-.22-2.001 1.517 1.517 0 00-.842-.444 1.534 1.534 0 00-.89-.727 1.56 1.56 0 00-1.07-1.101 1.585 1.585 0 00-.608-.89 1.565 1.565 0 00-2.087.353l-.559.715H1.214zm4.962-.418a.743.743 0 00-.975.205l-.581.744a.791.791 0 00.117 1.093l.088.074a.71.71 0 00.823.06c.026-.017.06.007.052.038a.79.79 0 00.268.755l.073.06a.713.713 0 00.795.08c.026-.015.058.007.055.04a.793.793 0 00.279.69l.05.041a.72.72 0 00.803.078.042.042 0 01.065.033.781.781 0 00.272.49l.031.024a.728.728 0 00.61.153.756.756 0 00.507-.383l.108-.2a.838.838 0 00-.13-1.007.721.721 0 00-.813-.133.023.023 0 01-.031-.023.787.787 0 00-.305-.672.712.712 0 00-.705-.092c-.11.02-.086-.081-.086-.081a.797.797 0 00-.191-.87.716.716 0 00-.85-.1c-.083.011-.072-.067-.072-.067a.787.787 0 00-.257-1.03zm15.259-5.26l-.071-.23a1.032 1.032 0 00-.974-.732h-2.42c-.318 0-.632-.061-.929-.18L12.49 5.267a2.738 2.738 0 00-2.732.412l-2.86 2.27a.583.583 0 00.143.938 1.724 1.724 0 001.59-.082l2.434-1.424a.428.428 0 01.548.107l5.304 6.74a.132.132 0 00.09.05.128.128 0 00.099-.03l.22-.19a.604.604 0 01.392-.146h1.722c-.767 2.937-2.878 5.285-5.635 6.265-2.757.98-5.8.464-8.12-1.377l.487-.63a.36.36 0 00.05-.35.335.335 0 00-.27-.212l-3.36-.358a.322.322 0 00-.296.13.358.358 0 00-.051.33l1.036 3.36a.336.336 0 00.26.22.325.325 0 00.31-.13l.492-.637c2.452 1.975 5.59 2.769 8.635 2.18 3.043-.587 5.704-2.5 7.318-5.262a11.842 11.842 0 001.14-9.21z" })));
};

var Icon$c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "-60 -30 600 600", width: "24px", color: "text" }, props),
        React.createElement("g", { id: "surface1" },
            React.createElement("path", { d: "M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " }),
            React.createElement("path", { d: "M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " }))));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24", width: "24px", color: "text" }, props),
        React.createElement("path", { d: "M12,23.87H12a.51.51,0,0,1-.42-.57c.75-4.65,3.07-8.39,7.53-12.12a.49.49,0,0,1,.7.06.51.51,0,0,1-.06.71c-4.26,3.56-6.48,7.12-7.18,11.51A.5.5,0,0,1,12,23.87Z" }),
        React.createElement("path", { d: "M12,23.87a.51.51,0,0,1-.47-.31,19.08,19.08,0,0,0-1.53-3,7,7,0,0,1-6-2.3c-1.9-2-2.66-4.67-1.89-6.73a.46.46,0,0,1,.31-.3c2.09-.7,4.77.16,6.67,2.12s2.65,4.68,1.88,6.74a.37.37,0,0,1,0,.11,20.14,20.14,0,0,1,1.51,3,.5.5,0,0,1-.27.65A.46.46,0,0,1,12,23.87ZM3,12.13a5.85,5.85,0,0,0,1.75,5.46,6.24,6.24,0,0,0,4.62,2.06,17.2,17.2,0,0,0-3.73-3.9.5.5,0,0,1,.59-.81,18.54,18.54,0,0,1,4,4.2,6.12,6.12,0,0,0-1.84-5.07A5.88,5.88,0,0,0,3,12.13Z" }),
        React.createElement("path", { d: "M15.11,18.37a5.43,5.43,0,0,1-1.72-.27.51.51,0,0,1-.31-.3c-.88-2.34,0-5.42,2.13-7.67S20.4,6.9,22.78,7.69a.47.47,0,0,1,.31.29c.88,2.35,0,5.43-2.13,7.67A8.41,8.41,0,0,1,15.11,18.37Zm-1.17-1.15c2,.53,4.48-.36,6.3-2.26s2.6-4.43,2-6.39c-2-.53-4.48.36-6.3,2.26S13.33,15.26,13.94,17.22Z" }),
        React.createElement("path", { d: "M8.84,10a.51.51,0,0,1-.5-.5V7.81a.51.51,0,0,1,.5-.5.5.5,0,0,1,.5.5V9.46A.5.5,0,0,1,8.84,10Zm3.78-1a.5.5,0,0,1-.43-.25l-.83-1.43a.51.51,0,0,1,.19-.68.5.5,0,0,1,.68.18l.82,1.43a.49.49,0,0,1-.18.68A.55.55,0,0,1,12.62,9ZM8.84,6.62A4.72,4.72,0,0,1,4.13,1.9,4.58,4.58,0,0,1,4.35.48.5.5,0,0,1,5,.15.51.51,0,0,1,5.3.78,3.85,3.85,0,0,0,5.13,1.9a3.72,3.72,0,1,0,7.43,0A3.55,3.55,0,0,0,12.38.78a.51.51,0,0,1,.33-.63.51.51,0,0,1,.63.33,4.89,4.89,0,0,1,.22,1.42A4.73,4.73,0,0,1,8.84,6.62Z" }),
        React.createElement("path", { d: "M15.39,6.18a.43.43,0,0,1-.25-.07l-1.43-.82a.49.49,0,0,1-.18-.68.51.51,0,0,1,.68-.19l1.43.83a.5.5,0,0,1-.25.93Zm1-3.78H14.75a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H16.4a.51.51,0,0,1,.5.5A.5.5,0,0,1,16.4,2.4Z" }),
        React.createElement("path", { d: "M5.06,9a.59.59,0,0,1-.25-.07.5.5,0,0,1-.18-.68l.83-1.43a.5.5,0,0,1,.86.5L5.5,8.7A.51.51,0,0,1,5.06,9Z" }),
        React.createElement("path", { d: "M2.3,6.18a.5.5,0,0,1-.25-.93l1.42-.83a.52.52,0,0,1,.69.19A.5.5,0,0,1,4,5.29l-1.42.82A.47.47,0,0,1,2.3,6.18ZM2.93,2.4H1.29a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H2.93a.5.5,0,0,1,.5.5A.5.5,0,0,1,2.93,2.4Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512", width: "24px", color: "text" }, props),
        React.createElement("g", null,
            React.createElement("path", { d: "M473.1,182.9L473.1,182.9l-115.4-42c-4-1.5-8.3-1.4-12.1,0V55c0-27.6-22.4-50-50-50H55C27.4,5,5,27.4,5,55v240.6\n\t\tc0,27.6,22.4,50,50,50h49.7c-0.1,0.2-0.2,0.5-0.3,0.7l-3.8,10.3c-4.6,12.5-4,26.1,1.7,38.2c5.6,12.1,15.7,21.3,28.2,25.9L356.6,503\n\t\tc5.5,2,11.2,3,17,3c21,0,39.8-13.2,47-32.9L503,247C512.4,221.1,499,192.4,473.1,182.9z M345.6,174.6l115.3,42\n\t\tc3.6,1.3,6.4,3.9,8,7.3c1.6,3.4,1.8,7.3,0.5,10.8l-82.3,226.1c-1.3,3.6-3.9,6.4-7.3,8c-3.4,1.6-7.3,1.8-10.8,0.5l-226.1-82.3\n\t\tc-7.4-2.7-11.2-10.8-8.5-18.2l3.7-10.3c1.6-4.2,1.5-8.8-0.3-13h157.9c27.6,0,50-22.4,50-50V174.6z M40.8,55\n\t\tc0-7.8,6.4-14.2,14.2-14.2h240.6c7.8,0,14.2,6.4,14.2,14.2v240.6c0,7.8-6.4,14.2-14.2,14.2H55c-7.8,0-14.2-6.4-14.2-14.2V55z" }),
            React.createElement("g", null,
                React.createElement("path", { d: "M95.1,218.4C74.6,218.4,58,235,58,255.5c0,20.4,16.6,37.1,37.1,37.1s37.1-16.6,37.1-37.1\n\t\t\tC132.2,235,115.5,218.4,95.1,218.4z M106.1,255.5c0,6.1-5,11-11,11s-11-5-11-11c0-6.1,5-11,11-11S106.1,249.4,106.1,255.5z" }),
                React.createElement("path", { d: "M352.9,349.2c-4.1-1.5-8.4-2.2-12.7-2.2c-15.5,0-29.5,9.8-34.9,24.4c-7,19.2,3,40.5,22.2,47.5c4.1,1.5,8.4,2.2,12.7,2.2\n\t\t\tc15.5,0,29.5-9.8,34.8-24.4c3.4-9.3,2.9-19.4-1.3-28.3C369.6,359.4,362.1,352.6,352.9,349.2z M350.5,387.8L350.5,387.8\n\t\t\tc-2,5.5-8.6,8.6-14.2,6.6c-5.7-2.1-8.7-8.4-6.6-14.1c1.6-4.4,5.8-7.3,10.4-7.3c1.3,0,2.5,0.2,3.8,0.7c2.8,1,5,3,6.2,5.7\n\t\t\tS351.5,385.1,350.5,387.8z" }),
                React.createElement("path", { d: "M396.7,228.6L396.7,228.6c-4.1-1.5-8.4-2.2-12.7-2.2c-15.5,0-29.5,9.8-34.9,24.4c-3.4,9.3-2.9,19.4,1.3,28.3\n\t\t\tc4.2,9,11.6,15.8,20.9,19.2c4.1,1.5,8.4,2.2,12.7,2.2c15.5,0,29.5-9.8,34.8-24.4C425.9,256.9,416,235.6,396.7,228.6z M394.4,267.2\n\t\t\tL394.4,267.2c-1,2.6-3.1,4.9-5.8,6.1c-2.7,1.3-5.7,1.4-8.4,0.5c-5.7-2.1-8.7-8.4-6.6-14.1c1.6-4.3,5.8-7.3,10.4-7.3\n\t\t\tc1.3,0,2.5,0.2,3.8,0.7C393.6,255.2,396.5,261.5,394.4,267.2z" }),
                React.createElement("path", { d: "M95.1,58C74.6,58,58,74.6,58,95.1c0,20.4,16.6,37.1,37.1,37.1s37.1-16.6,37.1-37.1C132.2,74.6,115.5,58,95.1,58z\n\t\t\t M106.1,95.1c0,6.1-5,11-11,11s-11-5-11-11s5-11,11-11S106.1,89,106.1,95.1z" }),
                React.createElement("path", { d: "M246.9,340.4L246.9,340.4c-3.1-1.7-6.6-2.1-9.9-1.1c-3.3,1-6.1,3.2-7.8,6.2c-2.6,4.8-8.3,6.9-13.4,5.1\n\t\t\tc-3.1-1.1-4.9-3.4-5.8-5.1c-3.5-6.3-11.4-8.6-17.7-5.1c-6.3,3.5-8.6,11.4-5.1,17.7c4.4,7.9,11.4,13.9,19.7,16.9\n\t\t\tc4.1,1.5,8.4,2.3,12.7,2.3c13.4,0,25.8-7.4,32.4-19.2C255.4,351.8,253.1,343.8,246.9,340.4z" }),
                React.createElement("path", { d: "M212.4,175.3c0-9.9-3.9-19.2-10.9-26.2c-7-7-16.3-10.9-26.2-10.9c-20.4,0-37.1,16.6-37.1,37.1s16.6,37.1,37.1,37.1\n\t\t\tC195.7,212.4,212.4,195.7,212.4,175.3z M186.3,175.3c0,6.1-5,11-11,11c-6.1,0-11-5-11-11s5-11,11-11\n\t\t\tC181.4,164.2,186.3,169.2,186.3,175.3z" }),
                React.createElement("path", { d: "M255.5,218.4c-20.4,0-37.1,16.6-37.1,37.1c0,20.4,16.6,37.1,37.1,37.1c20.4,0,37.1-16.6,37.1-37.1\n\t\t\tC292.6,235,276,218.4,255.5,218.4z M266.5,255.5c0,6.1-5,11-11,11c-6.1,0-11-5-11-11c0-6.1,5-11,11-11\n\t\t\tC261.6,244.5,266.5,249.4,266.5,255.5z" }),
                React.createElement("path", { d: "M255.5,58c-20.4,0-37.1,16.6-37.1,37.1c0,20.4,16.6,37.1,37.1,37.1c20.4,0,37.1-16.6,37.1-37.1\n\t\t\tC292.6,74.6,276,58,255.5,58z M266.5,95.1c0,6.1-5,11-11,11c-6.1,0-11-5-11-11s5-11,11-11C261.6,84,266.5,89,266.5,95.1z" })))));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$t,
    GroupsIcon: Icon$s,
    HamburgerIcon: Icon$r,
    HamburgerCloseIcon: Icon$q,
    HomeIcon: Icon$p,
    YieldFieldIcon: Icon$o,
    IfoIcon: Icon$n,
    InfoIcon: Icon$m,
    LanguageIcon: Icon$l,
    LogoIcon: Logo$3,
    Logo2Icon: Logo$2,
    MoonIcon: Icon$k,
    MoreIcon: Icon$j,
    NftIcon: Icon$i,
    PoolIcon: Icon$h,
    SunIcon: Icon$g,
    TelegramIcon: Icon$f,
    TicketIcon: Icon$e,
    TradeIcon: Icon$d,
    TwitterIcon: Icon$c,
    ShieldIcon: Icon$b,
    BushIcon: Icon$a,
    CasinoIcon: Icon$9,
    InstagramIcon: Icon$8,
    DiscordIcon: Icon$7
});

var MenuButton = styled(Button)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$c;

var StyledLink = styled(Link$1)(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .logo {\n    font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n    font-size: 20px;\n    font-weight: 400;\n    margin-left: 6px;\n    \n  }\n  .logo span:first-child{\n    font-weight: 600;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .logo {\n    font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n    font-size: 20px;\n    font-weight: 400;\n    margin-left: 6px;\n    \n  }\n  .logo span:first-child{\n    font-weight: 600;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Logo$3, { className: "desktop-icon", isDark: isDark }),
        " ",
        React.createElement("div", { className: "logo" },
            React.createElement("span", null, "HAPPY"),
            React.createElement("span", null, "SWAP"))));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "0px" }, isPushed ? (React.createElement(Icon$q, { width: "24px", color: "hamburger" })) : (React.createElement(Icon$r, { width: "24px", color: "hamburger" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink, { as: "a", href: href, "aria-label": "Happyswap home page" }, innerLogo)) : (React.createElement(StyledLink, { to: href, "aria-label": "Happyswap home page" }, innerLogo))));
};
var Logo$1 = React.memo(Logo, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$b;

var links = [
    {
        label: "HOME",
        icon: "HomeIcon",
        href: "https://pancakeswap.finance",
        items: [
            {
                label: "What is HappySwap",
                href: "https://pancakeswap.finance/#what_is_happy_swap",
            },
            {
                label: "TOKONOMICS",
                href: "https://pancakeswap.finance/#tokonomics",
            },
            {
                label: "Roadmap",
                href: "https://pancakeswap.finance/#roadmap",
            },
            {
                label: "FAQ",
                href: "https://pancakeswap.finance/#faq",
            }
        ]
    },
    {
        label: "TRADE TOKENS",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Provide Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "EARN YIELD",
        icon: "YieldFieldIcon",
        items: [
            {
                label: "Farms",
                href: "https://pancakeswap.finance/farms",
            },
            {
                label: "Pools",
                href: "https://pancakeswap.finance/syrup",
            },
        ],
    }, {
        label: "STAKE NFT",
        icon: "NftIcon",
        items: [
            {
                label: "Submit",
                href: "https://pancakeswap.finance/#submit",
            },
            {
                label: "Vote",
                href: "https://pancakeswap.finance/#vote",
            },
            {
                label: "Gallery",
                href: "https://pancakeswap.finance/#gallery",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/happyswapchat",
            },
            {
                label: "Announcements",
                href: "https://t.me/happyswap",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/happyswap",
    },
    {
        label: "Instagram",
        icon: "InstagramIcon",
        href: "https://www.instagram.com/happyswap",
    },
    {
        label: "Discord",
        icon: "DiscordIcon",
        href: "https://discord.gg/VudTtXrZ3W",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 32;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.secondary : "transparent");
});
var MenuEntry = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", ";;\n  padding: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n   \n  flex-direction: ", "\n  white-space: nowrap;\n  \n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    white-space: nowrap;\n    color: ", ";\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", ";;\n  padding: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n   \n  flex-direction: ", "\n  white-space: nowrap;\n  \n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    white-space: nowrap;\n    color: ", ";\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "26px" : MENU_ENTRY_HEIGHT + "px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 48px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "20px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "600" : "600");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "'Roboto', Helvetica, Arial, sans-serif" : "'Roboto', Helvetica, Arial, sans-serif");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return isPushed ? theme.colors.secondary : "transparent";
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var sub = _a.sub;
    return (sub ? "column" : "row");
}, function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return isPushed ? theme.colors.secondary : "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.menuHover;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
    sub: false
};
var LinkLabelMemo = React.memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$a, templateObject_2$4, templateObject_3$3;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    console.log('is href:', href);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons$1 = IconModule;
var Container$1 = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n \n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n \n"])));
var SubMenuContainer = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  margin-bottom: 1em\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  margin-bottom: 1em\n"])));
var MenuA = styled.a(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$1, null, links.map(function (entry) {
        var Icon = Icons$1[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            // console.log('initialOpenState:', initialOpenState, entry );
            return (React.createElement("div", null,
                React.createElement(MenuEntry, { key: entry.label, isPushed: isPushed, className: calloutClass },
                    React.createElement(MenuA, { href: entry.href, target: entry.target, onClick: handleClick },
                        iconElement,
                        React.createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label))),
                React.createElement(SubMenuContainer, null, entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, isPushed: isPushed, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href, target: item.target }, item.label))); }))));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, target: entry.target, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$9, templateObject_2$3, templateObject_3$2;

var Icons = IconModule;
var SocialLinks = function () { return (React.createElement(Flex, null, socials.map(function (social, index) {
    var Icon = Icons[social.icon];
    var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
    var mr = index < socials.length - 1 ? "24px" : 0;
    if (social.items) {
        return (React.createElement(Dropdown, { key: social.label, position: "top", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "secondary" }, item.label)); })));
    }
    return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
        React.createElement(Icon, __assign({}, iconProps))));
}))); };
var SocialLinks$1 = React.memo(SocialLinks, function () { return true; });

var Container = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var SettingsEntry = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var TokenInfo = styled.div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  padding: 0 16px;\n  margin-bottom: 1px;\n  border-bottom:  ", ";\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: ", ";\n\n  .title {    \n    display: flex;\n    font-weight: 600;\n    justify-content: flex-start;\n    margin: 8px 0 10px;\n  }\n  .row{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n  }\n  .cap{\n    text-align: left;\n  }\n  .val {\n    text-align: right;\n  }\n  \n"], ["\n  padding: 0 16px;\n  margin-bottom: 1px;\n  border-bottom:  ", ";\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n  color: ", ";\n\n  .title {    \n    display: flex;\n    font-weight: 600;\n    justify-content: flex-start;\n    margin: 8px 0 10px;\n  }\n  .row{\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 10px;\n  }\n  .cap{\n    text-align: left;\n  }\n  .val {\n    text-align: right;\n  }\n  \n"])), function (_a) {
    var theme = _a.theme;
    return "solid 1px " + theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav; _a.toggleTheme; _a.isDark; _a.cakePriceUsd; _a.currentLang; _a.langs; _a.setLang; var tokenInfo = _a.tokenInfo;
    if (!isPushed) {
        return (React.createElement(Container, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$T, null))));
    }
    return (React.createElement(Container, null,
        React.createElement(TokenInfo, null,
            React.createElement("div", { className: 'title' }, "Swappies (SWPY) information:"),
            tokenInfo.map(function (item) { return (React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'cap' }, item.label),
                React.createElement("div", { className: 'val' },
                    React.createElement(FormattedText, { value: parseInt(item.value, 10), decimals: 0 }),
                    "!"))); })),
        React.createElement(SettingsEntry, null,
            React.createElement(SocialLinks$1, null))));
};
var templateObject_1$8, templateObject_2$2, templateObject_3$1, templateObject_4$1;

var StyledPanel = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background: #37497e1f;\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background: #37497e1f;\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$7;

var PriceLink = styled.a(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border:", ";\n  border-radius: 20px;\n  padding-left: 2px;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n  .price{\n    margin: 2px 10px;\n  }\n  \n"], ["\n  display: flex;\n  align-items: center;\n  border:", ";\n  border-radius: 20px;\n  padding-left: 2px;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n  .price{\n    margin: 2px 10px;\n  }\n  \n"])), function (_a) {
    var theme = _a.theme;
    return "solid 1px " + theme.colors.backgroundDisabled;
});
var CakePrice = function (_a) {
    var cakePriceUsd = _a.cakePriceUsd;
    return cakePriceUsd ? (React.createElement(PriceLink, { href: "https://dex.guru/token/0x0BbFaB36fFC86Ce9de5f5e8C27665D894508b958-bsc", target: "_blank" },
        React.createElement(Logo$2, { className: "logo", isDark: true }),
        React.createElement(Text, { color: "borderColor", className: "price", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 }));
};
var CakePrice$1 = React.memo(CakePrice);
var templateObject_1$6;

var Wrapper = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var PinnedBack = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  position: fixed;\n  height : 100vh;\n  color : #FFFFFF;\n  z-index : 0;\n  background :         linear-gradient(to right, #A34FFE, #5934FC);\n  position: fixed;\n  width:100%;\n  \n  .d-none {\n    display : none !important;\n  }\n\n  .d-md-block {\n    display : block !important;\n  }\n  \n  .bg-ripple-animation {\n    overflow : hidden;\n    position : absolute;\n    z-index : 1;\n    top : 0;\n    right : 0;\n    left : 0;\n    bottom : 0;\n  }\n  \n  .left-bottom-ripples {\n    margin-bottom : -80vh;\n    margin-left : -80vh;\n    width : 160vh;\n    height : 160vh;\n    position : absolute;\n    left : 0;\n    bottom : 0;\n  }\n  .top-right-ripples {\n  margin-top : -80vh;\n  margin-right : -80vh;\n  width : 160vh;\n  height : 160vh;\n  position : absolute;\n  top : 0;\n  right : 0;\n}\n\n.ripples {\n  width : 100%;\n  height : 100%;\n  text-align : center;\n}\n.ripples:before {\n  content : '';\n  position : absolute;\n  top : 0;\n  left : 0;\n  width : 100%;\n  height : 100%;\n  background : -webkit-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :    -moz-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :      -o-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :         radial-gradient(ellipse at center, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  border : 0.5px solid white;\n  border-radius : 50%;\n  opacity : 0;\n  -webkit-transform : scale(1);\n     -moz-transform : scale(1);\n      -ms-transform : scale(1);\n       -o-transform : scale(1);\n          transform : scale(1);\n  -webkit-animation-name : k1;\n     -moz-animation-name : k1;\n       -o-animation-name : k1;\n          animation-name : k1;\n  -webkit-animation-duration : 6s;\n     -moz-animation-duration : 6s;\n       -o-animation-duration : 6s;\n          animation-duration : 6s;\n  -webkit-animation-delay : 0s;\n     -moz-animation-delay : 0s;\n       -o-animation-delay : 0s;\n          animation-delay : 0s;\n  -webkit-animation-iteration-count : infinite;\n     -moz-animation-iteration-count : infinite;\n       -o-animation-iteration-count : infinite;\n          animation-iteration-count : infinite;\n  -webkit-animation-timing-function : linear;\n     -moz-animation-timing-function : linear;\n       -o-animation-timing-function : linear;\n          animation-timing-function : linear;\n}\n.ripples:after {\n  content : '';\n  position : absolute;\n  top : 0;\n  left : 0;\n  width : 100%;\n  height : 100%;\n  background : -webkit-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :    -moz-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :      -o-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :         radial-gradient(ellipse at center, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  border : 0.5px solid white;\n  border-radius : 50%;\n  opacity : 0;\n  -webkit-animation-name : k1;\n     -moz-animation-name : k1;\n       -o-animation-name : k1;\n          animation-name : k1;\n  -webkit-animation-duration : 6s;\n     -moz-animation-duration : 6s;\n       -o-animation-duration : 6s;\n          animation-duration : 6s;\n  -webkit-animation-delay : 3s;\n     -moz-animation-delay : 3s;\n       -o-animation-delay : 3s;\n          animation-delay : 3s;\n  -webkit-animation-iteration-count : infinite;\n     -moz-animation-iteration-count : infinite;\n       -o-animation-iteration-count : infinite;\n          animation-iteration-count : infinite;\n  -webkit-animation-timing-function : linear;\n     -moz-animation-timing-function : linear;\n       -o-animation-timing-function : linear;\n          animation-timing-function : linear;\n}\n  \n"], ["\n  position: fixed;\n  height : 100vh;\n  color : #FFFFFF;\n  z-index : 0;\n  background :         linear-gradient(to right, #A34FFE, #5934FC);\n  position: fixed;\n  width:100%;\n  \n  .d-none {\n    display : none !important;\n  }\n\n  .d-md-block {\n    display : block !important;\n  }\n  \n  .bg-ripple-animation {\n    overflow : hidden;\n    position : absolute;\n    z-index : 1;\n    top : 0;\n    right : 0;\n    left : 0;\n    bottom : 0;\n  }\n  \n  .left-bottom-ripples {\n    margin-bottom : -80vh;\n    margin-left : -80vh;\n    width : 160vh;\n    height : 160vh;\n    position : absolute;\n    left : 0;\n    bottom : 0;\n  }\n  .top-right-ripples {\n  margin-top : -80vh;\n  margin-right : -80vh;\n  width : 160vh;\n  height : 160vh;\n  position : absolute;\n  top : 0;\n  right : 0;\n}\n\n.ripples {\n  width : 100%;\n  height : 100%;\n  text-align : center;\n}\n.ripples:before {\n  content : '';\n  position : absolute;\n  top : 0;\n  left : 0;\n  width : 100%;\n  height : 100%;\n  background : -webkit-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :    -moz-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :      -o-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :         radial-gradient(ellipse at center, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  border : 0.5px solid white;\n  border-radius : 50%;\n  opacity : 0;\n  -webkit-transform : scale(1);\n     -moz-transform : scale(1);\n      -ms-transform : scale(1);\n       -o-transform : scale(1);\n          transform : scale(1);\n  -webkit-animation-name : k1;\n     -moz-animation-name : k1;\n       -o-animation-name : k1;\n          animation-name : k1;\n  -webkit-animation-duration : 6s;\n     -moz-animation-duration : 6s;\n       -o-animation-duration : 6s;\n          animation-duration : 6s;\n  -webkit-animation-delay : 0s;\n     -moz-animation-delay : 0s;\n       -o-animation-delay : 0s;\n          animation-delay : 0s;\n  -webkit-animation-iteration-count : infinite;\n     -moz-animation-iteration-count : infinite;\n       -o-animation-iteration-count : infinite;\n          animation-iteration-count : infinite;\n  -webkit-animation-timing-function : linear;\n     -moz-animation-timing-function : linear;\n       -o-animation-timing-function : linear;\n          animation-timing-function : linear;\n}\n.ripples:after {\n  content : '';\n  position : absolute;\n  top : 0;\n  left : 0;\n  width : 100%;\n  height : 100%;\n  background : -webkit-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :    -moz-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :      -o-radial-gradient(center, ellipse, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  background :         radial-gradient(ellipse at center, rgba(182, 225, 235, 0) 0%, rgba(182, 225, 235, 0.05) 40%, rgba(182, 225, 235, 0.4) 100%);\n  border : 0.5px solid white;\n  border-radius : 50%;\n  opacity : 0;\n  -webkit-animation-name : k1;\n     -moz-animation-name : k1;\n       -o-animation-name : k1;\n          animation-name : k1;\n  -webkit-animation-duration : 6s;\n     -moz-animation-duration : 6s;\n       -o-animation-duration : 6s;\n          animation-duration : 6s;\n  -webkit-animation-delay : 3s;\n     -moz-animation-delay : 3s;\n       -o-animation-delay : 3s;\n          animation-delay : 3s;\n  -webkit-animation-iteration-count : infinite;\n     -moz-animation-iteration-count : infinite;\n       -o-animation-iteration-count : infinite;\n          animation-iteration-count : infinite;\n  -webkit-animation-timing-function : linear;\n     -moz-animation-timing-function : linear;\n       -o-animation-timing-function : linear;\n          animation-timing-function : linear;\n}\n  \n"])));
var StyledNav = styled.nav(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n  box-shadow: 0px 5px 4px #6666;\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n  box-shadow: 0px 5px 4px #6666;\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.headBackground;
});
var BodyWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    _a.account; _a.login; _a.logout; var isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links; _a.profile; var children = _a.children, tokenInfo = _a.tokenInfo;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper, null,
        React.createElement(PinnedBack, null,
            React.createElement("div", { className: "bg-ripple-animation d-md-block" },
                React.createElement("div", { className: "left-bottom-ripples" },
                    React.createElement("div", { className: "ripples" })),
                React.createElement("div", { className: "top-right-ripples" },
                    React.createElement("div", { className: "ripples" })))),
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/images/logo.png" }),
            React.createElement(Flex, null,
                React.createElement(CakePrice$1, { isDark: true, cakePriceUsd: cakePriceUsd }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, tokenInfo: tokenInfo }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", scale: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, scale: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants.INFO,
    _a[types.SUCCESS] = variants.SUCCESS,
    _a[types.DANGER] = variants.DANGER,
    _a[types.WARNING] = variants.WARNING,
    _a);
var StyledToast = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, description),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$4;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$3;

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React.createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React.createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$6,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TrustWallet",
        icon: Icon$3,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: Icon$5,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TokenPocket",
        icon: Icon$4,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: Icon$2,
        connectorId: ConnectorNames.WalletConnect,
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1,
        connectorId: ConnectorNames.BSC,
    },
    {
        title: "SafePal Wallet",
        icon: Icon,
        connectorId: ConnectorNames.Injected,
    },
];
var connectorLocalStorageKey = "connectorId";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { width: "100%", variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

var HelpLink = styled(Link)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React.createElement(HelpLink, { href: "https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: true },
            React.createElement(Icon$Q, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$2;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$R, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$1, templateObject_2;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { scale: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var ResetCSS = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: 'Roboto', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: 'Roboto', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

var baseColors = {
    failure: "#e02f58",
    primary: "#16256b",
    primaryBright: "#dd831c",
    primaryDark: "#c25e00",
    secondary: "#d6931a",
    success: "#dace31",
    warning: "#e68327",
};
var brandColors = {
    binance: "#F0B90B",
};
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#ffffff", secondary: "#16256b", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", inputSecondary: "#d7caec", tertiary: "#EFF4F5", text: "#487CFF", textDisabled: "#BDC2C4", textSubtle: "#16256b", borderColor: "#E9EAEB", card: "#FFFFFF", nav: "#16256b", menuBackground: "#5c35fc", menuHover: "rgba(186,54,232,0.67)", menuNavBackground: "white", hamburger: "#eeeeee", gradients: {
        bubblegum: "linear-gradient(139.73deg, #9247e2 0%, #8442e2 100%)",
    } });
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { primary: "#4c0384", secondary: "#fff", background: "linear-gradient(139.73deg, #8544fd 0%, #9247e2 100%)", backgroundDisabled: "#8442e2", contrast: "#EEEEEE", invertedContrast: "#262513", input: "#483F5A", inputSecondary: "#7b22e2", primaryDark: "#6527a8", tertiary: "#ffa338", text: "#fcfae2", textDisabled: "#b3a5c7", textSubtle: "#fff", borderColor: "#7d41cb", card: "#5c35fc", nav: "#5c35fc", menuBackground: "rgba(71,3,153,0.25)", menuHover: "rgba(57,31,66,0.25)", menuNavBackground: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #A34FFE 0%, #5934FC 100%)",
    }, hamburger: "#cccccc" });

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$5 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$2 = {
    background: lightColors.menuBackground,
    headBackground: lightColors.menuNavBackground,
    hover: "#EEEAF4",
};
var dark$2 = {
    background: darkColors.menuBackground,
    headBackground: darkColors.menuNavBackground,
    hover: "#473d5d",
};

var light$1 = {
    background: lightColors.card,
};
var dark$1 = {
    background: darkColors.card,
};

var light = {
    background: darkColors.card,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark = {
    background: lightColors.card,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$6, colors: darkColors, card: dark$5, toggle: dark$3, nav: dark$2, modal: dark$1, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$6, colors: lightColors, card: light$5, toggle: light$3, nav: light$2, modal: light$1, radio: light$4, tooltip: light });

export { Icon$18 as AddIcon, Alert, Icon$17 as ArrowBackIcon, Icon$16 as ArrowDownIcon, Icon$15 as ArrowDropDownIcon, Icon$14 as ArrowDropUpIcon, Icon$13 as ArrowForwardIcon, Icon$12 as AutoRenewIcon, BackgroundImage, GridLayout$1 as BaseLayout, Icon$11 as BinanceIcon, Icon$1a as BlockIcon, Box, Breadcrumbs, Icon$10 as BunnyPlaceholderIcon, Button, ButtonMenu, ButtonMenuItem, Icon$_ as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$$ as CardViewIcon, GridLayout as CardsLayout, Checkbox, Icon$1c as CheckmarkCircleIcon, Icon$Z as CheckmarkIcon, Icon$Y as ChevronDownIcon, Icon$X as ChevronLeftIcon, Icon$W as ChevronRightIcon, Icon$V as ChevronUpIcon, Icon$U as CloseIcon, Icon$T as CogIcon, Icon$S as CommunityIcon, ConnectorNames, Icon$R as CopyIcon, Dropdown, Icon$1b as ErrorIcon, FallingBunnies, Flex, FormattedText, Heading, Icon$Q as HelpIcon, IconButton, Image, Icon$19 as InfoIcon, Input$1 as Input, Link, LinkExternal, Icon$P as ListViewIcon, Icon$O as LogoIcon, Icon$N as LogoRoundIcon, Menu, Icon$M as MetamaskIcon, Icon$L as MinusIcon, Modal, ModalProvider, Icon$K as NoProfileAvatarIcon, Icon$J as OpenNewIcon, Icon$H as PancakeRoundIcon, Icon$I as PancakesIcon, Icon$G as PrizeIcon, Progress, Icon$D as ProgressBunny, Radio, Icon$F as RemoveIcon, ResetCSS, Icon$z as SearchIcon, Skeleton, Spinner, Svg, Icon$y as SwapVertIcon, Icon$x as SyncAltIcon, Tag, Text, Icon$B as Ticket, Icon$A as TicketRound, ToastContainer, Toggle, Icon$E as VerifiedIcon, Icon$w as WarningIcon, Welcome, Icon$C as Won, variants as alertVariants, byTextAscending, byTextDescending, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, types as toastTypes, useKonamiCheatCode, useMatchBreakpoints, useModal, useParticleBurst, useTable, useWalletModal };
