import React, { useContext } from "react";
// import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <img src="https://th.bing.com/th/id/OIP.ZyrjNMg2YCH9WIeG8FTLLQHaGE?w=228&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
         
          <img src='https://th.bing.com/th/id/OIP.ZyrjNMg2YCH9WIeG8FTLLQHaGE?w=228&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7' alt="img"/>
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
           
          </div>
        </div>

        <div className="card-total">
          <h3>
             Total : <span>₹ {totalAmount}</span>
          </h3>
          <button>checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear All
          </button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;