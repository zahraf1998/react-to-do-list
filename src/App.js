import { useState } from "react";
import List from "./List";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [editedItem, setEditedItem] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addItem = (inputValue) => {
    setItems([
      ...items,
      {
        id: Math.round(Math.random() * 10000),
        title: inputValue,
        done: false,
      },
    ]);
  };

  const editItem = (title, id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) item.title = title;
        return item;
      })
    );
    setEditedItem(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = input.trim();

    if (inputValue)
      editedItem ? editItem(inputValue, editedItem.id) : addItem(inputValue);

    setInput("");
  };

  return (
    <div className="App">
      <div className="app-container rounded m-2 p-4 bg-light">
        <h1 className="text-center m-3">Todo List</h1>

        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="To Do ..."
            value={input}
            className="form-control me-1"
            autoComplete="off"
            onChange={handleChange}
          ></input>
          <button type="submit" className="btn btn-dark">
            {editedItem ? "Edit" : "Add"}
          </button>
        </form>

        <List
          items={items}
          setItems={setItems}
          setEditedItem={setEditedItem}
          setInput={setInput}
        />
      </div>
    </div>
  );
}

export default App;
