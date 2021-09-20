<template>
  <div class="callout" :class="notification.type">
    <p>
      {{ notification.message }}
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NotificationItem",
  props: {
    notification: {
      type: Object,
      default: {},
    },
  },
  methods: {
    ...mapActions(["REMOVE_NOTIFICATION"]),
  },
  created() {
    setTimeout(() => {
      this.REMOVE_NOTIFICATION();
    }, 2500);
  },
};
</script>

<style lang="scss" scoped></style>
