import { HttpRequest, HttpResponse } from "./http";

export abstract class Controller {
  handle: (request: HttpRequest) => Promise<HttpResponse>;
}
