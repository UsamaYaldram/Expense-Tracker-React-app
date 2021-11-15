import React, {useContext} from 'react';
// import {AiFillDelete} from "react-icons/ai";
import { MyContext } from '../context/Global';
import TransList from './TransList';
import '../App.css';

const TranHistory = () => {

const {transaction} = useContext(MyContext);

    return (
        <div>
            <h3>Expense Record</h3>
            <ul className="list">
                {transaction.map(transaction => (<TransList key={transaction.id} transaction={transaction}/>))}               
            </ul>
        </div>
    )
}

export default TranHistory
