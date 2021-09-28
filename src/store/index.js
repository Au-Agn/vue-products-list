import { createStore } from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default createStore({
  state: {
    products: [],
    cart: [],
    product: null,
    notifications: [],
    isProductExists: false,
    isOrderFormVisible: false
  },
  mutations,
  actions,
  getters,
});
