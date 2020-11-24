import { Router } from 'express';
import accHandler from './controllers/student/routes';

const routeHandler = Router();
routeHandler.use('/student',accHandler);

export default routeHandler;