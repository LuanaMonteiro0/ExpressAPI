import { Controller } from "protocols/controller";
import { HttpRequest, HttpResponse } from "protocols/http";
import ConnPooler from "../../db-connection/postgresConnection";

import { Body, Response } from "./types";

export class setNewNodeController implements Controller{
    async handle(request: HttpRequest<Body>): Promise<HttpResponse<Response>>{
        
        let name = request.body.name
        let parent_id = request.body.parent_id
        let id = request.body.id

        const pool = new ConnPooler();
        let sql = 'INSERT INTO category(name, parent_id, id) VALUES($1, $2, $3)'
        let values = [name, parent_id, id]

        const res = await pool.instance.query(sql, values)
        console.log(res)

        return {
            status: 200,
            body: {"id": id}
        };
    }
}