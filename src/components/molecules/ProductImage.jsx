import React, { useEffect, useState } from "react";
import AppImage from "../atoms/AppImage";
import SuspenseFallback from "../templates/SuspenseFallback";

const ProductImage = ({ imgName, alt }) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [imgSrc, setImgSrc] = useState('');
  const getUrl = (filename) => new URL(`../../assets/images/${filename}.jpg`, import.meta.url).href;
  const loadImage = (filename) => {
    if (!!filename) {
      const imageSrc=getUrl(filename);
      setImgSrc(imageSrc);
      setIsLoadingImage(false);
    } else {
      setIsLoadingImage(true);
    };
  };
  useEffect(() => {
    loadImage(imgName);
  }, [imgName]);
  if (!isLoadingImage) {
    return <AppImage source={imgSrc} alt={alt} />
  } else {
    return <SuspenseFallback />
  }
}

export default ProductImage;
