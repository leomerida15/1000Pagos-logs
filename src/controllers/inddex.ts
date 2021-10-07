import { Request, Response, NextFunction } from 'express';
import { Api } from 'interfaces';
import fm_logs from '../db/models/fm_logs';
import { getRepository } from 'typeorm';

export const logs = async (
	req: Request<any, Api.Resp, fm_logs>,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		await getRepository(fm_logs).save(req.body);

		res.status(200).json({ message: 'ok' });
	} catch (err) {
		next(err);
	}
};
