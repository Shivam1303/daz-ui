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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var daz_input_1 = __importDefault(require("../daz-input/daz-input"));
require("./daz-form.css");
var Form = function (_a) {
    var onSubmit = _a.onSubmit, submitButtonText = _a.submitButtonText;
    var _b = (0, react_1.useState)({
        name: "",
        email: "",
        password: "",
    }), formData = _b[0], setFormData = _b[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prevData) {
            var _a;
            return (__assign(__assign({}, prevData), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        onSubmit(formData);
    };
    return ((0, jsx_runtime_1.jsxs)("form", __assign({ className: "form", onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsx)(daz_input_1.default, { inputField: "name", id: "name", value: formData.name, onChange: handleChange }), (0, jsx_runtime_1.jsx)(daz_input_1.default, { inputField: "email", id: "email", value: formData.email, onChange: handleChange }), (0, jsx_runtime_1.jsx)(daz_input_1.default, { inputField: "password", id: "password", value: formData.password, onChange: handleChange }), (0, jsx_runtime_1.jsx)("button", __assign({ type: "submit" }, { children: submitButtonText }))] })));
};
exports.default = Form;
