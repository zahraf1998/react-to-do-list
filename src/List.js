import Item from "./Item";
export default function List({ items }) {
  return (
    <div className="List">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </div>
  );
}
