import ExpenseItem from "./ExpenseItem";
import IncomeItem from "./IncomeItem";
import { MdDelete } from "react-icons/md";
const CalcList = ({
  income,
  expenses,
  handleDeleteIncome,
  handleDeleteExpense,
  clearItems
}) => {
  return (
    <div className="budgetList">
      <div className="expenseList">
        <h3>Expense List:</h3>
        <ul className="list">
          {expenses.map((expense) => {
            return (
              <ExpenseItem
                key={`expense--${expense.id}`}
                expense={expense}
                handleDeleteExpense={handleDeleteExpense}
              />
            );
          })}
        </ul>
        {expenses.length > 0 && (
          <button className="btn" value='expenses' onClick={clearItems}>
            clear all expenses
            <MdDelete className="btn-icon" />
          </button>
        )}
      </div>
      <div className="incomeList">
        <h3>Income List:</h3>
        <ul className="list">
          {income.map((income) => {
            return (
              <IncomeItem
                key={`income--${income.id}`}
                income={income}
                handleDeleteIncome={handleDeleteIncome}
              />
            );
          })}
        </ul>
        {income.length > 0 && (
          <button className="btn" value='income' onClick={clearItems}>
            clear all income
            <MdDelete className="btn-icon" />
          </button>
        )}
      </div>
    </div>
  );
};
export default CalcList;
