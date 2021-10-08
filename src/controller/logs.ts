import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { fm_logs } from '../entity/fm_logs';

export default class LogsControllers {
	async create(req: Request<any, any, fm_logs>, res: Response, next: NextFunction): Promise<void> {
		try {
			await getRepository(fm_logs).save(req.body);

			res.status(200).json({ message: 'ok' });
		} catch (err) {
			next(err);
		}
	}
}
