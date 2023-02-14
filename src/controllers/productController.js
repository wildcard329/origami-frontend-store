import products from '../assets/configs/productConfig.json';

export const getProducts = () => products;

export const getProductById = (id) => products.find((product) => product.id === id);
