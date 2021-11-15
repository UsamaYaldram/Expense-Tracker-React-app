import React, { useContext } from 'react';
import { MyContext } from '../context/Global';
import '../App.css';

export default function Dashboard() {
    const { transaction } = useContext(MyContext);
    const amount = transaction.map(transaction => transaction.amount);
    const income = amount.filter((item) => item > 0).reduce((acc, cur) => {
        return acc + cur;
    }, 0).toFixed(2);
    const expence = amount.filter((item) => item < 0).reduce((acc, cur) => {
        return acc + cur;
    }, 0).toFixed(2);
    return <>
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    ${income}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    ${Math.abs(expence)}
                </p>
            </div>
        </div>
    </>
}

