
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
      axios.get("https://fakestoreapi.com/products").then((response) => {
          setProducts(response.data);
      })
  }, []);

  useEffect(() => {
    const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cartItems'));
    

    if(cartItemsFromLocalStorage === null){
      return;
    }
    setCount(cartItemsFromLocalStorage.length);
    setItems(cartItemsFromLocalStorage);
  }, []);

  const handleAddToCart = (product) => {
    let newItemsList = [...items, product];
    localStorage.setItem('cartItems', JSON.stringify(newItemsList));
    setItems(newItemsList);
    setCount(newItemsList.length || 0);
  };


  return (
    <>
      
      <BrowserRouter>
        <NavBar count={count}/>
        <Routes>
          <Route path="/" element={<Home products={products}
                                        handleAddToCart={handleAddToCart}/>}></Route>
          <Route path="/cart" element={<Cart items={items} 
                                            setItems={setItems}
                                            count={count}
                                            setCount={setCount}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;
