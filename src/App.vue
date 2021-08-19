<template>
  <Navbar />
  <div class="grid-container">
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar },
};
</script>

<style lang="scss">
@import "~foundation-sites/dist/css/foundation.min.css";
</style>
