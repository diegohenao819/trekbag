import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import "./index.css";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleDeleteAll = () => {
    setItems([]);
  };

  const handleDeleteItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const resetAll = () => {
    setItems(initialItems);
  };

  const markAllComplete = () => {
    const updatedItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(updatedItems);
  };

  const markAllIncomplete = () => {
    const updatedItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(updatedItems);
  };

  const markChecked = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          totalItems={items.length}
          totalChecked={items.filter((item) => item.packed == true).length}
        />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          markChecked={markChecked}
        />
        <Sidebar
          setItems={setItems}
          handleDeleteAll={handleDeleteAll}
          resetAll={resetAll}
          markAllComplete={markAllComplete}
          markAllIncomplete={markAllIncomplete}
        />
      </main>
    </>
  );
}

export default App;
