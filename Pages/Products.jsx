import React, {useState} from "react";
import {useSearchParams} from "react-router-dom";

import ProductCard from "../Components/ProductCard";
import bakeryData from "../Data/bakeryData";

import "../Styles/Products.css";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  const [search, setSearch] = useState(searchValue);
  const filteredProducts = bakeryData.filter((item) =>
              item.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )
);

function handleSearch(e) {
  const value = e.target.value;
  setSearch(value);
  setSearchParams({
    search: value
  });
}
 
  return (
    <div className="products">
        <h1>Our Products</h1>

        <input type="text" value={search} onChange={handleSearch} className="search-input" placeholder="Search products.." />

        <div className="product-container">

          {filteredProducts.length > 0? (
            filteredProducts.map(
              (product) => (

            <ProductCard 
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            image={product.image}/>
          ))
        
        ) : (
          <h2>No product found</h2>
        )}
        </div>

    </div>
  );
}
