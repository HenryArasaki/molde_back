"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultErrorHandler = void 0;
var express_1 = require("express");
function defaultErrorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    express_1.response.status(500).json({
        status: "error",
        message: "Default error handling triggered"
    });
}
exports.defaultErrorHandler = defaultErrorHandler;
