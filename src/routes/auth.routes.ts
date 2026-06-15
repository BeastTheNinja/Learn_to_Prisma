import { Router } from 'express';
import authController from '../controllers/auth.controller';


const routes = Router();

routes.post('/auth/register', authController.register);
routes.post('/auth/login', authController.login);


export default routes