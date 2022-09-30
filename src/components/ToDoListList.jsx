import React, { useState } from "react";
import { ToDoList } from "./ToDoList";

export function ToDoListList() {
  const [listList, setListList] = useState([]);

  const addNewList = function(event) {
    setListList(listList.concat(<ToDoList key={listList.length} />))
  };


  return (
    <div className="lists-container">
      <div className="todo-list-list">
        {listList}
      </div>
      <button className="add-list" onClick={addNewList}>Create a To-Do List App</button>  
    </div>
  )
}