import path from "path";
import fs from "fs"

const filepath = path.join ( process.cwd(), "./src/db/db.json")

const productService = ()=>{
    const result = fs.readFileSync(filepath , "utf-8")
    return JSON.parse(result);
}

export default productService;