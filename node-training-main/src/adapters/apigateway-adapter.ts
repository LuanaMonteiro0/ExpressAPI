import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { Controller } from "../protocols/controller";
import { HttpRequest } from "../protocols/http";

export async function adaptAPIGateway(
  event: APIGatewayProxyEvent,
  controller: Controller
): Promise<APIGatewayProxyResult> {
  const request: HttpRequest = {
    body: JSON.parse(event.body as string),
    pathParamters: event.pathParameters as Record<string, any>,
    queryParameters: event.queryStringParameters as Record<string, any>,
  };

  const response = await controller.handle(request);

  return {
    statusCode: response.status,
    body: JSON.stringify(response.body),
    headers: response.headers,
  };
}
