import { createServer, IncomingMessage, ServerResponse } from "node:http";

const server = createServer((req : IncomingMessage,res : ServerResponse)=>{
    const url = req.url;
    const method = req.method;
    if (url ==="/" && method === "GET"){
        console.log("This is root route");
    }
    else {
        console.log("This route is not defiled")
    }
});

server.listen(5000, ()=>{
    console.log("server is running in port 5000")
})