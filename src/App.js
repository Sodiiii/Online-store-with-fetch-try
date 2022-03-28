import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import { Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products/:cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
