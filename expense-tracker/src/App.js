import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { useEffect, useState } from 'react';
import { Overview } from './Components/Overview';
import { ExpenseHistory } from './Components/ExpenseHistory';
import { AddExpense } from './Components/AddExpense';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

// import { Toast } from 'react-toastify/dist/components';
function App() {

  // const [balance, setBalance] = useState(parseFloat(localStorage.getItem("Balance") ? localStorage.getItem("Balance") : 0));
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [displayIncome, setDisplayIncome] = useState(0);
  const [displayExpense, setDisplayExpense] = useState(0);
  const [transaction, setTransaction] = useState({
    type:"",
    value:"",
    description:""
  })
  const [history, setHistory] = useState([
		// {
		// 	type: "expense",
		// 	description:"Food",
		// 	value: 100,
		// },
		// {
		// 	type: "income",
		// 	description:"Cash",
		// 	value: 120,
		// },
		// {
		// 	type: "income",
		// 	description:"Salary",
		// 	value: 1440,
		// },
	])

  const downloadTransactionHistory = () => {
    
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const fileName = "transactionHistory"
    const ws = XLSX.utils.json_to_sheet(history);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], {type: fileType});
    FileSaver.saveAs(data, fileName + fileExtension);

  }
  const notify = (message) => {
    toast.success(message);
  }
  useEffect(() => {
    if(income !== 0){
      setBalance(prev => parseFloat(prev) + parseFloat(income));
      // setIncome(prev => parseFloat(prev) + parseFloat(income));
      setIncome(0);
      notify("Income Added!")
    }else if(expense !== 0){
      setBalance(prev => parseFloat(prev) - parseFloat(expense));
      // setExpense(prev => parseFloat(prev) + parseFloat(expense));
      setExpense(0);
      notify("Expense Added!")
    }
    return () => {
      localStorage.setItem("Balance",balance);
      localStorage.setItem("ExpenseHistory", history);
    }
  },[transaction])


  return (
    <div>
      <Header/>
      <div className="container">
        <Balance balance={balance} setBalance={setBalance}/>
        <Overview income={displayIncome} expense={displayExpense}/>
        <ExpenseHistory history={history}/>
        <AddExpense setDisplayIncome={setDisplayIncome} setDisplayExpense={setDisplayExpense} setTransaction={setTransaction} setHistory={setHistory} setIncome={setIncome} setExpense={setExpense}/>
        <div className="button-area">
          <button type="submit" onClick={() => downloadTransactionHistory()}>Download Transaction History</button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;
