import express, { Response, Request } from "express"
import { Controller } from "../protocols/controller";
import { HttpRequest, HttpResponse} from "../protocols/http";

export async function AdaptExpress(
    request: Request,
    response: Response,
    controller: Controller
){
    const payload: HttpRequest = {
        pathParamters: request.params,
        body: request.body
    }

    const result = await controller.handle(payload)

    response.status(result.status).send(result.body)
}