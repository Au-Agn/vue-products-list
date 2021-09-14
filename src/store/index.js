import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    cart: [],
    product: null,
    notifications: [],
    isProductExists: false,
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setItemProductToCart: (state, product) => {
      if (state.cart.length) {
        state.cart.map((item) => {
          if (item.id === product.id) {
            state.isProductExists = true;
            item.quantity++;
          } else {
            state.isProductExists = false;
          }
        });
        if (!state.isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    removeFromCart: (state, index) => {
      state.cart.splice(index, 1);
    },
    increment: (state, index) => {
      state.cart[index].quantity++;
    },
    decrement: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
    setNotification: (state, notification) => {
      state.notifications.push({ ...notification });
    },
    deleteNotification: (state, index) => {
      state.notifications.splice(index, 1);
    },
  },
  actions: {
    getProducts({ commit }) {
      return fetch("http://localhost:3000/data")
        .then((res) => res.json())
        .then((data) => commit("setProducts", data))
        .catch((err) => console.log(err.message));
    },
    getItemProduct({ commit }, id) {
      return fetch(`http://localhost:3000/data/${id}`)
        .then((res) => res.json())
        .then((data) => commit("setProduct", data))
        .catch((err) => console.log(err.message));
    },
    addProductToCart({ commit, state, dispatch }, product) {
      commit("setItemProductToCart", product);
      if (state.isProductExists) {
        dispatch("addNotification", {
          type: "alert",
          message: "The product is already in the cart",
        });
      } else {
        dispatch("addNotification", {
          type: "success",
          message: "Product added to cart successfully",
        });
      }
    },
    deleteProductFromCart({ commit, dispatch }, index) {
      commit("removeFromCart", index);
      dispatch("addNotification", {
        type: "success",
        message: "Product deleted successfully",
      });
    },
    incrementCartItem({ commit }, index) {
      commit("increment", index);
    },
    decrementCartItem({ commit }, index) {
      commit("decrement", index);
    },
    addNotification({ commit }, notification) {
      commit("setNotification", notification);
    },
    removeNotification({ commit }, index) {
      commit("deleteNotification", index);
    },
  },
  getters: {
    count: (state) => state.count,
    products: (state) => state.products,
    product: (state) => state.product,
    cart: (state) => state.cart,
    notifications: (state) => state.notifications,
  },
});
