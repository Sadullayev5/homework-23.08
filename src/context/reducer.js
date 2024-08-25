export const InitialState = {
    users: []
}

export const reducer = ( state , action ) => {
  if(action.type === "REGISTER"){
    return{
      ...state,
      users : [...state.users , action.user]  
    }
  }
  
  else{
    return state
  }
}