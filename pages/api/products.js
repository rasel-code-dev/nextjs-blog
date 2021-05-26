import  fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), 'data')

export default (req, res, next)=>{
  // console.log("api call");
  // const fullPath = path.join(postsDirectory, "data.json")
  // fs.readFile(fullPath, "utf-8", (err, text)=>{
  //   let p = JSON.parse(text)
  //   return res.json({ products: p })
  // })
 
    return res.json({ products: [
      {name: "T-Shart", price: 232, qty: 12, image: "static/productsPhoto/gsmarena_010 (2).jpg"},
      {name: "Monitor", price: 232, qty: 12, image: "static/productsPhoto/gsmarena_016.jpg"},
      {name: "Mobile", price: 1232, qty: 12, image: "static/productsPhoto/samsung-galaxy-a51-sm-a515-1.jpg"}
      ] })

}