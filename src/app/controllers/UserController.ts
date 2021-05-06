import {Request, Response} from 'express'
import {getRepository} from 'typeorm'

import User from '../models/User'

class UserController {
    async index(req: Request, res: Response) {
        const response = await getRepository(User).find()
        res.json(response.map(val => ({id: val.id, email: val.email, name: val.name})));
    }

   async store(req: Request, res: Response) {
       try{
        const repository = getRepository(User)
        const {email, password, name} = req.body

        const userExists = await repository.findOne({ where: { email } })

        if(userExists){
            return res.sendStatus(409)
        } 

        const user = repository.create({email, password, name})
        await repository.save(user)
        
        return res.json(user)
       }
        catch(err) {
            res.send(err.message)
        }
   }
}

export default new UserController()