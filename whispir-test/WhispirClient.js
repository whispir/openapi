import dotenv from 'dotenv'
dotenv.config()
import {
    MessagesApi,
    AuthApi,
  } from "../whispir-node/dist/api.js";

const { API_URL, API_KEY, WHISPIR_USERNAME, WHISPIR_PASSWORD, WORKSPACE_ID } = process.env;


class WhispirClient {
    // private auth;
    constructor() {
        this.auth = new AuthApi(WHISPIR_USERNAME, WHISPIR_PASSWORD, API_URL);
 
    }
}





async function main() {
    const client = new WhispirClient()


    console.log(client)
}

main()
.catch(error => {
    console.error(error)
})