<template>
  <div>
    <div v-if="itemProduct">
      <div class="grid-x grid-padding-y">
        <div class="cell medium-4">
          <div class="container">
            <div
              class="container__zoomer"
              @mousemove="onZoomProduct"
              :style="{ 'background-image': `url(${itemProduct.img})` }"
            >
              <img class="zoomerImage" :src="itemProduct.img" />
            </div>
          </div>
        </div>
        <div class="cell medium-7 text">
          <div class="grid-x align-justify align-middle">
            <div class="cell small-6">
              <h2>{{ itemProduct.name }}</h2>
            </div>
            <div class="cell small-2">
              <span class="price">{{ itemProduct.price.value }}</span
              >&nbsp;
              <span class="price">{{ itemProduct.price.currency }}</span>
            </div>
          </div>
          <hr />
          <div>
            <p>{{ itemProduct.description }}</p>
          </div>
          <button class="button btn-add" @click="addToCart">Add to Bag</button>
        </div>
      </div>
    </div>
    <p v-else>Product not found</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Product",
  data() {
    return {
      randomProduct: null,
    };
  },
  computed: {
    ...mapGetters(["product", "products"]),
    itemProduct() {
      const id = +this.$route.params.id;
      if (id) {
        return this.product;
      } else {
        const products = [...this.products];
        return (this.randomProduct =
          products[Math.floor(Math.random() * products.length)]);
      }
    },
  },
  methods: {
    ...mapActions(["getItemProduct", "getProducts", "addProductToCart"]),
    addToCart() {
      this.addProductToCart(this.itemProduct);
    },
    onZoomProduct(e) {
      const zoomer = e.currentTarget;
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;
      const x = (offsetX / zoomer.offsetWidth) * 100;
      const y = (offsetY / zoomer.offsetHeight) * 100;
      zoomer.style.backgroundPosition = x + "% " + y + "%";
    },
  },
  mounted() {
    const id = +this.$route.params.id;
    if (id) {
      this.getItemProduct(id);
    } else {
      this.getProducts();
    }
  },
};
</script>

<style lang="scss" scoped>
.text {
  margin-left: 30px;
}
.price {
  color: red;
}
.container {
  overflow: hidden;

  &__zoomer {
    background-position: 50% 50%;
    position: relative;
    width: 100%;
    overflow: hidden;
    cursor: zoom-in;
    height: 100%;
  }
}

.zoomerImage {
  display: block;

  &:hover {
    opacity: 0;
  }
}
</style>
