import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        id: 1,
        name: 'Dress',
        description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        price: { value: 2000, currency: 'RUB'},
        img: 'https://slimages.macysassets.com/is/image/MCY/products/5/optimized/18963395_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    products: st => st.products
  }
})
