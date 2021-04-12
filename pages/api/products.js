
import moddleware from "../../lib/middleware"

import multer from "multer"


const storage = multer.diskStorage({
  destination: (req, file, done)=>{
    done(null, "public/upload/")
  },
  filename: (req, file, done)=>{
    done(null, file.originalname)
  }
})

async function handler(req, res) {

    
  await moddleware(req, res)

  if(req.method === "POST"){
   

    
    let upload = multer({ storage: storage }).single("image")
    upload(req, res, (err)=>{
     
      res.send("Post Route")
      console.log(err, req.file);
    })


  
  } else{
    return res.json({ products: [
        {name: "T-Shart", price: 232, qty: 12, image: "images/products/infinix-s5-x652.jpg"},
        {name: "Monitor", price: 232, qty: 12, image: "images/products/infinix-smart4-x653.jpg"},
        {name: "Mobile", price: 1232, qty: 12, image: "images/products/infinix-hot-s4.jpg"}
      ]
    })
  }
}

export default handler
export const config = {
  api:{
      externalResolver: true,
      bodyParser: false, 
  },
}