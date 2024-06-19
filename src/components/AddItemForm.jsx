import { useRef, useState } from "react";
import Button from "./Button";


const AddItemForm = ({setItems}) => {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();



  const handleChange = (e) => {
    setItemText(e.target.value);
  };

 const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    setItems(itemText);
    setItemText("");
  };


  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        autoFocus
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
