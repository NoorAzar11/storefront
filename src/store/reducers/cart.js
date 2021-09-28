'use strict';

const initialState = { cart: [], show: false, num: 0 };

const cartReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case 'ADD':

      if (!state.cart.length) {

        payload['item'] = 1;
        state.num += 1;
        state.cart.push(payload);
        return { ...state };
      } else {

        let located = false;

        for (let i = 0; i < state.cart.length; i++) {
          if (payload.id === state.cart[i].id) {
            state.num += 1;
            state.cart[i].item += 1;
            located = true;
          }
        }
        if (!located) {

          payload['item'] = 1;
          state.num += 1;
          state.cart.push(payload);
        }
        return { ...state };
      }
    case 'DELETE':

      let located = false;


      for (let y = 0; y < state.cart.length; y++) {

        if (payload.id === state.cart[y].id) {
          if (state.cart[y].item > 1 && state.num > 0) {

            state.num -= 1;
            state.cart[y].item -= 1;
            located = true;
            
          } else if (state.cart[y].item === 1 && !located ) {
            const deletedProduct = state.cart.filter(product => {
              
                return product.name !== payload.name;
              });
              return { cart: [...deletedProduct], show: true };
          }

        }
      }
      return { ...state }
    default:
      return state;

  }
};
export default cartReducer;

































































