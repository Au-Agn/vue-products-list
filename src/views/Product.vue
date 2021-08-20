<template>
  <div>
    <div v-if="product">
      <div class="grid-x grid-padding-y">
        <div class="cell medium-4">
          <div>
            <img v-bind:src="product.img" />
          </div>
        </div>
        <div class="cell medium-7 text">
          <div class="grid-x align-justify align-middle">
            <div class="cell small-6">
              <h2>{{ product.name }}</h2>
            </div>
            <div class="cell small-2">
              <span class="price">{{ product.price.value }}</span
              >&nbsp;
              <span class="price">{{ product.price.currency }}</span>
            </div>
          </div>
          <hr />
          <div>
            <p>{{ product.description }}</p>
          </div>
          <button class="button btn-add" @click="addToBag">Add to Bag</button>
        </div>
      </div>
    </div>
    <p v-else>Product not found</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null
    }
  },
  mounted() {
    const id = +this.$route.params.id;
    fetch(`http://localhost:3000/data/${id}`)
      .then(res => res.json())
      .then(data => this.product = data)
      .catch(err => console.log(err.message))
  }, 
  methods: {
    addToBag() {
      return this.$store.commit("increment");
    },
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
