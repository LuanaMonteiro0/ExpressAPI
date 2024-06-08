import { Controller } from "protocols/controller";
import { HttpRequest, HttpResponse } from "protocols/http";
import ConnPooler from "../../db-connection/postgresConnection";

import {Body} from "./types";

export class getAllCategorysFathersController implements Controller{
    async handle(httpRequest: HttpRequest): Promise<HttpResponse<Body[][]>>{
    
        console.log("retorno todos os pais das categorias");
    
        const pool = new ConnPooler();

        let sql = "with recursive parents as (select name, parent_id, id from category where id = $1 union select ct.name, ct.parent_id, ct.id from category ct inner join parents p on p.parent_id = ct.id) select * from parents"
        let value = [httpRequest.pathParamters.id];

        const {rows} = await pool.instance.query(sql, value)

        const allProducts = new Array(rows) 

        return {
            status: 200,
            body: allProducts       
        }
    }

}

