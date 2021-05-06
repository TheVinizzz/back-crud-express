import {Request, Response} from 'express'
import {getRepository} from 'typeorm'

import Client from "../models/Client";

class ClientController {
    async newClient(req: Request, res: Response) {
        try {
            const repository = getRepository(Client)
            const {name} = req.body
            const client = repository.create({name})
            await repository.save(client)
            return res.json(client)
        }
        catch(err) {
            res.send(err.message)
        }
    }

    async getAllClients(req: Request, res: Response) {
        res.json(await getRepository(Client).find());
    }
}

export default new ClientController()