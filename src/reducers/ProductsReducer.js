const State = {
  products: [
    {
      id: "123098",
      name: "Celular",
      price: 3000,
    },
  ],
  user: "Wesley",
  login: "wbbs",
};

export const ProductsReducer = (state = State, action) => {
  if (action.type === "ADD_PRODUCT") {
    const copyState = { ...state };
    copyState.products.push(action.payload.product);
    return { ...copyState };
  }

  if (action.type === "CLEAR_LIST") {
    return { ...state, products: [] };
  }

  if (action.type === "REMOVE_PRODUCT") {
    const copyState = { ...state };
    copyState.products.splice(action.payload.index, 1);
    return { ...copyState };
  }

  return state;
};
