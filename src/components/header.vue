<template>
  <div class="navbar top-bar">
    <div class="menu">
      <div v-for="item in navbar" :key="item">
        <router-link
          tag="li"
          :to="'/' + item"
          :class="{ 'is-active': this.$route.path === `/${item}` }"
        >
          <a href="#">{{ item }}</a>
        </router-link>
      </div>
    </div>
    <router-link :to="'/cart'">
      <div class="grid-x align-right">
        <div class="cell small-1">{{ CART.length }}</div>
        <svg class="basket cell small-1" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M5.5,21C4.72,21 4.04,20.55 3.71,19.9V19.9L1.1,10.44L1,10A1,1 0 0,1 2,9H6.58L11.18,2.43C11.36,2.17 11.66,2 12,2C12.34,2 12.65,2.17 12.83,2.44L17.42,9H22A1,1 0 0,1 23,10L22.96,10.29L20.29,19.9C19.96,20.55 19.28,21 18.5,21H5.5M12,4.74L9,9H15L12,4.74M12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13Z"
          />
        </svg>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  data: () => {
    return {
      navbar: ["catalog", "product"],
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss" scoped>
.menu__item:hover {
  background: #1779ba;
}
</style>
