'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); /*
                                    Simple static file server that will send index.html if the file is not found. Useful for developing angular apps.
                                    */

/**
 * Module dependencies.
 */

var privateKey = _fs2.default.readFileSync(process.env.PRIVATE_KEY, 'utf8');
var certificate = _fs2.default.readFileSync(process.env.CERTIFICATE, 'utf8');
var credentials = { key: privateKey, cert: certificate };

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.HTTP_PORT || '3000');
var httpsPort = normalizePort(process.env.HTTPS_PORT || '3001');

app.set('port', port);
app.set('httpsPort', httpsPort);

app.use(_express2.default.static("dist"));

app.use(function (req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});

/**
 * Create HTTP/S server.
 */

var server = _http2.default.createServer(app);
var httpsServer = _https2.default.createServer(credentials, app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

httpsServer.listen(httpsPort);
httpsServer.on('error', onError);
httpsServer.on('listening', onListeningHttps);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 * @param {Object} error - The object containing the error
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
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

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Http server listening on ' + bind);
}

function onListeningHttps() {
    var addr = httpsServer.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Https server listening on ' + bind);
}
