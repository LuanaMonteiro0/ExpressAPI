import { Controller } from "protocols/controller";
import { HttpRequest, HttpResponse } from "protocols/http";
import ConnPooler from "../../db-connection/postgresConnection";
import { v4 as uuidv4 } from 'uuid';

import { Body, Response } from "./types";

export class CreateProductController implements Controller {
  async handle(
    request: HttpRequest<Body>
  ): Promise<HttpResponse<Response>> {
    //
    console.log("cria produto");
    console.log(`nome do produto: ${request.body.productName}`);
    console.log(`descrição: ${request.body.productDescription}`);
    console.log(`Preço: ${request.body.price}`);

    let productName = request.body.productName
    let productDescription = request.body.productDescription
    let price = request.body.price

    let id = uuidv4()

    const pool = new ConnPooler();
    let sql = 'INSERT INTO products(productName, price, description, id) VALUES($1, $2, $3, $4)'
    let values = [productName, price, productDescription, id]

    const res = await pool.instance.query(sql, values)
    console.log(res)
    

    return {
      status: 200,
      body: {"productId": id}
    };
  }
}
