import type { IncomingMessage, ServerResponse } from "node:http";
import productController from "../controllers/product.controller";

const routeHandler = (req : IncomingMessage, res : ServerResponse)=>{
    const url = req.url;
    const method = req.method;
    if (url === "/" && method === "GET") {
      console.log("This is root route");
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("this is the root route ");
    } else if (url?.startsWith("/product")) {
        productController(req,res);
    } else {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ message: "this is a route " }));
    }
};

export default routeHandler;