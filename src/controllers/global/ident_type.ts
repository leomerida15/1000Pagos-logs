import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import fm_ident_type from '../../db/models/fm_ident_type';
import Resp from '../../Middlewares/res/resp';
import Msg from '../../hooks/messages/index.ts';
import { Api } from 'interfaces';

export const getAllIdent_type = async (
	req: Request<any, any, Api.Resp>,
	res: Response<Api.Resp>,
	next: NextFunction
): Promise<void> => {
	try {
		const info = await getRepository(fm_ident_type).find();

		const message: string = Msg('identidad').getAll;

		Resp(req, res, { message, info });
	} catch (err) {
		next(err) ;
	}
};
