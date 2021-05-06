import {Router} from 'express'
import ClientController from "../controllers/ClientController";
import authMiddleware from "../middlewares/authMiddleware";

const userRouter = Router()

userRouter.post('/', authMiddleware, ClientController.newClient)
userRouter.get('/', authMiddleware, ClientController.getAllClients)

export default userRouter