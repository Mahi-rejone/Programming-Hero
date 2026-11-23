import type { IncomingMessage, ServerResponse } from "node:http";
import productService from "../service/product.service";
import type { Iproduct } from "../types/product.type";
import bodyParser from "../utils/parseBody";

const productController = async (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  const parem = url?.split("/");
  const id = parem && parem[1] === "product" ? Number(parem[2]) : null;

  if (url === "/product" && method === "GET") {
    const products = productService();
    console.log("This is product route");
    res.writeHead(200, { "content-app": "application/json" });
    res.end(
      JSON.stringify({
        message: "this is product route",
        data: products,
      }),
    );
  } else if (method === "GET" && id != null) {
    const products = productService();
    const product = products.find((p: Iproduct) => {
      return p.id === id;
    });
    console.log("This is product DETAILS route");
    res.writeHead(200, { "content-app": "application/json" });
    res.end(
      JSON.stringify({
        message: "this is product  details route",
        data: product,
      }),
    );
  }
  else if ( method === "POST" && url === "/product"){
    const product : Iproduct = await bodyParser(req);
    res.writeHead(200, { "content-app": "application/json" });
    res.end(
      JSON.stringify({
        message: "this is product create route",
        data: product,
      }),
    );
  }
};

export default productController;
