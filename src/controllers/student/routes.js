import { Router } from 'express';
import StudentController from './controller';

const accHandler= Router();

accHandler.post('/',StudentController.create);
accHandler.get('/',StudentController.list);
accHandler.put('/',StudentController.update);
accHandler.delete('/:id',StudentController.delete);
accHandler.get('/highest',StudentController.high);
accHandler.get('/average',StudentController.avg);


export default accHandler;