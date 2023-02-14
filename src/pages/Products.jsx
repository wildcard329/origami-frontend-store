import React, { useState, useEffect } from 'react';
import { getProducts } from '../controllers/productController';
import PosterCard from '../components/PosterCard.jsx';
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // This is currently pulling from a json file, but will pull from an api
    setProducts(getProducts());
  }, [])

  return(
    <div className="product-grid">
      {products?.map((product) => <PosterCard key={product.id} product={product} />)}
    </div>
  )
}

export default Products;
