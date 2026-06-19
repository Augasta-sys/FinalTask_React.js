import {useParams} from "react-router-dom";
import bakeryData from "../Data/bakeryData";

export default function Category() {

    const {categoryName} = useParams();

    const filteredProducts = bakeryData.filter(
      (item) =>
        item.category === categoryName
    );

  return (
    <div>
        <h2>Selected Category:{categoryName}</h2>
        <p>Explore delicious {categoryName}</p>
      
      <div className="product-container">
        {filteredProducts.map(
          (product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} width= "200" />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              </div>
          )
        )}
      </div>
    </div>
  );
}
