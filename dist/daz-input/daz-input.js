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
var fa_1 = require("react-icons/fa");
require("./daz-input.css");
var DazInput = function (_a) {
    var inputField = _a.inputField, id = _a.id, value = _a.value, onChange = _a.onChange;
    var placeholder = "";
    var type = "text";
    var IconComponent = fa_1.FaUser;
    switch (inputField) {
        case "name":
            placeholder = "Enter your name";
            IconComponent = fa_1.FaUser;
            break;
        case "email":
            placeholder = "Enter your email";
            type = "email";
            IconComponent = fa_1.FaEnvelope;
            break;
        case "password":
            placeholder = "Enter your password";
            type = "password";
            IconComponent = fa_1.FaLock;
            break;
        default:
            placeholder = "Enter text";
    }
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "group" }, { children: [(0, jsx_runtime_1.jsx)(IconComponent, { className: "icon" }), (0, jsx_runtime_1.jsx)("input", { className: "input", id: id, type: type, placeholder: placeholder, name: inputField, value: value, onChange: onChange })] })));
};
exports.default = DazInput;
