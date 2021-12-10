import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.filteredExpenses.length === 0) {
    return <h1 className="expenses-list__fallback">No Expenses Found!</h1>;
  }
  return (
    <div className="expenses-list">
      {props.filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        );
      })}
    </div>
  );
}
export default ExpensesList;
