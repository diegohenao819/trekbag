

const Header = ({totalItems, totalChecked}) => {
    return (
        <div className="header">

            <div className="logo">
                <img src="https://bytegrad.com/course-assets/react-nextjs/dots.png" />;
            </div>


            <div className="counter">
                <span> <b> {totalChecked} </b>/ {totalItems} Items packed</span>
            </div>

        </div>
    )
}

export default Header