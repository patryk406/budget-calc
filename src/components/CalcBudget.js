const CalcBudget = ({ cash, calcBudget }) => {
    return (
        <h1 className='sum'>
            Total budget:
            <span className="total">{calcBudget()}</span>
        </h1>
    );
};
export default CalcBudget;
