function Deletebtn({ item, onDelete }) {
  return (
    <button
      onClick={() => onDelete(item)}
      className="p-2 bg-red-500 text-white rounded-lg"
    >
      Delete
    </button>
  );
}

export default Deletebtn;
