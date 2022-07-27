import {Dispatch} from 'redux';
import {CartAction, CART_TYPES} from '../reducers/cart';

export const addToCart = (item: number) => {
  return (dispatch: Dispatch<CartAction>) => {
    // other staff here;
    dispatch({
      type: CART_TYPES.ADD_TO_CART,
      payload: item,
    });
  };
};

export const removeFromCart = (item: number) => {
  return (dispatch: Dispatch<CartAction>) => {
    // other staff here;
    dispatch({
      type: CART_TYPES.REMOVE_FROM_CART,
      payload: item,
    });
  };
};

export const clearCart = () => {
  return (dispatch: Dispatch<CartAction>) => {
    // other staff here;
    dispatch({
      type: CART_TYPES.CLEAR_CART,
    });
  };
};
