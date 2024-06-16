import  { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import "./index.css";
import { initialItems } from "./lib/constants";

function App() {

  const [items, setItems] = useState(initialItems);
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items}/>
        <Sidebar setItems={setItems}/>
      </main>
    </>
  );
}

export default App;
