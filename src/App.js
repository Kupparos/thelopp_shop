import Catalog from "./components/catalog/Catalog";
import Colections from "./components/colections/Colections";
import FirstScreen from "./components/first-screen/FirstScreen";
import Footer from "./components/footer/Footer";
import FreeShiping from "./components/free-shiping/FreeShiping";
import NewItem from "./components/new-item/NewItem";
import SaleItem from "./components/sale-item/SaleItem";
import Subscribe from "./components/subscribe/Subscribe";
import './index.css'

function App() {
  return (
    <div className="App">
      <FirstScreen/>
      <FreeShiping/>
      <Colections/>
      <Catalog/>
      <NewItem/>
      <Subscribe/>
      <SaleItem/>
      <Footer/>
    </div>
  );
}

export default App;
