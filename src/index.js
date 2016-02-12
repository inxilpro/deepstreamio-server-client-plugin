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

export { token }