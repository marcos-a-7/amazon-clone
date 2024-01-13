export const initialState = {
  basket: [],
};

// //selector
// export const getBasketTotal = (basket) =>
//   basket?.reduce((amount, item) => item.price + amount, 0);

export const getBasketTotal = (basket) => {
  let total = 0;
  basket.map((product) => {
    total = product.price ? total + Number(product?.price) : total;
  });
  return total.toString();
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reducer;
