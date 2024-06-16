import { useRef, useState } from "react";
import Button from "./Button";

const AddItemForm = ({ setItems }) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    setItemText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText.trim()) {
      return;
    }

    console.log(inputRef.current.value);

    const newItem = {
      id: Date.now(),
      name: itemText,
      packed: false,
    };

    setItems((prev) => [...prev, newItem]);
    setItemText("");

    inputRef.current.focus();
  };

  const [itemText, setItemText] = useState("");
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
