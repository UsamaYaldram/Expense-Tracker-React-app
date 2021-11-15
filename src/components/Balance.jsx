import React,{useContext} from 'react';
import { MyContext } from '../context/Global';

const Balance = () => {
const {transaction} = useContext(MyContext);

const amount = transaction.map(transaction => transaction.amount);
const sum = amount.reduce((acc,current)=>(
    acc += current
),0).toFixed(2);
    return (
        <> 
           <h4>Current Balance</h4>
            <h1 className="rainbow " id="balance">${sum}</h1>
        </>
    )
}

export default Balance