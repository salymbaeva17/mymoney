import React from 'react';
import BalanceInfo from "./components/BalanceInfo";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import Header from "./components/Header";
import {Container} from "@mui/material";

const App = () => {

    return (
        <>
            <Header/>
            <Container maxWidth="xl">
                <h1 className="my-3">Ваш лист расходов</h1>
                <BalanceInfo/>
                <ExpensesForm/>
                <ExpensesList/>
            </Container>
        </>
    );
};

export default App;
