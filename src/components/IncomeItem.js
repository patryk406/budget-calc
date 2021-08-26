import React from "react";
import { MdDelete } from "react-icons/md";
const IncomeItem = ({ income, handleDeleteIncome }) => {
  const { id, charge, amount, categoryChecked } = income;
  return (
    <li className="item" key={id}>
      <div className="info">
        <span className="expense">{charge}</span>
        <div className='info-group'>
          <span className="amount green_budget">${amount}</span>
          <span className="category">{categoryChecked}</span>
          <button
            className="clear-btn"
            aria-label="delete button"
            onClick={() => handleDeleteIncome(id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </li>
  );
};

export default IncomeItem;
