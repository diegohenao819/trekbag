
import Item from "./Item";

const ItemList = ({items}) => {


  return (
    <ul>
      {items.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </ul>
  );
};

export default ItemList;
