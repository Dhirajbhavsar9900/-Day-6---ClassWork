import { useState } from "react"

function Deletebtn({submitText}) {
  const [remove , setRemove ] = useState(submitText);

  const Empty = ()=>{
    let value = remove;
    
    setRemove(value)
    console.log(value);
  }
  return (
    <div>
        <button className="bg-red-500 p-2 px-5 rounded-lg hover:bg-red-700 hover:transition-all " onClick={Empty}>
            <span className=" font-sans text-white font-semibold text-[15px]">Remove</span>
        </button>
    </div>
  )
}

export default Deletebtn
