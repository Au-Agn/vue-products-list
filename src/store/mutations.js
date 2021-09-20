export default {
  SET_PRODUCTS: (state, products) => {
    state.products = products;
  },
  SET_PRODUCT: (state, product) => {
    state.product = product;
  },
  SET_ITEM_PRODUCT_TO_CART: (state, product) => {
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
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1);
  },
  INCREMENT_QUANTITY: (state, index) => {
    state.cart[index].quantity++;
  },
  DECREMENT_QUANTITY: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--;
    }
  },
  SET_NOTIFICATION: (state, notification) => {
    state.notifications.push({ ...notification });
  },
  DELETE_NOTIFICATION: (state, index) => {
    state.notifications.splice(index, 1);
  },
};
