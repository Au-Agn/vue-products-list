<template>
  <div id="app">
    <Header />
    <div class="grid-container">
      <router-view />
    </div>
    <Notification />
    <OrderForm v-if="IS_ORDERING_FORM_VISIBLE" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/header";
import OrderForm from "@/components/order-form";
import Notification from "@/components/notification";

export default {
  name: "app",
  components: { Header, OrderForm, Notification },
  computed: {
    ...mapGetters(["IS_ORDERING_FORM_VISIBLE"]),
  },
};
</script>

<style lang="scss">
@import "~foundation-sites/dist/css/foundation.min.css";
</style>
