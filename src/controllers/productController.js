import { getUniqueKeys } from '../utils/functions/arrayMethods.js';
import origami from '../assets/configs/productConfig.json';
import books from '../assets/configs/productConfig2.json';
const products = [...origami, ...books];

export const getProductSubcategories = (products) => getUniqueKeys(products, 'category');

export const getProductsByCategory = (category) => category === 'origami' ? origami : category === 'books' ? books : null; 

export const getProductsBySubcategory = (subcategory) => products.filter((product) => product.category === subcategory);

export const getProductById = (id) => products.find((product) => product.id === id);
