import { useState } from "react";
import List from "./List";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setItems([
      ...items,
      {
        title: input,
        status: "undone",
      },
    ]);
  }
  return (
    <div className="App">
      <div className="app-container rounded m-2 p-4 bg-light">
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="To Do ..."
            className="form-control me-1"
            autoComplete="off"
            onChange={handleChange}
          ></input>
          <input type="submit" className="btn btn-dark" value="Add"></input>
        </form>
        <List items={items} />
      </div>
    </div>
  );
}

export default App;
