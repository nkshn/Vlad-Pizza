export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REDUCE_PRODUCT_FROM_CART = 'REDUCE_PRODUCT_FROM_CART';
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const addProductToCart = (product) => {
  return { type: ADD_PRODUCT_TO_CART, product: product };
};
export const reduceProductFromCart = (pid) => {
  return { type: REDUCE_PRODUCT_FROM_CART, pid: pid };
};
export const deleteProductFromCart = (pid) => {
  return { type: DELETE_PRODUCT_FROM_CART, pid: pid };
};
export const clearCart = () => {
  return { type: CLEAR_CART };
};