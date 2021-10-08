import React from 'react';
import "./style.css"
import {useSelector} from "react-redux";

const BalanceInfo = () => {
    const {initialAmount, costs, currentBalance} = useSelector(s => s.tasks)
    return (
        <div className="my-5">
            <h1 className="my-3">Ваш лист расходов</h1>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="money">{initialAmount} $</p>
                        </div>
                        <div className="card-body dark-green">
                            <p className="balance-text">Начальная сумма</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="money">{costs} $</p>
                        </div>
                        <div className="card-body red">
                            <p className="balance-text">Потрачено</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="money">{currentBalance} $</p>
                        </div>
                        <div className="card-body green">
                            <p className="balance-text">Остаток</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BalanceInfo;