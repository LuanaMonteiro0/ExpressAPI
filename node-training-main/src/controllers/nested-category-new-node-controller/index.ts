import { Controller } from "protocols/controller";
import { HttpRequest, HttpResponse } from "protocols/http";
import ConnPooler from "../../db-connection/postgresConnection";

import { Body, Response } from "./types";

export class setNewNestedNodeController implements Controller{
    async handle(request: HttpRequest<Body>): Promise<HttpResponse<Response>>{

        const pool = new ConnPooler();

        let name = request.body.name
        let id = request.body.myParentId

        let response = await pool.instance.query('SELECT max(id) FROM nestedCategory')
        let lastEntryId = response.rows[0].max
        console.log(lastEntryId)

        let sql = 'SELECT insertNewEntry($1, $2, $3)'
        let values = [lastEntryId, id, name]

        const res = await pool.instance.query(sql, values)
        console.log(res)

        return {
            status: 200,
            body: {"id": id}
        };
    }
}