import { getUniqueKeys, filterArray, findArrayObject } from '../utils/functions/arrayMethods.js';
import origami from '../assets/configs/productConfig.json';
import books from '../assets/configs/productConfig2.json';
const products = [...origami, ...books ];

// most of these methods will communicate to an api, but for now they're just using config mocks.
export const getProductSubcategories = (products) => getUniqueKeys(products, 'category');

export const getProductsByCategory = (category) => category === 'origami' ? origami : category === 'books' ? books : null; 

export const getProductsBySubcategory = (subcategory) => filterArray(products, 'category', subcategory);

export const getProductById = (id) => findArrayObject(products, 'id', id);
