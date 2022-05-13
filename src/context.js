import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

// cart
let initialState = {};
const localStorageCart = JSON.parse(localStorage.getItem("cart")) || [];
if (localStorageCart.length > 0) {
  initialState = {
    cart: localStorageCart,
    total: 0,
    numOfItems: 0,
    user: null,
  };
} else {
  initialState = {
    cart: [],
    total: 0,
    numOfItems: 0,
    user: null,
  };
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const setUser = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  //every time a change is made to cart
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, addItem, setUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
