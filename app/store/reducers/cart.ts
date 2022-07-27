// cart types.
export enum CART_TYPES {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CLEAR_CART = 'CLEAR_CART',
}

// cart interfaces.
interface ADD_TO_CART {
  type: 'ADD_TO_CART';
  payload: number;
}

interface REMOVE_FROM_CART {
  type: 'REMOVE_FROM_CART';
  payload: number;
}

interface CLEAR_CART {
  type: 'CLEAR_CART';
}

export type CartAction = ADD_TO_CART | CLEAR_CART | REMOVE_FROM_CART;

const initialState = 0;

export const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state + action.payload;
    case 'REMOVE_FROM_CART':
      return state - action.payload;
    case 'CLEAR_CART':
      return 0;
    default:
      return state;
  }
};
