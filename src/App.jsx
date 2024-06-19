import BackgroundHeading from "./components/BackgroundHeading";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {




  return (
    <>
      <BackgroundHeading />
      <main>
        <Header/>
        <ItemList />
        <Sidebar/>
      </main>
    </>
  );
}

export default App;
