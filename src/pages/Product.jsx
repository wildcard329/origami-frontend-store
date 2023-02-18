import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../controllers/productController';
import AppH2 from '../components/atoms/AppH2';
import AppParagraph from '../components/atoms/AppParagraph';
import "./product.css";
import AppH1 from '../components/atoms/AppH1';
import AddToCartButton from '../components/molecules/AddToCartButton';

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    setProduct(getProductById(parseInt(id)));
  }, []);
  const getUrl = (filename) => new URL(`../assets/images/${filename}.jpg`, import.meta.url).href;
  return(
    <div className="product-information">
      <AppH1 text={'product information'} />
      <img src={getUrl(product?.image)} alt={product?.image_alt} />
      <AppH2 text={`paper ${product?.name}`} />
      <AppParagraph text={product?.description} />
      <AppParagraph text={`In Stock: ${product?.quantity}`} />
      <AddToCartButton product={product} />
    </div>
  )
}

export default Product;
