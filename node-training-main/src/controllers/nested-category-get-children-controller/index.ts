import { Controller } from "protocols/controller";
import { HttpRequest, HttpResponse } from "protocols/http";
import ConnPooler from "../../db-connection/postgresConnection";

import { Body } from "./types";

export class getAllNestedCategorysController implements Controller{
    async handle(httpRequest: HttpRequest): Promise<HttpResponse<Body[][]>>{

        console.log("retorno todos os filhos de id em nestedSet");

        const pool = new ConnPooler();

        let sql = "SELECT children.* FROM nestedCategory parent JOIN nestedCategory children ON children.lft BETWEEN parent.lft AND parent.rgt WHERE parent.id = $1 order by lft asc;";

        let value = [httpRequest.pathParamters.id];

        const {rows} = await pool.instance.query(sql, value)

        const allProducts = new Array(rows) 

        return {
            status: 200,
            body: allProducts       
        }
    }
}

