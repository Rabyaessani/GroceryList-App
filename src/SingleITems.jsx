import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const SingleITems = ({ item, removeItem,editItem }) => {
 
  return (
    <div className="single-item">
      <input
        type="checkbox"
        name="chekbox"
        id="chekbox"
        checked={item.completed}
        onChange={() => editItem(item.Id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </p>
      <button className="remove-btn btn" onClick={() => removeItem(item.Id)}>
        <AiFillDelete></AiFillDelete>
      </button>
    </div>
  );
};

export default SingleITems;
