import {ErrorRequestHandler, NextFunction, Request, Response} from "express";

export function successHandler(_req:Request, _response:Response, next:NextFunction){
}

export function errorHandler(_error: ErrorRequestHandler, _req:Request, _response:Response, next:NextFunction){
}
