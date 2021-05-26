const axios = require("axios");

// export const backend = "http://localhost:3000"
export const backend = "https://nextjs-blog-2-mu.vercel.app"


module.exports = axios.create({
  baseURL: backend
})
