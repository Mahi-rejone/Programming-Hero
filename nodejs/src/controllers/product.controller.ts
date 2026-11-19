import type { IncomingMessage, ServerResponse } from "node:http";
import productService from "../service/product.service";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  if (url === "/product" && method === "GET") {
    console.log("This is product route");
    res.writeHead(200, { "content-app": "application/json" });
    res.end(JSON.stringify({message : "this is product route",
        data : productService()
    }));
  }
};

export default productController;
