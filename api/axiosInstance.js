const axios = require("axios");

// export const backend = "http://localhost:3000"
export const backend = "https://nextjs-blog-pj4avuyi0-rasel-code-dev.vercel.app"


module.exports = axios.create({
  baseURL: backend
})
