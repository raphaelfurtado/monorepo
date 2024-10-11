import http from "http";
import { httpClient } from "@softbean/commons-http-client";

console.warn("NODE JS!!");

http.createServer(async (_, res) => {

    const githubPayload = await httpClient.get("https://api.github.com/users/raphaelfurtado");

    res.write(JSON.stringify(
        { 
            message: "Hello from Node Server!!",
            githubPayload
        }))
    res.end();
})
    .listen(4000);