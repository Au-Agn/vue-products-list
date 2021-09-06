<template>
  <tr>
    <td class="image">
      <img :src="product.img" />
    </td>
    <td>
      <div>
        <h4>
          {{ product.name }}
        </h4>
      </div>
      <div class="quantity">
        <button class="hollow button tiny" @click="decrementItem">-</button>
        <div>{{ product.quantity }}</div>
        <button class="hollow button tiny" @click="incrementItem">+</button>
      </div>
    </td>
    <td>
      <span>{{ commonProductCost }}</span
      >&nbsp;
      <span>{{ product.price.currency }}</span>
    </td>
    <td>
      <button type="button" class="alert button" @click="deleteFromCart">
        Delete
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      default: {}
    },
  },
  computed: {
    commonProductCost() {
      return this.product.price.value * this.product.quantity;
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    incrementItem() {
      this.$emit("incrementItem");
    },
    decrementItem() {
      this.$emit("decrementItem");
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  max-width: 50px;
}
.quantity {
  display: flex;
  justify-content: space-between;
  max-width: 80px;
}
</style>
