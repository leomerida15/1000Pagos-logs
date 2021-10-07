import { check, oneOf, ValidationChain } from 'express-validator';
import { NoSQL } from './index';

export const RegisterData: ValidationChain[] = [
	//
	check('ip', 'IP invalido').exists({ checkFalsy: true, checkNull: true }).isString().custom(NoSQL),
	//
	check('description', 'descriccion invalido')
		.exists({ checkFalsy: true, checkNull: true })
		.isString()
		.custom(NoSQL),
];
