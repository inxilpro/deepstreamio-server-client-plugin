'use strict';

import { randomBytes } from 'crypto';
import Client from 'deepstream.io-client-js';

export default function(server, port = 6021, bytes = 256) {
	const username = '__superadmin__';
	const password = randomBytes(bytes).toString('hex');
	
	server.once('started', () => {
		server.client = Client(`localhost:${port}`).login({
			username,
			password
		});
		server.emit('clientReady');
	});
}