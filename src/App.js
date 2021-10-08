import React from 'react';
import BalanceInfo from "./components/BalanceInfo";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import Header from "./components/Header";

const App = () => {

    return (
        <>
            <Header/>
            <div className="container">
                <BalanceInfo/>
                <ExpensesForm/>
                <ExpensesList/>
            </div>
        </>
    );
};

export default App;
