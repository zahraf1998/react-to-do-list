export default function Item({ item }) {
  return (
    <div className="d-flex justify-content-between m-3 p-1 rounded shadow-sm border-start border-5 border-dark ">
      <h5 className="pt-2 ps-2">{item.title}</h5>
      <div>
        <button className="btn">Edit</button>
        <button className="btn">Done</button>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}
