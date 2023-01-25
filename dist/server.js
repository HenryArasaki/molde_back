"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var result = dotenv.config();
if (result.error) {
    console.log("Error loading environment variables");
    process.exit(1);
}
require("reflect-metadata");
var express = require("express");
var utils_1 = require("./utils");
var data_source_1 = require("./data-source");
var routes_1 = require("./routes");
// const routes = require("./routes")
var bodyParser = require("body-parser");
var default_error_handler_1 = require("./middlewares/default-error-handler");
var cors = require("cors");
var app = express();
function setupExpress() {
    app.use(cors({ origin: true }));
    app.use(bodyParser.json());
    app.use(routes_1.routes);
    app.use(default_error_handler_1.defaultErrorHandler);
}
function startServer() {
    var port;
    var portArg = process.argv[2];
    var portEnv = process.env.PORT;
    if ((0, utils_1.isInteger)(portEnv)) {
        port = parseInt(portEnv);
    }
    if (!port && (0, utils_1.isInteger)(portArg)) {
        port = parseInt(portArg);
    }
    if (!port) {
        port = 9000;
    }
    app.listen(port, function () { return console.log("Server is running on port ".concat(port)); });
}
data_source_1.AppDataSource.initialize()
    .then(function () {
    setupExpress();
    startServer();
})
    .catch(function (error) {
    console.log("erro inicializando datasource");
    process.exit(1);
});
