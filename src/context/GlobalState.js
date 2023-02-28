import React ,{createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

// create initial state

const initialState = {
     
    transactions :[
        
    ]
}

// Create the Global Context

 export const GlobalContext = createContext(initialState);

 // Create  a Provider for the Gobal Context

 export const GlobalProvider = ({children}) =>{

    const[state, dispatch] = useReducer(AppReducer,initialState);
    
    //Action

    function Deletetransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    // Add New Transaction Action
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,Deletetransaction,addTransaction
               
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
       
   
 } 