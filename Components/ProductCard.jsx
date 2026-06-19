import {useContext} from "react";
import {CartContext} from "../Context/CartContext";

import "../Styles/ProductCard.css";

export default function ProductCard({
    id,
    title, 
    price, 
    image
}) {

    const {dispatch} = useContext(CartContext);
    function addToCart() {
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                id, 
                title,
                price,
                image
            }
        });

        alert("Added to Cart");
    }
    return (
        <div className="card">
            <img src={image} alt={title} />

            <h3>{title}</h3>

            <p>₹{price}</p>

            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );   
}