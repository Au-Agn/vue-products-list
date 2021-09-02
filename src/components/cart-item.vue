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
        <button class="hollow button tiny">-</button>
        <div>0</div>
        <button class="hollow button tiny">+</button>
      </div>
    </td>
    <td>
      <span>{{ product.price.value }}</span
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
import { mapGetters } from "vuex";

export default {
  name: "CartItem",
  data() {
    return {};
  },
  props: {
    product: {},
  },
  computed: {
    ...mapGetters(["count"]),
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
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
