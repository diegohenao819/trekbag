import { useItemsStore } from "../stores/itemsStore";


const Header = () => {
    const items = useItemsStore((state) => state.items);
    return (
        <div className="header">

            <div className="logo">
                <img src="https://bytegrad.com/course-assets/react-nextjs/dots.png" />;
            </div>


            <div className="counter">
                <span> <b> {items.filter((item) => item.packed).length} </b>/ {items.length} Items packed</span>
            </div>

        </div>
    )
}

export default Header