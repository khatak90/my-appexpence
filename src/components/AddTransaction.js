import React, { useState,useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


 export const AddTransaction = () =>{
    
      const [description, setDescription] = useState();
      const [transactionAmount, setTransactionAmount] = useState();

     

     const { addTransaction } = useContext(GlobalContext);
     
     const onSubmit = (e) => {
      e.preventDefault();

      const newTransaction = {
          id: new Date().getTime(),
          description,
          transactionAmount: +transactionAmount
      }

      addTransaction(newTransaction);

  }

      
    return(
        <div>
           <h3>Add New Transaction</h3> 
           <form onSubmit={onSubmit} >

             <div className="form-control">
               <label htmlFor="description">Description</label>
               <input type="text" id="description" placeholder="Detail Of  Transaction" value={description} onChange={(e) =>setDescription(e.target.value)}></input>
             </div>

             <div className="form-control">
               <label htmlFor="transactionamount">Transaction Amount</label>
               <input type="number" id="transactionamount" placeholder="Transaction Amount" value={transactionAmount} onChange={(e) =>setTransactionAmount(e.target.value)}></input>
             </div>
              
              <button className="btn">
                Add Transaction
              </button>

           </form>
        </div>
    )
 }