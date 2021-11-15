import React,{ createContext, useReducer } from "react";
import MyReducer from './MyReducer';

const initialState = {
    transaction : []
}

export const MyContext = createContext(initialState);

export const MyProvider = ({ children })=>{
    const [state, dispatch] = useReducer(MyReducer, initialState)
    function delItem(id){
        dispatch({
            type:'Delete-item',
            payload:id
        });
    } 
    function addItem(transaction){
        dispatch({
            type:'Add-item',
            payload: transaction
        });
    } 
    return (<MyContext.Provider value={{
        transaction:state.transaction,
        delItem,
        addItem
    }}>
    {children}
    </MyContext.Provider>)
}