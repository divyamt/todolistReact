import React, { useState } from "react";

function App() {
  const [text, textOp] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    textOp(newValue);
  }

  function clickMe() {
    setItems((prevValue) => {
      return [...prevValue, text];
    });
    textOp("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={text} onChange={handleChange} type="text" />
        <button onClick={clickMe}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
