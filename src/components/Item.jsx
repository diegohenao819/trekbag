const Item = ({ item, handleDeleteItem, markChecked }) => {
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
