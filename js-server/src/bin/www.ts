#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from '../app';
import Debug from 'debug';
import http from 'http';

const debug = Debug('js-server:server');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);

/**
 * Create HTTP server.
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

function normalizePort(val: any): any {
  const normPort = parseInt(val, 10);

  if (isNaN(normPort)) {
    // named pipe
    return val;
  }

  if (normPort >= 0) {
    // normPort number
    return normPort;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any): void {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      // tslint:disable-next-line:no-console
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // tslint:disable-next-line:no-console
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

function onListening(): void {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr?.port;
  console.log.bind(console, 'Listening on ' + bind);
  debug('Listening on ' + bind);
}
