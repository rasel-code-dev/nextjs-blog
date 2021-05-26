const axios = require("axios");

export const backend = "http://localhost:3000"


module.exports = axios.create({
  baseURL: backend
})
