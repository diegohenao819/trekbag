import { useItemsStore } from "../stores/itemsStore";
import AddItemForm from "./AddItemForm"
import ButtonGroup from "./ButtonGroup"


const Sidebar = () => {
  const setItems = useItemsStore((state) => state.setItems);
  return (
    <div className="sidebar">
        <AddItemForm setItems={setItems} />
        <ButtonGroup 
        
        />
        
    </div>
  )
}

export default Sidebar