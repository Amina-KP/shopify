import "./App.css";
import {Cart} from "./pages/cart/Cart.jsx";
import {Shop} from "./pages/shop/Shop.jsx"
import  Navbar  from "./components/Navbar"; // Adjust path if needed
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/ShopContext.jsx";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop/>} />
            <Route path="/cart" element={<Cart/>}  />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
