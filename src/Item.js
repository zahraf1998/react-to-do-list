import { CgRemoveR } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { MdDoneOutline } from "react-icons/md";
export default function Item({ item, deleteItem, completeItem, editItem }) {
  return (
    <div className="d-flex justify-content-between m-3 p-1 rounded shadow-sm border-start border-5 border-dark ">
      <h5
        className={`pt-2 ps-2 ${
          item.done ? "text-decoration-line-through" : ""
        }`}
      >
        {item.title}
      </h5>
      <div>
        <button className="btn" onClick={() => editItem(item.id)}>
          <FiEdit />
        </button>
        <button className="btn" onClick={() => completeItem(item.id)}>
          <MdDoneOutline />
        </button>
        <button className="btn" onClick={() => deleteItem(item.id)}>
          <CgRemoveR />
        </button>
      </div>
    </div>
  );
}
