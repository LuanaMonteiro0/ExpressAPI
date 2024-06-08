import { Controller } from "protocols/controller";
import { HttpRequest, HttpResponse } from "protocols/http";
import ConnPooler from "../../db-connection/postgresConnection";

import { Body, Response } from "./types";

export class updateOneProductController implements Controller {
  async handle(
    request: HttpRequest<Body>
  ): Promise<HttpResponse<Response>> {
    //
    console.log("encontra o produto anterior");
    console.log(`ID do produto ${request.pathParamters.id}`)
    console.log(`atualiza os dados do produto de ID ${request.pathParamters.id}`);
    console.log(`nome do produto: ${request.body.productName}`);
    console.log(`descrição: ${request.body.productDescription}`);
    console.log(`Preço: ${request.body.price}`);

    const pool = new ConnPooler();

    let id = request.pathParamters.id
    let productName = request.body.productName
    let productDescription = request.body.productDescription
    let price = request.body.price

    let sql = 'UPDATE products SET productName = $1, price = $2, description = $3 WHERE id = $4'
    let values = [productName, price, productDescription, id]
   
    const res = await pool.instance.query(sql, values)
    console.log(res)

    return {
      status: 204
    };
  }
}