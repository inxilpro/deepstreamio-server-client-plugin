'use strict';

import { randomBytes } from 'crypto';
import Client from 'deepstream.io-client-js';

var token;

export default function(server, port = 6021, bytes = 64) {
	token = randomBytes(bytes).toString('hex');
	
	server.once('started', () => {
		server.client = Client(`localhost:${port}`).login({
			serverToken: token
		});
		server.emit('clientReady');
	});
}

export function isServerAuth(conn, auth, cb) {
	if (auth.serverToken) {
		if (auth.serverToken === token) {
			cb(null, auth.serverToken);
		} else {
			cb('Unauthorized.');
		}
		return true;
	}
	return false;
}

export function isServer(clientUsername) {
	return (clientUsername === token);
}

export function extendPermissionHandler(permissionHandler) {
	return {
		isValidUser: function(conn, auth, cb) {
			if (isServerAuth(conn, auth, cb)) {
				// Server authenticated
				return;
			}
			return permissionHandler.isValidUser(conn, auth, cb);
		},
		canPerformAction: function(username, message, cb) {
			if (isServer(username)) {
				// Allow server full access
				return cb(null, true);
			}
			return permissionHandler.canPerformAction(username, message, cb);
		},
		onClientDisconnect: function(username) {
			return permissionHandler.onClientDisconnect(username);
		}
	};
}

export { token }