import { Controller } from "protocols/controller";
import { HttpRequest, HttpResponse } from "protocols/http";
import ConnPooler from "../../db-connection/postgresConnection";

import {Body} from "./types";

export class getOneProductByIdController implements Controller{
    async handle(httpRequest: HttpRequest): Promise<HttpResponse<Body>>{

        console.log("Eu imprimo um produto só")
        console.log(`ID do produto ${httpRequest.pathParamters.id}`)
        
        let idProduct = httpRequest.pathParamters.id;
        const pool = new ConnPooler();
        let sql = "SELECT * FROM products WHERE id = $1";
        const result = await pool.instance.query(sql, [idProduct])

        console.log(result)
        
        return {
            status: 200,
            body: result.rows[0]
        }
                  
    }
    
}
