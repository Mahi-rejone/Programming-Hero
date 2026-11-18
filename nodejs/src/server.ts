import { createServer, IncomingMessage, ServerResponse } from "node:http";

const server = createServer((req : IncomingMessage,res : ServerResponse)=>{
    const url = req.url;
    const method = req.method;
    if (url ==="/" && method === "GET"){
        console.log("This is root route");
        res.writeHead(200, {"content-type" : "text/plain"})
        res.end("this is the root route ")
    }
    else {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("this is not the root route ");
    }
});

server.listen(5000, ()=>{
    console.log("server is running in port 5000")
})