import { Application } from 'express';
import { Router } from 'express';
import { logs } from '../controllers/inddex';

// routers
const logsRoutes: Router = Router();

logsRoutes.route('/log').post(logs);

export default (app: Application) => app.use(logsRoutes);
