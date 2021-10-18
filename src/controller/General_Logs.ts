import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import General_Logs from '../entity/General_Logs';

export default class LogsControllers {
	async create(req: Request<any, any, General_Logs>, res: Response, next: NextFunction): Promise<void> {
		try {
			await getRepository(General_Logs).save(req.body);

			res.status(200).json({ message: 'ok' });
		} catch (err) {
			next(err);
		}
	}
}
