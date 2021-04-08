

import moddleware from "../../lib/middleware"

async function handler(req, res) {
    
  await moddleware(req, res)

  return res.json({ products: [
      {name: "T-Shart", price: 232, qty: 12, image: "static/productsPhoto/gsmarena_010 (2).jpg"},
      {name: "Monitor", price: 232, qty: 12, image: "static/productsPhoto/gsmarena_016.jpg"},
      {name: "Mobile", price: 1232, qty: 12, image: "static/productsPhoto/samsung-galaxy-a51-sm-a515-1.jpg"}
    ]
  })
}

export default handler
