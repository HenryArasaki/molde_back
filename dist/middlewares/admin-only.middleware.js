"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfAdmin = void 0;
function checkIfAdmin(req, res, next) {
    var user = req["user"];
    if (!(user === null || user === void 0 ? void 0 : user.isAdmin)) {
        res.sendStatus(403);
        return;
    }
    next();
}
exports.checkIfAdmin = checkIfAdmin;
