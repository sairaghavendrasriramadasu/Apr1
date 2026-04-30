import React, { useContext } from "react";
import { DataContext } from "../../Context";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartproducts, setCartproducts, isLogin } = useContext(DataContext);
  const navigate = useNavigate()

  const removeItem = (id) => {
    setCartproducts(cartproducts.filter((item) => item.id !== id));
  };

  const increaseQty = (id) => {
    setCartproducts(
      cartproducts.map((item) =>
        item.id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartproducts(
      cartproducts.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const total = cartproducts.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  if (!isLogin) return navigate('/login') 

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartproducts.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartproducts.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt="" />

                <div className="cart-details">
                  <h4>{item.title}</h4>
                  <p className="price">${item.price}</p>

                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty || 1}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>

                <div className="cart-actions">
                  <p>${(item.price * (item.qty || 1)).toFixed(2)}</p>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}