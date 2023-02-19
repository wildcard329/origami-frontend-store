import React from "react";
import AppImage from "../atoms/AppImage";

const ProductImage = ({ imgName, alt }) => {
  const getUrl = (filename) => new URL(`../../assets/images/${filename}.jpg`, import.meta.url).href;
  return(
    <AppImage source={getUrl(imgName)} alt={alt} />
  )
}

export default ProductImage;
