<template>
  <div class="grid-x grid-padding-y">
      <div class="cell medium-4">
        <div>
        <img v-bind:src="img"/>
        </div>
      </div>
      <div class="cell medium-7 text">
        <div class="grid-x align-justify align-middle">
          <div class="cell small-6">
            <h2>{{ name }}</h2>
          </div>
          <div class="cell small-2">
            <span class="price">{{ price.value }}</span>&nbsp;
            <span class="price">{{ price.currency }}</span>
          </div>
        </div>
        <hr>
        <div>
          <p>{{ description }}</p>
        </div>
        <button class="button btn-add" @click="addToBag">Add to Bag</button>
      </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "Dress",
    price: {
      value: 1000,
      currency: "RUB",
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: 'https://slimages.macysassets.com/is/image/MCY/products/5/optimized/18963395_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp'
  }),
  methods: {
    addToBag() {
      return this.$store.commit('increment');
    }
  }
};
</script>

<style lang="scss" scoped>
.text {
margin-left: 30px;
}
.price {
color: red;
}
</style>
