import * as services from '../services/productService.js';

export const getProductSubcategories = (products) => services.getProductSubcategories(products);

export const getProductsByCategory = (category) => services.getProductsByCategory(category);

export const getProductsBySubcategory = (subcategory) => services.getProductsBySubcategory(subcategory);

export const getProductById = (id) => services.getProductById(id);
