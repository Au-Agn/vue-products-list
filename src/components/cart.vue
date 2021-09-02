<template>
  <div>
    <h2>Shopping bag</h2>
    <hr />
    <div class="grid-x">
      <div class="cell">
        <div class="grid-x">
          <table v-if="cart.length" class="unstriped hover">
            <tbody>
              <CartItem
                v-for="(item, index) in cart"
                :key="item.id"
                :product="item"
                @deleteFromCart="deleteFromCart(index)"
              />
            </tbody>
          </table>
          <p v-else>No products</p>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <p>Total:</p>
      <span>0 Rub</span>
    </div>
    <button class="button btn-add" :class="{ disabled: cart.length === 0 }">
      Proceed to checkout
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartItem from "./cart-item";

export default {
  name: "Cart",
  components: { CartItem },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cart"]),
  },
  props: {},
  methods: {
    ...mapActions(["deleteProductFromCart"]),
    deleteFromCart(index) {
      this.deleteProductFromCart(index);
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped></style>
