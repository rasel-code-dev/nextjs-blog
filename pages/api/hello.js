import moddleware from "../../lib/middleware"

async function handler(req, res) {
    
  // res.header('Access-Control-Allow-Origin', '*')
  // res.header(
  //   'Access-Control-Allow-Headers',
  //   'Origin, X-Requested-With, Content-Type, Accept'
  // )

  // res.statusCode = 200;
  // res.setHeader("Content-Type", "application/json");
  
  await moddleware(req, res)


  res.json({ message: 'hello world' })
}

export default handler