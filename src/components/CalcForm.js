import { MdSend } from "react-icons/md";
import React from "react";
const CalcForm = React.forwardRef(
  ({
    incomeRef,
    outcomeRef,
    charge,
    amount,
    category,
    handleAmount,
    handleCharge,
    handleSubmit,
    handleBudget,
    handleCategory
  }) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-container'>
          <div className="form-group">
            <label htmlFor="charge">charge</label>
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              placeholder="e.g. rent"
              value={charge}
              onChange={handleCharge}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">amount</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              placeholder="e.g. 100"
              value={amount}
              onChange={handleAmount}
            />
          </div>
          <div className="form-group">
            <select name="category" onChange={handleCategory}>
              {category.map((elem) => {
                return (
                  <option key={Math.random()} value={elem}>
                    {elem}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="radio-group">
          <label className="income" ref={incomeRef}>
            Income
            <input
              type="radio"
              name="budget"
              value="income"
              onClick={handleBudget}
            />
          </label>
          <label className="outcome" ref={outcomeRef}>
            Outcome
            <input
              type="radio"
              name="budget"
              value="outcome"
              onClick={handleBudget}
            />
          </label>
        </div>
        <button type="submit" className="btn">
          Submit
          <MdSend className="btn-icon" />
        </button>
      </form>
    );
  }
);
export default CalcForm;
