import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    cart: [],
    product: null,
  },
  mutations: {
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setItemProductToCart: (state, product) => {
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map((item) => {
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists) {
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
      if(state.cart[index].quantity >1) {
        state.cart[index].quantity--;
      }
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
    addProductToCart({ commit }, product) {
      commit("setItemProductToCart", product);
    },
    deleteProductFromCart({ commit }, index) {
      commit("removeFromCart", index);
    },
    incrementCartItem({ commit }, index) {
      commit("increment", index);
    },
    decrementCartItem({ commit }, index) {
      commit("decrement", index);
    },
  },
  getters: {
    count: (state) => state.count,
    products: (state) => state.products,
    product: (state) => state.product,
    cart: (state) => state.cart,
  },
});
