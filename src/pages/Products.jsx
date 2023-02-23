import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProductsByCategory, getProductsBySubcategory, getProductSubcategories } from '../controllers/productController';
import PosterCard from '../components/templates/PosterCard.jsx';
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const { pathname } = useLocation();
  const category = pathname.substring(1, pathname.length)

  useEffect(() => {
    // This is currently pulling from a json file, but will pull from an api
    const prods = getProductsByCategory(category);
    setProducts(prods);
    setSubcategories(getProductSubcategories(prods));
  }, [category])

  const handleSelect = (e) => {
    const filter = e.target.value;
    if (filter === 'all') {
      const prods = getProductsByCategory(category);
      setProducts(prods);
    } else {
      const prods = getProductsBySubcategory(filter);
      setProducts(prods);
    };
  };

  return(
    <div className='products-container'>
      <select onChange={handleSelect} className='product-grid-select'>
        <option value={'all'}>all</option>
        {subcategories?.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
      <div className="product-grid">
        {products?.map((product) => <PosterCard key={product.id} product={product} />)}
      </div>
    </div>
  )
}

export default Products;
