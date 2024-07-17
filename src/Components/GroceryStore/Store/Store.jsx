import Deletebtn from "./button/Deletebtn";

function Store({ item, submitText }) {
  // const [submitText , setSubmitText] = useState([]);

  // const submit = ()=>{
  //     let value = text;
  //     if (text.trim() === '') return;
  //     setSubmitText([...submitText, text])
  //     setText("")
  //     console.log(value);
  // }  

  return (
    <div className="flex justify-between my-2 items-center mx-5">
      <h1 className="text-[20px] font-sans font-semibold p-3">{item}</h1>
      <Deletebtn submitText={submitText} />
    </div>
  );
}

export default Store;
