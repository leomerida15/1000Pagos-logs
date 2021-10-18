// import {UserController} from "./controller/UserController";
import LogsControllers from './controller/General_Logs';

export const Routes: any[] = [
	{
		method: 'post',
		route: '/log',
		controller: LogsControllers,
		action: 'create',
	},
];
