import { Router } from 'express';
import userRouter from './user.routes'
import authRouter from './auth.routes'
import clientRoute from './client.routes'
import servicesRoute from './services.routes'

const routes = Router();

routes.use('/users', userRouter);
routes.use('/auth', authRouter);
routes.use('/client', clientRoute);
routes.use('/services', servicesRoute);

export default routes;
