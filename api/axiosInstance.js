const axios = require("axios");

// export const backend = "http://localhost:3000"
const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
export const backend = origin


module.exports = axios.create({
  baseURL: backend
})
