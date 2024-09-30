"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Dazcard.css");
var Dazcard = function (_a) {
    var title = _a.title, desc = _a.desc, src = _a.src, imageAltText = _a.imageAltText, id = _a.id, buttonText = _a.buttonText, handleOnClick = _a.handleOnClick;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "card", id: id }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "card-image" }, { children: (0, jsx_runtime_1.jsx)("img", { src: src, alt: imageAltText }) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "title" }, { children: title })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "desc" }, { children: desc })), buttonText && ((0, jsx_runtime_1.jsx)("div", __assign({ className: "card-button" }, { children: (0, jsx_runtime_1.jsx)("button", __assign({ onClick: handleOnClick }, { children: buttonText })) })))] })));
};
exports.default = Dazcard;
