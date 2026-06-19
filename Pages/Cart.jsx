import {useContext} from "react";
import { CartContext } from "../Context/CartContext";

export default function Cart() {

  const {cart, dispatch} = useContext(CartContext);
  const totalAmount = cart.reduce(
    (total, item) => 
      total + Number(item.price), 0
  );

  return (
    <div className="page">
        <h1>Shopping Cart</h1>
        {cart.length > 0 ? (
          <>
          {cart.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => 
                dispatch({
                type:"REMOVE_FROM_CART",
                payload: item.id
              })
              }>Remove</button>
              <hr />
              </div>
          ))}
          <div>
        
          <h2>Total: ₹{totalAmount}</h2>
      
    </div>
    </>
      ) : (
        <h2>Cart is Empty</h2>
      )}
      </div>
  );
}
