<template>
  <div id="app">
    <Header />
    <div class="grid-container">
      <router-view />
    </div>
  </div>
  <OrderForm v-if="isOrderFormVisible" />
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/header";
import OrderForm from "@/components/order-form";

export default {
  name: "app",
  components: { Header, OrderForm },
  computed: {
    ...mapGetters(["isOrderFormVisible"]),
  },
};
</script>

<style lang="scss">
@import "~foundation-sites/dist/css/foundation.min.css";
</style>
