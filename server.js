/*
Simple static file server that will send index.html if the file is not found. Useful for developing angular apps.
*/ 

/**
 * Module dependencies.
 */

import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import express from 'express';

const app = express();

if (process.env.PRIVATE_KEY && process.env.CERTIFICATE) {
    const privateKey = fs.readFileSync(process.env.PRIVATE_KEY, 'utf8');
    const certificate = fs.readFileSync(process.env.CERTIFICATE, 'utf8');
    const credentials = {key: privateKey, cert: certificate};
    const httpsPort = normalizePort(process.env.HTTPS_PORT || '3001');

    app.set('httpsPort', httpsPort);

    const httpsServer = https.createServer(credentials, app);

    httpsServer.listen(httpsPort);
    httpsServer.on('error', onError);
    httpsServer.on('listening', onListeningHttps);
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.HTTP_PORT || '3000');

app.set('port', port);

app.use(express.static(path.join(__dirname, "dist")));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
})

/**
 * Create HTTP/S server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


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
