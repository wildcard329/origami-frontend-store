import origami from '../assets/configs/productConfig.json';
import books from '../assets/configs/productConfig2.json';
const products = [...origami, ...books]

export const getProductsByCategory = (category) => category === 'origami' ? origami : category === 'books' ? books : null; 

export const getProductById = (id) => products.find((product) => product.id === id);
