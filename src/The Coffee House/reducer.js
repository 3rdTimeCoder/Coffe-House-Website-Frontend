const reducer = (state, action) => {
  if (action.type === "CLEAR CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }
  if (action.type === "ADD_ITEM") {
    let newCart = [...state.cart];
    newCart.push({ id: new Date().getTime().toString(), item: action.payload });
    return { ...state, cart: newCart };
  }
  if (action.type === "GET_TOTALS") {
    let totalAmount = 0;
    state.cart.forEach((cartItem) => {
      const { item } = cartItem;
      totalAmount += parseFloat(item.price);
    });
    const numItems = state.cart.length;
    return { ...state, numOfItems: numItems, total: totalAmount.toFixed(2) };
  }
};

export default reducer;
