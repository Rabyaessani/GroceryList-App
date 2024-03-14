import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import {ToastContainer,toast} from 'react-toastify'

// const getLocalStorage = () => {
//   let list = localStorage.getItem("Grocerylist");
//   //console.log(list)
//   if (list) {
//     list = JSON.parse(localStorage.getItem("Grocerylist"));
//   } else {
//     list = [];
//   }
//   return list;
// };

const setLocalStorage = (item) => {
  localStorage.setItem("Grocerylist", JSON.stringify(item));
};
//One liner for above function
const defaultList = JSON.parse(localStorage.getItem("Grocerylist") || "[]");
const App = () => {
  //This is for Item list
  const [items, setItem] = useState(defaultList);

  const AddItem = (ItemName) => {
    const newItem = {
      name: ItemName,
      Id: nanoid(),
      completed: false,
    };
    const newItems = [...items, newItem];
    setItem(newItems);
    setLocalStorage(newItems);
    toast.success('Item added to the list')

  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.Id !== itemId);
    setItem(newItems);
    setLocalStorage(newItems);
    toast.info('Item deleted from the list')
  };
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.Id === itemId) {
        const newItem = {...item,completed:!item.completed};
        return newItem;
      }
      return item;
    });
    setItem(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className="section-center">
      <ToastContainer position='top-center'></ToastContainer>
      <Form AddItem={AddItem}></Form>
      <Items items={items} removeItem={removeItem} editItem={editItem}></Items>
    </section>
  );
};

export default App;
