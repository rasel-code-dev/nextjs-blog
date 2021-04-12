import { combineReducers } from "redux"

let inititState = {
  username: '',
  email: '',
}


const authReducer = (state = inititState, action)=>{
  switch(action.type){
    case "LOGIN": 
      return {...state, ...action.payload}

    default:
      return state

  }

}

export default combineReducers({
  auth: authReducer
})