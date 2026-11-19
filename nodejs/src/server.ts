import { createServer, IncomingMessage, ServerResponse } from "node:http";
import routeHandler from "./routes/routes";

const server = createServer((req : IncomingMessage,res : ServerResponse)=>{
 routeHandler(req,res);
});

server.listen(5000, ()=>{
    console.log("server is running in port 5000")
})