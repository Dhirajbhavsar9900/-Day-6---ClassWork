import { useEffect, useState } from "react";
import Store from "../Store/Store";
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Input() {
  const [text, setText] = useState("");
  const [submitText, setSubmitText] = useState([]);



  useEffect(() => {
    const storing = JSON.parse(localStorage.getItem("submit-text")) || []
    setSubmitText(storing)
  },[]);
  // useEffect(() => {
    
  // }, [submitText]);
 
  const handleText = (e) => {
    let value = e.target.value;
    setText(value);
  };
  // console.log(submitText);
  // const submit = () => {
  // 
  // };

  const handleadd = () => {
    let value = text;
      if (value.trim() === ""){
        toast.error("Please Add Your Item");
      }
      else{
        setSubmitText([...submitText, text]);
        localStorage.setItem('submit-text', JSON.stringify(submitText));
        setText("");
        // console.log(value);
        toast.success("Item Added Successfully!")
        console.log(submitText);
      }
  };

  const handleDelete = (itemToRemove) => {
    const updatedList = submitText.filter((item) => item !== itemToRemove);
    setSubmitText(updatedList);
    toast.success('Item Removed Successfully!');
  };


  // console.log(submitText)

  return (
    <>
      <div className=" flex items-center justify-center m-3 ">
        <input
          type="text"
          className="p-3 bg-black text-white font-mono rounded-lg"
          placeholder="Add Your Items"
          value={text}
          onChange={handleText}
        />
        <button className="p-3 px-5 mx-2 bg-black rounded-xl " onClick={handleadd}>
        <span
          className=" text-[16px] text-white font-semibold"
        >
          Add
        </span>
        </button>
      </div>
       <div className="mt-10">
        {submitText.length > 0 && 
          submitText.map((item, id) => {
            return <Store item={item} key={id} onDelete={handleDelete} />;
          })}
      </div>
      <ToastContainer />
    
    </>
  );
}

export default Input;
