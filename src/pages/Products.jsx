import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProductsByCategory } from '../controllers/productController';
import PosterCard from '../components/templates/PosterCard.jsx';
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { pathname } = useLocation();
  const category = pathname.substring(1, pathname.length)

  useEffect(() => {
    // This is currently pulling from a json file, but will pull from an api
    setProducts(getProductsByCategory(category));
  }, [category])

  return(
    <div className="product-grid">
      {products?.map((product) => <PosterCard key={product.id} product={product} />)}
    </div>
  )
}

export default Products;
