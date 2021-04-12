import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import reducers from "./reducers"

import api from "../api/axiosInstance"


const store = (initialState)=> createStore(
  reducers, 
  initialState | {}, 
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))) 
)

export default (initialState)=> store(initialState)