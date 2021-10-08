// import {UserController} from "./controller/UserController";
import LogsControllers from './controller/logs';

export const Routes: any[] = [
	{
		method: 'post',
		route: '/log',
		controller: LogsControllers,
		action: 'allHistory',
	},
];
