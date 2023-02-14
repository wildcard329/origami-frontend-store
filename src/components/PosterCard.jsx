import React from "react";
import { Link } from "react-router-dom";
import AppParagraph from "./atoms/AppParagraph";
import "./postercard.css";

const PosterCard = ({ product: { id, image, image_alt, name, quantity, price } }) => {

  return(
      <div key={id} className='product-card'>
        <Link to={`/origami/${id}`}>
          <img src={image} alt={image_alt} />
        </Link>
        <h3>paper {name} <span>${price}</span></h3>
        <div className="row">
          <AppParagraph text={`In Stock: ${quantity}`} />
          <button>Add to Cart</button>
        </div>
      </div>
  )
}

export default PosterCard;
