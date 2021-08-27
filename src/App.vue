<template>
  <div id="app">
    <Header />
      <div class="grid-container">
        <router-view />
      </div>
  </div>
</template>

<script>
import Header from "@/components/header";
export default {
  name: "app",
  components: { Header },
};
</script>

<style lang="scss">
@import "~foundation-sites/dist/css/foundation.min.css";
</style>
