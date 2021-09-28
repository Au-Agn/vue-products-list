<template>
  <div class="modal-backdrop">
    <div class="modal grid-x">
      <div class="cell">
        <header class="grid-x modal__header">
          <slot name="header">
            <div class="cell small-6">
              <h3>Ordering</h3>
            </div>
            <div class="cell small-6">
              <div class="grid-x align-right">
                <button type="button" class="hollow button btn" @click="close">
                  x
                </button>
              </div>
            </div>
          </slot>
        </header>
        <section class="modal__body">
          <slot name="body">
            <div v-if="deliveryFormValues" class="delivery">
              <p>
                <span>{{ deliveryFormValues.firstName }}</span
                >&nbsp;
                <span>{{ deliveryFormValues.lastName }}</span>
              </p>
              <p>
                <span>{{ deliveryFormValues.city }}</span
                >,&nbsp;
                <span>{{ deliveryFormValues.code }}</span>
              </p>
              <p>{{ deliveryFormValues.email }}</p>
              <p>{{ deliveryFormValues.phone }}</p>
            </div>
            <h5>Pay</h5>
            <div>
              <form id="payForm" @submit.prevent="submitForm" novalidate="true">
                <input
                  name="cardNumber"
                  type="text"
                  placeholder="Card Number"
                  v-model.trim="cardNumber"
                  :class="{ error: v$.cardNumber.$errors.length }"
                />
                <small
                  class="helper-text"
                  :class="{ invalid: v$.cardNumber.$errors.length }"
                  v-for="(error, index) of v$.cardNumber.$errors"
                  :key="index"
                >
                  {{ error.$message }}
                </small>
                <div class="grid-x grid-margin-x">
                  <div class="cell small-6">
                    <input
                      name="validity"
                      type="text"
                      placeholder="MM / YY"
                      v-model.trim="validity"
                      :class="{ error: v$.validity.$errors.length }"
                    />
                    <small
                      class="helper-text"
                      :class="{ invalid: v$.validity.$errors.length }"
                      v-for="(error, index) of v$.validity.$errors"
                      :key="index"
                    >
                      {{ error.$message }}
                    </small>
                  </div>
                  <div class="cell small-6">
                    <input
                      name="securityCode"
                      type="text"
                      placeholder="Security Code"
                      v-model.trim="securityCode"
                      :class="{ error: v$.securityCode.$errors.length }"
                    />
                    <small
                      class="helper-text"
                      :class="{ invalid: v$.securityCode.$errors.length }"
                      v-for="(error, index) of v$.securityCode.$errors"
                      :key="index"
                    >
                      {{ error.$message }}
                    </small>
                  </div>
                </div>
                <div class="footerForm grid-x">
                  <div class="cell small-6 back">
                    <img
                      @click="back"
                      src="https://img.icons8.com/material-outlined/24/000000/u-turn-to-left.png"
                    />
                  </div>
                  <div class="cell small-6">
                    <div class="grid-x align-right">
                      <button
                        type="submit"
                        class="button primary"
                        @click="order"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  name: "PaymentForm",
  data() {
    return {
      cardNumber: "",
      validity: "",
      securityCode: "",
    };
  },
  props: {
    deliveryFormValues: {
      type: Object,
      default: {},
    },
  },
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      cardNumber: { required },
      validity: { required },
      securityCode: { required },
    };
  },
  methods: {
    order() {
      if (!this.v$.$invalid) {
        this.$emit("close");
      }
    },
    close() {
      this.$emit("close");
    },
    back() {
      this.$emit("back");
    },
    submitForm() {
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  width: 500px;
  height: 650px;
  padding: 20px;

  &__header {
    border-bottom: 1px solid #cacaca;
  }
  &__body {
    padding: 20px 0;
  }
}
.footerForm {
  padding-top: 20px;
}
.bodyForm {
  max-height: 400px;
  padding: 10px;
  overflow-y: scroll;
}
.btn {
  border-radius: 50%;
}
.helper-text {
  color: red;
  display: none;
  margin-bottom: 10px;
}
.invalid {
  display: inline-block;
}
.error {
  margin-bottom: 0px;
  border-color: red;
}
.back {
  cursor: pointer;
}
p {
  margin-bottom: 0;
}
.delivery {
  padding-bottom: 10px;
  border-bottom: 1px solid #cacaca;
}
</style>
