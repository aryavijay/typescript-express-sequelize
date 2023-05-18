import {Router, Request, Response} from 'express'
import sequelizeConnection from './../db/config'

export const apiRoute = Router()

apiRoute.get( '/test',async (_req:Request, _res:Response) =>{
    try {
        const [data] = await sequelizeConnection.query("Select * from test ")
        _res.send(data)
    }catch(err){
        console.log(err)
    }
})
