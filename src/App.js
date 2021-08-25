import Header from './components/Header.js';
import Main from './components/Main.js';
import Cart from './components/Cart.js';
import data from './data';
import { useState } from 'react';

function App() {
  const {items} = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (item) => {
    const exists = cartItems.find(x => x.id === item.id);
    if(exists){
      setCartItems(cartItems.map(x => x.id === item.id ? {...exists, qty: exists.qty +1}:x));
    }else{
      setCartItems([...cartItems, {...item, qty: 1}]);
    }
  }
  const onRemove = (item) => {
    const exists = cartItems.find((x) => x.id === item.id);
    if(exists.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    }else{
      setCartItems(cartItems.map(x => x.id === item.id ? {...exists, qty: exists.qty -1}:x));
    }

  }
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main onAdd={onAdd} items={items}></Main>
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Cart>
      </div>
    </div>
  );
}

export default App;
