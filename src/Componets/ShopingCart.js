import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function ShoppingCart() {

  const [cart, setCart] = useState([]);

 
  const sampleItems = [
    { id: 1, name: 'Apple', price: 1.00 },
    { id: 2, name: 'Banana', price: 0.50 },
    { id: 3, name: 'Cherry', price: 0.75 },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
    
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <div className="shopping-cart-container" style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Shopping Cart</h2>
      <div>
        <h3>Available Items</h3>
        {sampleItems.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>{item.name} - ${item.price.toFixed(2)}</span>
            <button onClick={() => addToCart(item)} className='btn btn-primary'>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {cart.map((item) => (
            <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>{item.name}</span>
              <div>
                <button onClick={() => decreaseQuantity(item.id)} className='btn btn-success' >
                  -
                </button>
                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className='btn btn-success' >
                  +
                </button>
                <button onClick={() => removeItem(item.id)} className='btn btn-danger mx-3'>
               <DeleteIcon/>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


export default ShoppingCart;
