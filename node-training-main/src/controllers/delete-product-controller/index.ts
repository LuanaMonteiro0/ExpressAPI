import { Controller } from "protocols/controller";
import { HttpRequest, HttpResponse } from "protocols/http";
import ConnPooler from "../../db-connection/postgresConnection";

import { Body, Response } from "./types";

export class deleteOneProductController implements Controller {
  async handle(
    request: HttpRequest<Body>
  ): Promise<HttpResponse<Response>> {
    //
    console.log("encontra o produto desejado");
    console.log(`ID do produto ${request.pathParamters.id}`)
    console.log(`apaga o produto`);

    const pool = new ConnPooler();

    let id = request.pathParamters.id
    
    let sql = 'DELETE FROM products WHERE id = $1'
    let values = [id]
   
    const res = await pool.instance.query(sql, values)
    console.log(res)
    
    //
    return {
      status: 200
    };
  }
}