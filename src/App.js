import { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { CalcForm, CalcList, CalcBudget, Alert } from "./components/";
import './styles.scss';
function initialStorage(props) {
  const initialValue = localStorage.getItem(`${props}`) ? JSON.parse(localStorage.getItem(`${props}`)) : []
  return initialValue;
}
export default function App() {
  const [expenses, setExpenses] = useState(initialStorage('expenses'));
  const [income, setIncome] = useState(initialStorage('income'));
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [categoryChecked, setCategory] = useState("Work");
  const category = [
    "Work",
    "Journey",
    "Gym",
    "Food",
    "Contract",
    "Something else"
  ];
  const [budget, setBudget] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [cash, setCash] = useState(0);
  const incomeRef = useRef();
  const outcomeRef = useRef();

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
    localStorage.setItem("income", JSON.stringify(income));
  }, [expenses, income]);
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 1500);
  };
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleBudget = (e) => {
    if (e.target.value === "income") {
      incomeRef.current.className = "income_checked";
      outcomeRef.current.className = "outcome";
    }
    if (e.target.value === "outcome") {
      outcomeRef.current.className = "outcome_checked";
      incomeRef.current.className = "income";
    }
    setBudget(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const clearItems = () => {
    setExpenses([]);
    setIncome([]);
    handleAlert({ type: "danger", text: "Deleted" });
  };
  const handleDeleteIncome = (id) => {
    let tempIncome = income.filter((item) => item.id !== id);
    setIncome(tempIncome);
    handleAlert({ type: "danger", text: "Deleted" });
  };
  const handleDeleteExpense = (id) => {
    let tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "Deleted" });
  };
  const calcBudget = () => {
    let budgetCash = 0;
    income.map((e) => (budgetCash = budgetCash + parseInt(e.amount, 0)));
    expenses.map((e) => (budgetCash = budgetCash - parseInt(e.amount, 0)));
    setCash(budgetCash);
    if (cash >= 0) {
      return <h4 className="green_budget"> {budgetCash} $</h4>;
    } else {
      return <h4 className="red_budget"> {budgetCash} $</h4>;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0 && budget !== "") {
      setCharge("");
      setAmount("");
      if (budget === "income") {
        const singleIncome = { id: uuidv4(), charge, amount, categoryChecked };
        setIncome([...income, singleIncome]);
        handleAlert({ type: "success", text: "Item added" });
      }
      if (budget === "outcome") {
        const singleExpense = { id: uuidv4(), charge, amount, categoryChecked };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "Item added" });
      }
    } else {
      // Handle alert called
      handleAlert({
        type: "danger",
        text: "Input cant have empty value"
      });
    }
  };
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1 className="title">Calculate your budget</h1>
      <main className="app">
        <CalcForm
          charge={charge}
          amount={amount}
          category={category}
          incomeRef={incomeRef}
          outcomeRef={outcomeRef}
          handleCategory={handleCategory}
          handleBudget={handleBudget}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <CalcList
          income={income}
          expenses={expenses}
          handleDeleteIncome={handleDeleteIncome}
          handleDeleteExpense={handleDeleteExpense}
          clearItems={clearItems}
        />
        <CalcBudget cash={cash} calcBudget={calcBudget} />
      </main>
    </>
  );
}
