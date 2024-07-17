import Deletebtn from "./button/Deletebtn";

function Store({ item, onDelete }) {
  return (
    <div className="flex justify-between my-2 items-center mx-5">
      <h1 className="text-[20px] font-sans font-semibold p-3">{item}</h1>
      <Deletebtn item={item} onDelete={onDelete}  />
    </div>
  );
}

export default Store;
