import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../controllers/productController';
import AppH2 from '../components/atoms/AppH2';
import AppParagraph from '../components/atoms/AppParagraph';
import "./product.css";
import AppH1 from '../components/atoms/AppH1';
import CartContext from '../utils/contexts/cartContext';

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setProduct(getProductById(parseInt(id)));
  }, []);
  const { addToCart } = useContext(CartContext);

  return(
    <div className="product-information">
      <AppH1 text={'product information'} />
      <img src={product?.image} alt={product?.image_alt} />
      <AppH2 text={`paper ${product?.name}`} />
      <AppParagraph text={product?.description} />
      <AppParagraph text={`In Stock: ${product?.quantity}`} />
      <button onClick={() => addToCart(product)}>add to cart</button>
    </div>
  )
}

export default Product;
