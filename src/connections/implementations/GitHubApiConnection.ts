require('dotenv').config();
import { ApiConnection } from "../ApiConnection";

class GitHubApiConnection extends ApiConnection {
  constructor() {
    super(process.env.GITHUB_API_BASE_URL);
  }

  headers() {
    const headers = {
      auth: {
        username: process.env.GITHUB_TOKEN,
        password: ""
      }
    }

    return headers;
  }

  get(url: string): Promise<any> {
    return super.get(url);
  }

}

export { GitHubApiConnection }