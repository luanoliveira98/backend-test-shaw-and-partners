
import axios from "axios";

import { ErrorHandling } from "../utils/ErrorHandling";

class ApiConnection {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  headers(): Object {
    return {}
  };

  get(url: string): Promise<any> {
    const response = axios(`${this.baseUrl}${url}`, this.headers())
    .then(response => response.data)
    .catch(err => {
      ErrorHandling.throwError({
        status: err.response.status,
        message: err.response.data.message
      });
    })

    return response;
  }
}

export { ApiConnection };