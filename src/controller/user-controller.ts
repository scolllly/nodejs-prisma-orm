import { Router } from "express";
import userService from '../service/user-service'

const router = Router()

router.get('/', async (req, res)=>{
    const users = await userService.getAll()
    res.json(users)

})

router.post('/', async (req, res)=>{
    const {email,name} = req.body
    
    const userBd = await userService.create({
        email: email,
            name: name
    })

    res.json(userBd)

})


export default router