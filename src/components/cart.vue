<template>
  <div class="wrap">
    <h2>Shopping bag</h2>
    <hr />
    <div class="grid-x">
      <div class="cell">
        <div class="grid-x">
          <table v-if="CART.length" class="unstriped hover">
            <tbody>
              <CartItem
                v-for="(item, index) in CART"
                :key="item.id"
                :product="item"
                @deleteFromCart="deleteFromCart(index)"
                @incrementItem="incrementItem(index)"
                @decrementItem="decrementItem(index)"
              />
            </tbody>
          </table>
          <p v-else>No products</p>
        </div>
      </div>
    </div>
    <hr />
    <div class="grid-x align-middle">
      <div class="cell small-6">
        <span>Total:</span>&nbsp;
        <span>{{ totalCost }}</span>
      </div>
      <div class="cell small-6">
        <div class="grid-x align-right">
          <button
            class="button btn-add"
            :class="{ disabled: CART.length === 0 }"
            @click="showOrderPage"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
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
    ...mapGetters(["CART"]),
    totalCost() {
      let result = [];
      if (this.CART.length) {
        this.CART.forEach((item) => {
          result.push(item.price.value * item.quantity);
        });
        result = result.reduce((sum, el) => {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      "DELETE_PRODUCT_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    deleteFromCart(index) {
      this.DELETE_PRODUCT_FROM_CART(index);
    },
    incrementItem(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrementItem(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    showOrderingPage() {
      this.changeFormVisibility();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  margin-top: 20px;
}
</style>
