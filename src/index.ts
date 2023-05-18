import express, {Express, NextFunction, Request, Response, ErrorRequestHandler} from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
const configPath = `./env/${process.env.NODE_ENV}.env`
dotenv.config( {path:configPath} );

import {successHandler, errorHandler} from './middleware/responseHandler'
import {apiRoute} from "./routes/apiRoutes";

const app:Express = express();
const port = process.env.PORT
app.use(cors())
app.use("/api", apiRoute)

// GET method route
app.get('/', (req:Request, res:Response, next:NextFunction) => {
    res.send('GET request to the homepage')
   // next()
})

//response sending middleware
app.use(( req:Request, res: Response, next: NextFunction)=>{
    successHandler(req, res, next)
})
//error handler middle ware
app.use((error:ErrorRequestHandler, req:Request, res: Response, next: NextFunction)=>{
    errorHandler(error, req, res, next)
})

app.use((req: Request, res:Response, next:NextFunction) =>{
    console.log('middleware calledsss')
    next()
})

app.listen(port,() => {
    console.log(process.env.NODE_ENV)
    console.info(`[server]: Server is running at http://localhost:${port}`);
})

