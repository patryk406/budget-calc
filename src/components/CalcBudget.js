const CalcBudget = ({ cash, calcBudget }) => {
    return (
        <h1>
            Total budget:
            <span className="total">{calcBudget()}</span>
        </h1>
    );
};
export default CalcBudget;
