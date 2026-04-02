import React, { useEffect, useState } from "react";
import "./Checkout.css";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);

  // LOAD CART FROM LOCALSTORAGE
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // CALCULATE TOTAL
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bn-checkout">
      <div className="bn-container">
        
        {/* LEFT SIDE */}
        <div className="bn-left">
          <h1 className="bn-brand">Qx Shooz ( Password : 1 )</h1>

          {/* CONTACT */}
          <div className="bn-section">
            <div className="bn-section-header">
              <h2>Contact</h2>
              <a href="#">Sign in</a>
            </div>

            <input
              type="text"
              placeholder="Email or mobile phone number"
              className="bn-input"
            />

            <label className="bn-checkbox">
              <input type="checkbox" />
              Email me with news and offers
            </label>
          </div>

          {/* DELIVERY */}
          <div className="bn-section">
            <h2>Delivery</h2>

            <select className="bn-input">
              <option>Australia</option>
            </select>

            <div className="bn-row">
              <input placeholder="First name (optional)" className="bn-input" />
              <input placeholder="Last name" className="bn-input" />
            </div>

            <input placeholder="Address" className="bn-input" />
            <input
              placeholder="Apartment, suite, etc. (optional)"
              className="bn-input"
            />

            <div className="bn-row">
              <input placeholder="Suburb" className="bn-input" />
              <select className="bn-input">
                <option>State/territory</option>
              </select>
              <input placeholder="Postcode" className="bn-input" />
            </div>

            <label className="bn-checkbox">
              <input type="checkbox" />
              Save this information for next time
            </label>
          </div>

          {/* SHIPPING */}
          <div className="bn-section">
            <h2>Shipping method</h2>
            <div className="bn-shipping-box">
              Enter your shipping address to view available shipping methods.
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bn-section">
            <h2>Payment</h2>
            <p className="bn-muted">
              All transactions are secure and encrypted.
            </p>

            <div className="bn-payment-box">
              <div className="bn-payment-header">
                <span>Credit card</span>
                <div className="bn-cards">
                  <span className="bn-card">VISA</span>
                  <span className="bn-card">MC</span>
                  <span className="bn-card">AMEX</span>
                  <span className="bn-card">+3</span>
                </div>
              </div>

              <input className="bn-input" placeholder="Card number" />

              <div className="bn-row">
                <input
                  className="bn-input"
                  placeholder="Expiration date (MM / YY)"
                />
                <input className="bn-input" placeholder="Security code" />
              </div>

              <input className="bn-input" placeholder="Name on card" />

              <label className="bn-checkbox">
                <input type="checkbox" defaultChecked />
                Use shipping address as billing address
              </label>
            </div>

            <button className="bn-pay-btn">Pay now</button>

            <a href="#" className="bn-privacy">
              Privacy policy
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bn-right">
          
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div className="bn-product" key={item.id}>
                
                <div className="bn-product-img">
                  {/* ✅ FIXED HERE */}
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px"
                      }}
                    />
                  )}
                  <span className="bn-badge">{item.quantity}</span>
                </div>

                <div className="bn-product-info">
                  <p>{item.name}</p>
                  <span>{item.variant || "Default"}</span>
                </div>

                <div className="bn-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))
          )}

          {/* SUMMARY */}
          <div className="bn-summary">
            <div className="bn-row-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="bn-row-between">
              <span>Shipping</span>
              <span className="bn-muted">
                Enter shipping address
              </span>
            </div>

            <div className="bn-row-between bn-total">
              <span>Total</span>
              <span>
                AUD <strong>${subtotal.toFixed(2)}</strong>
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;