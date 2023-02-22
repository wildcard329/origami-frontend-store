import React, { useEffect, useState } from "react";
import AppImage from "../atoms/AppImage";
import SuspenseFallback from "../templates/SuspenseFallback";

const ProductImage = ({ imgName, alt }) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [imgSrc, setImgSrc] = useState('');
  const getUrl = (filename) => new URL(`../../assets/images/${filename}.jpg`, import.meta.url).href;
  useEffect(() => {
    setImgSrc(getUrl(imgName));
    setIsLoadingImage(false);
  }, []);
  if (isLoadingImage) {
    return(
      <SuspenseFallback />
    )
  }
  return <AppImage source={imgSrc} alt={alt} />
}

export default ProductImage;
