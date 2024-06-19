
import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

const ButtonGroup = () => {
  const markAllComplete = useItemsStore((state) => state.markAllComplete);
  const markAllIncomplete = useItemsStore((state) => state.markAllIncomplete);
  const resetAll = useItemsStore((state) => state.resetAll);
  const handleDeleteAll = useItemsStore((state) => state.handleDeleteAll);
  
  return (
    <section className="button-group">
      <Button onClick={markAllComplete}>Mark all as Complete</Button>
      <Button onClick={markAllIncomplete}>Mark all as Incomplete</Button>
      <Button onClick={resetAll}>Reset to Initial</Button>
      <Button onClick={handleDeleteAll}>Remove all Items</Button>
      
    </section>
  );
};

export default ButtonGroup;
