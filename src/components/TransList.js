import React, { useContext } from 'react';
import { MyContext } from '../context/Global';

const TransList = ({ transaction }) => {
    const { delItem } = useContext(MyContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>{transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => delItem(transaction.id)} className="delete-btn">{<div class="circle-wrapper">
                <div class="error circle"></div>
                <div class="icon">
                    <i class="fa fa-times"></i>
                </div>
            </div>}</button>
        </li>
    )
}
export default TransList