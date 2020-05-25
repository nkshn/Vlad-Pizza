import {
  ADD_PRODUCT_TO_CART,
  REDUCE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_CART,
} from '../actions/cart';

import CartItem from '../../models/cart-item';

const initialState = {
  products: {},
  totalSum: 0,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_PRODUCT_TO_CART:
      const choosenProduct = actions.product;

      const productName = choosenProduct.name;
      const productSize = choosenProduct.smallSizeName;
      const productPrice = choosenProduct.smallSizePrice;

      let cartItem;

      cartItem = new CartItem(
        1,
        productName,
        productSize,
        productPrice,
        productPrice
      );

      return {
        ...state,
        products: { ...state.products, [choosenProduct.ID]: cartItem },
        totalSum: state.totalSum + productPrice,
      };
  }
  return state;
};
