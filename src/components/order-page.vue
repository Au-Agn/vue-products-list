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
            <form id="cart" @submit.prevent="checkForm">
              <div class="bodyForm">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  v-model="formValues.email"
                  :class="{ error: isFormInvalid }"
                />
                <small class="helper-text" :class="{ invalid: isFormInvalid }">
                  Email address is required
                </small>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  v-model="formValues.firstName"
                  :class="{ error: isFormInvalid }"
                />
                <small class="helper-text" :class="{ invalid: isFormInvalid }">
                  First Name is required
                </small>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  v-model="formValues.lastName"
                />
                <input id="city" name="city" type="text" placeholder="City" />
                <input
                  id="code"
                  name="code"
                  type="number"
                  placeholder="Postal Code"
                  v-model="formValues.code"
                />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  v-model="formValues.phone"
                  :class="{ error: isFormInvalid }"
                />
                <small class="helper-text" :class="{ invalid: isFormInvalid }">
                  Phone is required
                </small>
              </div>
              <dev class="footerForm grid-x align-right">
                <button type="submit" class="button primary">Continue</button>
              </dev>
            </form>
          </slot>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderPage",
  data() {
    return {
      formValues: {
        email: null,
        firstName: null,
        lastName: null,
        code: null,
        phone: null,
      },
      requiredFields: ["phone", "firstName", "email"],
      isFormInvalid: false,
    };
  },
  computed: {},
  methods: {
    close() {
      this.$emit("close");
    },
    checkForm() {
      this.isFormInvalid = this.requiredFields
        .map((fieldName) => this.formValues[fieldName])
        .every((value) => !value);
      console.log(this.isFormInvalid);
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
  margin-bottom: 20px;
}
.invalid {
  display: inline-block;
}
.error {
  margin-bottom: 0px;
  border-color: red;
}
</style>
