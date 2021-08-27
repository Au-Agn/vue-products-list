import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    product: null,
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
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
  },
  getters: {
    count: (state) => state.count,
    products: (state) => state.products,
    product: (state) => state.product,
  },
});
