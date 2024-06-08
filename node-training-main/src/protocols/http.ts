export interface HttpRequest<T = any> {
  body?: T;
  pathParamters?: Record<string, any>;
  queryParameters?: Record<string, any>;
}

export interface HttpResponse<T = any> {
  status: number;
  body?: T;
  headers?: Record<string, any>;
}
