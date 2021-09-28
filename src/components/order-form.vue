<template>
  <DeliveryForm
    v-if="isDeliveryFormVisible"
    @close="closeForm"
    @openPayForm="openPayForm"
    :deliveryFormValues="deliveryFormValues"
  />
  <PaymentForm
    v-if="isPaymentFormVisible"
    @close="closeForm"
    @back="backToDeliveryForm"
    :deliveryFormValues="deliveryFormValues"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DeliveryForm from "./delivery-form.vue";
import PaymentForm from "./payment-form";

export default {
  name: "OrderForm",
  components: { DeliveryForm, PaymentForm },
  data() {
    return {
      isDeliveryFormVisible: true,
      isPaymentFormVisible: false,
      deliveryFormValues: null,
    };
  },
  methods: {
    ...mapActions(["CHANGE_FORM_VISIBILITY"]),
    closeForm() {
      this.CHANGE_FORM_VISIBILITY();
    },
    openPayForm(formValues) {
      this.deliveryFormValues = formValues;
      this.isDeliveryFormVisible = false;
      this.isPaymentFormVisible = true;
    },
    backToDeliveryForm() {
      this.isDeliveryFormVisible = true;
      this.isPaymentFormVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
