import fm_origin_logs from '../entity/fm_origin_log';
import { getRepository } from 'typeorm';

const origin_logs = async () => {
	const data: fm_origin_logs[] = [
		{ id: 1, name: 'backoffice' },
		{ id: 2, name: 'files' },
		{ id: 4, name: 'punto consulta' },
		{ id: 3, name: '1000 pagos publica' },
		{ id: 5, name: 'carteras' },
	];

	const vlaid = await getRepository(fm_origin_logs).find();
	if (!vlaid.length) await getRepository(fm_origin_logs).save(data);
};

export default origin_logs;
