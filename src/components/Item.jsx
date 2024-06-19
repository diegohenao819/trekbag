import { useItemsStore } from "../stores/itemsStore";

const Item = ({ item}) => {
  const markChecked = useItemsStore((state)=> state.markChecked);
  const handleDeleteItem = useItemsStore((state)=> state.handleDeleteItem);
  

  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => markChecked(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
