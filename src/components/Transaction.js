import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction}) => {

    const sign = transaction.transactionAmount > 0 ? '+' : '-';

    const {Deletetransaction} =useContext(GlobalContext);
    
    return(
         
         <li className={transaction.transactionAmount < 0 ? 'minus': 'plus'}>
          {transaction.description}
          <span>{sign}Rs{Math.abs(transaction.transactionAmount)}</span>
         <button className="delete-btn" onClick={()=> Deletetransaction(transaction.id)}>x</button>
         </li>
         
    )
}