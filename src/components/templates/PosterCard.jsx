import React from "react";
import { Link } from "react-router-dom";
import AppParagraph from "../atoms/AppParagraph";
import "./postercard.css";
import AddToCartButton from "../molecules/AddToCartButton";
import AppImage from "../atoms/AppImage";
import ProductImage from "../molecules/ProductImage";

const PosterCard = ({ product }) => {
  const { id, image, image_alt, name, quantity, price } = product;
  const getUrl = (filename) => new URL(`../../assets/images/${filename}.jpg`, import.meta.url).href;
  return(
      <div key={id} className='product-card'>
        <Link to={`/origami/${id}`}>
          {/* <AppImage source={getUrl(image)} alt={image_alt} /> */}
          <ProductImage imgName={image} alt={image_alt} />
        </Link>
        <h3>paper {name} <span>${price}</span></h3>
        <div className="row">
          <AppParagraph text={`In Stock: ${quantity}`} />
          <AddToCartButton product={product} />
        </div>
      </div>
  )
}

export default PosterCard;
