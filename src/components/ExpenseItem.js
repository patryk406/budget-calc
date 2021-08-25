import React from "react";
import { MdDelete } from "react-icons/md";
const ExpenseItem = ({ expense, handleDeleteExpense }) => {
  const { id, charge, amount, categoryChecked } = expense;
  return (
    <li className="item" key={id}>
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount red_budget">${amount}</span>
        <span className="category">{categoryChecked}</span>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDeleteExpense(id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
