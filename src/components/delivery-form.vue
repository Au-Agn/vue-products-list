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
            <h5>Delivery</h5>
            <form id="cart" @submit.prevent="checkForm" novalidate="true">
              <div class="bodyForm">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  v-model.trim="formValues.email"
                  :class="{ error: v$.formValues.email.$errors.length }"
                />
                <small
                  class="helper-text"
                  :class="{ invalid: v$.formValues.email.$errors.length }"
                  v-for="(error, index) of v$.formValues.email.$errors"
                  :key="index"
                >
                  {{ error.$message }}
                </small>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  v-model.trim="formValues.firstName"
                  :class="{ error: v$.formValues.firstName.$errors.length }"
                />
                <small
                  class="helper-text"
                  :class="{ invalid: v$.formValues.firstName.$errors.length }"
                  v-for="(error, index) of v$.formValues.firstName.$errors"
                  :key="index"
                >
                  {{ error.$message }}
                </small>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  v-model.trim="formValues.lastName"
                />
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="City"
                  v-model.trim="formValues.city"
                  :class="{ error: v$.formValues.city.$errors.length }"
                />
                <small
                  class="helper-text"
                  :class="{ invalid: v$.formValues.city.$errors.length }"
                  v-for="(error, index) of v$.formValues.city.$errors"
                  :key="index"
                >
                  {{ error.$message }}
                </small>
                <input
                  id="code"
                  name="code"
                  type="number"
                  placeholder="Postal Code"
                  v-model.trim="formValues.code"
                  :class="{ error: v$.formValues.code.$errors.length }"
                />
                <small
                  class="helper-text"
                  :class="{ invalid: v$.formValues.code.$errors.length }"
                  v-for="(error, index) of v$.formValues.code.$errors"
                  :key="index"
                >
                  {{ error.$message }}
                </small>
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  placeholder="Phone"
                  v-model.trim="formValues.phone"
                  :class="{ error: v$.formValues.phone.$errors.length }"
                />
                <small
                  class="helper-text"
                  :class="{ invalid: v$.formValues.phone.$errors.length }"
                  v-for="(error, index) of v$.formValues.phone.$errors"
                  :key="index"
                >
                  {{ error.$message }}
                </small>
              </div>
              <dev class="footerForm grid-x align-right">
                <button
                  type="submit"
                  class="button primary"
                  @click="openPayForm"
                >
                  Continue
                </button>
              </dev>
            </form>
          </slot>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";

export default {
  setup: () => ({ v$: useVuelidate() }),
  name: "DeliveryForm",
  data() {
    return {
      formValues: {
        email: "",
        firstName: "",
        lastName: "",
        city: "",
        code: "",
        phone: "",
      },
    };
  },
  validations() {
    return {
      formValues: {
        email: { required, email },
        firstName: { required },
        city: { required },
        code: { required },
        phone: { required, minLength: minLength(6) },
      },
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    openPayForm() {
      if (!this.v$.$invalid) {
        this.$emit("openPayForm", this.formValues);
      }
    },
    checkForm() {
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
</style>
