import React, {useReducer, useRef} from "react";
import "../Styles/Admin.css";

const initialState = { 
  products: [], 
};

function reducer(state, action) {
  switch (action.type) {

    case "ADD_PRODUCT":
      return {
        ...state,
        products: [
          ...state.products,
          action.payload,
        ],
      };

      case "DELETE_PRODUCT":
        return {
          ...state,
          products: state.products.filter(
            (item) => 
              item.id !== action.payload
          ),
        };

        default:
          return state;
  }
}

export default function Admin() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const nameRef = useRef();
  const priceRef = useRef();
  
  function addProduct() {
    const name = nameRef.current.value;
    const price = priceRef.current.value;

    if (
      name.trim() === "" ||
      price.trim() === ""
    ) {
      alert (
        "Please fill all fields"
      );

    return;
    }

    const newProduct = {
      id: Date.now(),
      name, 
      price,
    };

    dispatch ({
      type: "ADD_PRODUCT",
      payload: newProduct,
    });

    nameRef.current.value="";
    priceRef.current.value="";
  }

  return (
    <div className="page">
      <h1>Admin Dashboard</h1>

      <input type="text" placeholder="Product Name" ref={nameRef} />
      <input type="number" placeholder="Price" ref={priceRef} />
      <button onClick={addProduct}>Add Product</button>
      <hr />

      {state.products.length > 0
      ? (
        state.products.map(
          (item) => (

            <div key={item.id}>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <button onClick={() => dispatch({
                  type: "DELETE_PRODUCT",
                  payload: item.id
                })
                }>Delete</button>
                </div>
          ))
      ) : (
        <h2>No products added</h2>
      )}
      
    </div>
  );
}