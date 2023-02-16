import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppParagraph from "./atoms/AppParagraph";
import "./postercard.css";
import CartContext from "../utils/contexts/cartContext";
import MessageContext from "../utils/contexts/messageContext";
import AddToCartButton from "./molecules/AddToCartButton";

const PosterCard = ({ product }) => {
  const { id, image, image_alt, name, quantity, price } = product;
  return(
      <div key={id} className='product-card'>
        <Link to={`/origami/${id}`}>
          <img src={image} alt={image_alt} />
        </Link>
        <h3>paper {name} <span>${price}</span></h3>
        <div className="row">
          <AppParagraph text={`In Stock: ${quantity}`} />
          <AddToCartButton product={product} />
          {/* <button onClick={addItemToCart}>Add to Cart</button> */}
        </div>
      </div>
  )
}

export default PosterCard;
