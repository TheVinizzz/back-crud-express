import {Router} from 'express'
import OrderServiceController from "../controllers/OrderServiceController";
import authMiddleware from "../middlewares/authMiddleware";

const userRouter = Router()

userRouter.post('/', authMiddleware, OrderServiceController.newOrderService)
userRouter.get('/', authMiddleware, OrderServiceController.getAllServices)

export default userRouter