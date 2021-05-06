import {Request, Response} from 'express'
import {getRepository} from 'typeorm'

import OrderService from "../models/OrderServices";

class ServicesController {
    async newOrderService(req: Request, res: Response) {
        try {
            const repository = getRepository(OrderService)
            const {client_id, user_id, problem} = req.body
            if (!client_id || !user_id || !problem) return res.sendStatus(401)
            const service = repository.create({client_id, user_id, problem})
            await repository.save(service)
            return res.json(service)
        }
        catch(err) {
            res.send(err.message)
        }
    }

    async getAllServices(req: Request, res: Response) {
        res.json(await getRepository(OrderService).find());
    }
}

export default new ServicesController()