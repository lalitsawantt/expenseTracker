import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const AddExpense = (props) => {

  const {
    setTransaction,
    setHistory,
    setIncome,
    setExpense,
    setDisplayIncome,
    setDisplayExpense
  } = props;

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddTransaction = () => {
    if(!isNaN(parseFloat(amount))){
      setTransaction({
        type:amount >= 0? "income":"expense",
        description:description,
        value:Math.abs(amount)
      })
      setHistory((prev) => [...prev, {
        type:amount >= 0? "income":"expense",
        description:description,
        value:Math.abs(amount)
      }])
      if(parseFloat(amount) >= 0){
        setIncome(parseFloat(amount));
        setDisplayIncome(prev => parseFloat(prev) + parseFloat(amount));
        
      }else{
        setExpense(Math.abs(parseFloat(amount)));
        setDisplayExpense(prev => parseFloat(prev) + Math.abs(parseFloat(amount)));
      }
    }else{
      console.log("Amount NaN");
      toast.error("Amount is not a number")
    }

    setDescription("");
    setAmount("");
  }
  return (
    <div className="add-expense">
      <div className="ae-header">
        Add new transaction
      </div>
      <div className="expense-desc">
        <div className="ex-desc-text">
        Text
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter Description" value={description}onChange={e => setDescription(e.target.value)}></input>
        </div>
        <div className="ex-amount-text">
        Amount <span className="note"> (negative : Expense, positive : Income, default: Income)</span>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter Amount" value={amount} onChange={e => setAmount(e.target.value)}></input>
        </div>
        <div className="button-area">

        <button type="submit" onClick={() => handleAddTransaction()}>Add Transaction</button>
        </div>
      </div>
    </div>
  )
}
