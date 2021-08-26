const CalcBudget = ({ cash }) => {
    return (
        <h1 className='sum'>
            Total budget:
            <span className={cash >= 0 ? 'green_budget' : 'red_budget'} value={cash}>{cash}$</span>
        </h1>
    );
};
export default CalcBudget;
