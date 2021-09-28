export default {
  GET_PRODUCTS({ commit }) {
    return fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => commit("SET_PRODUCTS", data))
      .catch((err) => console.log(err.message));
  },
  GET_ITEM_PRODUCT({ commit }, id) {
    return fetch(`http://localhost:3000/data/${id}`)
      .then((res) => res.json())
      .then((data) => commit("SET_PRODUCT", data))
      .catch((err) => console.log(err.message));
  },
  ADD_PRODUCT_TO_CART({ commit, state, dispatch }, product) {
    commit("SET_ITEM_PRODUCT_TO_CART", product);
    if (state.isProductExists) {
      dispatch("ADD_NOTIFICATION", {
        type: "alert",
        message: "The product is already in the cart",
      });
    } else {
      dispatch("ADD_NOTIFICATION", {
        type: "success",
        message: "Product added to cart successfully",
      });
    }
  },
  DELETE_PRODUCT_FROM_CART({ commit, dispatch }, index) {
    commit("REMOVE_FROM_CART", index);
    dispatch("ADD_NOTIFICATION", {
      type: "success",
      message: "Product deleted successfully",
    });
  },
  INCREMENT_CART_ITEM({ commit }, index) {
    commit("INCREMENT_QUANTITY", index);
  },
  DECREMENT_CART_ITEM({ commit }, index) {
    commit("DECREMENT_QUANTITY", index);
  },
  ADD_NOTIFICATION({ commit }, notification) {
    commit("SET_NOTIFICATION", notification);
  },
  REMOVE_NOTIFICATION({ commit }, index) {
    commit("DELETE_NOTIFICATION", index);
  },
  CHANGE_FORM_VISIBILITY({ commit }) {
    commit("CHANGE_FORM_VISIBLE");
  },
};
