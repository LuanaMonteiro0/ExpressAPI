import { Controller } from "protocols/controller";
import { HttpRequest, HttpResponse } from "protocols/http";
import ConnPooler from "../../db-connection/postgresConnection";

import {Bodies} from "./types";

export class getAllProductsController implements Controller{
    async handle(httpRequest: HttpRequest): Promise<HttpResponse<Bodies[][]>>{
    
        console.log("retorno todos os produtos");
    
        const pool = new ConnPooler();

        const {rows} = await pool.instance.query('SELECT * FROM products')

        const allProducts = new Array(rows) 

        return {
            status: 200,
            body: allProducts       
        }
    }

}