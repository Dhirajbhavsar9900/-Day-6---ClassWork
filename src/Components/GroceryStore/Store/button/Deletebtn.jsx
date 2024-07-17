
function Deletebtn({item, onDelete}) {
  
  const handleDelete = ()=>{
    onDelete(item);
  }
  return (
    <div>
        <button className="bg-red-500 p-2 px-5 rounded-lg hover:bg-red-700 hover:transition-all" onClick={handleDelete}>
            <span className=" font-sans text-white font-semibold text-[15px]">Remove</span>
        </button>
    </div>
  )
}

export default Deletebtn
