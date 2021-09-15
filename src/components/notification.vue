<template>
  <div class="notification">
    <NotificationItem
      v-for="(notification, index) in NOTIFICATIONS"
      :key="index"
      :notification="notification"
      :id="index"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NotificationItem from "./notification-item.vue";

export default {
  name: "Notification",
  components: { NotificationItem },
  computed: {
    ...mapGetters(["NOTIFICATIONS"]),
  },
};
</script>

<style lang="scss" scoped>
.notification {
  position: fixed;
  right: 0;
  bottom: 0;
  margin-right: 15px;
  width: 350px;
}
</style>
