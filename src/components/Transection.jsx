import React, { useState, useContext } from 'react';
import { MyContext } from '../context/Global';
import '../App.css';

const Transection = () => {
  const [text, settext] = useState("");
  const [amount, setamount] = useState(0);

  const { addItem } = useContext(MyContext);

  const onsubmit = (e)=>{
    e.preventDefault();
    
    const newTransection = {
      id: new Date().getTime().toString(),
      text,
      amount: +amount
    }
    addItem(newTransection); 
    settext("");
    setamount("");
  }

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onsubmit}>
        <div className="form-control">
          <label>Description</label><br />
          <input type="text" required placeholder="Detail Of Transaction" value={text} onChange={(e) => settext(e.target.value)} /><br />
        </div>
        <div className="form-control">
          <label>Transaction Amount</label><br />
          <input type="number" required placeholder="Dollar Value Of Transaction" value={amount} onChange={(e) => setamount(e.target.value)} /><br />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  )
}

export default Transection
