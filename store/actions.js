


export const login=(payload)=>async(dispatch, getState, api)=>{
  dispatch({
    type: "LOGIN",
    payload: payload
  })
}