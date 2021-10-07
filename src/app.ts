// app's
import app from './apps';
import { createConnection, getRepository } from 'typeorm';
import log from './hooks/logs/index';
// init server

//database

createConnection()
	.then(async () => {
		log.text.OK('DB OK');

		const httpServer = app.listen(app.get('port'), () => {
			console.log(`app corriendo en el puerto http://localhost:${app.get('port')} leoM   `);
			console.log('_________');
			console.log('|       |');
			console.log('| ()_() |');
			console.log(`| (o.o) |`);
			console.log('| (|_|)*|');
			console.log('|_______|');
			console.log('| DB OK |');
			console.log('|_______|');
		});
	})
	.catch((err) => console.log('DB ERR', err));
