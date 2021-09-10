<template>
  <div class="wrap">
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
            :class="{ disabled: cart.length === 0 }"
            @click="showOrderingPage"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  </div>
  <OrderForm v-if="isOrderFormVisible" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartItem from "./cart-item";
import OrderForm from "./order-form";

export default {
  name: "Cart",
  components: { CartItem, OrderForm },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cart", "isOrderFormVisible"]),
    totalCost() {
      let result = [];
      if (this.cart.length) {
        this.cart.forEach((item) => {
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
      "deleteProductFromCart",
      "incrementCartItem",
      "decrementCartItem",
      "changeFormVisibility",
    ]),
    deleteFromCart(index) {
      this.deleteProductFromCart(index);
    },
    incrementItem(index) {
      this.incrementCartItem(index);
    },
    decrementItem(index) {
      this.decrementCartItem(index);
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
