import React, {Children, createContext , useReducer} from 'react'
import { reducer } from './Reducer';
export const GlobalContext = createContext("initial values");
let data = {
    user: {},
};

export default function ContextProvider({children}) {
    const [state , dispatch] = useReducer(reducer , data)

    return(
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}
