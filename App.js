import Cart from "./components/cart";
import Hardware from "./components/Hardware";
import Home from "./components/Home";
import Jwels from "./components/Jwels";
import Navbarr from "./components/Navbarr";
import Product from "./components/Product";


function App(){
  return (
    <div className="App">
    <Cart/>
    <Hardware/>
    <Home/>
    <Jwels/>
    <Navbarr/>
    <Product/>
    </div>
  );
}

export default App;