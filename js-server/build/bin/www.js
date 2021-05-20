#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
const debug_1 = require("debug");
const http = require("http");
const debug = debug_1.default('js-server:server');
const port = normalizePort(process.env.PORT || '3000');
app_1.default.set('port', port);
const server = http.createServer(app_1.default);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(val) {
    const normPort = parseInt(val, 10);
    if (isNaN(normPort)) {
        return val;
    }
    if (normPort >= 0) {
        return normPort;
    }
    return false;
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + (addr === null || addr === void 0 ? void 0 : addr.port);
    debug('Listening on ' + bind);
}
