import {Router} from 'express'
import authMiddleware from "../middlewares/authMiddleware"
import UserController from '../controllers/UserController'

const userRouter = Router()

userRouter.post('/', UserController.store)
userRouter.get('/', authMiddleware, UserController.index)

export default userRouter