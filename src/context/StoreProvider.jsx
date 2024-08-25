import ProjectStore from "./store";
import { useReducer } from "react";
import { reducer , InitialState } from "./reducer";

const StoreProvider = ({children}) => {
  return <ProjectStore.Provider  value={useReducer(reducer , InitialState)}>
    {children}
  </ProjectStore.Provider>
}

export default StoreProvider