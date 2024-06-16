
import Button from "./Button";

const ButtonGroup = ({handleDeleteAll, resetAll, markAllComplete, markAllIncomplete}) => {
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
