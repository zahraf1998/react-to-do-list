import Item from "./Item";
export default function List({ items, setItems, setEditedItem, setInput }) {
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const completeItem = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) item.done = !item.done;
        return item;
      })
    );
  };

  const editItem = (id) => {
    const editedItem = items.find((item) => item.id === id);
    setInput(editedItem.title);
    setEditedItem(editedItem);
  };

  return (
    <div className="List">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          completeItem={completeItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
}
