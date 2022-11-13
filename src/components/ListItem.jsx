import {useState} from "react";

export function ListItem() {
  const [itemText, setItemText] = useState();

  const updateText = function(event) {
    event.preventDefault();
    setItemText(event.target.value);
  }

  return (
    <>
    <div>
      <input value={itemText} onChange={updateText}></input>
    </div>
    </>
  )
};