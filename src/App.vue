<template>
  <div id="app">
    <Header />
      <div class="grid-container">
        <router-view />
      </div>
      <Notification />
  </div>
</template>

<script>
import Header from "@/components/header";
import Notification from '@/components/notification';
export default {
  name: "app",
  components: { Header, Notification },
};
</script>

<style lang="scss">
@import "~foundation-sites/dist/css/foundation.min.css";
</style>
