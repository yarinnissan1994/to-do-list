import React, { useEffect, useState } from "react";
import { AddNewItem } from "../addNewItem/addNewItem.component";
import { WorkItem } from "../workItem/workItem.component";

let idCount = 0;

export const ToDoList = () => {
  const [itemsArr, setItemsArr] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleAdd = () => {
    let newItem = {
      id: idCount,
      content: userInput,
    };
    idCount++;
    setItemsArr((prev) => [...prev, newItem]);
    setUserInput("");
  };

  const handleReset = () => {
    setItemsArr([]);
    setUserInput("");
  };

  const handleDone = (id) => {
    let filterArr = itemsArr.filter((c) => c.id !== id);
    setItemsArr(filterArr);
  };

  return (
    <div className="ToDoList">
      <h1>My To Do List</h1>
      <AddNewItem
        handleAdd={handleAdd}
        handleReset={handleReset}
        setUserInput={setUserInput}
        userInput={userInput}
      ></AddNewItem>
      <div>
        {itemsArr &&
          itemsArr.map((item) => {
            console.log(itemsArr);
            return (
              <WorkItem
                id={item.id}
                taskContent={item.content}
                doneFunc={handleDone}
              ></WorkItem>
            );
          })}
      </div>
    </div>
  );
};
