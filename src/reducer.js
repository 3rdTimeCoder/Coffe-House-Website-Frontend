const reducer = (state, action) => {
  if (action.type === "SET_USER") {
    console.log(action.payload);
    return { ...state, user: action.payload };
  }
  if (action.type === "CLEAR CART") {
    localStorage.setItem("cart", JSON.stringify([]));
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    let localStorageCart = JSON.parse(localStorage.getItem("cart")) || "[]";
    localStorageCart = localStorageCart.filter(
      (item) => item.id !== action.payload
    );
    localStorage.setItem("cart", JSON.stringify(localStorageCart));
    return { ...state, cart: newCart };
  }
  if (action.type === "ADD_ITEM") {
    let newCart = [...state.cart];
    newCart.push({ id: new Date().getTime().toString(), item: action.payload });
    localStorage.setItem("cart", JSON.stringify(newCart));
    console.log(localStorage);
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
