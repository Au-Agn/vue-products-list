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
            @click="showOrderPage"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  </div>
  <OrderPage
    v-if="isOrderPageVisible"
    @close="closeOrderPage"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartItem from "./cart-item";
import OrderPage from "./order-page.vue";

export default {
  name: "Cart",
  components: { CartItem, OrderPage },
  data() {
    return {
      isOrderPageVisible: false,
    };
  },
  computed: {
    ...mapGetters(["cart"]),
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
    showOrderPage() {
      this.isOrderPageVisible = true;
    },
    closeOrderPage() {
      this.isOrderPageVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  margin-top: 20px;
}
</style>
