import React, { useState } from "react";
import {toast} from 'react-toastify'

const Form = ({ AddItem }) => {
    //This is for Item Name from input
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItemName.trim().length === 0) {
      toast.error('empty value')
      return};
    //Function called which will add this item in list of Items
    AddItem(newItemName);
    setNewItemName('')
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery List</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          Add item
        </button>
      </div>
    </form>
  );
};

export default Form;
