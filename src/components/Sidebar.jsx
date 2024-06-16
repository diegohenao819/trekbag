import AddItemForm from "./AddItemForm"
import ButtonGroup from "./ButtonGroup"


const Sidebar = ({setItems, handleDeleteAll, resetAll, markAllComplete, markAllIncomplete}) => {
  return (
    <div className="sidebar">
        <AddItemForm setItems={setItems} />
        <ButtonGroup 
        handleDeleteAll = {handleDeleteAll}
        resetAll = {resetAll}
        markAllComplete = {markAllComplete}
        markAllIncomplete = {markAllIncomplete}
        
        />
        
    </div>
  )
}

export default Sidebar